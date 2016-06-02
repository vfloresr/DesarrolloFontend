jQuery(document).ready(function() 
{
	//alert('prueba');
	$('select[name=mail_modal_plantilla_value]').on('change', function() 
	{
		$(".plantilla-mail").html('');
		$(".plantilla-mail").load(this.value, function()
		{
			$('span#user_detalle_fullname').html($('input[name=input_user_detalle_nombre]').val()+" "+$('input[name=input_user_detalle_apellido]').val());
			$('span#user_detalle_email').html($('input[name=input_user_detalle_email]').val());
			$('span#user_detalle_telefono').html($('input[name=input_user_detalle_telefono]').val());
			$('span#user_detalle_sucursal').html($('input[name=input_user_detalle_sucursal]').val());
			$('span#user_detalle_contact_name').html($('input[name=mail_modal_contact_name]').val());
			
					//alert($('span#user_detalle_fullname').html($('input[name=input_user_detalle_nombre]').val()));
			
			$.each($('span#user_detalle_contact_name'), function()
			{
				$(this).html($('input[name=mail_modal_contact_name]').val());
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
			
			$.each($('span#user_detalle_sucursal'), function()
			{
				$(this).html($('input[name=input_user_detalle_sucursal]').val());
			});
			
			$('.mcnButton').attr('href','http://survey.cochadigital.com/setToken.php?encuesta=146131&token='+$('input[name=mail_modal_contacto_id]').val());
		});
	});
	
	$('#modal_enviar_mail_success').on('click', function()
	{
		var $btn = $(this);
		$btn.button('loading');
		
		if(FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().solicitudes_web_tag)
		{
			var url = Configuraciones.getConfiguraciones().url_set_enviar_email_web;
		}
		else
		{
			var url = Configuraciones.getConfiguraciones().url_set_enviar_email;
		}
		
		//var contact = $('input[name=mail_modal_contacto_id_input_value]').val();
		//window.open(contact);
		
		var formData = new FormData();
		formData.append("texto_hide", $('.plantilla-mail').html());
		formData.append("asunto", $('input[name=mail_modal_asunto_input_value]').val());
		formData.append("contacto_id", $('input[name=mail_modal_contacto_id_input_value]').val());
		formData.append("email_cc", $('input[name=input_user_detalle_email]').val());
		// formData.append("procedencia_id", $('input[name=mail_modal_procedencia_id]').val());
		formData.append("procedencia_id", FuncionesGenerales.getProcedenciaId() );
		formData.append("procedencia", $('input[name=mail_modal_procedencia]').val());
		
		if(FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().solicitudes_web_tag)
			formData.append("estado", $('input[name=mail_modal_estado]').val());
		
		var files = document.getElementById('file-select').files;
		
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
				// $btn.button('complete');
				 setTimeout(function()
				 {
					// $btn.button('reset');
					var modulo = FuncionesGenerales.getModuloActual();
					
					if( modulo == Configuraciones.getConfiguraciones().cumpleanos_tag)
						FuncionesGenerales.refrescarTabla();
					else
						FuncionesGenerales.refrescarRegistroTabla();
					
					if(typeof $('input[name^=negocio_cross_selling]').val()!=='undefined')
					{
						var obj = JSON.parse($('input[name^=negocio_cross_selling]').val());						
						var id_trx = (typeof obj.id_oportunidad !== 'undefined') ? obj.id_oportunidad : obj.id_tarea;
		
						var data = {
							'negocio_id' : obj.id_negocio,
							'id_trx' : id_trx
						};

						$.get(Configuraciones.getConfiguraciones().url_get_detalle_pasajeros, data, function(data)
						{
							var json_aux = $('input[name^=negocio_cross_selling]').val();
							var comprador_id = $('#ver_id_comprador').text();
							$("#ver_detalle_negocio_pasajeros > tbody").html("");
							
							$.each(JSON.parse(data), function(i,e)
							{
								var v_email = (e.c_envio_email > 0) ? "<span class='email_pasajero'>"+e.email+"</span> ("+ e.c_envio_email+") " : "<span class='email_pasajero'>"+e.email+"</span>";
								
								if(comprador_id == e.rut)
									$('#ver_detalle_negocio_pasajeros tbody').append("<tr style='background-color: #C2D2E8 !important'><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-contacto-id='"+e.rut+"' data-modulo-tag="+ FuncionesGenerales.getModuloActual() +" href='javascript:void(0);' onclick='modal_email(this)'>" + v_email + "</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
								else	
									$('#ver_detalle_negocio_pasajeros tbody').append("<tr><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' data-contacto-id='"+e.rut+"' href='javascript:void(0);' onclick='modal_email(this)'>"+v_email+"</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
							});
						});

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
							$btn.button('reset');
							$('#email_modal').modal('toggle');
						});

					}
					else
					{
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
							$btn.button('reset');
							$('#email_modal').modal('toggle');		
						});
					}
					
				},2000);
		  } 
		  else 
		  {
				$btn.button('problem');
				setTimeout(function()
				{
					$btn.button('reset');
				},3000); 
		  }
		};
		
	});
	
	$('#modal_enviar_mail_cancel').on('click', function()
	{
		$('#email_modal').modal('toggle');
	});
	
	$('#email_modal').on('hide.bs.modal', function (e) 
	{
		if( typeof $("#ver").data('bs.modal')  != 'undefined' && $("#ver").data('bs.modal').isShown)
			$('#ver').show();
		
		if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').show();
			
		NuevasSolicitudes.init();
	});
});