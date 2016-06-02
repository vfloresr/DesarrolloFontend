jQuery(document).ready(function($){
	$('input[name=cliente_editar_fecha_nacimiento]').datepicker({
		orientation: "right",
		autoclose: true,
		format: "dd-mm-yyyy",
		language: "es"
	});
	
	$('#cartera_clientes_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  CarteraClientesTabla.cargarTablaCompradores();
		  $(this).tab('show');
	});
	
	$('#cartera_clientes_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  CarteraClientesTabla.cargarTablaPasajeros();
		  $(this).tab('show');
	});
	
	$('#cliente_editar_success').on('click', function(){
		
		var $btn = $(this);

		$('.required-field-modal-product').hide();
		$btn.button('loading');
		
		$.post('ws/wss.php?func=set_editar_contactos_cartera',{ 
			email1: $('input[name=cliente_editar_email]').val(), 
			birthdate: $('input[name=cliente_editar_fecha_nacimiento]').val(),	
			user_id: $('input[name=cliente_editar_cliente_id]').val()
		}).done(function( data ) {
			 if(data) {
				 $btn.button('complete');
				 
				 setTimeout(function(){
					FuncionesGenerales.refrescarTabla();
					$btn.button('reset');
					$('#cliente_editar_modal').modal('toggle');
				},2000); 
			 } else {
				$btn.button('problem');
				setTimeout(function(){
					$btn.button('reset');
				},3000); 
			 }
  		});
		
	});
	
	$('#cliente_editar_cancel').on('click', function(){
		$('#cliente_editar_modal').modal('toggle');
	});
});