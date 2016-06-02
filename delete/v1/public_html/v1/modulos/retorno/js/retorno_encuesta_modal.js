jQuery(document).ready(function($){

	$('#retorno_encuesta_modal').on('hide.bs.modal', function (e) {

	});
	
	$('#retorno_encuesta_modal').on('shown.bs.modal', function (e) {

	});
	
	$('#retorno_encuesta_modal_success').on('click', function(){
		$('#retorno_encuesta_modal').modal('toggle');
	});
});

function modalEncuesta(el) 
{
	var $object = $(el);
	FuncionesGenerales.empezarLoading();
	$('#retorno_encuesta_nombre').html($object.data('nombre'));
	$('#retorno_encuesta_estado').html($object.data('estado'));
	var data = { 
		rut: $object.data('rut')
	};
	
	$.get(Configuraciones.getConfiguraciones().url_get_buscar_encuesta, data).done(function(response)
	{
		var json = jQuery.parseJSON( response );
		$('#retorno_encuesta_rut').html( (json[0].rut !== null) ? json[0].rut : "" );
		$('#retorno_encuesta_fecha_respuesta').html( (json[0].fecha_respuesta !== null) ? json[0].fecha_respuesta : "" );
		$('#retorno_encuesta_fecha_envio').html( (json[0].fecha_envio !== null) ? json[0].fecha_envio : "" );
		$('#retorno_encuesta_fecha_vista').html( (json[0].fecha_vista !== null) ? json[0].fecha_vista : "" );
		
		$('#retorno_encuesta_pregunta_1').html( (json[0].pregunta_1 !== null) ? json[0].pregunta_1 : "" );
		$('#retorno_encuesta_respuesta_1').html( (json[0].respuesta_1 !== null) ? json[0].respuesta_1 : "Sin Respuesta" );
		
		$('#retorno_encuesta_pregunta_2').html( (json[0].pregunta_2 !== null) ? json[0].pregunta_2 : "" );
		$('#retorno_encuesta_respuesta_2').html( (json[0].respuesta_2 !== null) ? json[0].respuesta_2 : "Sin Respuesta" );
		
		$('#retorno_encuesta_pregunta_3').html( (json[0].pregunta_3 !== null) ? json[0].pregunta_3 : "" );
		$('#retorno_encuesta_respuesta_3').html( (json[0].respuesta_3 !== null) ? json[0].respuesta_3 : "Sin Respuesta" );
		
		FuncionesGenerales.terminarLoading();
		$('#retorno_encuesta_modal').modal('toggle');
	});

	
}