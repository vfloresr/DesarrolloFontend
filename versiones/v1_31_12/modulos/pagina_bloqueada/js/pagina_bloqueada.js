jQuery(document).ready(function() {
	"use strict";
	// Init Theme Core      
	Core.init();
	// Init Demo JS
	Demo.init();
	Configuraciones.init(false);
	
	$('#desbloquer_success').on('click', function()
	{
	
		if($('input[name=password]').val().length == 0) {
			$('.required-field-modal-product').show();
			return false
		}
	
		$('.required-field-modal-product').hide();
		$('.mensaje-login-pagina-bloqueo').hide();
	
		var $btn = $(this);
		$btn.button('loading');
		
		var data ={
			v_class : 'validar_usuario',
			user : $("input[name=username_sesion_previa]").val(), 
			pass : $("input[name=password]").val()
		};

	
		$.post(Configuraciones.getUrlConfiguraciones(),data,function(respuesta)
		{
			if (respuesta.trim() == "1") 
			{
				$.get(Configuraciones.getConfiguraciones().url_get_user_detalle, function( p_response ) {
					
					var response = JSON.parse(p_response);
					
					var data = {
						v_class: 'cargar_detalle_user',
						nombre: response[0].nombre,
						apellido: response[0].apellido,
						email: response[0].email,
						telefono: response[0].telefono,
						sucursal: response[0].sucursal,
						crosselling_sucursal: response[0].crosselling_sucursal,
						crosselling_ejecutiva: response[0].crosselling_ejecutiva,
						cargo: response[0].cargo,
						solcitides_web: response[0].solcitides_web,
						croseling: response[0].croseling,
						recompra: response[0].recompra,
						fugados: response[0].fugados,
						retornos: response[0].retornos,
						cumpleanio: response[0].cumpleanio,
						cartera_cliente: response[0].cartera_cliente,
						boton_web: response[0].boton_web,
						proximos_viajes: response[0].proximos_viajes
					}
					
					$.post(Configuraciones.getUrlConfiguraciones(), data ).done(function( p_response ) {
						var response = JSON.parse(p_response);
						if(response.estado) {
							 $.post(Configuraciones.getConfiguraciones().url_set_log_acceso, { acceso : "pagina_timeout", ubicacion_acceso : "Acceso desde pantalla bloqueada." } ).done(function( p_response ) 
							 {
								var response = JSON.parse(p_response);
								if(response) {
									 $btn.button('complete');
									 setTimeout(function(){
										$(location).attr('href',"index.php");
									 },2000); 
								 } else {
									$btn.button('problem');
									$('.mensaje-login-pagina-bloqueo').show();
									setTimeout(function(){
										$btn.button('reset');
									},3000); 
								 }
							 });
						 } else {
							$btn.button('problem');
							$('.mensaje-login-pagina-bloqueo').show();
							setTimeout(function(){
								$btn.button('reset');
							},3000); 
						 }
					});
				});
			}
			else
			{
				$('.mensaje-login-pagina-bloqueo').show();
				$btn.button('reset');
			}
		});
	});
	
	$('input[name=password]').keyup(function(e){
		if(e.keyCode == 13)
		{
			$( "#desbloquer_success" ).trigger( "click" );
		}
	});
});