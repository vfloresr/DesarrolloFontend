jQuery(document).ready(function($){

	$('#modal_success').on('click', function()
	{
		var $btn = $(this);
		if($('div.checkbox-custom > input[type^=checkbox]:checked').length == 0)
		{
			$('.required-field-modal-product').show();
			return false
		}
		
		 var numero_negocio_c1 = 	$('#numero_negocio_c1').val().trim();
	      var numero_negocio_c2 =    $('#numero_negocio_c2').val().trim();
		 var numero_negocio_c3 =    $('#numero_negocio_c3').val().trim();
		 var monto_ganado     =    $('#monto_ganado').val().trim();    
		  
		  if ((numero_negocio_c1 == "")){
			  alert('Debe Ingresar el Ultimo Digito del año Actual');
			  return false;
		  }else{
			  if ((numero_negocio_c2 == "")){
				  alert('Debe Ingresar tres Caracteres, una letra y los otros dos numericos');
				   return false;
			  }else{
				   if ((numero_negocio_c3 == "")){
				    alert('Debe Ingresar tres numeros correlativos');
				    return false;
				  
			     }else{
					 if ((monto_ganado == "")){
				    alert('Debe Ingresar un Monto');
				    return false;
					 
				 }
			  }
		    }
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
			
			  var substr = productos.split('/');
			      
				   /*for(var i=0; i< substr.length-1; i++) {
		                alert(substr[i]);
				   }*/
			
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
				//productos_c:productos,
				productos_c:productos.replace('[object Object]',""),
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
		productos = $(this).val('')+";";
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