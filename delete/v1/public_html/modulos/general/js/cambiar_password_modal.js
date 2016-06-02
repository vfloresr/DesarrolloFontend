jQuery(document).ready(function($){
	$('#cambiar_password_success').on('click', function(){
		
		var $btn = $(this);
		
		var valido_nueva_contrasenia = true;
		var valido_repetir_contrasenia = true;
		
		$('.error-show-contrasenia-repetir').html('');
		$('.error-show-contrasenia-nueva').html('');
		$('.error-show-contrasenia-repetir').hide();
		$('.error-show-contrasenia-nueva').hide();
		
		if($('input[name=nueva_contrasenia]').val().length == 0) 
		{
			$('.error-show-contrasenia-nueva').html('* Campo Obligatorio');
			$('.error-show-contrasenia-nueva').show();
			valido_nueva_contrasenia = false;
		}
		
		if($('input[name=repetir_contrasenia]').val().length == 0) 
		{
			$('.error-show-contrasenia-repetir').html('* Campo Obligatorio');
			$('.error-show-contrasenia-repetir').show();
			valido_repetir_contrasenia = false;
		}
		
		if(!valido_nueva_contrasenia || !valido_repetir_contrasenia)
			return false;
			
		var expresion_regular = /[A-Za-z0-9_]/;
		var test_resultado = expresion_regular.test($('input[name=nueva_contrasenia]').val());	
		if(!test_resultado) 
		{
			$('.error-show-contrasenia-nuueva').html(Configuraciones.getConfiguraciones().expresion_regular_contrasenia_mensaje);
			$('.error-show-contrasenia-nuueva').show();
			return false;
		}
			
		if($('input[name=nueva_contrasenia]').val() != $('input[name=repetir_contrasenia]').val()) 
		{
			$('.error-show-contrasenia-repetir').html('* Las contraseñas no coinciden');
			$('.error-show-contrasenia-nueva').html('* Las contraseñas no coinciden');
			$('.error-show-contrasenia-repetir').show();
			$('.error-show-contrasenia-nueva').show();
			return false;
		}
		
		$('.error-show-contrasenia-repetir').html('');
		$('.error-show-contrasenia-nueva').html('');
		$('.error-show-contrasenia-repetir').hide();
		$('.error-show-contrasenia-nueva').hide();
		$("#cambiar_password_success").removeAttr("disabled");
		
		$btn.button('loading');
		
		$.post(Configuraciones.getConfiguraciones().url_cambiar_contrasenia,{ 
			password: $('input[name=nueva_contrasenia]').val(), 
		}).done(function( data ) 
		{
			 if(data) 
			 {
				 $btn.button('complete');
				 
				 setTimeout(function(){
					$('.required-field-modal-product').hide();
					$('input[name=nueva_contrasenia]').val('');
					$btn.button('reset');
					$('#cambiar_password').modal('toggle');
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
  		});
		
	});
	
	$('#cambiar_password_cancel').on('click', function()
	{
		$('#cambiar_password').modal('toggle');
	});
	
	$('#cambiar_password').on('hidden.bs.modal', function (e) 
	{
		$('.error-show-contrasenia-actual').hide();
		$('.error-show-contrasenia-nueva').hide();
		$('.error-show-contrasenia-repetir').hide();
		$("#verificando-loader").hide();
		$('input[name=contrasenia_actual]').val('');
		$('input[name=nueva_contrasenia]').val('');
		$('input[name=repetir_contrasenia]').val('');
		$("#verificando-loader").hide();
	});
	
	$('#cambiar_password').on('shown.bs.modal', function (e) 
	{
		$("#verificando-loader").hide();
		$("input[name=contrasenia_actual]").blur(function() 
		{
			if($(this).val().length == 0)
			{
				$('.error-show-contrasenia-actual').html('* Campo Obligatorio');
				$('.error-show-contrasenia-actual').show();
				$("#cambiar_password_success").attr("disabled", "disabled");
				return false;
			}
			
			$("#verificando-loader").show();
			$('.error-show-contrasenia-actual').hide();
			$.post(Configuraciones.getConfiguraciones().url_set_notificacion_acceso,
			{ 
				password: $('input[name=contrasenia_actual]').val(), 
			}).done(function( data ) {
				 var response = jQuery.parseJSON( data );
				 if(response.respuesta == 1)
				 {
					$("#cambiar_password_success").removeAttr("disabled");
				 } 
				 else 
				 {
					$('.error-show-contrasenia-actual').html('* Contraseña actual inválida');
					$('.error-show-contrasenia-actual').show();
					$("#cambiar_password_success").attr("disabled", "disabled");
				 }
				 
				 $("#verificando-loader").hide();
			});
		});
	})
});

function modal_cambiar_password(el)
{
	$('.required-field-modal-product').hide();
	$('input[name=nueva_contrasenia]').val('');
	$("#cambiar_password_success").attr("disabled", "disabled");
	$('#cambiar_password').modal('toggle');
}