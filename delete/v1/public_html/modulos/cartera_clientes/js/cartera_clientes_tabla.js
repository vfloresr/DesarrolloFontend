/** Este código nos permite cargar la tabla Cartera Clientes. **/

var CarteraClientesTabla = function() {
	var pasajeros, compradores;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {

		cargarTablaPasajeros: function() 
		{
			CarteraClientesTabla.pasajeros = $('#table_pasajeros').dataTable({
				 destroy: true,
				 ajax: {
				  'url': Configuraciones.getConfiguraciones().url_table_pasajeros,
				  'dataSrc': function ( json ) {
					 var i;
					 for(i = 0; i < json.length; i++)
					 {
						json[i].buttons = '';
						if(json[i].f_nacimiento != null)
							json[i].f_nacimiento = FuncionesGenerales.cambiarFormatoFecha(json[i].f_nacimiento,'dd-MM-yyyy');
						else	
							json[i].f_nacimiento = "";
						
						json[i].nombre = '<div style="padding:10px;"><strong><a href="#" data-cliente-id="'+ json[i].rut +'" data-nombre="'+ json[i].nombre +'" data-email="' + json[i].email + '" data-fecha-nacimiento="' + json[i].f_nacimiento + '" onclick="modal_editar_cliente(this)">'+json[i].nombre+'</a></strong></br> Rut: '+json[i].rut+'</div>';
						json[i].email = fa_icon_envelope+json[i].email;
					 }
					 
					 if(typeof(json)=="string"){
					  json={};
					   json.buttons = '';
					 }
					  var d = {};
					  return d['data'] = json;
				  }
				},
				columns: [
				  { data: "buttons" },
				  { data: "nombre" },
				  { data: "f_nacimiento" },
				  { data: "email" },
				  //{ data: "ejecutivo" },
				  { data: "numero_negocio" },
				],
				"order": [ 1, 'asc' ],
				"columnDefs": [{
				  "targets": 'no-sort',
				  "orderable": false
				}],
				"bFilter": true,
				"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
				"bLengthChange": false,
				"processing" : true,
				"iDisplayLength" : 10,
				"oLanguage": {
				  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
				  "sUrl": "vendor/plugins/datatables/SpanishClientes.json",
				  "sSearch" : ""
				}
			});
			
			$('#table_pasajeros tbody').on('click', 'tr', function (e) {
				var nRow = $(this);
				FuncionesGenerales.setRegistroSeleccionado(nRow);
		    });
        },
		
		cargarTablaCompradores: function() 
		{
			CarteraClientesTabla.compradores = $('#table_compradores').dataTable({
				 destroy: true,
				 ajax: {
				  'url': Configuraciones.getConfiguraciones().url_table_compradores,
				  'dataSrc': function ( json ) {
					 var i;
					 for(i = 0; i < json.length; i++)
					 {
						json[i].buttons = '';
						if(json[i].f_nacimiento != null)
							json[i].f_nacimiento = FuncionesGenerales.cambiarFormatoFecha(json[i].f_nacimiento,'dd-MM-yyyy');
						else	
							json[i].f_nacimiento = "";
						
						json[i].nombre = '<div style="padding:10px;"><strong><a href="#" data-cliente-id="'+ json[i].rut +'" data-nombre="'+ json[i].nombre +'" data-email="' + json[i].email + '" data-fecha-nacimiento="' + json[i].f_nacimiento + '" onclick="modal_editar_cliente(this)">'+json[i].nombre+'</a></strong></br> Rut: '+json[i].rut+'</div>';
						json[i].email = fa_icon_envelope+json[i].email;
					 }
					 
					 if(typeof(json)=="string"){
					  json={};
					   json.buttons = '';
					 }
					  var d = {};
					  return d['data'] = json;
				  }
				},
				columns: [
				  { data: "buttons" },
				  { data: "nombre" },
				  { data: "f_nacimiento" },
				  { data: "email" },
				  //{ data: "ejecutivo" },
				  { data: "numero_negocio" },
				],
				"order": [ 1, 'asc' ],
				"columnDefs": [{
				  "targets": 'no-sort',
				  "orderable": false
				}],
				"bFilter": true,
				"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
				"bLengthChange": false,
				"processing" : true,
				"iDisplayLength" : 10,
				"oLanguage": {
				  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
				  "sUrl": "vendor/plugins/datatables/SpanishClientes.json",
				  "sSearch" : ""
				}
			});
			
			$('#table_compradores tbody').on('click', 'tr', function (e) {
				var nRow = $(this);
				FuncionesGenerales.setRegistroSeleccionado(nRow);
		    });
        }
	};
}();