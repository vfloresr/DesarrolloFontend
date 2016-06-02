jQuery(document).ready(function($){

	$('#modal_success').on('click', function()
	{
		var $btn = $(this);
		if($('div.checkbox-custom > input[type^=checkbox]:checked').length == 0)
		{
			$('.required-field-modal-product').show();
			return false
		}
		
		$btn.button('loading');
	
		var obj = JSON.parse($('input[name^=negocio]').val());
		
		$('div.checkbox-custom > input[type^=checkbox]:checked').each(function()
		{
			if(typeof productos == 'undefined')
			{
				productos = $(this).val()+";";
			}
			else
			{
				productos += $(this).val()+";";
			}
			
		}); 
		
		if( FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().retorno_tag )
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_tarea;
			var data = {
				tarea_id: obj.id_tarea, 
				status: "Completed",
				motivo_cierre_c:$('#comentarios_perdido').val(),
			};
		}
		else
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_oportunidad;
			  
			var data = { 
				oportunidad_id: obj.id_oportunidad, 
				numero_negocio_c: $('#numero_negocio_c1').val() + "-" +$('#numero_negocio_c2').val() + "-" + $('#numero_negocio_c3').val(),
				sales_stage: "CerradoGanado",
				description:$('#comentarios_ganado').val(),
				amount:$('#monto_ganado').val(),
				productos_c:productos,
				motivo_cierre_c:'null' 
			}
		}
		
	  $.post(url,data)
		.done(function( data ) 
		{
			 FuncionesGenerales.refrescarTabla();
			 $btn.button('reset');
			  $('#numero_negocio_c2').val('');
			  $('#numero_negocio_c3').val('');
			 $('#ganado').modal('toggle');
  		});
		
	});
	
	$('#modal_cancel').on('click', function(){
		$('#ganado').modal('toggle');
	});
	
	$('#ganado').on('hide.bs.modal', function (e) 
	{
		 $('#comentarios_ganado').val('')
		 $('#monto_ganado').val('');
		 
		 $('div.checkbox-custom > input[type^=checkbox]:checked').each(function()
		 {
			$(this).prop('checked', false);
		 });
	});
	
	$('#cierre_perdido_oportunidades_web').on('hide.bs.modal', function (e){
		$('input[name=motivo_cierre_perdido_oportunidades_web]').val('');
		$('#comentarios_cierre_perdido_oportunidades_web').val('');
		$('.required-field-modal-motivos-solicitudes-web').hide();
    });
});

function validar(obj)
{
	if($('div.checkbox-custom > input[type^=checkbox]:checked').length == 0)
		$('.required-field-modal-product').show();
	else
		$('.required-field-modal-product').hide();
}