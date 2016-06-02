jQuery(document).ready(function($){
	$('#retorno_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  RetornoTabla.cargarTablaNuevas();
		  RetornoTabla.abierto_retorno.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#retorno_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  RetornoTabla.cargarTablaPendientes();
		  RetornoTabla.pendiente_retorno.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#retorno_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  RetornoTabla.cargarTablaCerradas();
		  RetornoTabla.cerrado_retorno.fnFilter('');
		  $(this).tab('show');
	});
});