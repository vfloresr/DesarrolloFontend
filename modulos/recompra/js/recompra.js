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


function abrirRecompra (el){
	
	var $object = $(el);
	var data = { 
		oportunidad_id: $object.data('oportunidad-id'),
		sale_stage: "creado",
	};
	
	var url = Configuraciones.getConfiguraciones().url_set_editar_estado_recompra;

	 $.post(url,data)
		.done(function( data ) 
		{
			if(data == 1){
			// alert('Cross Selling Abierto....!!!')
			 setTimeout(function() {
			$('#msj_estado_recompra').fadeIn(1500);
			$('#msj_estado_recompra').fadeOut(1500);
		
		  },1000);
			 FuncionesGenerales.refrescarTabla();
			}else{
				alert('No se pudo abrir la Oportunidad....');
				return false
			}
			  
			 
  		});
		
	}