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



function abrirFugados (el){
	
	var $object = $(el);
	var data = { 
		oportunidad_id: $object.data('oportunidad-id'),
		sale_stage: "creado",
	};
	
	var url = Configuraciones.getConfiguraciones().url_set_editar_estado_fugados;

	 $.post(url,data)
		.done(function( data ) 
		{
			if(data == 1){
			// alert('Cross Selling Abierto....!!!')
			 setTimeout(function() {
			$('#msj_estado_fugados').fadeIn(1500);
			$('#msj_estado_fugados').fadeOut(1500);
		
		  },1000);
			 FuncionesGenerales.refrescarTabla();
			}else{
				alert('No se pudo abrir la Oportunidad....');
				return false
			}
			  
			 
  		});
		
	}