/** Este código nos permite cargar la tabla Solicitudes Webs. **/

var SolicitudesWebTabla = function() {
	var abierto_solicitudes_web, pendiente_solicitudes_web, cerrado_solicitudes_web;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";

	return {
	
		cargarTablaNuevas: function() {
			if(Configuraciones.getConfiguraciones().mostrar_abierto_table_solicitudes_web)
			{
				if(!$.fn.dataTable.isDataTable('#abierto_table_solicitudes_web')){
					 SolicitudesWebTabla.abierto_solicitudes_web = $('#abierto_table_solicitudes_web').dataTable({
						 ajax: {
							'url': Configuraciones.getConfiguraciones().url_abierto_table_solicitudes_web,
							'dataSrc': function ( json ) {
								var i;
								for(i = 0; i < json.length; i++){
									var json_aux = JSON.stringify(json[i]);
									
									var plantilla = Configuraciones.getConfiguraciones().general_tag;
									var description = (json[i].description != null) ? json[i].description : "";
									
									if(json[i].c_envio_email > 0)
										json[i].email = ( (json[i].phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].phone_office)   +' <br> '+ ( (json[i].email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json[i].email_address +" ("+ json[i].c_envio_email +")" +"</a>" );
									else
										json[i].email = ( (json[i].phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].phone_office)   +' <br> '+ ( (json[i].email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json[i].email_address + "</a>" );
									
									json[i].nombre_oportunidad = ((json[i].nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-oportunidad-id='"+json[i].id_oportunidad+"'  data-description='"+ description +"'  data-nombre_oportunidad='"+json[i].nombre_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>" + json[i].nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json[i].id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
									
									if(json[i].fecha_viaje_c != null)
										json[i].fecha_viaje_c = "<div style='padding:0px 30px;'>"+json[i].fecha_viaje_c+"</div>";
									else
										json[i].fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
										
									if(json[i].fecha_asignacion_c != null)
										json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json[i].fecha_asignacion_c+"</div>";
									else
										json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_perdido_nuevos)
										var boton_perdido = '<button type="button" style="display:none;" onclick="modal_cierre_perdido_oportunidades_web(this)" class="btn btn-danger btn-sm" data-oportunidad-id="' + json[i].id_oportunidad + '" data-description="'+ description +'"><span class="glyphicon glyphicon-remove-sign"></span></button>';
									else
										var boton_perdido = '';
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_ganado_nuevos)
										var boton_ganado = '<button type="button" style="display:none;" onclick="modal_cierre_ganador_oportunidades_web(this)" class="btn btn-success btn-sm" data-oportunidad-id="'+ json[i].id_oportunidad+'" data-description="'+ description +'"><span class="glyphicon glyphicon-ok-sign"></span></button> ';
									else
										var boton_ganado = '';

										
									json[i].buttons = boton_ganado + ' ' + boton_perdido;										

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
							{ data: "nombre_oportunidad" },
							{ data: "fecha_viaje_c" },
							{ data: "nombre_comprador" },
							{ data: "rut_c" },
							{ data: "email" },
							{ data: "fecha_asignacion_c" },
							{ data: "estado_solcitud" },
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
						  "oTableTools": {
							"sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
						  },
						  "oLanguage": {
							"sLoadingRecords": '<img src="assets/img/loader.gif" />',
							"sUrl": "vendor/plugins/datatables/Spanish.json"
						  }
				  });
				
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaSolicitudWebNuevas = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
						var data = {
							id_oportunidad : p_oportunidad_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad_web, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							var plantilla = Configuraciones.getConfiguraciones().general_tag;
							var description = (json.description != null) ? json.description : "";
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_perdido_nuevos)
								var boton_perdido = '<button type="button" style="display:none;" onclick="modal_cierre_perdido_oportunidades_web(this)" class="btn btn-danger btn-sm" data-oportunidad-id="' + json.id_oportunidad + '" data-description="'+ description +'"><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_ganado_nuevos)
								var boton_ganado = '<button type="button" style="display:none;" onclick="modal_cierre_ganador_oportunidades_web(this)" class="btn btn-success btn-sm" data-oportunidad-id="'+ json.id_oportunidad+'" data-description="'+ description +'"><span class="glyphicon glyphicon-ok-sign"></span></button> ';
							else
								var boton_ganado = '';
							var buttons = boton_ganado + ' ' + boton_perdido;
							
							var nombre_oportunidad = ((json.nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-oportunidad-id='"+json.id_oportunidad+"' data-description='"+ description +"' onclick='modal_solicitudes_web_oportunidades(this)'>" + json.nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json.id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
							
							if(json.fecha_viaje_c != null)
								var fecha_viaje_c = "<div style='padding:0px 30px;'>"+json.fecha_viaje_c+"</div>";
							else
								var fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
							
							var nombre_comprador = json.nombre_comprador;
							var rut_comprador = json.rut_c;
							
							if(json.c_envio_email > 0)
								var email = ( (json.phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json.phone_office)   +' <br> '+ ( (json.email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json.email_address +" ("+ json.c_envio_email +")" +"</a>" );
							else
								var email = ( (json.phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json.phone_office)   +' <br> '+ ( (json.email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json.email_address + "</a>" );

							if(json.fecha_asignacion_c != null)
								var fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json.fecha_asignacion_c+"</div>";
							else
								var fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
							
							var estado = json.estado_solcitud;
							
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(buttons, nRow, 0, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(nombre_oportunidad, nRow, 1, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(fecha_viaje_c, nRow, 2, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(nombre_comprador, nRow, 3, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(rut_comprador, nRow, 4, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(email, nRow, 5, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(fecha_asignacion_c, nRow, 6, false);
							SolicitudesWebTabla.abierto_solicitudes_web.fnUpdate(estado, nRow, 7, false);
						});
				  }
				  
				  $('#abierto_table_solicitudes_web tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });
				}
				else
				{
					SolicitudesWebTabla.abierto_solicitudes_web.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-abierto-table-solicitudes-web').hide();
			}
		},
		
		cargarTablaPendientes: function() {
			if(Configuraciones.getConfiguraciones().mostrar_pendiente_table_solicitudes_web)
			{
					if(!$.fn.dataTable.isDataTable('#negociacion_table_solicitudes_web'))
					{
					   SolicitudesWebTabla.pendiente_solicitudes_web = $('#negociacion_table_solicitudes_web').dataTable({
						 ajax: {
						  'url': Configuraciones.getConfiguraciones().url_pendiente_table_solicitudes_web,
						  'dataSrc': function ( json ) {
							  var i;
							  for(i = 0; i < json.length; i++){
									var json_aux = JSON.stringify(json[i]);
									var plantilla = Configuraciones.getConfiguraciones().general_tag;
									var description = (json[i].description != null) ? json[i].description : "";

									if(json[i].c_envio_email > 0)
										json[i].email = ( (json[i].phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].phone_office)   +' <br> '+ ( (json[i].email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json[i].email_address +" ("+ json[i].c_envio_email +")" +"</a>" );
									else
										json[i].email = ( (json[i].phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].phone_office)   +' <br> '+ ( (json[i].email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json[i].email_address + "</a>" );
									
									
									if(json[i].fecha_viaje_c != null)
										json[i].fecha_viaje_c = "<div style='padding:0px 30px;'>"+json[i].fecha_viaje_c+"</div>";
									else
										json[i].fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
										
									if(json[i].fecha_asignacion_c != null)
										json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json[i].fecha_asignacion_c+"</div>";
									else
										json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_perdido_pendientes)
										var boton_perdido = '<button type="button" style="display:none;" onclick="modal_cierre_perdido_oportunidades_web(this)" class="btn btn-danger btn-sm" data-oportunidad-id="'+ json[i].id_oportunidad+'" data-description="'+ description +'"><span class="glyphicon glyphicon-remove-sign"></span></button>';
									else
										var boton_perdido = '';
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_ganado_pendientes)
										var boton_ganado = '<button type="button" style="display:none;" onclick="modal_cierre_ganador_oportunidades_web(this)" class="btn btn-success btn-sm" data-oportunidad-id="'+ json[i].id_oportunidad+'" data-description="'+ description +'"><span class="glyphicon glyphicon-ok-sign"></span></button> ';
									else
										var boton_ganado = '';
										
									json[i].buttons = boton_ganado + ' ' + boton_perdido;
											
									json[i].nombre_oportunidad = ((json[i].nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-description='"+ description +"' data-oportunidad-id='"+json[i].id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>" + json[i].nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json[i].id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
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
						  { data: "nombre_oportunidad" },
						  { data: "fecha_viaje_c" },
						  { data: "nombre_comprador" },			  
						  { data: "rut_c" },
						  { data: "email" },
						  { data: "fecha_asignacion_c" },
						  { data: "estado_solcitud" },
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
						"oTableTools": {
						  "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
						},
						"oLanguage": {
						  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
						  "sUrl": "vendor/plugins/datatables/Spanish.json"
						}
					  });
				  
				  	  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaSolicitudWebPendientes = function ()
					  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
						var data = {
							id_oportunidad : p_oportunidad_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad_web, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							var plantilla = Configuraciones.getConfiguraciones().general_tag;
							var description = (json.description != null) ? json.description : "";
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_perdido_nuevos)
								var boton_perdido = '<button type="button" style="display:none;" onclick="modal_cierre_perdido_oportunidades_web(this)" class="btn btn-danger btn-sm" data-oportunidad-id="' + json.id_oportunidad + '" data-description="'+ description +'"><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							if(Configuraciones.getConfiguraciones().mostrar_boton_solicitudes_web_ganado_nuevos)
								var boton_ganado = '<button type="button" style="display:none;" onclick="modal_cierre_ganador_oportunidades_web(this)" class="btn btn-success btn-sm" data-oportunidad-id="'+ json.id_oportunidad+'" data-description="'+ description +'"><span class="glyphicon glyphicon-ok-sign"></span></button> ';
							else
								var boton_ganado = '';
							var buttons = boton_ganado + ' ' + boton_perdido;
							
							var nombre_oportunidad = ((json.nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-oportunidad-id='"+json.id_oportunidad+"' data-description='"+ description +"' onclick='modal_solicitudes_web_oportunidades(this)'>" + json.nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json.id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
							
							if(json.fecha_viaje_c != null)
								var fecha_viaje_c = "<div style='padding:0px 30px;'>"+json.fecha_viaje_c+"</div>";
							else
								var fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
							
							var nombre_comprador = json.nombre_comprador;
							var rut_comprador = json.rut_c;
							
							if(json.c_envio_email > 0)
								var email = ( (json.phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json.phone_office)   +' <br> '+ ( (json.email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json.email_address +" ("+ json.c_envio_email +")" +"</a>" );
							else
								var email = ( (json.phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json.phone_office)   +' <br> '+ ( (json.email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" : fa_icon_envelope+"<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_cli + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + json.email_address + "</a>" );

							if(json.fecha_asignacion_c != null)
								var fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json.fecha_asignacion_c+"</div>";
							else
								var fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
							
							var estado = json.estado_solcitud;
							
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(buttons, nRow, 0, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(nombre_oportunidad, nRow, 1, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(fecha_viaje_c, nRow, 2, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(nombre_comprador, nRow, 3, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(rut_comprador, nRow, 4, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(email, nRow, 5, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(fecha_asignacion_c, nRow, 6, false);
							SolicitudesWebTabla.pendiente_solicitudes_web.fnUpdate(estado, nRow, 7, false);
						});
					  }
					  
					  $('#negociacion_table_solicitudes_web tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
					SolicitudesWebTabla.pendiente_solicitudes_web.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-pendiente-table-solicitudes-web').hide();
			}
		},
		
		cargarTablaCerradas: function() {
			if(Configuraciones.getConfiguraciones().mostrar_cerrado_table_solicitudes_web)
			{
				if(!$.fn.dataTable.isDataTable('#cerrados_table_solicitudes_web')){
					SolicitudesWebTabla.cerrado_solicitudes_web = $('#cerrados_table_solicitudes_web').dataTable({
					  ajax: {
						'url':  Configuraciones.getConfiguraciones().url_cerrado_table_solicitudes_web,
						'dataSrc': function ( json ) {
							var i;
							for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);

								var plantilla = Configuraciones.getConfiguraciones().general_tag;
								var description = (json[i].description != null) ? json[i].description : "";
								
								json[i].email = ( (json[i].phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].phone_office)   +' <br> '+ ( (json[i].email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" :  fa_icon_envelope+json[i].email_address  );
								json[i].nombre_oportunidad = ((json[i].nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-description='"+ description +"' data-oportunidad-id='"+json[i].id_oportunidad+"' data-contacto-id='" + json[i].id_cli + "' onclick='modal_solicitudes_web_oportunidades(this)'>" + json[i].nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json[i].id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
								
								if(json[i].fecha_viaje_c != null)
									json[i].fecha_viaje_c = "<div style='padding:0px 30px;'>"+json[i].fecha_viaje_c+"</div>";
								else
									json[i].fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
									
								if(json[i].fecha_asignacion_c != null)
									json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json[i].fecha_asignacion_c+"</div>";
								else
									json[i].fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
								
								json[i].buttons = '';
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
						{ data: "nombre_oportunidad" },
						{ data: "fecha_viaje_c" },
						{ data: "nombre_comprador" },
						{ data: "rut_c" },
						{ data: "email" },
						{ data: "fecha_asignacion_c" },
						{ data: "estado_solcitud" },
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
					  "oTableTools": {
						"sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
					  },
					  "oLanguage": {
						"sLoadingRecords": '<img src="assets/img/loader.gif" />',
						"sUrl": "vendor/plugins/datatables/Spanish.json"
					  }
					});
					
					  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaSolicitudWebCerrados = function ()
					  {
							var nRow = FuncionesGenerales.getRegistroSeleccionado();
							var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
							var data = {
								id_oportunidad : p_oportunidad_id
							};
							
							$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad_web, data).done(function(response)
							{
								var json = jQuery.parseJSON( response )[0];
								var json_aux = JSON.stringify(json);
								var plantilla = Configuraciones.getConfiguraciones().general_tag;
								var description = (json.description != null) ? json.description : "";
								
								var buttons = '';
								var nombre_oportunidad = ((json.nombre_oportunidad!=='') ? "<a href='javascript:void(0);' data-description='"+ description +"' data-oportunidad-id='"+json.id_oportunidad+"' data-contacto-id='" + json.id_cli + "' onclick='modal_solicitudes_web_oportunidades(this)'>" + json.nombre_oportunidad + "</a>" : "<a href='javascript:void(0);' data-oportunidad-id='"+json.id_oportunidad+"' onclick='modal_solicitudes_web_oportunidades(this)'>Sin datos</a>"); 
								
								if(json.fecha_viaje_c != null)
									var fecha_viaje_c = "<div style='padding:0px 30px;'>"+json.fecha_viaje_c+"</div>";
								else
									var fecha_viaje_c = "<div style='padding:0px 30px;'></div>";
								
								var nombre_comprador = json.nombre_comprador;
								var rut_comprador = json.rut_c;
								var email = ( (json.phone_office.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json.phone_office)   +' <br> '+ ( (json.email_address == "Sin Email") ? fa_icon_envelope+"Sin Email" :  fa_icon_envelope+json.email_address  );

								if(json.fecha_asignacion_c != null)
									var fecha_asignacion_c = "<div style='padding:0px 30px;'>"+json.fecha_asignacion_c+"</div>";
								else
									var fecha_asignacion_c = "<div style='padding:0px 30px;'></div>";
								
								var estado = json.estado_solcitud;								
								
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(buttons, nRow, 0, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(nombre_oportunidad, nRow, 1, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(fecha_viaje_c, nRow, 2, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(nombre_comprador, nRow, 3, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(rut_comprador, nRow, 4, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(email, nRow, 5, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(fecha_asignacion_c, nRow, 6, false);
								SolicitudesWebTabla.cerrado_solicitudes_web.fnUpdate(estado, nRow, 7, false);
							});
					  }
					  
					  $('#cerrados_table_solicitudes_web tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
				  SolicitudesWebTabla.cerrado_solicitudes_web.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-carrado-table-solicitudes-web').hide();
			}
		},

		cargarTabla: function() {
			if(!Configuraciones.getConfiguraciones().mostrar_abierto_table_solicitudes_web)
				$('.mostrar-abierto-table-solicitudes-web').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_pendiente_table_solicitudes_web)
				$('.mostrar-pendiente-table-solicitudes-web').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_cerrado_table_solicitudes_web)
				$('.mostrar-carrado-table-solicitudes-web').hide();
        }
	};
}();