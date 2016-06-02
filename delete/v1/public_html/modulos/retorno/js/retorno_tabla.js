/** Este código nos permite cargar la tabla Retorno. **/

var RetornoTabla = function() {
	var abierto_retorno, cerrado_retorno, pendiente_retorno;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";

	return {
		
		cargarTablaNuevas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_abierto_table_retorno)
			{
				if(!$.fn.dataTable.isDataTable('#abierto_table_retorno')){
				  RetornoTabla.abierto_retorno = $('#abierto_table_retorno').dataTable({
					   ajax: {
						'url': Configuraciones.getConfiguraciones().url_abierto_table_retorno,
						'dataSrc': function ( json ) {
							var i;
							for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_ganado_nuevos)
									var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
								else
									var boton_ganado = '';
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_perdido_nuevos)
									var boton_perdido = ' <button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
								else
									var boton_perdido = '';
								
								json[i].buttons = boton_ganado + ' ' + boton_perdido;
								
								json[i].destino = '<div style="padding:10px;"><strong>'+ json[i].destino +'</strong> <span class="label label-default">'+json[i].dias+' días</span></br>' + ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') + '</div>';
								
								if(json[i].encuesta == 2){
									json[i].encuesta_columna = '<a title="Ver Encuesta Completa" onclick="modalEncuesta(this);" href="javascript:void(0)" data-nombre="'+json[i].nombre_contacto+'" data-rut="'+((json[i].rut_contacto !=='')? json[i].rut_contacto:'N/A')+'"  data-estado="Completa" ><img class="encuesta" src="assets/images/completa.png"></img></a>';
								}else if(json[i].encuesta == 1){
									json[i].encuesta_columna = '<a title="Ver Encuesta Incompleta" onclick="modalEncuesta(this);" href="javascript:void(0)" data-nombre="'+json[i].nombre_contacto+'" data-rut="'+json[i].rut_contacto+'"  data-estado="Incompleta"><img class="encuesta" src="assets/images/incompleta.png"></img></a>';
								}else {
									json[i].encuesta_columna = '';
								}
								json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+' </div>';
								json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";

								if(json[i].fecha_retorno != null)
									json[i].fecha_retorno = "<div style='padding:0px 40px;'>"+json[i].fecha_retorno+"</div>";
								else
									json[i].fecha_retorno = "<div style='padding:0px 30px;'></div>";								
								
								var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
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
						{ data: "id_negocio" },
						{ data: "destino" },
						{ data: "nombre_contacto" },
						{ data: "encuesta_columna" },
						{ data: "monto_venta" },
						{ data: "fecha_retorno" },
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
				  
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaRetornoNuevas = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_tarea_id = nRow.children().eq(1).children().data('tarea-id');
						var data = {
							id_tarea : p_tarea_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);

							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_ganado_nuevos)
								var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
							else
								var boton_ganado = '';
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_perdido_nuevos)
								var boton_perdido = ' <button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							
							var buttons = boton_ganado + ' ' + boton_perdido;
							var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";

							var destino = '<div style="padding:10px;"><strong>'+ json.destino +'</strong> <span class="label label-default">'+json.dias+' días</span></br>' + ((json.ruta!=='')?json.ruta:'Sin Ruta') + '</div>';
							var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
							var monto_venta = json.monto_venta;
							
							if(json.fecha_retorno != null)
								var fecha_retorno = "<div style='padding:0px 40px;'>"+json.fecha_retorno+"</div>";
							else
								var fecha_retorno = "<div style='padding:0px 30px;'></div>";								
							
							var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>';  
							else
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 
						
							
							RetornoTabla.abierto_retorno.fnUpdate(buttons, nRow, 0, false);
							RetornoTabla.abierto_retorno.fnUpdate(id_negocio, nRow, 1, false);
							RetornoTabla.abierto_retorno.fnUpdate(destino, nRow, 2, false);
							RetornoTabla.abierto_retorno.fnUpdate(nombre_contacto, nRow, 3, false);
							RetornoTabla.abierto_retorno.fnUpdate(monto_venta, nRow, 5, false);
							RetornoTabla.abierto_retorno.fnUpdate(fecha_retorno, nRow, 6, false);
							RetornoTabla.abierto_retorno.fnUpdate(email, nRow, 7, false);
						});
				  }
					  
				  $('#abierto_table_retorno tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });
				}
				else
				{
					RetornoTabla.abierto_retorno.api().ajax.reload();
				}
			}
		},
		
		cargarTablaPendientes: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_pendiente_table_retorno)
			{
				if(!$.fn.dataTable.isDataTable('#negociacion_table_retorno')){
				  RetornoTabla.pendiente_retorno = $('#negociacion_table_retorno').dataTable({
					 ajax: {
					  'url': Configuraciones.getConfiguraciones().url_pendiente_table_retorno,
					  'dataSrc': function ( json ) {
						  var i;
						  for(i = 0; i < json.length; i++){
							var json_aux = JSON.stringify(json[i]);
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_ganado_pendientes)
								var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
							else
								var boton_ganado = '';
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_perdido_pendientes)
								var boton_perdido = ' <button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							
							json[i].buttons = boton_ganado + ' ' + boton_perdido;
							
							json[i].destino = '<div style="padding:10px;"><strong>'+ json[i].destino +'</strong> <span class="label label-default">'+json[i].dias+' días</span></br>' + ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') + '</div>';
							json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+'</div>';
							json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
							
							if(json[i].fecha_retorno != null)
								json[i].fecha_retorno = "<div style='padding:0px 40px;'>"+json[i].fecha_retorno+"</div>";
							else
								json[i].fecha_retorno = "<div style='padding:0px 30px;'></div>";		

								var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
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
						{ data: "id_negocio" },
						{ data: "destino" },
						{ data: "nombre_contacto" },
						{ data: "monto_venta" },
						{ data: "fecha_retorno" },
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
				
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaRetornoPendientes = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_tarea_id = nRow.children().eq(1).children().data('tarea-id');
						var data = {
							id_tarea : p_tarea_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);

							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_ganado_nuevos)
								var boton_ganado = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button>';
							else
								var boton_ganado = '';
							
							if(Configuraciones.getConfiguraciones().mostrar_boton_retorno_perdido_nuevos)
								var boton_perdido = ' <button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button>';
							else
								var boton_perdido = '';
							
							var buttons = boton_ganado + ' ' + boton_perdido;
							var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";

							var destino = '<div style="padding:10px;"><strong>'+ json.destino +'</strong> <span class="label label-default">'+json.dias+' días</span></br>' + ((json.ruta!=='')?json.ruta:'Sin Ruta') + '</div>';
							var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
							var monto_venta = json.monto_venta;
							
							if(json.fecha_retorno != null)
								var fecha_retorno = "<div style='padding:0px 40px;'>"+json.fecha_retorno+"</div>";
							else
								var fecha_retorno = "<div style='padding:0px 30px;'></div>";								
							
							var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>';  
							else
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 
							
							RetornoTabla.pendiente_retorno.fnUpdate(buttons, nRow, 0, false);
							RetornoTabla.pendiente_retorno.fnUpdate(id_negocio, nRow, 1, false);
							RetornoTabla.pendiente_retorno.fnUpdate(destino, nRow, 2, false);
							RetornoTabla.pendiente_retorno.fnUpdate(nombre_contacto, nRow, 3, false);
							RetornoTabla.pendiente_retorno.fnUpdate(monto_venta, nRow, 4, false);
							RetornoTabla.pendiente_retorno.fnUpdate(fecha_retorno, nRow, 5, false);
							RetornoTabla.pendiente_retorno.fnUpdate(email, nRow, 6, false);
						});
				  }
					  
				  $('#negociacion_table_retorno tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });
				}
				else
				{
					RetornoTabla.pendiente_retorno.api().ajax.reload();
				}
			}	
		},
		
		cargarTablaCerradas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_cerrado_table_retorno)
			{
				if(!$.fn.dataTable.isDataTable('#cerrados_table_retorno')){
				  RetornoTabla.cerrado_retorno = $('#cerrados_table_retorno').dataTable({
					ajax: {
					  'url': Configuraciones.getConfiguraciones().url_cerrado_table_retorno,
					  'dataSrc': function ( json ) {
						   var i;
						  for(i = 0; i < json.length; i++){
							var json_aux = JSON.stringify(json[i]);
							json[i].buttons = '';
							json[i].destino = '<div style="padding:10px;"><strong>'+ json[i].destino +'</strong> <span class="label label-default">'+json[i].dias+' días</span></br>' + ((json[i].ruta!=='')?json[i].ruta:'Sin Ruta') + '</div>';
							
							if(json[i].encuesta == 2){
									json[i].encuesta_columna = '<a title="Ver Encuesta Completa" onclick="modalEncuesta(this);" href="javascript:void(0)" data-nombre="'+json[i].nombre_contacto+'" data-rut="'+json[i].rut_contacto+'"  data-estado="Completa" ><img class="encuesta" src="assets/images/completa.png"></img></a>';
								}else if(json[i].encuesta == 1){
									json[i].encuesta_columna = '<a title="Ver Encuesta Incompleta" onclick="modalEncuesta(this);" href="javascript:void(0)" data-nombre="'+json[i].nombre_contacto+'" data-rut="'+json[i].rut_contacto+'"  data-estado="Incompleta"><img class="encuesta" src="assets/images/incompleta.png"></img></a>';
								}else {
									json[i].encuesta_columna = '';
								}
							
							json[i].nombre_contacto = '<div style="padding:10px;"><strong>'+json[i].nombre_contacto+'</strong></br> Rut: '+json[i].rut_contacto+'</div>';
							json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json[i].id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
							json[i].motivo_cierre_c = (json[i].motivo_cierre_c !== "null") ? json[i].motivo_cierre_c : 'Sin motivo';
							json[i].monto_venta = parseInt(json[i].monto_venta);

							if(json[i].fecha_retorno != null)
								json[i].fecha_retorno = "<div style='padding:0px 40px;'>"+json[i].fecha_retorno+"</div>";
							else
								json[i].fecha_retorno = "<div style='padding:0px 30px;'></div>";		
							
							var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
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
						{ data: "id_negocio" },
						{ data: "destino" },
						{ data: "nombre_contacto" },
						{ data: "encuesta_columna" },
						{ data: "monto_venta" },
						{ data: "fecha_retorno" },
						{ data: "email" },
						{ data: "motivo_cierre_c" }				
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
				
				  $.fn.dataTableExt.oApi.fnActualizarRegistroTablaRetornoCerrados = function ()
				  {
						var nRow = FuncionesGenerales.getRegistroSeleccionado();
						var p_tarea_id = nRow.children().eq(1).children().data('tarea-id');
						var data = {
							id_tarea : p_tarea_id
						};
						
						$.get(Configuraciones.getConfiguraciones().url_busca_tarea, data).done(function(response)
						{
							var json = jQuery.parseJSON( response )[0];
							var json_aux = JSON.stringify(json);
							
							var buttons = '';
							var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-tarea-id='"+json.id_tarea.trim()+"' data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";
							var destino = '<div style="padding:10px;"><strong>'+ json.destino +'</strong> <span class="label label-default">'+json.dias+' días</span></br>' + ((json.ruta!=='')?json.ruta:'Sin Ruta') + '</div>';
							var nombre_contacto = '<div style="padding:10px;"><strong>'+json.nombre_contacto+'</strong></br> Rut: '+json.rut_contacto+'</div>';
							var monto_venta = parseInt(json.monto_venta);
							
							if(json.fecha_retorno != null)
								var fecha_retorno = "<div style='padding:0px 40px;'>"+json.fecha_retorno+"</div>";
							else
								var fecha_retorno = "<div style='padding:0px 30px;'></div>";		
								
							var plantilla = Configuraciones.getConfiguraciones().retorno_tag;
							if(json.c_envio_email > 0)
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>';  
							else
								var email = '<div class="rut_comprador_'+ json.rut_contacto +'">'+ ((json.email_contacto!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email_contacto + "</a>" : fa_icon_envelope+json.email_contacto ) + "<br>" + fa_icon_phone+json.telefono_contacto + '</div>'; 
							
							var motivo_cierre_c = (json.motivo_cierre_c !== "null") ? json.motivo_cierre_c : 'Sin motivo';								
							
							RetornoTabla.cerrado_retorno.fnUpdate(buttons, nRow, 0, false);
							RetornoTabla.cerrado_retorno.fnUpdate(id_negocio, nRow, 1, false);
							RetornoTabla.cerrado_retorno.fnUpdate(destino, nRow, 2, false);
							RetornoTabla.cerrado_retorno.fnUpdate(nombre_contacto, nRow, 3, false);
							RetornoTabla.cerrado_retorno.fnUpdate(monto_venta, nRow, 5, false);
							RetornoTabla.cerrado_retorno.fnUpdate(fecha_retorno, nRow, 6, false);
							RetornoTabla.cerrado_retorno.fnUpdate(email, nRow, 7, false);
							RetornoTabla.cerrado_retorno.fnUpdate(motivo_cierre_c, nRow, 8, false);
						});
				  }
				  
				  $('#cerrados_table_retorno tbody').on('click', 'tr', function (e) {
						var nRow = $(this);
						FuncionesGenerales.setRegistroSeleccionado(nRow);
				  });
				}
				else
				{
					RetornoTabla.cerrado_retorno.api().ajax.reload();
				}
			}
		},
	
		cargarTabla: function() {
            if(!Configuraciones.getConfiguraciones().mostrar_abierto_table_retorno)
				$('.mostrar-abierto-table-retorno').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_pendiente_table_retorno)
				$('.mostrar-pendiente-table-retorno').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_cerrado_table_retorno)
				$('.mostrar-carrado-table-retorno').hide();
        }		
	};
}();