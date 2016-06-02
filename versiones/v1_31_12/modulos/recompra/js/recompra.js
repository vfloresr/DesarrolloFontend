jQuery(document).ready(function($){
	$('#recompra_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  RecompraTabla.cargarTablaNuevas();
		  RecompraTabla.abierto_recompra.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#recompra_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  RecompraTabla.cargarTablaPendientes();
		  RecompraTabla.pendiente_recompra.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#recompra_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  RecompraTabla.cargarTablaCerradas();
		  RecompraTabla.cerrado_recompra.fnFilter('');
		  $(this).tab('show');
	});
});