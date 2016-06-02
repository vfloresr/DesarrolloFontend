/** Este código nos permite cargar la tabla Cross Selling. **/

var CrossSellingTabla = function() {
	var abierto, cerrado, pendiente;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {
		cargarTablaNuevas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_abierto_table_cross_selling)
			{
				if(!$.fn.dataTable.isDataTable('#abierto_table'))
				{
				  CrossSellingTabla.abierto = $('#abierto_table').dataTable({
					 ajax: {
					  'url': Configuraciones.getConfiguraciones().url_abierto_table_cross_selling,
					  'dataSrc': function ( json ) {
							var i;
							for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);
								
								var fecha_modificacion = json[i].fecha_modificacion;
								json[i].destino = '<div style="padding:10px;color:#696969;" > <strong style="color:#696969;">' + json[i].destino   + '</strong> <span class="label label-default">'+json[i].dias+' días</span> </br> ' + json[i].ruta + ' </div>';
								json[i].nombre_comprador = '<div style="padding:10px;color:#696969;"><strong style="color:#696969;">'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
								
								var id_negocio = json[i].id_negocio;
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_perdido_nuevos)
									var boton_perdido = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
								else
									var boton_perdido = '';
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_ganado_nuevos)
									var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'"   data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
								else
									var boton_ganado = '';
									
								json[i].buttons = boton_ganado +' '+ boton_perdido;
								
								json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + id_negocio + "</a>";
								
								var plantilla = "crosselling";
								if(json[i].c_envio_email > 0)
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "<strong>("+ json[i].c_envio_email +")</strong></a>" : json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
								else
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "</a>" : json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
							
								if(json[i].fecha_salida != null)
									json[i].fecha_salida = "<div style='padding:0px 30px;'>"+json[i].fecha_salida+"</div>";
								else
									json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";
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
					  { data: "id_negocio" },
					  { data: "destino" },
					  { data: "nombre_comprador" },
					  { data: "email" },
					  { data: "fecha_salida" },
					  { data: "oportunidad_new" },
					  { data: "fecha_modificacion" }
					 // { data: " " }
					 // { data: "monto_venta" },
					 // { data: "monto_oportunidad" }
					],
					"order": [ 7, 'desc' ],
					"columnDefs": [{
					  "targets": 'no-sort',
					  "orderable": false
					},
					{
					"targets": [ 7 ],
                     "visible": false	
					 }
					],
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
						// FuncionesGenerales.filtrarTablasDesdeBuscador();
					}
				  });
				  
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaCrossSellingNuevas = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
						var data = {
							id_oportunidad : p_oportunidad_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_perdido_nuevos)
								var boton_perdido = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_ganado_nuevos)
								var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
							else
								var boton_ganado = '';
								
							var buttons = boton_ganado +' '+ boton_perdido;
							var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json.id_negocio + "</a>";
							
							var destino = '<div style="padding:10px;color:#696969;" > <strong style="color:#696969;">' + json.destino   + '</strong> <span class="label label-default">'+json.dias+' días</span> </br> ' + json.ruta + ' </div>';
							var nombre_comprador = '<div style="padding:10px;color:#696969;" > <strong style="color:#696969;">'+json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
							
							var plantilla = "crosselling";
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
							else
								var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "</a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
						
							if(json.fecha_salida != null)
								var fecha_salida = "<div style='padding:0px 30px;'>"+json.fecha_salida+"</div>";
							else
								var fecha_salida = "<div style='padding:0px 30px;'></div>";
							
							var oportunidad_new = json.oportunidad_new;
							var monto_venta = json.monto_venta;
							var monto_oportunidad = json.monto_oportunidad;
							
							CrossSellingTabla.abierto.fnUpdate(buttons, nRow, 0, false);
							CrossSellingTabla.abierto.fnUpdate(id_negocio, nRow, 1, false);
							CrossSellingTabla.abierto.fnUpdate(destino, nRow, 2, false);
							CrossSellingTabla.abierto.fnUpdate(nombre_comprador, nRow, 3, false);
							CrossSellingTabla.abierto.fnUpdate(email, nRow, 4, false);
							CrossSellingTabla.abierto.fnUpdate(fecha_salida, nRow, 5, false);
							CrossSellingTabla.abierto.fnUpdate(oportunidad_new, nRow, 6, false);
							CrossSellingTabla.abierto.fnUpdate(monto_venta, nRow, 7, false);
							CrossSellingTabla.abierto.fnUpdate(monto_oportunidad, nRow, 8, false);
						});
				  }
				  
				  $('#abierto_table tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });
				}
				else
				{
					CrossSellingTabla.abierto.api().ajax.reload();
					// FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
		
		cargarTablaPendientes: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_pendiente_table_cross_selling)
			{
				if(!$.fn.dataTable.isDataTable('#negociacion_table')){
					  CrossSellingTabla.pendiente = $('#negociacion_table').dataTable({
						 ajax: {
						  'url': Configuraciones.getConfiguraciones().url_pendiente_table_cross_selling,
						  'dataSrc': function ( json ) {
							  var i;
							  for(i = 0; i < json.length; i++){
									var json_aux = JSON.stringify(json[i]);
									var id_negocio = json[i].id_negocio;
									json[i].destino = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">' + json[i].destino   + '</strong> <span class="label label-default">'+json[i].dias+' días</span> </br> ' + json[i].ruta + ' </div>';
									json[i].nombre_comprador = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_perdido_nuevos)
										var boton_perdido = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
									else
										var boton_perdido = '';
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_ganado_nuevos)
										var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
									else
										var boton_ganado = '';
										
									json[i].buttons = boton_ganado +' '+ boton_perdido;
								
									json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + id_negocio + "</a>";
									
									var plantilla = "crosselling";
									if(json[i].c_envio_email > 0)
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
									else
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "</a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 

									if(json[i].fecha_salida != null)
										json[i].fecha_salida = "<div style='padding:0px 30px;'>"+json[i].fecha_salida+"</div>";
									else
										json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";
									
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
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_comprador" },
						  { data: "email" },
						  { data: "fecha_salida" },
						  { data: "monto_venta" },
						  { data: "monto_oportunidad" }
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
							// FuncionesGenerales.filtrarTablasDesdeBuscador();
						}
					  });
					  
					  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaCrossSellingPendientes = function ()
					  {
							var nRow = FuncionesGenerales.getRegistroSeleccionado();
							var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
							var data = {
								id_oportunidad : p_oportunidad_id
							};
							
							$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad, data).done(function(response)
							{
								var json = jQuery.parseJSON( response )[0];
								var json_aux = JSON.stringify(json);
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_perdido_nuevos)
									var boton_perdido = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
								else
									var boton_perdido = '';
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_cross_selling_ganado_nuevos)
									var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
								else
									var boton_ganado = '';
									
								var buttons = boton_ganado +' '+ boton_perdido;
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json.id_negocio + "</a>";
								
								var destino = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">' + json.destino   + '</strong> <span class="label label-default">'+json.dias+' días</span> </br> ' + json.ruta + ' </div>';
								var nombre_comprador = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
								
								var plantilla = "crosselling";
								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"'  data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "</a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
							
								if(json.fecha_salida != null)
									var fecha_salida = "<div style='padding:0px 30px;'>"+json.fecha_salida+"</div>";
								else
									var fecha_salida = "<div style='padding:0px 30px;'></div>";
								
								var monto_venta = json.monto_venta;
								var monto_oportunidad = json.monto_oportunidad;
								
								CrossSellingTabla.pendiente.fnUpdate(buttons, nRow, 0, false);
								CrossSellingTabla.pendiente.fnUpdate(id_negocio, nRow, 1, false);
								CrossSellingTabla.pendiente.fnUpdate(destino, nRow, 2, false);
								CrossSellingTabla.pendiente.fnUpdate(nombre_comprador, nRow, 3, false);
								CrossSellingTabla.pendiente.fnUpdate(email, nRow, 4, false);
								CrossSellingTabla.pendiente.fnUpdate(fecha_salida, nRow, 5, false);
								CrossSellingTabla.pendiente.fnUpdate(monto_venta, nRow, 6, false);
								CrossSellingTabla.pendiente.fnUpdate(monto_oportunidad, nRow, 7, false);
							});
					  }
				  
					  $('#negociacion_table tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
					  CrossSellingTabla.pendiente.api().ajax.reload();
					  // FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
		
		cargarTablaCerradasss: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_cerrado_table_cross_selling)
			{
				if(!$.fn.dataTable.isDataTable('#cerrados_table'))
				{
					  CrossSellingTabla.cerrado = $('#cerrados_table').dataTable({
						ajax: {
						  'url': Configuraciones.getConfiguraciones().url_cerrado_table_cross_selling,
						  'dataSrc': function ( json ) {
						     var i;
							 
							 for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);
								var id_negocio         = json[i].id_negocio;
								var fecha_salida       = json[i].fecha_salida;
								var productos          = json[i].productos_c;
								
								var fecha_modificacion = json[i].fecha_modificacion;
								json[i].destino = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">' + json[i].destino   + '</strong> <span class="label label-default">'+json[i].dias+' días</span> </br> ' + json[i].ruta + ' </div>';
								json[i].nombre_comprador = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
								
								//json[i].buttons = '';
								//json[i].buttons = "<a href='#' onclick='abrirCrossSelling(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux+"'><span class='glyphicons glyphicons-unlock' title='Abrir Cross Selling' style='color:#696969;'><p style='color:#696969;font-size:12px;font-family: 'Arial', Times New Roman, Georgia, Serif;font-weight:bold;margin-top:5px;' >Abrir</p></span></a>";
								json[i].buttons ="<button type='button' class='btn btn-rounded btn-primary btn-block' onclick='abrirCrossSelling(this);'  data-oportunidad-id='"+json[i].id_oportunidad.trim()+"'  data-fecha-sal='"+json[i].fecha_salida+"' data-json='"+ json_aux+"' title='Abrir Cross Selling'>Abrir</button>";						
								json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + id_negocio + "</a>";
								json[i].motivo_cierre_c = (json[i].motivo_cierre_c !== "null") ? json[i].motivo_cierre_c : '';						
								
								if(json[i].c_envio_email > 0)
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ fa_icon_envelope+json[i].email + " <strong>("+ json[i].c_envio_email +")</strong>" + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
								else
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ fa_icon_envelope+json[i].email + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 

							    if(json[i].fecha_salida != null)
									json[i].fecha_salida = "<div style='padding:0px 30px;'>"+json[i].fecha_salida+"</div>";
								else
									json[i].fecha_salida = "<div style='padding:0px 30px;'></div>";
							 }
							 
							 if(typeof(json)=="string"){
							  json={};
							   json.buttons = '';
							 }
							  var d = {};
							  return d['data'] = json;
						  }
						},
						/*columns: [
						  { data: "buttons" },
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_comprador" },
						  { data: "email" },
						  { data: "fecha_salida" },
						  { data: "monto_venta" },
						  { data: "monto_oportunidad" },
						  { data: "estado"},
						  { data: "productos_c"},
						 // { data: "description"},
						 // { data: "motivo_cierre_c"}
						],
						"order": [1, 'asc' ],
						"columnDefs": [{
						  "targets": 'no-sort',
						  "orderable": false
						}],
						*/
						columns: [
						  { data: "buttons" },
						  { data: "id_negocio" },
						  { data: "destino" },
						  { data: "nombre_comprador" },
						  { data: "email" },
						  { data: "fecha_salida" },
						  { data: "monto_venta" },
						  { data: "monto_oportunidad" },
						  { data: "estado"},
						  { data: "productos_c"},
						  { data: "fecha_modificacion" }
						  
						 // { data: " " }
						 // { data: "monto_venta" },
						 // { data: "monto_oportunidad" }
						],
						"order": [ 10, 'desc' ],
						"columnDefs": [{
						  "targets": 'no-sort',
						  "orderable": false
						},
						{
						"targets": [ 10 ],
						 "visible": false	
						 }
						],
						
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
							// FuncionesGenerales.filtrarTablasDesdeBuscador();
						}
					});
					
					$.fn.dataTableExt.oApi.fnActualizarRegistroTablaCrossSellingCerrados = function ()
					{
							var nRow = FuncionesGenerales.getRegistroSeleccionado();
							var p_oportunidad_id = nRow.children().eq(1).children().data('oportunidad-id');
							var data = {
								id_oportunidad : p_oportunidad_id
							};
							
							$.get(Configuraciones.getConfiguraciones().url_busca_oportunidad, data).done(function(response)
							{
								var json = jQuery.parseJSON( response )[0];
								var json_aux = JSON.stringify(json);

								var buttons = '';
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json.id_negocio; + "</a>";
								var destino = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">' + json.destino   + '</strong> <span class="label label-default">'+json.dias+' días</span> </br> ' + json.ruta + ' </div>';
								var nombre_comprador = '<div style="padding:10px;color:#696969;" > <strong style="color:#696969;">' +json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ fa_icon_envelope+json.email + " <strong>("+ json.c_envio_email +")</strong>" + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ fa_icon_envelope+json.email + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								
								if(json.fecha_salida != null)
									var fecha_salida = "<div style='padding:0px 30px;'>"+json.fecha_salida+"</div>";
								else
									var fecha_salida = "<div style='padding:0px 30px;'></div>";
								
								var monto_venta = json.monto_venta;
								var monto_oportunidad = json.monto_oportunidad;
								var estado = json.estado;
								var productos_c = json.productos_c;
								//var description = json.description;
								
								//var motivo_cierre_c = (json.motivo_cierre_c !== "null") ? json.motivo_cierre_c : '';						
								
								CrossSellingTabla.cerrado.fnUpdate(buttons, nRow, 0, false);
								CrossSellingTabla.cerrado.fnUpdate(id_negocio, nRow, 1, false);
								CrossSellingTabla.cerrado.fnUpdate(destino, nRow, 2, false);
								CrossSellingTabla.cerrado.fnUpdate(nombre_comprador, nRow, 3, false);
								CrossSellingTabla.cerrado.fnUpdate(email, nRow, 4, false);
								CrossSellingTabla.cerrado.fnUpdate(fecha_salida, nRow, 5, false);
								CrossSellingTabla.cerrado.fnUpdate(monto_venta, nRow, 6, false);
								CrossSellingTabla.cerrado.fnUpdate(monto_oportunidad, nRow, 7, false);
								CrossSellingTabla.cerrado.fnUpdate(estado, nRow, 8, false);
								CrossSellingTabla.cerrado.fnUpdate(productos_c, nRow, 9, false);
								CrossSellingTabla.cerrado.fnUpdate(description, nRow, 10, false);
								CrossSellingTabla.cerrado.fnUpdate(motivo_cierre_c, nRow, 11, false);
							});
					  }
					  
					  $('#cerrados_table tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
					  CrossSellingTabla.cerrado.api().ajax.reload();
					  // FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
	
		cargarTabla: function() 
		{
            if(!Configuraciones.getConfiguraciones().mostrar_abierto_table_cross_selling)
				$('.mostrar-abierto-table-cross-selling').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_pendiente_table_cross_selling)
				$('.mostrar-pendiente-table-cross-selling').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_cerrado_table_cross_selling)
				$('.mostrar-carrado-table-cross-selling').hide();
        }
	};
}();