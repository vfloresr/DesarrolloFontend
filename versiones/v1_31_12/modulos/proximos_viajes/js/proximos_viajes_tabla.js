/** Este código nos permite cargar la tabla Próximos Viajes. **/

var ProximosViajesTabla = function() {
	var abierto_viajes, pendiente_viajes, cerrado_viajes;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {
		cargarTablaNuevas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_abierto_table_proximos_viajes)
			{
				if(!$.fn.dataTable.isDataTable('#abierto_table_proximos_viajes'))
				{
				   ProximosViajesTabla.abierto_viajes = $('#abierto_table_proximos_viajes').dataTable({
						 ajax: {
						  'url': Configuraciones.getConfiguraciones().url_abierto_table_proximos_viajes,
						  'dataSrc': function ( json ) {
							  var i;
							  for(i = 0; i < json.length; i++){
									var json_aux = JSON.stringify(json[i]);
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_proximos_viajes_cierre_nuevos)
										json[i].buttons = '<button type="button" onclick="modal_cierre_proximos_viajes(this)" class="btn btn-danger btn-sm '+ json[i].color_fila +'" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
									else
										json[i].buttons = '';
									var docu = ((json[i].documentacion_c == 'NaN' ) ? "Agregar" :json[i].documentacion_c);
									//json[i].documentacion_c = '<a href="javascript:;" class="edit_documentacion" data-value="'+json[i].documentacion_c+'" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ ((json[i].documentacion_c == null || json[i].documentacion_c == NaN) ? "Agregar" : json[i].documentacion_c)  + '</a>'; 
									
									//json[i].voucher_c = '<a href="javascript:;" class="edit_voucher" data-value="'+json[i].voucher_c+'" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ ((json[i].voucher_c == null) ? "Agregar" : json[i].voucher_c )+ '</a>';;
									json[i].dias_restante = '<span class="label label-rounded label-danger">'+json[i].dias_restante+'</span>';
									json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+'</div>';                                            
									json[i].documentacion_c = '<a href="javascript:;" class="edit_documentacion" data-value="Seleccione" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ ((json[i].documentacion_c == null || json[i].documentacion_c == NaN) ? "Agregar" : json[i].documentacion_c)  + '</a>';
									json[i].destino = '<div style="padding:10px;"><strong>' + json[i].destino + '</strong> </br>'+ ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') +'</div>';
									json[i].voucher_c = '<a href="javascript:;" class="edit_voucher" data-value="Seleccione" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ ((json[i].voucher_c == null) ? "Agregar" : json[i].voucher_c )+ '</a>';
									
									json[i].descripciones = '<a href="javascript:;" class="edit_description" data-pk='+ json[i].id_tarea +' data-original-title="Comentario">'+ ((json[i].descripciones == null ||json[i].descripciones == "NaN" ) ? "Agregar" : json[i].descripciones)  + '</a>';
									
									json[i].id_negocio = "<a class='"+ json[i].color_filas +"' href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
									
									if(json[i].fecha_salida != null)
										json[i].fecha_salida = "<div style='padding:0px 40px;'>"+json[i].fecha_salida+"</div>";
									else
										json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";
						 
									var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
									if(json[i].c_envio_email > 0)
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono_contacto + '</div>'; 
									else
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "</a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono_contacto + '</div>'; 

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
						  { data: "dias_restante" },
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_contacto" },
						  { data: "documentacion_c" },
						  { data: "voucher_c" },
						  { data: "descripciones" },
						  { data: "fecha_salida" },
						  { data: "email" }
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
						},
					    "initComplete": function(settings, json) {
					    }
				  });
				  
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaProximosViajesNuevas = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_tarea_id = nRow.children().eq(2).children().data('tarea-id');
						var data = {
							id_tarea : p_tarea_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_proximos_viajes_cierre_nuevos)
								var buttons = '<button type="button" onclick="modal_cierre_proximos_viajes(this)" class="btn btn-danger btn-sm '+ json.color_fila +'" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var buttons = '';
							
							var dias_restante = '<span class="label label-rounded label-danger">'+json.dias_restante+'</span>';
							var id_negocio = "<a class='"+ json.color_fila +"' href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";
							var destino = '<div style="padding:10px;"><strong>' + json.destino + '</strong> </br>'+ ((json.ruta!=='')?json.ruta:'Sin Ruta') +'</div>';
							var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
							
							if(json.fecha_salida != null)
								var fecha_salida = "<div style='padding:0px 40px;'>"+json.fecha_salida+"</div>";
							else
								var fecha_salida = "<div style='padding:0px 30px;'></div>";
				 
							var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 
							else
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 

							ProximosViajesTabla.abierto_viajes.fnUpdate(buttons, nRow, 0, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(dias_restante, nRow, 1, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(id_negocio, nRow, 2, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(destino, nRow, 3, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(nombre_contacto, nRow, 4, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(fecha_salida, nRow, 8, false);
							ProximosViajesTabla.abierto_viajes.fnUpdate(email, nRow, 9, false);
						});
				  }
					  
				  $('#abierto_table_proximos_viajes tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });

				  $(ProximosViajesTabla.abierto_viajes).on( 'draw.dt', function () {
						var countries = [];
						$.each({
							"Agregar" : "Seleccione",
							"NO": "NO",
							"SI": "SI",
							"PDTE": "PDTE"
							
							
						}, function (k, v) {
							countries.push({
								id: k,
								text: v
							});
						});
				
						$('.edit_voucher').editable({
							'source': countries,
							'type'   : 'select',
							'emptytext' : "Agregar",
							'ajaxOptions': {
								type: 'post',dataType: 'json'
							},
							'url' : Configuraciones.getConfiguraciones().url_editar_proximos_viajes_voucher,
							success: function(response, newValue) {
								$(this).text(newValue);
								$('.popover').hide();
								return false;
							}
						});

						$('.edit_description').editable({
							'type'   : 'textarea',
							'emptytext' : "Seleccione",
							'ajaxOptions': {
								type: 'post',
								dataType: 'json'
							},
							'url' : Configuraciones.getConfiguraciones().url_editar_proximos_viajes_description,
							success: function(response, newValue) {
								FuncionesGenerales.refrescarTabla();
							}
						});

						$('.edit_documentacion').editable({
							'source': countries,
							'type'   : 'select',
							'emptytext' : "Agregar",
							'ajaxOptions': {
								type: 'post',dataType: 'json'
							},
							'url' : Configuraciones.getConfiguraciones().url_editar_proximos_viajes_documentacion, 
							success: function(response, newValue) {
								$(this).text(newValue);
								$('.popover').hide();
								return false;
							}
						});
						$('table#abierto_table_proximos_viajes').find('.con_color').parent().parent().addClass('danger');
				  });
				}
				else
				{
				    ProximosViajesTabla.abierto_viajes.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-abierto-table-proximos-viajes').hide();
			}
		},
		
		cargarTablaPendientes: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_pendiente_table_proximos_viajes)
			{
				if(!$.fn.dataTable.isDataTable('#negociacion_table_proximos_viajes'))
				{
				  ProximosViajesTabla.pendiente_viajes = $('#negociacion_table_proximos_viajes').dataTable({
					 ajax: {
					  'url': Configuraciones.getConfiguraciones().url_pendiente_table_proximos_viajes,
					  'dataSrc': function ( json ) {
						  var i;
						  for(i = 0; i < json.length; i++){
							var json_aux = JSON.stringify(json[i]);
								
							if(Configuraciones.getConfiguraciones().mostrar_boton_proximos_viajes_cierre_pendientes)
								json[i].buttons = '<button type="button" onclick="modal_cierre_proximos_viajes(this)" class="btn btn-danger btn-sm '+ json[i].color_fila +'" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								json[i].buttons = '';
								
							json[i].dias_restante = '<span class="label label-rounded label-danger">'+json[i].dias_restante+'</span>';
							json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+'</div>';
							json[i].documentacion_c = '<a href="javascript:;" class="edit_documentacion" data-value="'+json[i].documentacion_c+'" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ json[i].documentacion_c+ '</a>';
							json[i].destino = '<div style="padding:10px;"><strong>' + json[i].destino + '</strong> </br>'+ ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') +'</div>';
							json[i].voucher_c = '<a href="javascript:;" class="edit_voucher" data-value="'+json[i].voucher_c.toUpperCase()+'" data-pk='+ json[i].id_tarea +' data-original-title="Seleccionar">'+ json[i].voucher_c.toUpperCase()+ '</a>';
							json[i].descripciones = '<a href="javascript:;" class="edit_description" data-pk='+ json[i].id_tarea +' data-original-title="Comentario">'+ json[i].descripciones + '</a>';
							json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"'  data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
							
							if(json[i].fecha_salida != null)
								json[i].fecha_salida = "<div style='padding:0px 40px;'>"+json[i].fecha_salida+"</div>";
							else
								json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";							
							
							var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
							if(json[i].c_envio_email > 0)
								json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono + '</div>'; 
							else
								json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "</a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono + '</div>'; 

						 
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
						  { data: "dias_restante" },
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_contacto" },
						  { data: "documentacion_c" },
						  { data: "voucher_c" },
						  { data: "descripciones" },
						  { data: "fecha_salida" },
						  { data: "email" },
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
					},
					"initComplete": function(settings, json) {
					}
				  });
				  
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaProximosViajesPendientes = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_tarea_id = nRow.children().eq(2).children().data('tarea-id');
						var data = {
							id_tarea : p_tarea_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_proximos_viajes_cierre_pendientes)
								var buttons = '<button type="button" onclick="modal_cierre_proximos_viajes(this)" class="btn btn-danger btn-sm '+ json.color_fila +'" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var buttons = '';
								
							var dias_restante = '<span class="label label-rounded label-danger">'+json.dias_restante+'</span>';
							var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
							var destino = '<div style="padding:10px;"><strong>' + json.destino + '</strong> </br>'+ ((json.ruta!=='')?json.ruta:'Sin Ruta') +'</div>';
							var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"'  data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";
							
							if(json.fecha_salida != null)
								var fecha_salida = "<div style='padding:0px 40px;'>"+json.fecha_salida+"</div>";
							else
								var fecha_salida = "<div style='padding:0px 30px;'></div>";							
							
							var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono + '</div>'; 
							else
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono + '</div>'; 

							ProximosViajesTabla.pendiente_viajes.fnUpdate(buttons, nRow, 0, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(dias_restante, nRow, 1, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(id_negocio, nRow, 2, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(destino, nRow, 3, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(nombre_contacto, nRow, 4, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(fecha_salida, nRow, 8, false);
							ProximosViajesTabla.pendiente_viajes.fnUpdate(email, nRow, 9, false);
						});
				  }
					  
				  $('#negociacion_table_proximos_viajes tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });

				 $(ProximosViajesTabla.pendiente_viajes).on( 'draw.dt', function () {
					var countries = [];
					$.each({
					
						"NO": "NO", 
						"SI": "SI",
						"PDTES": "PDTES"
					}, function (k, v) {
						countries.push({
							id: k,
							text: v
						});
					});
				
				   $('.edit_voucher').editable({
						'source': countries,
						'type'   : 'select',
						'emptytext' : "Agregar",
						'ajaxOptions': {
							type: 'post',dataType: 'json'
						},
						'url' :  Configuraciones.getConfiguraciones().url_editar_proximos_viajes_voucher,
						 success: function(response, newValue) {
							$(this).text(newValue);
							$('.popover').hide();
							return false;
						 }
					});

					$('.edit_description').editable({
						'type'   : 'textarea',
						'emptytext' : "Agregar",
						'ajaxOptions': {
							type: 'post',
							dataType: 'json'
						},
						'url' :  Configuraciones.getConfiguraciones().url_editar_proximos_viajes_description
					});

				   $('.edit_documentacion').editable({
						'source': countries,
						'type'   : 'select',
						'emptytext' : "Agregar",
						'ajaxOptions': {
							type: 'post',dataType: 'json'
						},
						'url' : Configuraciones.getConfiguraciones().url_editar_proximos_viajes_documentacion, 
						success: function(response, newValue) {
									$(this).text(newValue);
									$('.popover').hide();
									return false;
						}
					});
				  });

				}
				else
				{
				  ProximosViajesTabla.pendiente_viajes.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-pendiente-table-proximos-viajes').hide();
			}		
		},
		
		cargarTablaCerradas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_cerrado_table_proximos_viajes)
			{
				if(!$.fn.dataTable.isDataTable('#cerrados_table_proximos_viajes'))
				{
					ProximosViajesTabla.cerrado_viajes = $('#cerrados_table_proximos_viajes').dataTable({
						ajax: {
						  'url': Configuraciones.getConfiguraciones().url_cerrado_table_proximos_viajes,
						  'dataSrc': function ( json ) {
							   var i;
							for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);
							
								json[i].buttons = '';
								json[i].dias = '<span class="label label-rounded label-danger">'+json[i].dias+'</span>';
								json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+'</div>';
								//json[i].documentacion_c = json[i].documentacion_c.toUpperCase();
								
								//json[i].documentacion_c = ((json[i].documentacion_c == null) ? "N/A" : json[i].documentacion_c);
								json[i].destino = '<div style="padding:10px;"><strong>' + json[i].destino + '</strong> </br>'+ ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') +'</div>';
								//json[i].voucher_c = json[i].voucher_c.toUpperCase();
								json[i].voucher_c = json[i].voucher_c;
								
								if(json[i].descripciones != "")
								{
									//var description = json[i].descripciones.split("*|*|*");
									 var  description = (json[i].descripciones != null) ? json[i].descripciones.split("*|*|*") : "";
									var description_html = "<ul>";
									$.each(description,function( index, value ){
										if(value.trim() != "")
											description_html += "<li>"+value.trim()+"</li>";
									});
									description_html += "</ul>";
								}
								else
								{
									description_html = "";
								}
								
								json[i].descripciones = '<div>'+description_html+'</div>';
								json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"'  data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
								
								if(json[i].fecha_salida != null)
									json[i].fecha_salida = "<div style='padding:0px 40px;'>"+json[i].fecha_salida+"</div>";
								else
									json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";								
								
								var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
								if(json[i].c_envio_email > 0)
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono_contacto + '</div>'; 
								else
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_contacto +'">'+ ((json[i].email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email_contacto + "</a>" : fa_icon_envelope+json[i].email_contacto ) + "<br>" + fa_icon_phone+json[i].telefono_contacto + '</div>'; 

							
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
						  { data: "dias" },
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_contacto" },
						  { data: "documentacion_c" },
						  { data: "voucher_c" },
						  { data: "descripciones" },
						  { data: "fecha_salida" },
						  { data: "email" },
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
						},
					    "initComplete": function(settings, json) {
					    }
					  });
					  
					  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaProximosViajesCerrados = function ()
					  {
							var nRow = FuncionesGenerales.getRegistroSeleccionado();
							var p_tarea_id = nRow.children().eq(2).children().data('tarea-id');
							var data = {
								id_tarea : p_tarea_id
							};
							
							$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
							{
								var json = jQuery.parseJSON( response )[0];
								var json_aux = JSON.stringify(json);
								
								var buttons = '';
								var dias = '<span class="label label-rounded label-danger">'+json.dias+'</span>';
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"'  data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";
								var destino = '<div style="padding:10px;"><strong>' + json.destino + '</strong> </br>'+ ((json.ruta!=='')?json.ruta:'Sin Ruta') +'</div>';
								var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
								if(json.fecha_salida != null)
									var fecha_salida = "<div style='padding:0px 40px;'>"+json.fecha_salida+"</div>";
								else
									var fecha_salida = "<div style='padding:0px 30px;'></div>";								
								
								var plantilla = Configuraciones.getConfiguraciones().proximos_viajes_tag;
								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 

								ProximosViajesTabla.cerrado_viajes.fnUpdate(buttons, nRow, 0, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(dias, nRow, 1, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(id_negocio, nRow, 2, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(destino, nRow, 3, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(nombre_contacto, nRow, 4, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(fecha_salida, nRow, 8, false);
								ProximosViajesTabla.cerrado_viajes.fnUpdate(email, nRow, 9, false);
							});
					  }
						  
					  $('#cerrados_table_proximos_viajes tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
				   ProximosViajesTabla.cerrado_viajes.api().ajax.reload();
				}
			}
			else
			{
				$('.mostrar-carrado-table-proximos-viajes').hide();
			}		
		},
	
		cargarTabla: function() 
		{
			if(!Configuraciones.getConfiguraciones().mostrar_abierto_table_proximos_viajes)
				$('.mostrar-abierto-table-proximos-viajes').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_pendiente_table_proximos_viajes)
				$('.mostrar-pendiente-table-proximos-viajes').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_cerrado_table_proximos_viajes)
				$('.mostrar-carrado-table-proximos-viajes').hide();
        }
	};
}();