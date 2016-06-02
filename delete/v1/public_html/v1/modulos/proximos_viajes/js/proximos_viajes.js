jQuery(document).ready(function($){
	$('#modal_cierre_proximos_viajes_success').on('click', function(){
		var obj = JSON.parse($('input[name^=negocio]').val());
		var $btn = $(this);
		$btn.button('loading');
		$.post(Configuraciones.getConfiguraciones().url_set_editar_tarea,{ 
			  tarea_id: obj.id_tarea, 
			  status: "Completed",
			  description : $('#comentarios_cierre_proximos_viajes').val(),
			  comentarios_anteriores : $('input[name=comentarios_anteriores_cierre_proximos_viajes]').val()
		}).done(function(){
			FuncionesGenerales.refrescarTabla();
			$('#cierre_proximos_viajes').modal('toggle');
			$btn.button('reset');
		});
	});
  
	$('#modal_cierre_proximos_viajes_cancel').on('click', function(){
		$('#cierre_proximos_viajes').modal('toggle');
	});
	
	$('#cierre_proximos_viajes').on('hide.bs.modal', function (e) 
	{
		 $('#comentarios_cierre_proximos_viajes').val('');
	});
	
	$('#cierre_proximos_viajes').on('show.bs.modal', function (e) {
		var json = JSON.parse($('input[name=negocio]').val());
		//$('input[name=comentarios_anteriores_cierre_proximos_viajes]').val(json.descripciones.trim());
		
		//var descripciones =  (($('input[name=comentarios_anteriores_cierre_proximos_viajes]').val(json.descripciones == null)? "Agregar" : + $('input[name=comentarios_anteriores_cierre_proximos_viajes]').val(json.descripciones.trim()));
		$('input[name=comentarios_anteriores_cierre_proximos_viajes]').val(json.descripciones);
		$('#comentarios_cierre_proximos_viajes').val('');
	});
	
	$('#proximos_viajes_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  ProximosViajesTabla.cargarTablaNuevas();
		  ProximosViajesTabla.abierto_viajes.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#proximos_viajes_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  ProximosViajesTabla.cargarTablaPendientes();
		  ProximosViajesTabla.pendiente_viajes.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#proximos_viajes_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  ProximosViajesTabla.cargarTablaCerradas();
		  ProximosViajesTabla.cerrado_viajes.fnFilter('');
		  $(this).tab('show');
	});
});