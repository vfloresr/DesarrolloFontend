jQuery(document).ready(function($){
	$('#fugados_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  FugadosTabla.cargarTablaNuevas();
		  FugadosTabla.abierto_fugados.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#fugados_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  FugadosTabla.cargarTablaPendientes();
		  FugadosTabla.pendiente_fugados.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#fugados_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  FugadosTabla.cargarTablaCerradas();
		  FugadosTabla.cerrado_fugados.fnFilter('');
		  $(this).tab('show');
	});
});