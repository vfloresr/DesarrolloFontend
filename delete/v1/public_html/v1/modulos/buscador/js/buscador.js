jQuery(document).ready(function($){

});

function redireccionarModulo(el)
{
	var toAnimate = $(el).attr('href');
	FuncionesGenerales.setNumeroNegocioFiltro($(el).data('numero-negocio'),$(el).data('estado'));
	
	setActivoMenu(el);

	$('.section-container, .section-separator h2').fadeOut('50');

	$(toAnimate).parents('.section-separator').find('h2').fadeIn();

	$(toAnimate).fadeIn();
	$(toAnimate).callMeLoad();
}

function setActivoMenu(el)
{
	var modulo = $(el).data('modulo');
	
	$('.scroll_menu').parent().removeClass('active');
	$(el).parent().addClass('active');
	
	if(modulo == "crosselling")
		$("#cross_selling_section_menu").parent().addClass('active');
	else if(modulo == "recompra")
		$("#recompra_section_menu").parent().addClass('active');
	else if(modulo == "fugados")
		$("#fugados_section_menu").parent().addClass('active');
	else if(modulo == "proximos")
		$("#proximos_viajes_section_menu").parent().addClass('active');
	else if(modulo == "retornos")
		$("#retorno_section_menu").parent().addClass('active');
}

function getModulo(modulo)
{
	var respuesta = {
		id : "",
		href : ""
	};
	
	if(modulo == "fugados")
		respuesta = {
			id : "fugados_section_menu",
			href : "#fugados_section"
		};
	if(modulo == "crosselling")
		respuesta = {
			id : "cross_selling_section_menu",
			href : "#cross_selling_section"
		};
	if(modulo == "retornos")
		respuesta = {
			id : "retorno_section_menu",
			href : "#retorno_section"
		};
	if(modulo == "proximos")
		respuesta = {
			id : "proximos_viajes_section_menu",
			href : "#proximos_viajes_section"
		};
	if(modulo == "recompra")
		respuesta = {
			id : "recompra_section_menu",
			href : "#recompra_section"
		};	
		
	return respuesta;
}