jQuery(document).ready(function($){
	$('#cierre_perdido_oportunidades_web_success').on('click', function(){
		
		if($('input[name=motivo_cierre_perdido_oportunidades_web]').val() == 0)
		{
			$('.required-field-modal-motivos-solicitudes-web').show();
			return false
		}
		
		var descripcion = $('input[name=comentarios_anterior_cierre_perdido]').val()+" *|*|*|* "+ FuncionesGenerales.getFechaHoraActual() +": "+$('#comentarios_cierre_perdido_oportunidades_web').val();

		
		var $btn = $(this);
		$btn.button('loading');
		var data = { 
			  oportunidad_id: $('input[name=solicitudes_web_oportunidad_id]').val(),
			  numero_negocio_c: '',
			  description: descripcion,
			  amount: '0',
			  motivo_c: $("input[name|='motivo_cierre_perdido_oportunidades_web']").val(),
			  sale_stage: "CerradoPerdido",
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
					$('#btn_cerrado_perdido').addClass('btn-danger');
					$('#btn_cerrado_ganado').removeClass('btn-success');
					$('#btn_estado').removeClass('btn-warning active');
					$('#btn_estado_drop_down').removeClass('btn-warning');

					$('.solicitudes_web_estados').attr('data-description', obj.description);
					$('#solicitud_descripcion').html(description_html);
					$('#solicitud_estado').html(obj.estado);
					FuncionesGenerales.refrescarTabla();
					$('#cierre_perdido_oportunidades_web').modal('toggle');
					$('.solicitudes_web_opciones_cerrados_perdidos').hide();
					$('.solicitudes_web_opciones_cerrados_ganados').show();
					$('.solicitudes_web_opciones_seguimiento_2').show();
					$('.solicitudes_web_opciones_seguimiento_1').show();
					$('.solicitudes_web_opciones_primera_llamada').show();
					$btn.button('reset');	
				});
			}
			else
			{
				FuncionesGenerales.refrescarTabla();
				$('#cierre_perdido_oportunidades_web').modal('toggle');
				$btn.button('reset');	
			}
		});
	});
	
	$('#cierre_perdido_oportunidades_web_cancel').on('click', function(){
		$('#cierre_perdido_oportunidades_web').modal('toggle');
	});
	
	$('#cierre_perdido_oportunidades_web').on('hide.bs.modal', function (e){
		$('input[name=motivo_cierre_perdido_oportunidades_web]').val('');
		$('#comentarios_cierre_perdido_oportunidades_web').val('');
		$('.required-field-modal-motivos-solicitudes-web').hide();
		
		if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').show();
    });
});