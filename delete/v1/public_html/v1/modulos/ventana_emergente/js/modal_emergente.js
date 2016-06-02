jQuery(document).ready(function($){
	$('#alerta_emergente_success').on('click', function(){
		var $btn = $(this);
		$btn.button('loading');
		
		var data = {
			respuesta : "1",
			id_tarea : NuevasSolicitudes.getIdTarea()
		};		
		
		$.post(Configuraciones.getConfiguraciones().url_set_respuesta_nuevas_solicitudes, data ).done(function(respuesta) {
						
			if(respuesta.trim() == "1")
			{
				$btn.button('complete');
				$( "#solicitudes_section_menu" ).trigger( "click" );
				FuncionesGenerales.refrescarContadores(false,Configuraciones.getConfiguraciones().solicitudes_web_tag);
				setTimeout(function()
				{
					$btn.button('reset');
					$('#alerta_emergente').modal('toggle');
				},1000); 
			}else{
				alert('Ha excedido el limite de tiempo');
				 $btn.button('problem');
				setTimeout(function()
				{
					$btn.button('reset');
				},1000);
				//$('#alerta_emergente').modal('toggle');
				$('#alerta_emergente').remove();
				
			}
			
			
			//}
			 
			
			/*else{
				$btn.button('problem');
				setTimeout(function()
				{
					$btn.button('reset');
				},1000); 
			}*/
		
		});	
	});
	
	$('#alerta_emergente_cancel').on('click', function(){
		var $btn = $(this);
		$btn.button('loading');
		
		var data = {
			respuesta : "0",
			id_tarea : NuevasSolicitudes.getIdTarea()
		};		
		
		$.post(Configuraciones.getConfiguraciones().url_set_respuesta_nuevas_solicitudes, data ).done(function(respuesta) {
			if(respuesta.trim() == "1")
			{
				$btn.button('complete');
				setTimeout(function()
				{
					$btn.button('reset');
					$('#alerta_emergente').modal('toggle');
				},2000); 
			}else{
				alert('Ha excedido el limite de tiempo');
				 $btn.button('problem');
				setTimeout(function()
				{
					$btn.button('reset');
				},1000);
				//$('#alerta_emergente').modal('toggle');
				$('#alerta_emergente').remove();
				
			
			
			/*else
			{
				$btn.button('problem');
				setTimeout(function()
				{
					$btn.button('reset');
				},2000); */
			}
		});	
	});
});