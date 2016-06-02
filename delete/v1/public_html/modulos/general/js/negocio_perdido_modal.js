jQuery(document).ready(function($){
	
  $('select[name=motivos-perdidos-modal]').on('change', function() 
  {
		if( this.value == 0)
		{
			$('.required-field-modal-product').show();
			return false
		}
		else
		{
			$('.required-field-modal-product').hide();
			return false
		}
  });

  $('#modal_perdido_success').on('click', function()
  {
		if( FuncionesGenerales.getModuloActual() != Configuraciones.getConfiguraciones().fugados_tag && FuncionesGenerales.getModuloActual() != Configuraciones.getConfiguraciones().retorno_tag && FuncionesGenerales.getModuloActual() != Configuraciones.getConfiguraciones().recompra_tag ) 
		{
			if($('select[name=motivos-perdidos-modal]').val() == 0)
			{
				$('.required-field-modal-product').show();
				return false
			}
		}

		var $btn = $(this);
		$btn.button('loading');
		var obj = JSON.parse($('input[name^=negocio]').val());

		if( FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().retorno_tag )
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_tarea;
			var data = {
				tarea_id: obj.id_tarea, 
				status: "Completed",
				motivo_cierre_c: '',
				description:$('#comentarios_perdido').val()
			};
		}
		else if( FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().recompra_tag )
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_oportunidad;
			var data = { 
				oportunidad_id: obj.id_oportunidad, 
				sales_stage: "CerradoPerdido",
				description:$('#comentarios_perdido').val(),
				amount:'0',
				productos_c:'',
				motivo_cierre_c: ''
			}
		}
		else if( FuncionesGenerales.getModuloActual() == Configuraciones.getConfiguraciones().proximos_viajes_tag )
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_tarea;
			var data = { 
				oportunidad_id: obj.id_oportunidad, 
				sales_stage: "CerradoPerdido",
				description:$('#comentarios_perdido').val(),
				amount:'0',
				productos_c:'',
				motivo_cierre_c: ''
			}
		}
		else
		{
			var url = Configuraciones.getConfiguraciones().url_set_editar_oportunidad;
			var data = { 
				oportunidad_id: obj.id_oportunidad, 
				sales_stage: "CerradoPerdido",
				description:$('#comentarios_perdido').val(),
				amount:'0',
				productos_c:'',
				motivo_cierre_c:$('#motivo_perdido').val() 
			}
		}

		$.post( url , data ).done(function()
		{
			FuncionesGenerales.refrescarTabla();

			$('#perdido').modal('toggle');
			$btn.button('reset');
		});
  });
	
  $('#modal_perdido_cancel').on('click', function()
  {
	$('.required-field-modal-product').hide();
	$('#comentarios_perdido').val('');
	$('select[name=motivos-perdidos-modal]').val($('select[name=motivos-perdidos-modal] option:first').val());
    $('#perdido').modal('toggle');
  });
  
   $('#perdido').on('hide.bs.modal', function (e){
		$('#motivo_perdio').val('');
		$('.required-field-modal-product').hide();
		$('#comentarios_perdido').val('')
		$('select[name=motivos-perdidos-modal]').val($('select[name=motivos-perdidos-modal]').val());
   });
});