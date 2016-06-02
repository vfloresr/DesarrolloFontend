jQuery(document).ready(function() {
	$('input[name=modal_cumpleanio_fecha_cumpleanio]').datepicker({
		orientation: "right",
		autoclose: true,
		format: "yyyy-mm-dd",
		language: "es"
	});
	
	$('textarea[name=modal_cumpleanio_comentario]').maxlength({
		limitReachedClass: "label label-danger",
		alwaysShow: true
	});

	$('#cumpleanios_modal_form_success').on('click', function(){
		var $btn = $(this);
		$btn.button('loading');
		
		$.post('ws/wss.php?func=set_editar_contactos_cumple', {
			user_id : $('input[name=modal_cumpleanio_contacto]').val(),
			last_name: $('input[name=modal_cumpleanio_nombre]').val(),
			phone_home: $('input[name=modal_cumpleanio_telefono]').val(),
			email1: $('input[name=modal_cumpleanio_email]').val(),
			description: $('textarea[name=modal_cumpleanio_comentario]').val(),
			birthdate: $('input[name=modal_cumpleanio_fecha_cumpleanio]').val()
		}).done(function( data ) {
			 if(data) {
				 $btn.button('complete');
				 setTimeout(function(){
					$btn.button('reset');
					limpiarModalCumpleanios();
					FuncionesGenerales.refrescarTabla();
					$.magnificPopup.close();
				},2000); 
			 } else {
				$btn.button('problem');
				setTimeout(function(){
					$btn.button('reset');
				},3000); 
			 }
  		});
	});
	
	$('#cumpleanios_modal_form_cancel').on('click', function(){
		$.magnificPopup.close();
	});
});

function limpiarModalCumpleanios()
{
	$('input[name=modal_cumpleanio_contacto]').val('');
	$('input[name=modal_cumpleanio_nombre]').val('');
	$('input[name=modal_cumpleanio_telefono]').val('');
	$('input[name=modal_cumpleanio_fecha_cumpleanio]').val('');
	$('input[name=modal_cumpleanio_email]').val('');
	$('textarea[name=modal_cumpleanio_comentario]').val('');
}

function modal_editar_cumpleanio(el) 
{
	var obj = $(el).data('json');
	
	$('input[name=modal_cumpleanio_contacto]').val(obj.rut);
	$('input[name=modal_cumpleanio_nombre]').val(obj.nombre);
	$('input[name=modal_cumpleanio_telefono]').val(obj.telefono);
	$('input[name=modal_cumpleanio_fecha_cumpleanio]').val(obj.cumple_mes);
	$('input[name=modal_cumpleanio_email]').val( (( obj.email != "Sin Email") ? obj.email : "" )  );
	$('textarea[name=modal_cumpleanio_comentario]').val(obj.description);
	
	$.magnificPopup.open({
		removalDelay: 500,
		items: {
		  src: "#cumpleanios-modal-form"
		},
		callbacks: {
		  beforeOpen: function(e) {
			var Animation = "mfp-slideDown"
			this.st.mainClass = Animation;
		  },
		  open: function() {}
		},
		midClick: true
	});
}

