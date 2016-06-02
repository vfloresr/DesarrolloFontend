jQuery(document).ready(function($){
	$('#modal_buscador_success').on('click', function(){ 
	
	});
	
	$('#modal_buscador_cancel').on('click', function(){ 
		$('#buscador_modal').modal('toggle');
	});
	
	$('#buscador_modal').on('hide.bs.modal', function (e) 
	{
	});
	
	$('#buscador_modal').on('shown.bs.modal', function (e){
	});
});

function detalleContactoModal(el)
{
	FuncionesGenerales.empezarLoading();
	var data = {
		"rut" : $(el).data('rut')
	};
	
	$.get(Configuraciones.getConfiguraciones().url_get_detalle_cliente, data).done(function(response)
	{
		var json = jQuery.parseJSON(response);
		
		$('#buscador_contacto_rut').html( (json[0].rut !== null) ? json[0].rut : "Sin Rut" );
		$('#buscador_contacto_nombre').html( (json[0].nombre !== null) ? json[0].nombre : "Sin Nombres" );
		$('#buscador_contacto_email').html( (json[0].email_address !== null) ? json[0].email_address : "Sin Email" );
		$('#buscador_contacto_fecha_nacimiento').html( (json[0].f_nacimiento !== null) ? FuncionesGenerales.cambiarFormatoFecha(json[0].f_nacimiento,'dd-MM-yyyy') : "Sin Fecha de Nacimiento" );
		$('#buscador_contacto_telefono').html( (json[0].phone_home !== null) ? json[0].phone_home : "Sin Teléfono" );
		$('#buscador_contacto_comentario').html( (json[0].description !== null) ? json[0].description : "Sin Comentarios" );
		
		var data_oportunidades = json[0].p;
		var data_tareas = json[0].ta;
		
		for(var i = 0; i < data_oportunidades.length; i++)
		{
			data_oportunidades[i].id_negocio = data_oportunidades[i].negocio;
			data_oportunidades[i].id_oportunidad = data_oportunidades[i].id;
			data_oportunidades[i].id_contacto = json[0].rut;
			data_oportunidades[i].dias = data_oportunidades[i].dias_restante;
			data_oportunidades[i].fecha_salida = data_oportunidades[i].f_salida;
		
			var json_aux = JSON.stringify(data_oportunidades[i]);
			
			data_oportunidades[i].negocio = "<div><strong><a href='#' data-json='"+ json_aux+"' onclick='abrirDetalleNegocioModal(this);'>"+data_oportunidades[i].negocio+"</a></strong></div>";
			data_oportunidades[i].destino = '<div><strong>' +  data_oportunidades[i].destino  + '</strong> </br>' + ((data_oportunidades[i].ruta!==null)?data_oportunidades[i].ruta:'Sin Ruta') + ' </div>';
		}
		
		for(var i = 0; i < data_tareas.length; i++)
		{
			data_tareas[i].id_negocio = data_tareas[i].negocio;
			data_tareas[i].id_tarea = data_tareas[i].id;
			data_tareas[i].id_contacto = json[0].rut;
			data_tareas[i].dias = data_tareas[i].dias_restante;
			data_tareas[i].fecha_salida = data_tareas[i].f_salida;
			var json_aux = JSON.stringify(data_tareas[i]);
			
			data_tareas[i].negocio = "<div><strong><a href='#' data-json='"+ json_aux+"' onclick='abrirDetalleNegocioModal(this);'>"+data_tareas[i].negocio+"</a></strong></div>";
			data_tareas[i].destino = '<div><strong>' +  data_tareas[i].destino  + '</strong> </br>' + ((data_tareas[i].ruta!==null)?data_tareas[i].ruta:'Sin Ruta') + ' </div>';
		}
		
		$('#buscador_table_oportunidades').dataTable({
			"aaData": data_oportunidades,
			"columns": [
			  { data: "negocio" },
			  { data: "tipo" },
			  { data: "rol" },
			  { data: "destino" }
			],
			"bLengthChange": false,
			"pagingType" : "simple_numbers",
			"bFilter": false,
			"iDisplayLength" : 5,
			"destroy": true,
			"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
			"oLanguage": {
			  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
			  "sInfo": "Mostrando desde el _START_ al _END_ de un total de _TOTAL_ Oportunidades de Ventas",
			  "sInfoEmpty": "Mostrando Oportunidades de Ventas del 0 al 0 de 0 Oportunidades de Ventas",
			  "sZeroRecords":    "No se encontraron resultados",
			  "oPaginate": {
				"sFirst":    "<<",
				"sLast":     ">>",
				"sNext":     ">",
				"sPrevious": "<"
			   },
			},
		}).on('click', 'tr', function (e) {
				var nRow = $(this);
				FuncionesGenerales.setRegistroSeleccionado(nRow);
		});
		
		$('#buscador_table_tareas').dataTable({
			"aaData": data_tareas,
			"columns": [
			  { data: "negocio" },
			  { data: "tipo" },
			  { data: "rol" },
			  { data: "destino" },
			  { data: "f_salida" },
			  { data: "f_destino" },
			],
			"bLengthChange": false,
			"bFilter": false,
			"iDisplayLength" : 5,
			"pagingType" : "simple_numbers",
			"destroy": true,
			"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
			"oLanguage": {
			  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
			  "sInfo": "Mostrando desde el _START_ al _END_ de un total de _TOTAL_ Post Ventas",
			  "sInfoEmpty": "Mostrando Post Ventas del 0 al 0 de 0 Post Ventas",
			  "sZeroRecords":    "No se encontraron resultados",
			  "oPaginate": {
				"sFirst":    "<<",
				"sLast":     ">>",
				"sNext":     ">",
				"sPrevious": "<"
			   },
			},
		}).on('click', 'tr', function (e) {
				var nRow = $(this);
				FuncionesGenerales.setRegistroSeleccionado(nRow);
		});
		FuncionesGenerales.terminarLoading();
		$('#buscador_modal').modal('toggle');
	});
}