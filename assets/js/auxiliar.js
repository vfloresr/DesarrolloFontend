function acortar_cadena() {
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "Leer Mas";
    var lesstext = "Cerrar";
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}

function modal_solicitudes_web_oportunidades(el)
{
	
	var $object = $(el);
	
	var data = { 
		oportunidad_id: $object.data('oportunidad-id')
	};
	
	// var nombre_oportunidad = $object.data('nombre_oportunidad');
	var nombre_oportunidad = $object.html();
	
	if(FuncionesGenerales.getTablaModuloActual() == 'cerrados_table_solicitudes_web')
		$('#estados_solicitudes_web').hide();
	else	
		$('#estados_solicitudes_web').show();
	
	$('.solicitudes_web_opciones_cerrados_perdidos').show();
	$('.solicitudes_web_opciones_cerrados_ganados').show();
	$('.solicitudes_web_opciones_seguimiento_2').show();
	$('.solicitudes_web_opciones_seguimiento_1').show();
	$('.solicitudes_web_opciones_primera_llamada').show();
	
	$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
		var obj = jQuery.parseJSON( response );
		// Datos contacto
		$('.contacto_nombre').html(obj.nombre);  
		$('.contacto_apellido').html(obj.apellido);  
		$('.contacto_telefono').html(obj.telefono);
		$('.contacto_rut').html(obj.rut);
		$('#email_contacto').attr("value",obj.email);
		var json_aux = JSON.stringify(obj);
		
		//$('.contacto_email').html("<a href='#' data-modulo-tag='"+ Configuraciones.getConfiguraciones().general_tag +"' data-contacto-id='' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + obj.email +"</a>");
		
		$('.contacto_email').html(obj.email);
		
		$('.producto_solicitud').html(nombre_oportunidad);
		
		$('input[name=solicitudes_web_cliente_id]').val(obj.id_cli);
		// Datos solicitud
		var fecha = (obj.fecha != "") ? FuncionesGenerales.cambiarFormatoFecha(obj.fecha,'yyyy-MM-dd') : "";
		//obj.edad_ninos=obj.edad_ninos.replace(/[^\w\s]/gi,'');
		 //obj.edad_ninos = obj.edad_ninos.substr(0,5);
			    		 
		$('.solicitud_fecha').html( FuncionesGenerales.cambiarFormatoFecha(obj.fecha,'yyyy-MM-dd'));
		$('.solicitud_canal').html(obj.canal);
		$('.solicitud_adultos').html(obj.adulto);
				
		if(obj.edad_ninos == ''  || obj.edad_ninos == ', , ,' || obj.edad_ninos == ' , '  || obj.edad_ninos == ' , ,')
		$('.solicitud_edad_ninos').html("N/A");
	     else
			
		 $('.solicitud_edad_ninos').html(obj.edad_ninos);
          
		$('.solicitud_fecha_asignacion').html(FuncionesGenerales.cambiarFormatoFecha(obj.fecha_asignacion,'yyyy-MM-dd'));
		 
		if (obj.fecha_flexible == "1")
			$('.solicitud_fecha_flexible').html("SI");
		else if(obj.fecha_flexible == "0") 
			$('.solicitud_fecha_flexible').html("NO");
		else
			$('.solicitud_fecha_flexible').html("SIN DATOS");
		
		$('.solicitud_habitaciones').html(obj.habitaciones);
		$('.solicitud_ninos').html(obj.ninos);
		$('.solicitud_fecha_formulacion').html(FuncionesGenerales.cambiarFormatoFecha(obj.fecha_formulario,'yyyy-MM-dd'));
		$('.solicitud_agente_viaje').html(obj.agente_viaje);
		$('.solicitud_estado').html(obj.estado);
		
		if(obj.estado == Configuraciones.getConfiguraciones().tag_sale_stage_primera_llamada)
			$('.solicitudes_web_opciones_primera_llamada').hide();
		else if(obj.estado == Configuraciones.getConfiguraciones().tag_sale_stage_seguimiento_1)
			$('.solicitudes_web_opciones_seguimiento_1').hide();
		else if(obj.estado == Configuraciones.getConfiguraciones().tag_sale_stage_seguimiento_2)
			$('.solicitudes_web_opciones_seguimiento_2').hide();
		
		if(obj.estado == Configuraciones.getConfiguraciones().tag_cerrado_ganado)
		{
			$('#btn_estado').html('<i class="fa fa-list-alt"></i> Estado');
			$('#btn_cerrado_ganado').addClass('btn-success');
			$('#btn_cerrado_perdido').removeClass('btn-danger');
			$('#btn_estado').removeClass('btn-warning active');
			$('#btn_estado_drop_down').removeClass('btn-warning');
		}
		else if(obj.estado == Configuraciones.getConfiguraciones().tag_cerrado_perdido)
		{
			$('#btn_estado').html('<i class="fa fa-list-alt"></i> Estado');
			$('#btn_cerrado_ganado').removeClass('btn-success');
			$('#btn_cerrado_perdido').addClass('btn-danger');
			$('#btn_estado').removeClass('btn-warning active');
			$('#btn_estado_drop_down').removeClass('btn-warning');
		}
		else
		{
			$('#btn_cerrado_perdido').removeClass('btn-danger');
			$('#btn_cerrado_ganado').removeClass('btn-success');
			$('#btn_estado').addClass('btn-warning').removeClass('active');
			$('#btn_estado_drop_down').addClass('btn-warning').removeClass('active');
			$('#btn_estado').html('<i class="fa fa-list-alt"></i> '+obj.estado);
		}
		
			
		if(obj.description !== null)	
			var description = obj.description.split("*|*|*|*");
		else
			var description = "";
		
		/*var  description_html= "<ul style=margin-left:65px>";
		$.each(description,function(index, value){
			description_html += "<li>"+value.trim()+"</li>";
		});
		description_html += "</ul>";*/
		var  description_html= "";
		
		$.each(description,function(index, value){
			description_html += value.trim();
		});
						
		$('#descripcion_solicitud').html(description_html);	 
        
		acortar_cadena();
	    		
		$('.solicitudes_web_estados').attr('data-oportunidad-id', $object.data('oportunidad-id'));
		$('input[name=solicitudes_web_oportunidad_id]').val($object.data('oportunidad-id'));
		$('input[name=solicitudes_web_comentarios]').val($object.data('description').trim());
		
		var datos_oportunidad_detalle_web = {
			oportunidad_id : $object.data('oportunidad-id'),
			contacto_id : obj.id_cli,
			contacto_nombre : obj.nombre,
			contacto_rut : obj.rut
		};
		
		//Es el detalle del Producto
		$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_producto_web, datos_oportunidad_detalle_web).done(function(response)
		{
			var json = jQuery.parseJSON(response);
			
	
			var productos_html = "" ;
			var pdf_cocha = "";
			var url_cocha = "";
			
			for(i = 0; i < json.length; i++)
			{
				 
				productos_html += "<tr><td>&nbsp;&nbsp;&nbsp;<img id='imgdetalle' src='assets/images/image01.png'/>"+ json[i].name +"<br>";
				//productos_html += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Operador: " + ((json[i].operador == null || json[i].operador == 0 || json[i].operador == NaN)? "N/A" : + json[i].operador) + "<br>";
				productos_html += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>  Operador: " + ((json[i].operador == null) || (json[i].operador == 0) || (json[i].operador == NaN) || (json[i].operador == "No") ? "N/A" :json[i].operador) + "<br>";
				 
				pdf_cocha = (json[i].pdf).replace("http://","");
				
				if(pdf_cocha.trim() != '')
				//if(json[i].pdf.trim() != '')
					
				{
					//var pdf ="<a style='margin-left: 20px;text-decoration:none;' href= 'http://"+json[i].pdf+"' target='_blank' data-modulo-tag='solicitudes_web' ><i class='fa fa-eye'></i> Ver</a>";
					var pdf = "<a style='margin-left: 20px;text-decoration:none;' href= 'http://"+pdf_cocha+"' target='_blank' data-modulo-tag='solicitudes_web' ><i class='fa fa-eye'></i> Ver</a>";
					//alert(pdf);			
					//var pdf_link = json[i].pdf.trim();
					var pdf_link = pdf_cocha.trim();
				}
				else  
				{
					var pdf = "&nbsp;&nbsp;&nbsp;Sin Pdf";
					var pdf_link = "sin_pdf";
				} 
				
				productos_html += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Producto:</b>"+ pdf;
				
				url_cocha = (json[i].url).replace("http://","");
				if(url_cocha.trim() != '')
				//if(json[i].url.trim() != '')
					var url = "<a style='margin-left:20px;text-decoration:none;'  href='http://"+url_cocha+"' target='_blank' data-modulo-tag='solicitudes_web' >&nbsp;&nbsp;&nbsp;<i class='fa fa-eye'></i> Ver</a>";
				else
					var url = "";
				
				
				productos_html += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Link al Programa:</b>"+ url;	
				
				//alert(json[i].id_producto);
				//var enviar_cotizacion = "<div class=row><div class=col-md-8 style=margin-top:-20px;margin-left:450px><div class=col-xs-8 col-sm-1 col-md-1><a style='margin-left: 20px;margin-top:-10px;' data-modulo-tag='solicitudes_web' data-producto-id='"+json[i].id_producto.trim()+"' data-pdf='"+pdf_cocha+"' data-oportunidad-id='" + datos_oportunidad_detalle_web.oportunidad_id.trim() + "' data-contacto-id='" + datos_oportunidad_detalle_web.contacto_id.trim() + "' data-contacto-nombre='"+ datos_oportunidad_detalle_web.contacto_nombre.trim() +"' data- onclick='modal_email_solicitudes_web(this)' class='btn btn-success btn-md' style='width:15%;'></i>Enviar Cotizaci\u00F3n\n</a></div></div></div>";
				var enviar_cotizacion = "<div class=row><div class=col-md-8 style=margin-top:-20px;margin-left:450px><div class=col-xs-8 col-sm-1 col-md-1><a style='margin-left: 20px;margin-top:-10px;' data-modulo-tag='solicitudes_web' data-producto-id='"+((json[i].id_producto == null) ||(json[i].id_producto == "") ?"N/A" : json[i].id_producto.trim())+"' data-pdf='"+pdf_cocha+"' data-oportunidad-id='" + datos_oportunidad_detalle_web.oportunidad_id.trim() + "' data-contacto-id='" + datos_oportunidad_detalle_web.contacto_id.trim() + "' data-contacto-nombre='"+ datos_oportunidad_detalle_web.contacto_nombre.trim() +"' data- onclick='modal_email_solicitudes_web(this)' class='btn btn-success btn-md' style='width:15%;'></i>Enviar Cotizaci\u00F3n\n</a></div></div></div>";
				productos_html +=enviar_cotizacion+"</td></tr>";	
			} 
			
			$("#productos_solicitudes_web").html(productos_html);
			$('#solicitudes_web_oportunidades').modal('toggle');
		});
	});
}

function modal_ganado(el)
{
	
	$('.required-field-modal-product').hide();
	
	if(FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().crosselling_tag)
	{
		$('.title_ganado_modal').html('Cierre Cross Selling<span id="ganado_title_number"></span>');
	}
	
	if(FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().recompra_tag)
	{
		$('.title_ganado_modal').html('Cierre Recompra<span id="ganado_title_number"></span>');
	}
	
	if(FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().fugados_tag)
	{
		$('.title_ganado_modal').html('Cierre Fugado<span id="ganado_title_number"></span>');
	}

	if(FuncionesGenerales.mostrarVuelosNegocioGanado())
	{
		$('.mostrar-vuelos').show();
	}
	else
	{
		$('.mostrar-vuelos').hide();
	}

	if(typeof $('input[name^=negocio]').val()!=="undefined")
	{
		var obj = $(el).data('json');
		var productos = obj.productos_c;
		var id_negocio_oportunidad = obj.id_negocio;
		var numeros_negocios = id_negocio_oportunidad.split('-'); 
		
		
		for(var i=0; i< numeros_negocios.length; i++) {
			 //alert(numeros_negocios[i]);
			if(i == 0){ 
			    $('#numero_negocio_c1').val(numeros_negocios[i].trim());
			 
			  }else{ 
				if(i == 1){
					
					$('#numero_negocio_c2').val(numeros_negocios[i]);
				}else{
					
				 if(i == 2){
					 
					 $('#numero_negocio_c3').val(numeros_negocios[i]);
				     }
					
				  }
			   } 
	  	   }
		
				
   if (productos != null) {
		var substr = productos.split('/');
		
        for(var i=0; i< substr.length-1; i++) {
		   //alert(substr[i]);
		   $("input.group1").removeAttr('disabled');
		  
		   if (substr[i].trim() == 'hotel'){
			 $("#cross-selling-productos-1").prop("checked", "checked"); 
		
		    }
  
		     if (substr[i].trim() == 'asistencia'){
			   $("#cross-selling-productos-2").prop("checked", "checked"); 
		      }
				
			   if (substr[i].trim() == 'auto'){
					 $("#cross-selling-productos-3").prop("checked", "checked"); 
				  }
		
				 if (substr[i].trim() == 'circuitos'){
					 $("#cross-selling-productos-4").prop("checked", "checked"); 
				  }
		
		 		   if (substr[i].trim() == 'cruceros'){
						$("#cross-selling-productos-5").prop("checked", "checked"); 
				  }
		
				    if (substr[i].trim() == 'traslados'){
					 $("#cross-selling-productos-6").prop("checked", "checked"); 
					
					  }
		
					  if (substr[i].trim() == 'vuelos'){
						 $("#cross-selling-productos-7").prop("checked", "checked"); 
					  }
					   if (substr[i].trim() == 'otros'){
						 $("#cross-selling-productos-8").prop("checked", "checked"); 
					
					  }
		       }
		  }
		
		$('input[name^=negocio]').val(JSON.stringify($(el).data('json')));
		$('#ganado_title_number').html(" ("+obj.id_negocio+")");
		$('#oportunidad_hotel').html(" ("+obj.oportunidad_new+")");
		
		$('#ganado').modal('toggle');
	  
	  }
	else
	{
		var obj = $(el).data('json');
		var productos = obj.productos_c;
		var id_negocio_oportunidad = obj.id_negocio;
		
		
		var numeros_negocios = id_negocio_oportunidad.split('-'); 
		
		  for(var i=0; i< numeros_negocios.length; i++) {
			
			 if(i == 0){ 
			    $('#numero_negocio_c1').val(numeros_negocios[i].trim());
			   }else{
				 if(i == 1){
					$('#numero_negocio_c2').val(numeros_negocios[i].trim());
				}else{
				 if(i == 2){
					 $('#numero_negocio_c3').val(numeros_negocios[i].trim());
				     }
					
				  }
			    } 
	  	    }
			
				
		if (productos != null) {
		  var substr = productos.split('/');
		
		  for(var i=0; i< substr.length-1; i++) {
		  		  
		    if (substr[i].trim() == 'hotel'){
			     $("#cross-selling-productos-1").prop("checked", "checked"); 
			  }

		     if (substr[i].trim() == 'asistencia'){
			     $("#cross-selling-productos-2").prop("checked", "checked"); 
		      }

			  if (substr[i].trim() == 'auto'){
				 $("#cross-selling-productos-3").prop("checked", "checked"); 
		 	    }
			    if (substr[i].trim() == 'circuitos'){
					 $("#cross-selling-productos-4").prop("checked", "checked"); 
				  }
		
				 if (substr[i].trim() == 'cruceros'){
					 $("#cross-selling-productos-5").prop("checked", "checked"); 
					
				  }
				   if (substr[i].trim() == 'traslados'){
					 $("#cross-selling-productos-6").prop("checked", "checked"); 
								  
				    }
				
					  if (substr[i].trim() == 'vuelos'){
						 $("#cross-selling-productos-7").prop("checked", "checked"); 

					  }
		               if (substr[i].trim() == 'otros'){
						$("#cross-selling-productos-8").prop("checked", "checked"); 
						  
		              }
		      }
	    }
		$('#ganado_title_number').html(" ("+obj.id_negocio+")");
		$('#oportunidad_hotel').html(" ("+obj.oportunidad_new+")");
		$('#ganado').modal('toggle').append($('<input/>').attr({'name':'negocio','type':'hidden'}).val(JSON.stringify($(el).data('json'))));
		
	}
}

function modal_perdido(el)
{

	if(typeof $('input[name^=negocio]').val()!=="undefined")
	{
		var obj = $(el).data('json');
		$('input[name^=negocio]').val(JSON.stringify($(el).data('json')));
		
		FuncionesGenerales.setTituloModalCierre(obj);
		
		$('#perdido_title_number').html();
		
		$('#perdido').modal('toggle');
	}
	else
	{
		var obj = $(el).data('json');
		
		FuncionesGenerales.setTituloModalCierre(obj);
		
		$('#perdido').modal('toggle').append($('<input/>').attr({'name':'negocio','type':'hidden'}).val(JSON.stringify($(el).data('json'))));
	}
	
	if(FuncionesGenerales.mostrarMotivoCierre())
	{
		$(".visible-motivos-perdidos-modal").show();
	}
	else
	{
		$(".visible-motivos-perdidos-modal").hide();
	}
}

function modal_cierre_retorno(el)
{
	if(typeof $('input[name^=negocio]').val()!=="undefined")
	{
		var obj = $(el).data('json');
		$('input[name^=negocio]').val(JSON.stringify($(el).data('json')));
		$('#cierre_retorno_title_number').html(" ("+obj.id_negocio+")");
		$('#cierre_retorno').modal('toggle');
	}
	else
	{
		var obj = $(el).data('json');
		$('#cierre_retorno_title_number').html(" ("+obj.id_negocio+")");
		$('#cierre_retorno').modal('toggle').append($('<input/>').attr({'name':'negocio','type':'hidden'}).val(JSON.stringify($(el).data('json'))));
	}
}

function modal_cierre_proximos_viajes(el)
{
	if(typeof $('input[name=negocio]').val()!=="undefined")
	{
		var obj = $(el).data('json');
		$('input[name^=negocio]').val(JSON.stringify($(el).data('json')));
		$('#cierre_proximos_viajes_title_number').html(" ("+obj.id_negocio+")");
		$('#cierre_proximos_viajes').modal('toggle');
	}
	else
	{
		var obj = $(el).data('json');
		$('#cierre_proximos_viajes_title_number').html(" ("+obj.id_negocio+")");
		$('#cierre_proximos_viajes').append($('<input/>').attr({'name':'negocio','type':'hidden'}).val(JSON.stringify($(el).data('json'))));
		$('#cierre_proximos_viajes').modal('toggle');
	}
}

function modal_cierre_ganador_oportunidades_web(el)
{
	if(typeof $('input[name^=negocio_cierre_ganador_oportunidade]').val()!=='undefined')
	{
		$('input[name^=negocio_cierre_ganador_oportunidade]').val($(el).data('oportunidad-id'));
		 $('input[name=comentarios_anterior_cierre_ganador]').val($(el).data('description'));
		 
	}
	else
	{
		$('#cierre_ganador_oportunidades_web').append(	$('<input/>')
								.attr({'name':'negocio_cierre_ganador_oportunidade','type':'hidden'})
								.val($(el).data('oportunidad-id')));
		$('input[name=comentarios_anterior_cierre_ganador]').val($(el).data('description'));
	}
	
	if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').hide();

	$('#cierre_ganador_oportunidades_web').modal('toggle');

}

function modal_cierre_perdido_oportunidades_web(el)
{
	if(typeof $('input[name^=negocio_cierre_perdido_oportunidade]').val()!=='undefined')
	{
		$('input[name^=negocio_cierre_perdido_oportunidade]').val($(el).data('oportunidad-id'));
		$('input[name=comentarios_anterior_cierre_perdido]').val($(el).data('description'));
	}
	else
	{
		$('#cierre_perdido_oportunidades_web').append(	$('<input/>')
								.attr({'name':'negocio_cierre_perdido_oportunidade','type':'hidden'})
								.val($(el).data('oportunidad-id')));
		$('input[name=comentarios_anterior_cierre_perdido]').val($(el).data('description'));
	}
	
	if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').hide();

	$('#cierre_perdido_oportunidades_web').modal('toggle');
}

function modal_email(el)
{
	if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
		$('#solicitudes_web_oportunidades').hide();

	$.ajaxSetup ({cache: false});
	var obj = $(el).data('json');
	
	$('#file-select').val('');
	
	for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
	
	$('input[name=mail_modal_comentarios_value]').val('');
	$('input[name=mail_modal_destino_input_value]').val('');
	$('input[name=mail_modal_asunto_input_value]').val('');
	$('input[name=mail_modal_nombre_input_value]').val('');
	$('input[name=mail_modal_comentario_input_value]').val('');
	
	//var contacto_id;
	if(typeof obj.id_cli !== 'undefined')
		contacto_id = obj.id_cli;
	else if(typeof obj.id_contacto !== 'undefined')
		contacto_id = obj.id_contacto;
	else if(typeof obj.rut !== 'undefined')	
		contacto_id = obj.rut;
	
	contacto_id = obj.id_cli;
	//alert(contacto_id);
		
	//$('input[name=mail_modal_contacto_id_input_value]').val(contacto_id);	
	if($(el).data('contacto-id') !== ''){
		$('input[name=mail_modal_contacto_id_input_value]').val($(el).data('contacto-id'));
	}else{
		$('input[name=mail_modal_contacto_id_input_value]').val(contacto_id);
	}
	$('input[name=mail_modal_destino_input_value]').val(obj.destino);
	$('input[name=mail_modal_negocio_id]').val(obj.id_negocio);

	setTimeout(function()
	{ 
		var data = { 
			oportunidad_id: FuncionesGenerales.getRegistroSeleccionado().eq(0).children().eq(1).find('a').data('oportunidad-id')
		};
		
		$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
			var obj = jQuery.parseJSON( response );
			$('input[name=mail_modal_estado]').val(obj.estado);
		});
	},500);
	// Establecemos la procedencia_id (oportunidad_id o tarea_id o rut) y la procedencia(opportunities,tasks,contacts)
	FuncionesGenerales.establecerProcedenciaMail(obj);	

	var modulo = FuncionesGenerales.getModuloActual();	
	
	if(modulo == Configuraciones.getConfiguraciones().crosselling_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Estos productos pueden ser de inter\u00E9s para tu viaje');
	}
	else if(modulo == Configuraciones.getConfiguraciones().recompra_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Tenemos las mejores ofertas de viajes para ti');
	}
	else if(modulo == Configuraciones.getConfiguraciones().fugados_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Tenemos las mejores ofertas de viajes para ti');
	}
	else if(modulo == Configuraciones.getConfiguraciones().proximos_viajes_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Ya no queda nada para tu viaje, \xA1inf\u00F3rmate!');
	}
	else if(modulo == Configuraciones.getConfiguraciones().retorno_tag)
	{	
		$('input[name=mail_modal_asunto_input_value]').val('Tu opini\u00f3n es importante, cu\u00e9ntame c\u00f3mo estuvo tu viaje');
	}
	else if(modulo == Configuraciones.getConfiguraciones().cumpleanos_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Te deseo un feliz cumplea\u00f1os');
	}
	
	/** En los formularios de email del tipo "General" y "Cumpleaños" no se requieren el campo de destino. Si el modal se abre desde estos módulos ocultamos esos campos*/
	if( $(el).data('modulo-tag') == Configuraciones.getConfiguraciones().general_tag || $(el).data('modulo-tag') == Configuraciones.getConfiguraciones().cumpleanos_tag)
	{
		$('#show_destino').hide();
	}
	else
	{
		$('#show_destino').show();
	}
	
	$.post( Configuraciones.getUrlConfiguraciones(),
	{ 
		v_class: 'plantillas', 
		modulo_tag: $(el).data('modulo-tag'), 
	}).done(function( data ) 
	{
		//alert(data);
		 var response = JSON.parse(data);
		 var plantilla_defecto = FuncionesGenerales.getPlantillaPorDefector();
		 var template = '';
		 var template_aux = '';
		 
		 if(response.estado) 
		 {
			$("select[name|='mail_modal_plantilla_value']").html('');
			var plantillas = response.plantillas;
		   for (var i in plantillas) 
			{
			   
			   var template = [plantillas[i].file_name_show];
			   
				 template_aux = [plantillas[i].file_name_show.substring(13,100)];
			
				var result = [plantillas[i].file_name_show.substring(0,1)]
			
			    $('select[name|=mail_modal_plantilla_value] > option[value="1"]').attr('selected', 'selected');
				if (result == 1) {
					
					if(i == plantilla_defecto) 
				 	
				    
				
				  $("select[name|='mail_modal_plantilla_value']").prepend('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").prepend('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
				}else{
					
					if(result == 2){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").prepend('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").prepend('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
						
						
				 }else{
									
					if(result == 3){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
						
						
				  }else{
					  	if(result == 4){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
					
					  
					  
				  }else{
					 
                   if(result == 5){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                 $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
					  
					  
				  }else{
					  
					 if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template+'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                 $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template)+ '</option>');				
							  
					  
				  }
				
				  }
			  
			    }
		  		  
		      }
		    }	
	                                                          
	    }                                                                                                                                  
			
			/**El nombre puede venir en data-nombre (pasajeros de destalle negocio) o en el data-json*/
			if ($(el).attr('data-nombre'))
			{
				var nombre = $(el).data('nombre');
			}
			else
			{
				var nombre;
				if(modulo == Configuraciones.getConfiguraciones().cumpleanos_tag)
					 nombre = obj.nombre;
				else if(typeof obj.nombre_comprador !== 'undefined')
					 nombre = obj.nombre_comprador;
				else if(typeof obj.nombre_contacto !== 'undefined')
					 nombre = obj.nombre_contacto;
				else if(typeof obj.nombre !== 'undefined')
					nombre = obj.nombre+' '+obj.apellido;
				
					// var nombre = (typeof obj.nombre_comprador !== 'undefined')? obj.nombre_comprador : obj.nombre_contacto;
			}
			
			// var contacto_id = obj.rut_contacto;
			var contacto_id = (typeof obj.rut_contacto !== 'undefined')? obj.rut_contacto : obj.rut;
			
			//$('input[name=mail_modal_contacto_id]').val(contacto_id);
			$('input[name=mail_modal_contacto_id]').val($(el).data('contacto-id'));
			
			$(".plantilla-mail").html('');
			if(plantillas.length > 0)
			{
				$(".plantilla-mail").load( Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[plantilla_defecto].file_name, function()
				{
					$.each($('span#user_detalle_contact_name'), function()
					{
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
					
					//$('.mcnButton').attr('href','http://survey.cochadigital.com/setToken.php?encuesta=146131&token='+contacto_id);
			        $('.mcnButton').attr('href',Configuraciones.getConfiguraciones().url_config_encuesta+ contacto_id);
				})
			
			
			}
			else
			{
			//$('#modal_enviar_mail_success').attr("disabled", true);
		   
		    $('#modal_enviar_mail_success').on('click', function(){
						 
			 var $btn = $(this);
				$btn.button('loading');
			
				var pdf_url = "";
				if( typeof $("input[name=mail_modal_solicitud_web_incluye_pdf]")  != 'undefined')
				{
					if($("input[name=mail_modal_solicitud_web_incluye_pdf]").is(":checked"))
						var pdf_url = $("input[name=mail_modal_solicitud_web_incluye_pdf]").val();
				}
			
			   
			   if($("input[name=mail_modal_asunto_input_value]") == '')
				{
				  alert('Debe Indicar un Asunto....');
				  return false;
				}
			 
				
			  $.post(Configuraciones.getUrlConfiguraciones(), {'pdf': pdf_url, 'v_class': 'download_pdf'}).done(function(response){
				var url = Configuraciones.getConfiguraciones().url_set_enviar_email_web;
				var formData = new FormData();
				formData.append("texto_hide", FuncionesGenerales.getCKEditorPlantillaCotizacion().getData());
				formData.append("asunto", $('input[name=mail_modal_solicitud_web_asunto_value]').val());
				formData.append("contacto_id", contacto_id);
				formData.append("procedencia_id", $('input[name=mail_modal_solicitud_we_oportunidad_id]').val());
				formData.append("procedencia", Configuraciones.getConfiguraciones().tag_procedencia_cotizacion);
				formData.append("email_cc", $('input[name=input_user_detalle_email]').val());
				formData.append("from", $('input[name=input_user_detalle_email]').val());
				formData.append("nombre_user", $('input[name=input_user_detalle_nombre]').val());
				formData.append("apellido_user", $('input[name=input_user_detalle_apellido]').val());
				formData.append("id_user", $('input[name=input_id_user]').val());
				formData.append("id_session", $('input[name=id_session]').val());
				
				
				formData.append("pdf", response);
			
				var files = document.getElementById('file-select_solicitud_web').files;
				
				for (var i = 0; i < files.length; i++) 
				{
				  var file = files[i];
				  formData.append('name_file[]', file, file.name);
				}
				
				var xhr = new XMLHttpRequest();
				xhr.open('POST', url, true);
				xhr.send(formData);		
				xhr.onload = function () {
				  if ( xhr.status === 200 && xhr.response.trim() == "0" ) 
				  {
					$btn.button('complete');
					$('#email_enviado_correcto_mensaje').show();
					$( "div.modal-body" ).scrollTop(0);
					
					if(!Configuraciones.getConfiguraciones().from_backend)
					{
						setTimeout(function(){ 
							var data = { 
								oportunidad_id: FuncionesGenerales.getRegistroSeleccionado().eq(0).children().eq(1).find('a').data('oportunidad-id')
							};
							
							$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
								var obj = jQuery.parseJSON( response );

								$('#btn_cerrado_perdido').removeClass('btn-danger');
								$('#btn_cerrado_ganado').removeClass('btn-success');
								$('#btn_estado').addClass('btn-warning').removeClass('active');
								$('#btn_estado_drop_down').addClass('btn-warning').removeClass('active');
								$('#btn_estado').html('<i class="fa fa-list-alt"></i> '+obj.estado);
							});
						}, 2000);
						
							if ($.fn.dataTable.isDataTable('#abierto_table_solicitudes_web' )) { 
			  
							   var table = $('#abierto_table_solicitudes_web').DataTable( {
									ajax: "data.json"
								} );
								 
								setInterval( function () {
									table.ajax.reload();
								 }, 10000 
								);
							 }
						
						
						
						$('.bootstrap-switch').attr('id','btn_solicitud');
						
						setTimeout(function(){
							$btn.button('reset');
							FuncionesGenerales.actualizarTabla();
							$('#email_solicitud_web').modal('toggle');
							$('#email_enviado_correcto_mensaje').hide();
						},2000); 
					}else {
					
						$btn.button('complete');
						$('h2#mensaje').html('<i class="fa fa-envelope-o text-success"></i> El mail ha sido enviado correctamente. Muchas gracias.')
						$('#email_solicitud_web').modal('toggle');
						setTimeout(function(){
							window.top.close();
						},3000); 
					}
				
				 }else 
				  {
					$btn.button('problem');
					setTimeout(function(){
						$btn.button('reset');
					},2000); 
				  }
			   
			   
			   }
			});
			
		  
		  });
	
	}				
			
			
			
			$('#ver').hide();
			$('#email_modal').modal('toggle');
			
			var ramdon = Math.floor((Math.random() * 9999999999999999) + 1);
			
			$('.editor_comentario').html('<label class="label-form-mail">Comentarios</label><textarea id="comentarios_email_modal_'+ramdon+'" class="form-control" rows="6"></textarea>');

			CKEDITOR.replace('comentarios_email_modal_'+ramdon, {
			  height: 80,
			  on: {
				instanceReady: function(evt) {
				  $('.cke').addClass('admin-skin cke-hide-bottom');
				}
			  },
			});
			
			CKEDITOR.config.toolbar = [
			   ['Styles','Format','Font','FontSize'],
			   '/',
			   ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Find','Replace','-','Outdent','Indent','-','Print'],
			   '/',
			   ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			] ;
			
			setInterval(function(){
				var editorText = CKEDITOR.instances['comentarios_email_modal_'+ramdon].getData();
				$('input[name=mail_modal_comentario_input_value]').val(editorText);
				$('.mail_modal_destino_value').html($('input[name=mail_modal_destino_input_value]').val());
				$('.mail_modal_destino_value').html($('input[name=mail_modal_destino_input_value]').val());
				$('span#user_detalle_contact_name').html($('input[name=mail_modal_nombre_input_value]').val());
				$('.mail_modal_comentario_value').html(editorText);
			},500);
			
			
		 } 
	});
}






/*function modal_email(el)
{
	if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
		$('#solicitudes_web_oportunidades').hide();

	$.ajaxSetup ({cache: false});
	var obj = $(el).data('json');
	
	$('#file-select').val('');
	
	for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
	
	$('input[name=mail_modal_comentarios_value]').val('');
	$('input[name=mail_modal_destino_input_value]').val('');
	$('input[name=mail_modal_asunto_input_value]').val('');
	$('input[name=mail_modal_nombre_input_value]').val('');
	$('input[name=mail_modal_comentario_input_value]').val('');
	
	//var contacto_id;
	if(typeof obj.id_cli !== 'undefined')
		contacto_id = obj.id_cli;
	else if(typeof obj.id_contacto !== 'undefined')
		contacto_id = obj.id_contacto;
	else if(typeof obj.rut !== 'undefined')	
		contacto_id = obj.rut;
	
	
		
	//$('input[name=mail_modal_contacto_id_input_value]').val(contacto_id);	
	$('input[name=mail_modal_contacto_id_input_value]').val($(el).data('contacto-id'));
	$('input[name=mail_modal_destino_input_value]').val(obj.destino);
	$('input[name=mail_modal_negocio_id]').val(obj.id_negocio);

	setTimeout(function()
	{ 
		var data = { 
			oportunidad_id: FuncionesGenerales.getRegistroSeleccionado().eq(0).children().eq(1).find('a').data('oportunidad-id')
		};
		
		$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
			var obj = jQuery.parseJSON( response );
			$('input[name=mail_modal_estado]').val(obj.estado);
		});
	},500);
	// Establecemos la procedencia_id (oportunidad_id o tarea_id o rut) y la procedencia(opportunities,tasks,contacts)
	FuncionesGenerales.establecerProcedenciaMail(obj);	

	var modulo = FuncionesGenerales.getModuloActual();	
	
	if(modulo == Configuraciones.getConfiguraciones().crosselling_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Estos productos pueden ser de inter\u00E9s para tu viaje');
	}
	else if(modulo == Configuraciones.getConfiguraciones().recompra_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Tenemos las mejores ofertas de viajes para ti');
	}
	else if(modulo == Configuraciones.getConfiguraciones().fugados_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Tenemos las mejores ofertas de viajes para ti');
	}
	else if(modulo == Configuraciones.getConfiguraciones().proximos_viajes_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Ya no queda nada para tu viaje, \xA1inf\u00F3rmate!');
	}
	else if(modulo == Configuraciones.getConfiguraciones().retorno_tag)
	{	
		$('input[name=mail_modal_asunto_input_value]').val('Tu opini\u00f3n es importante, cu\u00E9ntame c\u00f3mo estuvo tu viaje');
	}
	else if(modulo == Configuraciones.getConfiguraciones().cumpleanos_tag)
	{
		$('input[name=mail_modal_asunto_input_value]').val('Te deseo un feliz cumpleaños');
	}
	
	
	
	if( $(el).data('modulo-tag') == Configuraciones.getConfiguraciones().general_tag || $(el).data('modulo-tag') == Configuraciones.getConfiguraciones().cumpleanos_tag)
	{
		$('#show_destino').hide();
	}
	else
	{
		$('#show_destino').show();
	}
	
	$.post( Configuraciones.getUrlConfiguraciones(),
	{ 
		v_class: 'plantillas', 
		modulo_tag: $(el).data('modulo-tag'), 
	}).done(function( data ) 
	{
		//alert(data);
		 var response = JSON.parse(data);
		 var plantilla_defecto = FuncionesGenerales.getPlantillaPorDefector();
		 var template = '';
		 var template_aux = '';
		 
		 if(response.estado) 
		 {
			$("select[name|='mail_modal_plantilla_value']").html('');
			var plantillas = response.plantillas;
		   for (var i in plantillas) 
			{
			   
			   var template = [plantillas[i].file_name_show];
			   
				 template_aux = [plantillas[i].file_name_show.substring(13,100)];
			
				var result = [plantillas[i].file_name_show.substring(0,1)]
			
			    $('select[name|=mail_modal_plantilla_value] > option[value="1"]').attr('selected', 'selected');
				if (result == 1) {
					
					if(i == plantilla_defecto) 
				 	
				    
				
				  $("select[name|='mail_modal_plantilla_value']").prepend('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").prepend('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
				}else{
					
					if(result == 2){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").prepend('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").prepend('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
						
						
				 }else{
									
					if(result == 3){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
						
						
				  }else{
					  	if(result == 4){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
					
					  
					  
				  }else{
					 
                   if(result == 5){
						
						if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template_aux +'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                 $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template_aux)+ '</option>');				
					  
					  
				  }else{
					  
					 if(i == plantilla_defecto) 
				 					    			
				  $("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+template+'</option>');
			       //$("select[name|='mail_modal_plantilla_value']").append('<option selected="selected" value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Cumpleanos Plantilla Cumpleaños Formal") ?  "  " : plantillas[i].file_name_show)+'</option>');
				
				 else
					
				//$("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+plantillas[i].file_name_show+ '</option>');
                 $("select[name|='mail_modal_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[i].file_name+'">'+((plantillas[i].file_name_show == "Crosselling Plantilla Rosselling Informal") ?  "Cross Selling Plantilla Rosselling Informal" : template)+ '</option>');				
							  
					  
				  }
				
				}
			  
			  
			  }
		  		  
		   }
		}	
						
			                                                                                                                                                                                                          
			}                                                                                                                                  
			
			
			if ($(el).attr('data-nombre'))
			{
				var nombre = $(el).data('nombre');
			}
			else
			{
				var nombre;
				if(modulo == Configuraciones.getConfiguraciones().cumpleanos_tag)
					 nombre = obj.nombre;
				else if(typeof obj.nombre_comprador !== 'undefined')
					 nombre = obj.nombre_comprador;
				else if(typeof obj.nombre_contacto !== 'undefined')
					 nombre = obj.nombre_contacto;
				else if(typeof obj.nombre !== 'undefined')
					nombre = obj.nombre+' '+obj.apellido;
				
					// var nombre = (typeof obj.nombre_comprador !== 'undefined')? obj.nombre_comprador : obj.nombre_contacto;
			}
			
			// var contacto_id = obj.rut_contacto;
			var contacto_id = (typeof obj.rut_contacto !== 'undefined')? obj.rut_contacto : obj.rut;
			
			$('input[name=mail_modal_contacto_id]').val(contacto_id);
			
			$(".plantilla-mail").html('');
			if(plantillas.length > 0)
			{
				$(".plantilla-mail").load( Configuraciones.getConfiguraciones().url_plantillas_mail+plantillas[plantilla_defecto].file_name, function()
				{
					$.each($('span#user_detalle_contact_name'), function()
					{
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
					
					//$('.mcnButton').attr('href','http://survey.cochadigital.com/setToken.php?encuesta=146131&token='+contacto_id);
			        $('.mcnButton').attr('href',Configuraciones.getConfiguraciones().url_config_encuesta+ contacto_id);
				})
			
			
			}
			else
			{
				$('#modal_enviar_mail_success').attr("disabled", true);
			}
			
			$('#ver').hide();
			$('#email_modal').modal('toggle');
			
			var ramdon = Math.floor((Math.random() * 9999999999999999) + 1);
			
			$('.editor_comentario').html('<label class="label-form-mail">Comentarios</label><textarea id="comentarios_email_modal_'+ramdon+'" class="form-control" rows="6"></textarea>');

			CKEDITOR.replace('comentarios_email_modal_'+ramdon, {
			  height: 80,
			  on: {
				instanceReady: function(evt) {
				  $('.cke').addClass('admin-skin cke-hide-bottom');
				}
			  },
			});
			
			CKEDITOR.config.toolbar = [
			   ['Styles','Format','Font','FontSize'],
			   '/',
			   ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Find','Replace','-','Outdent','Indent','-','Print'],
			   '/',
			   ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			] ;
			
			setInterval(function(){
				var editorText = CKEDITOR.instances['comentarios_email_modal_'+ramdon].getData();
				$('input[name=mail_modal_comentario_input_value]').val(editorText);
				$('.mail_modal_destino_value').html($('input[name=mail_modal_destino_input_value]').val());
				$('.mail_modal_destino_value').html($('input[name=mail_modal_destino_input_value]').val());
				$('span#user_detalle_contact_name').html($('input[name=mail_modal_nombre_input_value]').val());
				$('.mail_modal_comentario_value').html(editorText);
			},500);
			
			
		 } 
	});
}*/


function modal_email_solicitudes_web(el)
{ 
	var nombre_programa = '';
	var mostrar_selector_plantilla = false;// Sirve para mostrar el selector de plantilla en el formulario
	var mostrar_selector_medios_pagos = false;// Sirve para mostrar el selector de plantilla en el formulario
	
	$('#file-select_solicitud_web').val('');
	
	for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
	
	$('#file-select_solicitud_web').val('');
	
	$.ajaxSetup ({cache: false});
	
	if(mostrar_selector_plantilla)
		$('.selector_plantilla_show').show();
	else
		$('.selector_plantilla_show').hide();
	
	$('input[name=mail_modal_solicitud_web_contacto_id_value]').val($(el).data('contacto-id'));
	$("input[name|='mail_modal_solicitud_web_nombre_cliente_value']").val($(el).data('contacto-nombre'));
	$('input[name=mail_modal_solicitud_we_oportunidad_id]').val($(el).data('oportunidad-id'));
	var nombre = $(el).data('contacto-nombre');
		
	if(mostrar_selector_medios_pagos)
		$('.selector_medios_pagos_show').show();
	else
		$('.selector_medios_pagos_show').hide();
		
	$('input[name=mail_modal_solicitud_web_programa_id_default]').val($(el).data('producto-id'));	

	
	//if($(el).data('pdf') != "sin_pdf" || $(el).data('pdf') != " " ){
	
	if($(el).data('pdf') != "sin_pdf" ){	
		$('.incluye_pdf_cotizacion').html('<label class="label-form-mail"></label></br><input type="checkbox" name="mail_modal_solicitud_web_incluye_pdf" value="'+$(el).data('pdf')+'"> <a target="_blank" class="mail_modal_solicitud_web_url_pdf" href="http://'+$(el).data('pdf')+'">Adjuntar Producto</a>');
	}
	
	if($(el).data('pdf') == ""){	
		
		$('.incluye_pdf_cotizacion').html('<label class="label-form-mail"></label></br><input type="checkbox" disabled name="mail_modal_solicitud_web_incluye_pdf">&nbsp;Agregar Pdf Producto<br>(No Disponible)');
	
	}
	

	CKEDITOR.config.allowedContent = true; 
	
	CKEDITOR.config.toolbar = [
	   ['Styles','Format','Font','FontSize'],
	   '/',
	   ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Find','Replace','-','Outdent','Indent','-','Print'],
	   '/',
	   ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	] ;
	
	CKEDITOR.config.toolbar = [
	   //['Styles','Format','Font','FontSize'],
	   //'/',
	  // ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Find','Replace','-','-','-','-','Print'],
	    // '/',
	  //  ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	] ;
	
	var ramdon_1 = Math.floor((Math.random() * 9999999999999999) + 1);
	
	$('.plantilla-mail-solicitud-web-editor').html('<textarea id="plantilla-mail-solicitud-web-editor_'+ramdon_1+'" class="form-control"></textarea>');
	
	CKEDITOR.replace('plantilla-mail-solicitud-web-editor_'+ramdon_1, {
	  height: 1200,
	  on: {
		instanceReady: function(evt) {
		  $('.cke').addClass('admin-skin cke-hide-bottom');
		}
	  }
	});
	
	FuncionesGenerales.setCKEditorPlantillaCotizacion(CKEDITOR.instances['plantilla-mail-solicitud-web-editor_'+ramdon_1]);
	
	$.post(Configuraciones.getConfiguraciones().config_cotizador_configuraciones,{ 
		v_class: 'plantillas', 
		modulo_tag: $(el).data('modulo-tag'), 
	}).done(function( data ) {
		 var response = JSON.parse(data);
	
		 if(response.estado) 
		 {
			//INICIO - Cargo el select de plantillas
				$("select[name|='mail_modal_solicitud_web_plantilla_value']").html('');
				var plantillas = response.plantillas;
				for (var i in plantillas) {
				
					$("select[name|='mail_modal_solicitud_web_plantilla_value']").append('<option value="'+Configuraciones.getConfiguraciones().solicitudes_web_plantilla_solicitud_web+'">'+plantillas[i].file_name_show+ '</option>');
				    	
				}
				
				$(".plantilla-mail-solicitud-web").html('').load(Configuraciones.getConfiguraciones().solicitudes_web_plantilla_solicitud_web, function() {
				    $.each($('#contact_name'), function(){
						$(this).html(nombre);
					});
					
					$.each($('span#user_detalle_fullname'), function(){
						$(this).html($('input[name=input_user_detalle_nombre]').val()+" "+$('input[name=input_user_detalle_apellido]').val());
					});
					
					$.each($('span#user_detalle_email'), function(){
						$(this).html($('input[name=input_user_detalle_email]').val());
					});
					
					$.each($('span#user_detalle_telefono'), function(){
						$(this).html($('input[name=input_user_detalle_telefono]').val());
					});
					
					$.each($('span#user_detalle_user_cargo'), function(){
						$(this).html($('input[name=input_user_detalle_cargo]').val());
					});
					
					$.each($('span#user_detalle_sucursal'), function(){
						$(this).html($('input[name=input_user_detalle_sucursal]').val());
					});
					
					
					$.get("http://cms.cocha.com/mobile-api/programas", {id: $(el).data('producto-id')}).done(function(response)
					{
						if(response.length > 0)
						{
							nombre_programa = 'Cotizacion '+ response[0].title +' '+ response[0].days+' Dias / '+ (response[0].days-1) +' Noches';
							$('input[name=mail_modal_solicitud_web_asunto_value]').val(nombre_programa);
							if(FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('programas') != null)
								FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('programas').setHtml(nombre_programa);
							//$('#title').html('<h3><ins><strong>Programa</strong></ins></h3>' + response[0].title + '<br/>'+ response[0].subtitle+ '<br/>' + response[0].days + 'Días / ' + (response[0].days-1) +' Noches </br></br>');
							$('#programas').html(response[0].title + '<br/>'+ response[0].subtitle+ '<br/>' + response[0].days + 'D\u00ECas  / ' + (response[0].days-1) +' Noches </br></br>');
						}
					});
					setTimeout(function(){
						FuncionesGenerales.getCKEditorPlantillaCotizacion().setData($(".plantilla-mail-solicitud-web").html());
					},1000);
				});
			//FIN - Cargo el select de plantillas
			
			var ramdon_2 = Math.floor((Math.random() * 9999999999999999) + 1);
			
			$('.datos_practicos_cotizacion').html('<label class="label-form-mail">Datos Pr&aacute;cticos</label><textarea id="datos_practicos_email_modal_'+ramdon_2+'" class="form-control" rows="6"></textarea>');

			CKEDITOR.replace('datos_practicos_email_modal_'+ramdon_2, {
			  height: 80,
			  on: {
				instanceReady: function(evt) {
				  $('.cke').addClass('admin-skin cke-hide-bottom');
				}
			  },
			});
			
				
			var ramdon_6 = Math.floor((Math.random() * 9999999999999999) + 1);
			
			//$('.vuelos_cotizacion').html('<label class="label-form-mail"></label><textarea id="vuelos_cotizacion_email_modal_'+ramdon_6+'" class="form-control" rows="6"></textarea>');
            $('.vuelos_cotizacion').html('<label class="form-control" id="vuelos_cotizacion_email_modal_'+ramdon_6+'"></label>');
			 
			CKEDITOR.replace('vuelos_cotizacion_email_modal_'+ ramdon_6, {
			  height: 80,
			  on: {
				instanceReady: function(evt) {
				  $('.cke').addClass('admin-skin cke-hide-bottom');
				}
			  },
			});
 
			setInterval(function(){
				var editorText = CKEDITOR.instances['datos_practicos_email_modal_'+ramdon_2].getData();
				var editorText_vuelos = CKEDITOR.instances['vuelos_cotizacion_email_modal_'+ramdon_6].getData();
				// $('input[name=mail_modal_solicitud_web_datos_practicos]').val(editorText);

				if(typeof FuncionesGenerales.getCKEditorPlantillaCotizacion()  != 'undefined')
				{
					if(FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('comentarios') !== null)
						FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('comentarios').setHtml("<h3><ins><strong>Comentarios</strong></ins></h3>"+ editorText );
					if(FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('vuelos') !==null)
						FuncionesGenerales.getCKEditorPlantillaCotizacion().document.getById('vuelos').setHtml("<h3><ins><strong>Vuelos</strong></ins></h3>"+ editorText_vuelos );
				}
			},1000);
			
			$('#email_solicitud_web').modal('toggle');
			$('#solicitudes_web_oportunidades').hide();
		 } 
	});
}


function modal_editar_cliente(el)
{
	$('input[name=cliente_editar_email]').val( ($(el).data('email') != "Sin Email" ) ? $(el).data('email') : "");
	$('input[name=cliente_editar_fecha_nacimiento]').val($(el).data('fecha-nacimiento'));
	$('input[name=cliente_editar_cliente_id]').val($(el).data('cliente-id'));
	$('#cliente_editar_nombre_title').html("( " + $(el).data('nombre') + " )");
	$('#cliente_editar_modal').modal('toggle');
}

function modal_ver(el)
{
	$(el).addClass('modal-ver');
    $(el).attr('data-toggle',"modal");
    $(el).attr('data-target',"#ver");
    $('#ver').modal('toggle');
}