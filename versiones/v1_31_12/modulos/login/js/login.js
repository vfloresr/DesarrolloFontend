$(document).on("pageshow", function() {
	Configuraciones.init(false);
	$("#msjError").hide();
	
	$('.ui-loader').remove();
	
	$("#btnLogin").click(function(){
		
		$("#msjError").hide();
		var valido_user = true;
		var valido_pass = true;
		
		if($("#txtuser").val().length == 0)
			valido_user = false;
			
		if($("#txtpassword").val().length == 0)
			valido_user = false;
			
		if(!valido_user || !valido_user)
		{
			$('#msjError').html('Rellene los campos del formulario para ingresar.');
			$("#msjError").show();
			return false;
		}
		
		var data = { 
			user : $("#txtuser").val(), 
			pass : $("#txtpassword").val(),
			v_class : 'validar_usuario', //v_class esta configuraciones.php
		};
		$('#btnLogin').addClass('disabled');
		$('#btnLogin').html('Cargando');  
		$.post(Configuraciones.getUrlConfiguraciones(), data, function(respuesta)
		{
			if (respuesta == true) 
			{
				
				$.get( Configuraciones.getConfiguraciones().url_get_user_detalle, function( p_response ) {
					
					var response = JSON.parse(p_response);
					
					var data = {
						v_class: 'cargar_detalle_user',//v_class esta configuraciones.php
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
						 if(response.estado)
						 {
							$.get(Configuraciones.getConfiguraciones().url_set_log_acceso, { acceso : "login", ubicacion_acceso : "Acceso desde inicio de sesion." } ).done(function( p_response ) 
							 {
								var response = JSON.parse(p_response);
								// if(true) 
								if(response !== null && response) 
								{
									 setTimeout(function(){
										$(location).attr('href',"index.php");
									 },2000); 
								 } 
								 else 
								 {
									$('#btnLogin').removeClass('disabled');
									$('#btnLogin').html('Ingresar');
								 }
							 });
						 }
						 else
						 {
							$('#btnLogin').removeClass('disabled');
							$('#btnLogin').html('Ingresar');
							$('#msjError').html('No se ha podido ingresar. Revise sus credenciales.');
							$("#msjError").show();
						 }
					});
				});
			}
			else
			{
				$('#btnLogin').removeClass('disabled');
				$('#btnLogin').html('Ingresar');
				$('#msjError').html('No posee las credenciales para ingresar al sistema.');
				$("#msjError").show();
			}
		});
	});
});