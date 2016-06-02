jQuery(document).ready(function($){ 

	$('#seguimiento_1_oportunidades_web_success').on('click', function(){

		var descripcion = $('input[name=solicitudes_web_comentarios]').val().trim()+" *|*|*|* "+ FuncionesGenerales.getFechaHoraActual() +": "+$('#comentarios_seguimiento_1_oportunidades_web').val().trim();
		
		var $btn = $(this);
		$btn.button('loading');
		var data = { 
			  oportunidad_id: $('input[name=solicitudes_web_oportunidad_id]').val(), 
			  numero_negocio_c: '',
			  description: descripcion.trim(),
			  amount: '0',
			  motivo_c: '',
			  sale_stage: Configuraciones.getConfiguraciones().tag_sale_stage_seguimiento_1,//cotizacion
		};
		
		$.post(Configuraciones.getConfiguraciones().url_set_editar_oportunidad_web, data).done(function(){
			if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			{
				var data = { 
					oportunidad_id:$('input[name=solicitudes_web_oportunidad_id]').val()
				};
			
				$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
					var obj = jQuery.parseJSON( response );
					
					var description = obj.description.split("*|*|*|*");
					var description_html = "<ul>";
					
					$.each(description,function( index, value ){
						description_html += "<li>"+value.trim()+"</li>";
					});
					
					description_html += "</ul>";
					
					$('#btn_estado').html('<i class="fa fa-list-alt"></i> '+obj.estado);
					$('#btn_estado').addClass('btn-warning active');
					$('#btn_estado_drop_down').addClass('btn-warning');
					$('#btn_cerrado_perdido').removeClass('btn-danger');
					$('#btn_cerrado_ganado').removeClass('btn-success');
					
					$('input[name=solicitudes_web_comentarios]').val(obj.description.trim());
					$('#descripcion_solicitud').html(description_html);
					 acortar_cadena();	
					
					$('#solicitud_estado').html(obj.estado);
					FuncionesGenerales.actualizarTabla();
					$('#seguimiento_1').modal('toggle');
					$('.solicitudes_web_opciones_cerrados_perdidos').show();
					$('.solicitudes_web_opciones_cerrados_ganados').show();
					$('.solicitudes_web_opciones_seguimiento_2').show();
					$('.solicitudes_web_opciones_seguimiento_1').hide();
					$('.solicitudes_web_opciones_primera_llamada').show();
					$btn.button('reset');	
				});
			}
			else
			{
				//FuncionesGenerales.actualizarTabla();
				FuncionesGenerales.refrescarTabla();
				$('#seguimiento_1').modal('toggle');
				$btn.button('reset');	
			}
		});
	});

	$('#seguimiento_1_oportunidades_web_cancel').on('click', function(){
		$('#seguimiento_1').modal('toggle');
	});
	
	$('#seguimiento_1').on('hide.bs.modal', function (e){
		$('#comentarios_seguimiento_1_oportunidades_web').val('');
		
		if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').show();
    });

});

function modal_seguimiento_uno_oportunidades_web(el)
{
	if( typeof $("#solicitudes_web_oportunidades").data('bs.modal')  != 'undefined' && $("#solicitudes_web_oportunidades").data('bs.modal').isShown)
			$('#solicitudes_web_oportunidades').hide();

	$('#seguimiento_1').modal('toggle');

}