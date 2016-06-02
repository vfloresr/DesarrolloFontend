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
	
	/*$( "#numero_negocio_c").blur(function() {
	var numeros="0123456789";
	 var cadena = $("#numero_negocio_c").val();
	
	/*for(i=0; i<cadena.length; i++){
      if (numeros.indexOf(cadena.charAt(i),0)!=-1){
          alert(1);
      }
   }
   return 0;
		
	var fecha           = new Date();
    var dame_fecha      = fecha.getFullYear();
	//var fecha_ult_digito = dame_fecha.slice(-1);
	
		
  alert(fecha_ult_digito);
    //var primer_digito = cadena.slice(-1);
	
	

});*/
	
	
	
	
	
});