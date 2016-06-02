/** Este código nos permite cargar la tabla Cumpleaños. **/

var CumpleanosTabla = function() {
	var cumpleanos;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {

		cargarTabla: function() 
		{
			if(!$.fn.dataTable.isDataTable('#table_cumpleanios'))
			{
				CumpleanosTabla.cumpleanos = $('#table_cumpleanios').dataTable({
				destroy: true,
				 ajax: {
				  'url': Configuraciones.getConfiguraciones().url_table_cumpleanos, 
				  'dataSrc': function ( json ) {
					 var i;
					 for(i = 0; i < json.length; i++){
						var json_aux = JSON.stringify(json[i]);
						var plantilla = "cumpleanos";
						
						if(json[i].cumple_mes != "")
							json[i].cumple_mes = "<div style='padding:0px 40px;'>"+FuncionesGenerales.cambiarFormatoFecha(json[i].cumple_mes,'dd-MM-yyyy'
						     )+"</div>";
						else	
							json[i].cumple_mes = "<div style='padding:0px 30px;'></div>";
							
						var contador = "";
						if(json[i].c_envio_email > 0)
							contador = " <strong>("+json[i].c_envio_email+")</strong>";
						else
							contador = ""; 
						
							 var d = new Date();
							 var month = d.getMonth()+1;
                             var day = d.getDate();                    
							
							//var currentDate = (day<10 ? '0' : '') + day + '-' + (month<10 ? '0' : '') + month + '-' + d.getFullYear();
							var currentDate = (day<10 ? '0' : '') + day + '-' + (month<10 ? '0' : '') + month;
                            												
							fechas_d_cumple = json[i].cumple_mes;
							fecha_d_cumple_aux = fechas_d_cumple.substring(31,36);
							
															
						if  ((json[i].email == 'Sin Email')){
							
							json[i].buttons = '&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-estado="'+json[i].estado+'"  data-modulo-tag="'+ plantilla +'" data-cumple="'+json[i].cumple_mes+'"  data-envio_email="'+json[i].c_envio_email+'" data-contacto-id="' +json[i].rut+'" data-nombre="' +json[i].nombre+'" data-solicitud=\"'+json_aux+'"\  value="'+json[i].rut+'" title="No es posible agendar este contacto, porque este cliente no posee email" disabled/>';
							json[i].nombre = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json[i].nombre+"</strong></br> Rut: <a href='javascript:void(0);' data-rut='"+json[i].rut+"' onclick='modal_editar_cumpleanio(this)' data-json=\'"+ json_aux +"'\">"+json[i].rut + "</a></div>";
					
						}else if (fecha_d_cumple_aux<currentDate){
						 
						   json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-estado="'+json[i].estado+'"  data-modulo-tag="'+ plantilla +'" data-cumple="'+json[i].cumple_mes+'"  data-envio_email="'+json[i].c_envio_email+'" data-contacto-id="' +json[i].rut+'" data-nombre="' +json[i].nombre+'" data-solicitud=\"'+json_aux+'"\  value="'+json[i].rut+'" title="No es posible agendar este contacto, porque este cliente ya estuvo de cumpleaños" disabled/>';
						   
							json[i].nombre = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json[i].nombre+"</strong></br> Rut: <a href='javascript:void(0);' data-rut='"+json[i].rut+"' onclick='modal_editar_cumpleanio(this)' data-json=\'"+ json_aux +"'\">"+json[i].rut + "</a></div>";
							
							json[i].email = ((json[i].email == 'Sin Email') ? fa_icon_envelope+"Sin Email" : "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].rut + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope + json[i].email + contador + "</a>" ) +' <br> '+( (json[i].telefono.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].telefono);
					
						}else{
						
									
						if ((json[i].notificacion_c == "0" && json[i].estado =="")){
						
							json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-estado="'+json[i].estado+'"  data-modulo-tag="'+ plantilla +'" data-cumple="'+json[i].cumple_mes+'"  data-envio_email="'+json[i].c_envio_email+'" data-contacto-id="' +json[i].rut+'" data-nombre="' +json[i].nombre+'" data-solicitud=\"'+json_aux+'"\  value="'+json[i].rut+'"  />&nbsp;&nbsp;&nbsp;<span id=icono><span aria-hidden=true></span></span>';
					
						}else if(((json[i].notificacion_c >= "1" && json[i].estado ==""))){	
							json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'" data-email="'+json[i].email+'" data-estado="'+json[i].estado+'"  data-nombre="' +json[i].nombre+'"  data-cumple="'+json[i].cumple_mes+'" data-envio_email="'+json[i].c_envio_email+'" value="'+json[i].rut+'"/>&nbsp;&nbsp;&nbsp;<span id="icono">'+((json[i].notificacion_c >= "1" && json[i].estado ==""  ? '<span class="glyphicon glyphicon-calendar" aria-hidden="true" title="Cumpleaños Agendado" style="color: #58ACFA;">':'<span aria-hidden="true"></span>'));
					
										
							//(((json[i].notificacion_c == "0" && json[i].estado =="m")))
						
						
						}else if (((json[i].notificacion_c >= "0" && json[i].estado =="m"))){
							json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-estado="'+json[i].estado+'" data-envio_email="'+json[i].c_envio_email+'" data-cumple="'+json[i].cumple_mes+'"  data-nombre="' +json[i].nombre+'" value="'+json[i].rut+'"/ title="No es posible agendar este contacto, porque ya envio un email de saludo de cumpleaños" disabled>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-ok"  style="color: #007da7;" aria-hidden="true" title="Enviado" ></span>';
							
							//(((json[i].notificacion_c == "1" && json[i].estado =="m")))
						}else if (((json[i].notificacion_c >= "1" && json[i].estado =="m"))){
								json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-estado="'+json[i].estado+'" data-envio_email="'+json[i].c_envio_email+'" data-cumple="'+json[i].cumple_mes+'"  data-nombre="' +json[i].nombre+'" value="'+json[i].rut+'"/>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-calendar" aria-hidden="true" title="Cumpleaños Agendado" style="color: #58ACFA;" disabled></span>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-ok"  style="color: #007da7;" aria-hidden="true" title="Enviado"></span>';
							
							  //json[i].notificacion_c == "1" && json[i].estado =="a"
						}else if (((json[i].notificacion_c >= "1" && json[i].estado =="a"))){
								json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-nombre="' +json[i].nombre+'" data-cumple="'+json[i].cumple_mes+'"  data-envio_email="'+json[i].c_envio_email+'" data-estado="'+json[i].estado+'"  value="'+json[i].rut+'"/ disabled>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-calendar" aria-hidden="true"  style="color:#58ACFA;" title="Cumpleaños Agendado"></span>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-ok"  style="color: #007da7;" aria-hidden="true" title="Enviado"></span>';
							
							 //json[i].notificacion_c == "1" && json[i].estado =="a,m"
						}else if (((json[i].notificacion_c >= "1" && json[i].estado =="m,a" || json[i].estado =="a,m"))){
								json[i].buttons ='&nbsp;<input type="checkbox" id="cumple" name="checkbox_cumple[]"  data-notificacion_c="'+json[i].notificacion_c+'"  data-email="'+json[i].email+'" data-nombre="' +json[i].nombre+'" data-cumple="'+json[i].cumple_mes+'"  data-envio_email="'+json[i].c_envio_email+'" data-estado="'+json[i].estado+'"  value="'+json[i].rut+'"/ disabled>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-calendar" aria-hidden="true" title="Cumpleaños Agendado" style="color: #58ACFA;"></span>&nbsp;&nbsp;&nbsp;<span style="color: #007da7;" class="glyphicon glyphicon-ok" aria-hidden="true" title="Enviado"></span>&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-ok"  style="color: #007da7;" aria-hidden="true" title="Enviado"></span>';
						
							  
						 }
					
					 
								 
					if (((json[i].notificacion_c >= "1" && json[i].estado =="m,a" || json[i].estado =="a,m" || json[i].estado =="a" || json[i].estado =="m" ))){
						json[i].email = ((json[i].email == 'Sin Email') ? fa_icon_envelope+"Sin Email" : "<span data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].rut + "' data-json=\'"+ json_aux +"'\"' disabled></span>" + fa_icon_envelope + json[i].email + contador + "</a>" ) +' <br> '+( (json[i].telefono.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].telefono);
											
						}else{
						
							json[i].email = ((json[i].email == 'Sin Email') ? fa_icon_envelope+"Sin Email" : "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].rut + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope + json[i].email + contador + "</a>" ) +' <br> '+( (json[i].telefono.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].telefono);
							
						}
						
						
						
						
						json[i].description = ( (json[i].description.length == 0) ? "Sin Descripción" : json[i].description);
						json[i].nombre = '<div style="padding:10px;color:#696969;" ><strong style="color:#696969;">'+json[i].nombre+"</strong></br> Rut: <a href='javascript:void(0);' data-rut='"+json[i].rut+"' onclick='modal_editar_cumpleanio(this)' data-json=\'"+ json_aux +"'\">"+json[i].rut + "</a></div>";
					
					 }
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
				  { data: "cumple_mes", sSortDataType: "dom-text" },
				  { data: "email" },
				  { data: "description" },
				
				  
				],
				"bFilter": false,
				"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
				"bLengthChange": false,
				"bDestroy": true,
				"processing" : true,
				"iDisplayLength" : 10,
				 "order": [[ 2, "DESC"]],
				"oTableTools": {
				  "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
				},
				"oLanguage": {
				  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
				  "sUrl": "vendor/plugins/datatables/Spanish.json"
				}
			  });
				
			  $('#table_cumpleanios tbody').on('click', 'tr', function (e) {
					var nRow = $(this);
					FuncionesGenerales.setRegistroSeleccionado(nRow);
			  });
			  
				CumpleanosTabla.cumpleanos.dataTableExt.afnSortData['dom-text'] = function  ( oSettings, iColumn )
				{
					return this.api().column( iColumn, {order:'index'} ).nodes().map( function ( td, i ) {
						return FuncionesGenerales.cambiarFormatoFecha($(td).text(),'dd-MM')
					});
				}
				
				/* setInterval( function () {
						CumpleanosTabla.cumpleanos.api().ajax.reload();
					 }, 20000
					);*/
				
			}
			else
			{
				CumpleanosTabla.cumpleanos.api().ajax.reload();
				CumpleanosTabla.cumpleanos.dataTableExt.afnSortData['dom-text'] = function  ( oSettings, iColumn )
				{
					return this.api().column( iColumn, {order:'index'} ).nodes().map( function ( td, i ) {
						return FuncionesGenerales.cambiarFormatoFecha($(td).text(),'dd-MM')
					});
				}
			}
        }
	};
}();

$(document).ready(function()
{ 
	//esta funcion permite Seleccionar todos los Checkbox 
	$('#select_all').click(function () {
		var checked_status = this.checked;
		$('input[type=checkbox]').not(":disabled").prop("checked", checked_status);
	});
	
	 //esta funcion permite realizar la asignacion a los usuarios
$("#asignar_cumpleanios").click(function(e) {
		
    $.ajaxSetup ({cache: false});
	$('#file-select').val('');
	
	 for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
	
	$('body').on('hidden.bs.modal', '.modal', function () {
		$(this).removeData('bs.modal');
	});
	

  	 var fecha_cumpleanio = new Array();
	 var arreglo     = new Array(); 
	 var notificacion = new Array();
	 var send_email = new Array();  
	 var nombres_cumpleano = new Array();
	 var email_customer = new Array();
	 var name = '';  var name_aux = ''; 
	 var name_email= ''
	 var name_email_aux="";
	 var correos = new Array();
	 var checkboxValues = "";
     var valor_estado = "";
	 var description_html = "";
	 
	 $('input[name="checkbox_cumple[]"]:checked').each(function() {
						
				arreglo.push($(this).val()); 
				email_cliente = $(this).data('email');
				email_customer.push(email_cliente);
				valor_estado = $(this).data('notificacion_c'); 
				notificacion.push(valor_estado);
				email       =  $(this).data('envio_email');
				send_email.push(email);
				contacto 	=  $(this).data('contacto-id');
				nombre      =  $(this).data('nombre');
				nombres_cumpleano.push(nombre);
				fechas_d_cumple = $(this).data('cumple');
				fecha_d_cumple_aux = fechas_d_cumple.substring(31, 36);
				fecha_cumpleanio.push(fecha_d_cumple_aux);
				
			
			  });				   
		    
			 
			 checkboxValues = arreglo;
		     notificacion_estado = notificacion;
			 cont = 0; contador = 0; cont_alert = 0;
			 
		   $.each(nombres_cumpleano, function(index, item ) {
			var fullDate = new Date()
			var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
 			var currentDate = fullDate.getDate() + "-" + twoDigitMonth;
					
						 
			 description_html= "<ul style=margin-left:65px>";
				$.each(nombres_cumpleano,function(index, value){
					description_html += "<li>"+value.trim()+"</li>";
				   });
			description_html += "</ul>";
			 
			  name_email+=item+ ",";
			  name_email_aux = name_email.substring(0, name_email.length-1);
		
								
	      });
		  
				$('#lista_clientes').html(description_html);  
			 
		     if (checkboxValues != '') {
				  cont = cont+1;
	 			var fullDate = new Date()
				var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
 			    var currentDate = fullDate.getDate() + "-" + twoDigitMonth;	
               
				 $.each(notificacion, function( key, value ) {				
			     if(value >=1 || value == 'm' || value == 'a' && cont == 1){
			      alert('No puede Asignarse a'+ "  " +  name_email_aux + " " + 'debido a que ya se encuentra Agendado');
			     $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
				
				 
				return false;
			
			  }else{
				  cont = cont+1;
				
				  $.each(email_customer, function(index, elemento) { 
				   if(elemento =="Sin Email" && cont == 1){
				     alert('No puede Agendarse a'+ "  " +  name_email_aux + " " + 'debido a que no posee correo Electrónico');
				      $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
				return false; 
				   
				   }else{
					contador = contador+1;
                   if(contador == 1) {	

             		  result = true;
				      
				      if(result == true) {

                      $('input[name=contactos_id').attr("value",checkboxValues);
					 // $("#contactos_id").value(checkboxValues);  
					 $('input[name=tipo_estado]').attr("value",notificacion_estado);
					 		
     			      $(".mail_modal_comentario_value").empty();
				     $('#cumpleanios_plantillas').modal('toggle');
						  $(".plantilla-mail").html('');
						 
			
						  $(".plantilla-mail").load("templates/1_cumpleanos_plantilla_cumpleaños_formal.html", function()
						  {
							$.each($('span#user_detalle_contact_name'), function()
							{
								var data = $( '#comentarios_ejecutivo' ).val();
								// Set the editor data.
								$('#comentarios_ejecutivo').attr("value",nombre);
								
								
								$(this).html(nombre);
							});
							
							$.each($('span#user_detalle_fullname'), function()
							{
								$(this).html($('input[name=input_user_detalle_nombre]').val()+" "+$('input[name=input_user_detalle_apellido]').val());
							});
							
							$.each($('span#user_detalle_email'), function()
							{
								$(this).html($('input[name=input_user_detalle_email]').val());
							});
							
							$.each($('span#user_detalle_telefono'), function()
							{
								$(this).html($('input[name=input_user_detalle_telefono]').val());
							});
							
							$.each($('span#user_detalle_user_cargo'), function()
							{
								$(this).html($('input[name=input_user_detalle_cargo]').val());
							});
							
							$.each($('span#user_detalle_sucursal'), function()
							{
								$(this).html($('input[name=input_user_detalle_sucursal]').val());
							});
						
							$('input[name=mail_modal_nombre_input_value]').val( nombre );
							
							  $.each($('span#user_detalle_comentarios'), function()
								{
									$(this).html($('span#user_detalle_comentarios').show());
							   });

						  
						  
						      
						  
						  })					 
				         
						   $('#plantillas_cumple').on('change',function(){
							var valor = $(this).val();
							$('input[name="valor_plantilla"]').val(valor);
												
						    if(valor =='1_cumpleanos_plantilla_cumpleaños_formal.html'){
							  
								  $('#plantilla_cumple_formal').show();
								  $('#user_detalle_comentarios').show();
								  $('#plantilla_cumple_generica').hide();
								  $('#plantilla_cumple_cuba').hide();
								  $('#plantilla_cumple_caribe').hide();
								  $('#plantilla_cumple_asia').hide();
								  $(".mail_modal_comentario_value").empty();
						
						   }else{
							   if(valor == '2_cumpleanos_plantilla_cumpleaños_informal_genérica.html'){
									 $('#plantilla_cumple_formal').hide();
									 $('#plantilla_cumple_cuba').hide();
									 $('#plantilla_cumple_caribe').hide();
									 $('#plantilla_cumple_asia').hide();
									 $('#plantilla_cumple_generica').show();
									 $('#user_detalle_comentarios').show();
							        $(".mail_modal_comentario_value").empty();
										  
							}else{
								  if(valor == '3_cumpleanos_plantilla_cumpleaños_informal_cuba.html'){
										 $('#plantilla_cumple_formal').hide();
										 $('#plantilla_cumple_generica').hide();
										 $('#plantilla_cumple_caribe').hide();
										 $('#plantilla_cumple_asia').hide();
										 $('#plantilla_cumple_cuba').show();
										 $('#user_detalle_comentarios').show();
							            $(".mail_modal_comentario_value").empty();
							   }else{
								   
									 if(valor == '4_cumpleanos_plantilla_cumpleaños_informal_caribe.html'){
								   
										  $('#plantilla_cumple_formal').hide();
										  $('#plantilla_cumple_generica').hide(); 
										  $('#plantilla_cumple_cuba').hide();
										  $('#plantilla_cumple_asia').hide();
										  $('#plantilla_cumple_caribe').show();
										  $('#user_detalle_comentarios').show();
								          $(".mail_modal_comentario_value").empty();
								  }else{
									   if(valor == '5_cumpleanos_plantilla_cumpleaños_informal_asia.html'){
										   $('#plantilla_cumple_formal').hide();
										   $('#plantilla_cumple_generica').hide();
										   $('#plantilla_cumple_cuba').hide();
										   $('#plantilla_cumple_caribe').hide();
										   $('#plantilla_cumple_asia').show();
										   $('#user_detalle_comentarios').show();
									      $(".mail_modal_comentario_value").empty();
									  
									 }	  
								   } 
								 } 
							   }
							 }
						});
				
				     }else{//result
						e.preventDefault();
						$('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
						$('input[name="select_all"]:checked').removeAttr('checked');
						return false;   
		             }
					 
					//});	 
				   }//cont
				 }
				});//email_customer 
			   }
			  //}
			 });//fecha_cumpleanio
			}else{
					  alert('Debes seleccionar al menos una opción.');
					  return false;   
		     }
 		  
    });//fin
 
	jQuery(document).ready(function() {
     
	
	   $("#modal_enviar_plantillas").click(function() {
 		   
						    var $btn = $(this);
							$btn.button('loading');
																					
							if (CKEDITOR.instances['comentarios_ejecutivo'].getData() != ''){
								 
								  var contenido    = CKEDITOR.instances['comentarios_ejecutivo'].getData();
								  var comentarios  = contenido.replace("<p>","");
							       var comments = comentarios.replace("</p>","");
								  
								 
							 }else if(CKEDITOR.instances['comentarios_ejecutivo_2'].getData()!= ''){
							  
							      var contenido    = CKEDITOR.instances['comentarios_ejecutivo_2'].getData();
								  var comentarios  = contenido.replace("<p>","");
							      var comments = comentarios.replace("</p>","");
								
							 }else if(CKEDITOR.instances['comentarios_ejecutivo_3'].getData()!= ''){
							  
							      var contenido    = CKEDITOR.instances['comentarios_ejecutivo_3'].getData();
								  var comentarios  = contenido.replace("<p>","");
							      var comments = comentarios.replace("</p>","");
								  
							 }else if(CKEDITOR.instances['comentarios_ejecutivo_4'].getData() != ''){
							  
							      var contenido    = CKEDITOR.instances['comentarios_ejecutivo_4'].getData();
								  var comentarios  = contenido.replace("<p>","");
							      var comments = comentarios.replace("</p>","");
							 
							 }else if(CKEDITOR.instances['comentarios_ejecutivo_5'].getData() != ''){
							  
							      var contenido    = CKEDITOR.instances['comentarios_ejecutivo_5'].getData();
								  var comentarios  = contenido.replace("<p>","");
							      var comments = comentarios.replace("</p>","");
							 }
							 
							  var opcion_selec = ($('input[name="valor_plantilla"]').val() == '' ? "1_cumpleanos_plantilla_cumpleaños_formal.html" :$('input[name="valor_plantilla"]').val()); 
							  var contactos = $('input#contactos_id').val();
                              						
							 var estado = 	$('input#tipo_estado').val();
							 
							 var data = { 
								contact_id:contactos,
								html:opcion_selec,
								saludos_ejecutivo:comments,
								estado: 0
															
								};
								
							  $.post(Configuraciones.getConfiguraciones().url_editar_cumple_auto, data).done(function(response)
								  {
									 var json = jQuery.parseJSON(response);
										if(response == 1){
										
										   setTimeout(function()
				                           {
												cont_alert = cont_alert +1;
												$btn.button('complete');
												$("#cumpleanios_plantillas").fadeOut(1500);
										        $btn.button('reset');                                      												 
												FuncionesGenerales.refrescarTabla();					
												 if(cont_alert == 1){
																							
														$("#dialog_notificacion").dialog({
															autoOpen: false,
															draggable: false,
															resizable: false,
															show: {
																effect: 'fade',
																duration: 5000
															},
															hide: {
																effect: 'fade',
																duration: 5000
															},
															open: function(){
																$(this).dialog('close');
															},
															close: function(){
																$(this).dialog('destroy');
															}
														}); 
														
														$("#dialog_notificacion").dialog("open");

													$('#cumpleanios_plantillas').modal('toggle');
													$( '#comentarios_ejecutivo').val('');
													$( '#comentarios_ejecutivo_2').val('');
													$( '#comentarios_ejecutivo_3').val('');
													$( '#comentarios_ejecutivo_4').val('');
													$( '#comentarios_ejecutivo_5').val('');
													
													CKEDITOR.instances['comentarios_ejecutivo'].setData('');
													CKEDITOR.instances['comentarios_ejecutivo_2'].setData('');
													CKEDITOR.instances['comentarios_ejecutivo_3'].setData('');
													CKEDITOR.instances['comentarios_ejecutivo_4'].setData('');
													CKEDITOR.instances['comentarios_ejecutivo_5'].setData('');
													
											
											       }
													
								              },2000);
											  
                                                 
												 var table = $('#table_cumpleanios').DataTable();
													
												   setInterval( function () {
													table.ajax.reload();
												   }, 20000 );
																					
											
                                         	
								           }else{
												$btn.button('problem');
												setTimeout(function(){
												$btn.button('reset');
											},3000);   
								
									      }		
										  
              });//modal_enviar_plantillas
		});
	
	//Esta funcion permite permite deseleccionar y/o quitar la asignacion a los Usuarios
	$("#quitar_cumpleanios").click(function(e) {
	
	   var checkboxValues = ""; var notificacion = ""; var name = '';
	   var arreglo = new Array(); var notificacion = new Array();
	   var send_email = new Array();  var nombres_cumpleano = new Array();
	   var valor_estado = '';
	    $('input[name="checkbox_cumple[]"]:checked').each(function() {
				arreglo.push($(this).val());
		
				valor_estado = $(this).data('notificacion_c');  
				notificacion.push(valor_estado);
				email       =  $(this).data('envio_email');
				send_email.push(email);		
				nombre      =  $(this).data('nombre');
				nombres_cumpleano.push(nombre);
			   });
				checkboxValues = arreglo;
				notificacion_estado = notificacion;
		
		  if (checkboxValues != '') {
		     $('input[name=contactos_id').attr("value",checkboxValues);
			  
	 	   $.each(notificacion, function( key, value ) {				
			     if(value > 1){
			      alert('No pudo ser Modificado debido a que ya fue Agendado');
			     $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
		       return false;
			   }else  if (value == 0){
			   
				  alert('No pudo ser Modificado intente Nuevamente...');
			     $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');  
			   		$('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
		             return false;
			  }else if ( value == 0 && value == 'm' || value == 'a'){
			        alert('No pudo ser Modificado debido a que el Email ha sido Enviado');
			     $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');  
			   		$('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
		             return false;
					
			}else{
		    
						  
			   $( "#dialog_quitar").dialog();
			  $("#aceptar_quitar").click(function() {
			     
				 var result = true;
			     var contactos = $('input#contactos_id').val();
								
	            if(result == true) {
				  var data = { 
					contact_id:contactos,
					estado: 1
				  };
		          
				    $( "#dialog_quitar").dialog("close");
				   $.post(Configuraciones.getConfiguraciones().url_editar_cumple_auto, data).done(function(response)
					 {
					   var json = jQuery.parseJSON(response);
					 
					   if(response == 1){
						
						//alert('El cumpleañero ha sido Modificado');
						$("#dialog_exito_quitar").dialog({
								autoOpen: false,
								draggable: false,
								resizable: false,
								show: {
									effect: 'fade',
									duration: 5000
									},
								hide: {
									effect: 'fade',
									duration: 5000
									},
									open: function(){
										$(this).dialog('close');
										},
										close: function(){
									$(this).dialog('destroy');
									}
								});
														
																								
						$("#dialog_exito_quitar").dialog("open");
											
						

						setTimeout(function() {
					 
						   $("#icono").html("<span aria-hidden='true' title='POR ASIGNAR'></span>"); 
							$('input[name="select_all"]:checked').removeAttr('checked');
							FuncionesGenerales.refrescarTabla();			   
						},1000);

					}else{
						alert('No pudo ser Modificado');
						$('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
					}
										
				});		
     
	        }else{
			   e.preventDefault();
			   $('input[name="checkbox_cumple[]"]:checked').removeAttr('checked');
			   $('input[name="select_all"]:checked').removeAttr('checked');
			  return false;   
		    }
	      });
		 }
	   });
	  }else{
		  alert('Debes seleccionar al menos una opción.');

        return false;  
	  }
		
	});
	
	$("#cerrar_dialog").click(function(e) {
	  $( "#dialog_quitar" ).dialog("close");
	 	
	});
	

  });//fin	
		
});	 

