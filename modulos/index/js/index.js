jQuery(document).ready(function() {

	"use strict";
	
	$('.multiselect5').multiselect({
      buttonClass: 'multiselect dropdown-toggle btn btn-sm btn-danger'
    });

	Configuraciones.init(true);
	Core.init();
	Demo.init();
	UIIdleTimeout.init();
	
	if($('.navbar').css('background-color') == "rgb(255, 255, 255)")
		$('#header_label_title').css( "color", "black" );
	else
		$('#header_label_title').css( "color", "white" );

	$('.table-modal').find('a').editable({
	  disabled: true,
	  mode: 'inline'
	});
	
	$('input[name=buscar_contacto]').keyup(function(e){
		if(e.keyCode == 13)
		{
			$( "#buscar_contacto_anchor" ).trigger( "click" );
		}
	});
	
	// $('#solicitudes_web_oportunidades').find('.modal-body').css({"max-height": ($( document ).height()-( (($( document ).height() * 18)/100) ))+"px", "overflow-y": "scroll"})
	$('#buscador_modal').find('.modal-body').css({"max-height": ($( document ).height()-( (($( document ).height() * 20)/100) ))+"px", "overflow-y": "scroll"});
	$('#email_solicitud_web').find('.modal-body').css({"max-height": ($( document ).height()-( (($( document ).height() * 18)/100) ))+"px", "overflow-y": "scroll"});

	$('.table-modal').hoverIntent(
		function() {
		  $(this).find('a').editable('toggleDisabled');
		}, function() {
		  $(this).find('a').editable('toggleDisabled');
	});
	
	$('#wysiwyg-editor').summernote({
		 lang: 'es-ES'
	});
	  
	$("a.logout").click(function(){
		
		var data = {
			v_class : "log_out"
		}
	
		$.get(Configuraciones.getUrlConfiguraciones(),data,function(respuesta){
			$(location).attr('href',"login.php");
		});
	});
	
	$("a.chat-menu").click(function(){
		var tab = $(this).data('tab');
		
		if(tab == "conversacion")
			$('.area-enviar-comentario').show();
		else
			$('.area-enviar-comentario').hide();
	});
	
	$("#enviar_mensaje_chat").click(function(){
		var $btn = $(this);
		
		$btn.button('loading');
		
		var data = {
			description: $('#textArea1').val(),
			assigned_user_id: '1'
		}
		
		$.post(Configuraciones.getConfiguraciones().url_set_enviar_msj, data)
		.done(function( data ) 
		{
			$btn.button('complete');
			setTimeout(function()
			{
				Mensajes.init();
				Mensajes.cargarConversacionesChat();
				$('#textArea1').val('');
				$btn.button('reset');
			},3000); 
  		})
		.fail(function() 
		{
			$btn.button('problem');
			setTimeout(function()
			{
				$btn.button('reset');
			},3000); 
		});
	});
	
	$('#cargar_btn_solicitud_web').on('click', function(){
	
		 var $btn = $(this);
		 $btn.button('loading');

		 $.get(Configuraciones.getConfiguraciones().url_set_carga_solicitud)
		 .done(function( p_response ) {
			if(p_response != 'Usted dispone de mas de 5 oportunidades abiertas') {
				if(p_response == 'Total oportunidades asignadas: 0'){
					$btn.data( "mensaje-text", "<i class=&quot;fa fa-exclamation-circle&quot;></i> "+p_response );
					$btn.button('mensaje');
					setTimeout(function(){
						$btn.button('reset');
					},6000);
				}else{
					$btn.data( "mensaje-text", "<i class=&quot;fa fa-exclamation-circle&quot;></i> "+p_response );
					$btn.button('mensaje');
					 setTimeout(function(){
						FuncionesGenerales.refrescarTabla();
						$btn.button('reset');
					 },2000); 
				}
			 } else {
				$btn.data( "mensaje-text", "<i class=&quot;fa fa-exclamation-circle&quot;></i> "+p_response );
				$btn.button('mensaje');
				setTimeout(function(){
					$btn.button('reset');
				},6000); 
			 }
		})
		.fail(function() {
			$btn.button('problem');
			setTimeout(function(){
				$btn.button('reset');
			 },2000); 
		});
	});
	
	$('input[name=modal_agendamiento_telefono_fecha]').datepicker({
		orientation: "left",
		autoclose: true,
		format: "yyyy-mm-dd",
		language: "es"
	});
	
	$('#datetimepicker5').datetimepicker({
	  defaultDate: "9/25/2014",
	  pickDate: false,
	});
	
	

});
