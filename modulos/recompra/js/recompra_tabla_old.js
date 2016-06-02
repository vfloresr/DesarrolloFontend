/** Este código nos permite cargar la tabla Recompra. **/

var RecompraTabla = function() {
	var abierto_recompra, pendiente_recompra, cerrado_recompra;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {

		cargarTablaNuevas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_abierto_table_recompra)
			{
				if(!$.fn.dataTable.isDataTable('#abierto_table_recompra'))
				{
					  RecompraTabla.abierto_recompra = $('#abierto_table_recompra').dataTable({
						   ajax: {
							'url': Configuraciones.getConfiguraciones().url_abierto_table_recompra,
							'dataSrc': function ( json ) {
								var i;
								for(i = 0; i < json.length; i++){
									var json_aux = JSON.stringify(json[i]);
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_perdido_nuevos)
										var boton_perdido = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button> ';
									else
										var boton_perdido = '';
									
									if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_ganado_nuevos)
										var boton_ganado = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button> ';
									else
										var boton_ganado = '';
										
									json[i].buttons = boton_perdido + " " + boton_ganado;
									
									json[i].destino = '<div style="padding:10px;"><strong>' +  json[i].destino  + '</strong>  <span class="label label-default">' + json[i].dias + ' días</span> </br>' + ((json[i].ruta!==null)?json[i].ruta:'Sin Ruta') + ' </div>';
									json[i].nombre_comprador = '<div style="padding:10px;"><strong>'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
									json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";
									
									if(json[i].fecha_compra != null)
										json[i].fecha_compra = "<div style='padding:0px 30px;'>"+json[i].fecha_compra+"</div>";
									else
										json[i].fecha_compra = "<div style='padding:0px 30px;'></div>";

									
									var plantilla = Configuraciones.getConfiguraciones().recompra_tag;
									if(json[i].c_envio_email > 0)
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-json=\'"+ json_aux +"'\" data-contacto-id='" + json[i].id_contacto + "' onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
									else
										json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-json=\'"+ json_aux +"'\" data-contacto-id='" + json[i].id_contacto + "' onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "</a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
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
							{ data: "monto_venta" },
							{ data: "fecha_compra" },
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
								// FuncionesGenerales.filtrarTablasDesdeBuscador();
						  }
					});
					
					$.fn.dataTableExt.oApi.fnActualizarRegistroTablaRecompraNuevas = function ()
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
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_perdido_pendientes)
									var boton_perdido = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button> ';
								else
									var boton_perdido = '';
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_ganado_pendientes)
									var boton_ganado = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button> ';
								else
									var boton_ganado = '';
								
								var buttons = boton_perdido + " " + boton_ganado;
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json.id_negocio + "</a>";
								 
								var destino = '<div style="padding:10px;"><strong>' +  json.destino  + '</strong>  <span class="label label-default">' + json.dias + ' días</span> </br>' + ((json.ruta!==null)?json.ruta:'Sin Ruta') + ' </div>';
								var nombre_comprador = '<div style="padding:10px;"><strong>'+json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
								var monto_venta = json.monto_venta;
							   
								if(json.fecha_compra != null)
									var fecha_compra = "<div style='padding:0px 30px;'>"+json.fecha_compra+"</div>";
								else
									var fecha_compra = "<div style='padding:0px 30px;'></div>";
							   
								var plantilla = Configuraciones.getConfiguraciones().recompra_tag;
								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "</a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 

								RecompraTabla.abierto_recompra.fnUpdate(buttons, nRow, 0, false);
								RecompraTabla.abierto_recompra.fnUpdate(id_negocio, nRow, 1, false);
								RecompraTabla.abierto_recompra.fnUpdate(destino, nRow, 2, false);
								RecompraTabla.abierto_recompra.fnUpdate(nombre_comprador, nRow, 3, false);
								RecompraTabla.abierto_recompra.fnUpdate(monto_venta, nRow, 4, false);
								RecompraTabla.abierto_recompra.fnUpdate(fecha_compra, nRow, 5, false);
								RecompraTabla.abierto_recompra.fnUpdate(email, nRow, 6, false);
							});
					  }
					  
					  $('#abierto_table_recompra tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}
				else
				{
					  RecompraTabla.abierto_recompra.api().ajax.reload();
					  // FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
	
		cargarTablaPendientes: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_pendiente_table_recompra)
			{
				if(!$.fn.dataTable.isDataTable('#negociacion_table_recompra')){
					RecompraTabla.pendiente_recompra = $('#negociacion_table_recompra').dataTable({
					   ajax: {
						'url': Configuraciones.getConfiguraciones().url_pendiente_table_recompra,
						'dataSrc': function ( json ) {
							var i;
							for(i = 0; i < json.length; i++){
							 var json_aux = JSON.stringify(json[i]);

							 if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_perdido_pendientes)
								var boton_perdido = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-ok-sign"></span></button> ';
							 else
								var boton_perdido = '';
							
							 if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_ganado_pendientes)
								var boton_ganado = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json[i].id_negocio+'" data-json=\''+ JSON.stringify(json[i])+'\'><span class="glyphicon glyphicon-remove-sign"></span></button> ';
							 else
								var boton_ganado = '';
								
							json[i].buttons = boton_perdido + " " + boton_ganado;
							 
							 json[i].destino = '<div style="padding:10px;"><strong>' +  json[i].destino  + '</strong>  <span class="label label-default">' + json[i].dias + ' días</span> </br>' + ((json[i].ruta!==null)?json[i].ruta:'Sin Ruta') + ' </div>';
							 json[i].nombre_comprador = '<div style="padding:10px;"><strong>'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
							 json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json[i].id_negocio + "</a>";
						   
							 if(json[i].fecha_compra != null)
								json[i].fecha_compra = "<div style='padding:0px 30px;'>"+json[i].fecha_compra+"</div>";
							 else
								json[i].fecha_compra = "<div style='padding:0px 30px;'></div>";
						   
							 var plantilla = Configuraciones.getConfiguraciones().recompra_tag;
							 if(json[i].c_envio_email > 0)
								json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "<strong>("+ json[i].c_envio_email +")</strong></a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
							 else
								json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">'+ ((json[i].email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json[i].email + "</a>" : fa_icon_envelope+json[i].email ) + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 

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
						{ data: "monto_venta" },
						{ data: "fecha_compra" },
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
							// FuncionesGenerales.filtrarTablasDesdeBuscador();
					  }
					});
					
					$.fn.dataTableExt.oApi.fnActualizarRegistroTablaRecompraPendientes = function ()
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
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_perdido_pendientes)
									var boton_perdido = '<button type="button" onclick="modal_ganado(this)" class="btn btn-success btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-ok-sign"></span></button> ';
								else
									var boton_perdido = '';
								
								if(Configuraciones.getConfiguraciones().mostrar_boton_recompra_ganado_pendientes)
									var boton_ganado = '<button type="button" onclick="modal_perdido(this)" class="btn btn-danger btn-sm" data-negocio-id="'+ json.id_negocio+'" data-json=\''+ JSON.stringify(json)+'\'><span class="glyphicon glyphicon-remove-sign"></span></button> ';
								else
									var boton_ganado = '';
								
								var buttons = boton_perdido + " " + boton_ganado;
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux+"'>" + json.id_negocio + "</a>";
								 
								var destino = '<div style="padding:10px;"><strong>' +  json.destino  + '</strong>  <span class="label label-default">' + json.dias + ' días</span> </br>' + ((json.ruta!==null)?json.ruta:'Sin Ruta') + ' </div>';
								var nombre_comprador = '<div style="padding:10px;"><strong>'+json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
								var monto_venta = json.monto_venta;
							   
								if(json.fecha_compra != null)
									var fecha_compra = "<div style='padding:0px 30px;'>"+json.fecha_compra+"</div>";
								else
									var fecha_compra = "<div style='padding:0px 30px;'></div>";
							   
								var plantilla = Configuraciones.getConfiguraciones().recompra_tag;
								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope+json.email + "<strong>("+ json.c_envio_email +")</strong></a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">'+ ((json.email!=='Sin Email') ? "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json.id_contacto + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" +fa_icon_envelope+json.email + "</a>" : fa_icon_envelope+json.email ) + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 

								RecompraTabla.pendiente_recompra.fnUpdate(buttons, nRow, 0, false);
								RecompraTabla.pendiente_recompra.fnUpdate(id_negocio, nRow, 1, false);
								RecompraTabla.pendiente_recompra.fnUpdate(destino, nRow, 2, false);
								RecompraTabla.pendiente_recompra.fnUpdate(nombre_comprador, nRow, 3, false);
								RecompraTabla.pendiente_recompra.fnUpdate(monto_venta, nRow, 4, false);
								RecompraTabla.pendiente_recompra.fnUpdate(fecha_compra, nRow, 5, false);
								RecompraTabla.pendiente_recompra.fnUpdate(email, nRow, 6, false);
							});
					  }
					  
					  $('#negociacion_table_recompra tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					  });
				}else{
				    RecompraTabla.pendiente_recompra.api().ajax.reload();
					// FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
		
		cargarTablaCerradas: function() 
		{
			if(Configuraciones.getConfiguraciones().mostrar_cerrado_table_recompra)
			{
				if(!$.fn.dataTable.isDataTable('#cerrados_table_recompra'))
				{
				  RecompraTabla.cerrado_recompra = $('#cerrados_table_recompra').dataTable({
					  ajax: {
						'url': Configuraciones.getConfiguraciones().url_cerrado_table_recompra,
						'dataSrc': function ( json ) {
							 var i;
							for(i = 0; i < json.length; i++){
								var json_aux = JSON.stringify(json[i]);
								json[i].buttons = '';
								json[i].destino = '<div style="padding:10px;"><strong>' +  json[i].destino  + '</strong>  <span class="label label-default">' + json[i].dias + ' días</span> </br>' + ((json[i].ruta!==null)?json[i].ruta:'Sin Ruta') + ' </div>';
								json[i].nombre_comprador = '<div style="padding:10px;"><strong>'+json[i].nombre_comprador+'</strong></br> Rut: '+json[i].rut_comprador+'</div>';
								json[i].id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json[i].id_oportunidad.trim()+"' data-json='"+ json_aux +"'>" + json[i].id_negocio + "</a>";

								if(json[i].fecha_compra != null)
									json[i].fecha_compra = "<div style='padding:0px 40px;'>"+json[i].fecha_compra+"</div>";
								else
									json[i].fecha_compra = "<div style='padding:0px 30px;'></div>";
								
								var plantilla = Configuraciones.getConfiguraciones().recompra_tag;
								if(json[i].c_envio_email > 0)
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">' + fa_icon_envelope+json[i].email + " <strong>("+ json[i].c_envio_email +")</strong>" + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 
								else
									json[i].email = '<div class="rut_comprador_'+ json[i].rut_comprador +'">' + fa_icon_envelope+json[i].email + "<br>" + fa_icon_phone+json[i].telefono  + '</div>'; 

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
						{ data: "monto_venta" },
						{ data: "fecha_compra" },
						{ data: "email" },
						{ data: "estado"},
						{ data: "productos_c"},
						{ data: "description"}
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
				  
				  	$.fn.dataTableExt.oApi.fnActualizarRegistroTablaRecompraCerrados = function ()
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
								var id_negocio = "<a href='#' onclick='abrirDetalleNegocioModal(this);' data-oportunidad-id='"+json.id_oportunidad.trim()+"' data-json='"+ json_aux +"'>" + json.id_negocio + "</a>";
								var destino = '<div style="padding:10px;"><strong>' +  json.destino  + '</strong>  <span class="label label-default">' + json.dias + ' días</span> </br>' + ((json.ruta!==null)?json.ruta:'Sin Ruta') + ' </div>';
								var nombre_comprador = '<div style="padding:10px;"><strong>'+json.nombre_comprador+'</strong></br> Rut: '+json.rut_comprador+'</div>';
								var monto_venta = json.monto_venta;

								if(json.fecha_compra != null)
									var fecha_compra = "<div style='padding:0px 40px;'>"+json.fecha_compra+"</div>";
								else
									var fecha_compra = "<div style='padding:0px 30px;'></div>";

								if(json.c_envio_email > 0)
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">' + fa_icon_envelope+json.email + " <strong>("+ json.c_envio_email +")</strong>" + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								else
									var email = '<div class="rut_comprador_'+ json.rut_comprador +'">' + fa_icon_envelope+json.email + "<br>" + fa_icon_phone+json.telefono  + '</div>'; 
								
								var estado = json.estado;
								var productos_c = json.productos_c;
								var description = json.description;
							
								RecompraTabla.cerrado_recompra.fnUpdate(buttons, nRow, 0, false);
								RecompraTabla.cerrado_recompra.fnUpdate(id_negocio, nRow, 1, false);
								RecompraTabla.cerrado_recompra.fnUpdate(destino, nRow, 2, false);
								RecompraTabla.cerrado_recompra.fnUpdate(nombre_comprador, nRow, 3, false);
								RecompraTabla.cerrado_recompra.fnUpdate(monto_venta, nRow, 4, false);
								RecompraTabla.cerrado_recompra.fnUpdate(fecha_compra, nRow, 5, false);
								RecompraTabla.cerrado_recompra.fnUpdate(email, nRow, 6, false);
								RecompraTabla.cerrado_recompra.fnUpdate(estado, nRow, 7, false);
								RecompraTabla.cerrado_recompra.fnUpdate(productos_c, nRow, 8, false);
								RecompraTabla.cerrado_recompra.fnUpdate(description, nRow, 9, false);
							});
					 }
					  
					 $('#cerrados_table_recompra tbody').on('click', 'tr', function (e) {
							var nRow = $(this);
							FuncionesGenerales.setRegistroSeleccionado(nRow);
					 });
				}
				else
				{
				  RecompraTabla.cerrado_recompra.api().ajax.reload();
				  // FuncionesGenerales.filtrarTablasDesdeBuscador();
				}
			}
		},
		
		cargarTabla: function() 
		{
			if(!Configuraciones.getConfiguraciones().mostrar_abierto_table_recompra)
				$('.mostrar-abierto-table-recompra').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_pendiente_table_recompra)
				$('.mostrar-pendiente-table-recompra').hide();
			if(!Configuraciones.getConfiguraciones().mostrar_cerrado_table_recompra)
				$('.mostrar-carrado-table-recompra').hide();
        }
	};
}();