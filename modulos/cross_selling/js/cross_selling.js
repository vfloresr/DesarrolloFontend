jQuery(document).ready(function($){
	$('#cross_selling_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  CrossSellingTabla.cargarTablaNuevas();
		  CrossSellingTabla.abierto.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#cross_selling_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  CrossSellingTabla.cargarTablaPendientes();
		  CrossSellingTabla.pendiente.fnFilter('');
		  $(this).tab('show');
	});
	
	$('#cross_selling_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  CrossSellingTabla.cargarTablaCerradasss();
		  CrossSellingTabla.cerrado.fnFilter('');
		  $(this).tab('show');
	});
		
});

function abrirCrossSelling (el,fecha){
	var $object = $(el);
	var d = new Date();
	var fecha_hoy = d.getFullYear() + "-" + ( '0' + (d.getMonth()+1) ).slice( -2 ) + "-" + d.getDate();
	//var fecha_hoy = 
	var data = { 
		oportunidad_id: $object.data('oportunidad-id'),
		sale_stage: "creado",
		fecha_sal: $object.data('fecha-sal'),
	};
	

	 fecha_sal = data.fecha_sal;
	 
	if (fecha_sal >= fecha_hoy){
	
	var url = Configuraciones.getConfiguraciones().url_set_editar_estado_cross_selling;

	$.post(url,data)
		.done(function( data ) 
		{
			if(data == 1){
			// alert('Cross Selling Abierto....!!!')
			 setTimeout(function() {
			$('#msj_estado').fadeIn(1500);
			$('#msj_estado').fadeOut(1500);
		
		  },1000);
			 FuncionesGenerales.refrescarTabla();
			}else{
				alert('No se pudo abrir la Oportunidad....');
				return false
			}
		 
  		});
	}else{
		alert('Este viaje ya comenzó así que ya no puedes agregar productos Cross. Por favor revisa tus otras oportunidades para gestionarlas');
		return false;
		
	}
}