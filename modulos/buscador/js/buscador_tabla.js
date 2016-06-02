/** Este código nos permite cargar la tabla El Buscador. **/

/** Este código nos permite cargar la tabla El Buscador. **/

var BuscardorTabla = function() {
	var table;	
	return {

		cargarTabla: function() 
		{
		  var data = {
			func : 'get_busca_cliente',
			dato : encodeURIComponent($('input[name=buscar_contacto]').val()),
			campo : encodeURIComponent($('.multiselect-container li.active').find('input[type=radio]').val())
		  };
		  
		  BuscardorTabla.table = $('#table_buscador').DataTable({
			 "processing": true,
			 "serverSide": true,
			 destroy: true,
			 ajax: {
			  'url': Configuraciones.getConfiguraciones().url_table_buscador,
			  'data': data,
			  'dataSrc': function ( json ) {
					var i;
					var json = json.datos.datos;
					for(i = 0; i < json.length; i++)
					{
						var modulo = getModulo(json[i].modulo);
						json[i].nombre = '<div style="padding:10px;"><strong><a onclick="detalleContactoModal(this);" data-rut="'+ json[i].rut +'">'+json[i].nombre+'</a></strong></br> Rut: '+json[i].rut+'</div>';
						
						if(json[i].activo == 0)
							json[i].negocio = '<div style="padding:10px;"><strong><a onclick="redireccionarModulo(this)" data-modulo="'+ json[i].modulo +'" id="'+modulo.id+'" href="'+modulo.href+'" data-estado="'+ json[i].estado +'" data-numero-negocio="'+json[i].negocio+'">'+json[i].negocio+'</a></strong></div>';
						else
							json[i].negocio = '<div style="padding:10px;"><strong>'+json[i].negocio+'</strong></div>';
						
						json[i].modulo = json[i].modulo.substr(0, 1).toUpperCase() + json[i].modulo.substr(1);
					}
					if(typeof(json)=="string"){
						json={};
					}
					var d = {};
					return d['data'] = json;
			  }
			},
			columns: [
			  { data: "modulo" },
			  { data: "nombre" },
			  { data: "negocio" },
			  { data: "rol" }
			],
			"order": [ 1, 'asc' ],
			"columnDefs": [{
			  "targets": 'no-sort',
			  "orderable": false
			}],
			"bFilter": false,
			"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
			"bLengthChange": false,
			"processing" : true,
			"iDisplayLength" : 10,
			"oTableTools": {
			  "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
			},
			"oLanguage": {
			  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
			  "sUrl": "vendor/plugins/datatables/Spanish.json"
			}
		  });
		  
		  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaBuscador = function ()
		  {
				var nRow = FuncionesGenerales.getRegistroSeleccionado();
				var p_rut = nRow.children().eq(1).children().data('rut');
				var data = {
					rut : p_rut
				};
				
				$.get(Configuraciones.getConfiguraciones().url_table_buscador, data).done(function(response)
				{
					var json = jQuery.parseJSON( response )[0];
					var json_aux = JSON.stringify(json);

					var nombre = '<div style="padding:10px;"><strong><a href="#" data-rut="'+ json.rut +'" onclick="">'+json.nombre+'</a></strong></br> Rut: '+json.rut+'</div>';
					BuscardorTabla.table.fnUpdate(nombre, nRow, 1, false);
				});
		  }
		  
		  $('#table_buscador tbody').on('click', 'tr', function (e) {
				var nRow = $(this);
				FuncionesGenerales.setRegistroSeleccionado(nRow);
		  });
		}
	};
}();