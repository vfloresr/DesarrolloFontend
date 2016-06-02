jQuery(document).ready(function($){
	
	 $("#numero_cierre_ganador_oportunidades_web_form").validate({
		  /* @validation states + elements 
		  ------------------------------------------- */
		  errorClass: "state-error",
		  validClass: "state-success",
		  errorElement: "em",
		  /* @validation rules 
		  ------------------------------------------ */
		  rules: {
			numero_cierre_ganador_oportunidades_web: {
			  required: true
			}
		  },
		  /* @validation error messages 
		  ---------------------------------------------- */
		  messages: {
			numero_cierre_ganador_oportunidades_web: {
			  required: 'Campo Obligatorio'
			}
		  },
		  /* @validation highlighting + error placement  
		  ---------------------------------------------------- */
		  highlight: function(element, errorClass, validClass) {
			$(element).closest('.field').addClass(errorClass).removeClass(validClass);
		  },
		  unhighlight: function(element, errorClass, validClass) {
			$(element).closest('.field').removeClass(errorClass).addClass(validClass);
		  },
		  errorPlacement: function(error, element) {
			if (element.is(":radio") || element.is(":checkbox")) {
			  element.closest('.option-group').after(error);
			} else {
			  error.insertAfter(element.parent());
			}
		  }
    });
	
	$('#cierre_ganador_oportunidades_web_success').on('click', function(){
		if($("#numero_cierre_ganador_oportunidades_web_form").valid())
		{
			var $btn = $(this);
			$btn.button('loading');
			
			var descripcion = $('input[name=comentarios_anterior_cierre_ganador]').val()+" *|*|*|* "+ FuncionesGenerales.getFechaHoraActual()+":"+$('#comentarios_cierre_ganador_oportunidades_web').val();
			
			var data = { 
				  oportunidad_id: $('input[name=solicitudes_web_oportunidad_id]').val(), 
				  numero_negocio_c: $('input[name=numero_cierre_ganador_oportunidades_web]').val(),
				  description: descripcion,
				  amount:          $('input[name=monto_cierre_ganador_oportunidades_web]').val(),
				  motivo_c: "",
				  sale_stage: "CerradoGanado",
				  tipo_hotel_c :     $('input[name=tipo_hotel_cierre_ganador_oportunidades_web]').val(),
				  agregar_destino_c: $('input[name=agregar_destino_cierre_ganador_oportunidades_web]').val(),

			};
						
			$.post(Configuraciones.getConfiguraciones().url_set_editar_oportunidad_web, data).done(function(){
				if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
				{
					var data = { 
						oportunidad_id: $('input[name=solicitudes_web_oportunidad_id]').val()
					};
				
					$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
						var obj = jQuery.parseJSON( response );
						var description = obj.description.split("*|*|*|*");
						var description_html = "<ul>";
						
						$.each(description,function( index, value ){
							description_html += "<li>"+value+"</li>";
						});
						
						description_html += "</ul>";
						
						$('#btn_estado').html('<i class="fa fa-list-alt"></i> Estado');
						$('#btn_cerrado_ganado').addClass('btn-success');
						$('#btn_cerrado_perdido').removeClass('btn-danger');
						$('#btn_estado').removeClass('btn-warning active');
						$('#btn_estado_drop_down').removeClass('btn-warning');
                       
						
						$('.solicitudes_web_estados').attr('data-description', obj.description);
						$('#solicitud_descripcion').html(description_html);
						
						$('#solicitud_estado').html(obj.estado);
						FuncionesGenerales.refrescarTabla();
						$('#cierre_ganador_oportunidades_web').modal('toggle');
						$('.solicitudes_web_opciones_cerrados_perdidos').show();
						$('.solicitudes_web_opciones_cerrados_ganados').hide();
						$('.solicitudes_web_opciones_seguimiento_2').show();
						$('.solicitudes_web_opciones_seguimiento_1').show();
						$('.solicitudes_web_opciones_primera_llamada').show();
						$btn.button('reset');	
					});
				}
				else
				{
					FuncionesGenerales.refrescarTabla();
					$('#cierre_ganador_oportunidades_web').modal('toggle');
					$btn.button('reset');	
				}
			});
		}
		else{
			return false
		}
		
	});
  
	$('#cierre_ganador_oportunidades_web_cancel').on('click', function(){
		$('#cierre_ganador_oportunidades_web').modal('toggle');
	});
	
	$('#cierre_ganador_oportunidades_web').on('hide.bs.modal', function (e){
		$('#comentarios_cierre_ganador_oportunidades_web').val('');
		$('input[name=monto_cierre_ganador_oportunidades_web]').val('');
		$('input[name=numero_cierre_ganador_oportunidades_web]').val('')
		$('input[name=agregar_destino_cierre_ganador_oportunidades_web]').val('')
		$('input[name=tipo_hotel_cierre_ganador_oportunidades_web]').val('')
		$('#comentarios_cierre_ganador_oportunidades_web').val('');
		
		if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').show();
    });
});