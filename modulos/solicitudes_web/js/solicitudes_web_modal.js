jQuery(document).ready(function($){
  $('#modal_solicitudes_web_oportunidades_cancel').on('click', function(){
    $('#solicitudes_web_oportunidades').modal('toggle');
  });

  $('#solicitudes_web_oportunidades').on('hide.bs.modal', function (e){
		$('.solicitudes_web_opciones_cerrados').show();
		$('input[name=solicitudes_web_comentarios]').val('');
		$('input[name=solicitudes_web_cliente_id]').val('');
		resetContactoSolicitudesWeb();
		resetSolicitudSolicitudesWeb() 
  });
  
  	$('#solicitudes_web_tab li:eq(0) a').click(function (e) {
		  e.preventDefault();
		  SolicitudesWebTabla.cargarTablaNuevas();
		  $(this).tab('show');
	});
	
	$('#solicitudes_web_tab li:eq(1) a').click(function (e) {
		  e.preventDefault();
		  SolicitudesWebTabla.cargarTablaPendientes();
		  $(this).tab('show');
	});
	
	$('#solicitudes_web_tab li:eq(2) a').click(function (e) {
		  e.preventDefault();
		  SolicitudesWebTabla.cargarTablaCerradas();
		  $(this).tab('show');
	});
	

	
	
});

function editarDatosContacto()
{ 
	var contacto_nombre = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_nombre' value='"+$('.solicitudes_web_datos_contacto .contacto_nombre').html()+"'/> <code style='display:none;' id='mensaje_contacto_nombre' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_nombre').html(contacto_nombre);
	
	var contacto_apellido = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_apellido' value='"+$('.solicitudes_web_datos_contacto .contacto_apellido').html()+"'/> <code style='display:none;' id='mensaje_contacto_nombre' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_apellido').html(contacto_apellido);
	
	var contacto_telefono = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_telefono' value='"+$('.solicitudes_web_datos_contacto .contacto_telefono').html()+"'/> <code style='display:none;' id='mensaje_contacto_telefono' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_telefono').html(contacto_telefono);
	
	var contacto_rut = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_rut' value='"+$('.solicitudes_web_datos_contacto .contacto_rut').html()+"'/> <code style='display:none;' id='mensaje_contacto_rut' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_rut').html(contacto_rut);
	
	/*var contacto_email = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_email' value='"+$('.solicitudes_web_datos_contacto .contacto_email').find('a').html()+"'/> <code style='display:none;' id='mensaje_contacto_email' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_email').html(contacto_email);*/
	
	var contacto_email = "<input style='padding:4px;width: 100%;color: #333333;' id='contacto_email' value='"+$('#email_contacto').val()+"'/> <code style='display:none;' id='mensaje_contacto_email' class='required-field-modal-product' >* Obligatorio</code>";
	$('#solicitudes_web_datos_contacto_email').html(contacto_email);
	
	var contacto_botones = 'Datos del contacto <small class="pull-right fw600 text-primary"> <a onclick="enviarEditarDatosContacto(this)" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Guardando..." href="javascript:void(0);" style="cursor:pointer; color: green;"><i class="fa fa-save" ></i> Guardar</a>   <a onclick="cancelarContactoSolicitudesWeb()" href="javascript:void(0);" style="cursor:pointer; color: red;"><i class="glyphicon glyphicon-remove-sign" ></i> Cancelar</a></small>';
	$('#solicitudes_web_datos_contacto_acciones').html(contacto_botones);
}

function editarDatosSolicitud()
{ 
  
	var solicitud_fecha = "<input style='padding:4px;width: 100%;color: #333333;' id='solicitud_fecha' value='"+$('.solicitudes_web_datos_solicitud .solicitud_fecha').html()+"'/>";
	$('#solicitudes_web_datos_solicitud_fecha').html(solicitud_fecha);
	
	var solicitud_canal = "<input style='padding:4px;width: 100%;color: #333333;' id='solicitud_canal' value='"+$('.solicitudes_web_datos_solicitud .solicitud_canal').html()+"'/>";
	$('#solicitudes_web_datos_solicitud_canal').html(solicitud_canal);
	
	// var solicitud_adultos = "<input style='padding:4px;width: 100%;color: #333333;' id='solicitud_adultos' value='"+$('.solicitudes_web_datos_solicitud .solicitud_adultos').html()+"'/>";
	
	var dato_solicitud_adultos = $('.solicitudes_web_datos_solicitud .solicitud_adultos').html();
	var solicitud_adultos = '<select style="color:black" id="solicitud_adultos">';
	for(var i = 1; i <= 6; ++i)
	{
		solicitud_adultos += '<option '+ ((dato_solicitud_adultos == i) ? "selected='selected'" : "") +' value="'+i+'">'+i+'</option>';
	}
	solicitud_adultos += '</select>';
	$('#solicitudes_web_datos_solicitud_adultos').html(solicitud_adultos);
	
	/*var solicitud_fecha_asignacion = "<input style='padding:4px;width: 95%;color: #333333;' id='solicitud_fecha_asignacion' value='"+$('.solicitudes_web_datos_solicitud .solicitud_fecha_asignacion').html()+"'/>";
	$('#solicitudes_web_datos_solicitud_fecha_asignacion').html(solicitud_fecha_asignacion);*/
	
	// var solicitud_ninos = "<input style='padding:4px;width: 100%;color: #333333;' id='solicitud_ninos' value='"+$('.solicitudes_web_datos_solicitud .solicitud_ninos').html()+"'/>";
	var dato_solicitud_ninos = $('.solicitudes_web_datos_solicitud .solicitud_ninos').html();
	var solicitud_ninos = '<select style="color:black" id="solicitud_ninos">';
	for(var i = 0; i <= 6; ++i)
	{
		solicitud_ninos += '<option '+ ((dato_solicitud_ninos == i) ? "selected='selected'" : "") +' value="'+i+'">'+i+'</option>';
	}
	solicitud_ninos += '</select>';
	$('#solicitudes_web_datos_solicitud_ninos').html(solicitud_ninos);
	
	var dato_solicitud_flexible = $('.solicitudes_web_datos_solicitud .solicitud_fecha_flexible').html();
	var solicitud_fecha_flexible = '<select style="color:black" id="solicitud_fecha_flexible"><option '+ ((dato_solicitud_flexible == "SI") ? "selected='selected'" : "") +' value="1">SI</option><option '+ ((dato_solicitud_flexible == "NO") ? "selected='selected'" : "") +' value="0">NO</option></select>'
	$('#solicitudes_web_datos_solicitud_fecha_flexible').html(solicitud_fecha_flexible);
	
	var dato_solicitud_habitaciones = $('.solicitudes_web_datos_solicitud .solicitud_habitaciones').html();
	var solicitud_habitaciones = '<select style="color:black" id="solicitud_habitaciones">';
	for(var i = 1; i <= 6; ++i)
	{
		solicitud_habitaciones += '<option '+ ((dato_solicitud_habitaciones == i) ? "selected='selected'" : "") +' value="'+i+'">'+i+'</option>';
	}
	solicitud_habitaciones += '</select>';
	$('#solicitudes_web_datos_solicitud_habitaciones').html(solicitud_habitaciones);
	
	var solicitud_agente_viaje = "<input style='padding:4px;width: 90%;color: #333333;white-space: nowrap;' id='solicitud_agente_viaje' value='"+$('.solicitudes_web_datos_solicitud .solicitud_agente_viaje').html()+"'/>";
	$('#solicitudes_web_datos_solicitud_agente_viaje').html(solicitud_agente_viaje);
	
	var solicitud_edad_ninos = "<input style='padding:4px;width: 95%;color: #333333;' id='solicitud_edad_ninos' value='"+$('.solicitudes_web_datos_solicitud .solicitud_edad_ninos').html()+"'/>";
	$('#solicitudes_web_datos_solicitud_edad_ninos').html(solicitud_edad_ninos);
	
	var contacto_botones = 'Datos de la solicitud <small class="pull-right fw600 text-primary"> <a onclick="enviarEditarDatosSolicitud(this)" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Guardando..." href="javascript:void(0);" style="cursor:pointer; color: green;"><i class="fa fa-save" ></i> Guardar</a>   <a onclick="cancelarEditarDatosSolicitud()" href="javascript:void(0);" style="cursor:pointer; color: red;"><i class="glyphicon glyphicon-remove-sign" ></i> Cancelar</a></small>';
	$('#solicitudes_web_datos_solicitud_acciones').html(contacto_botones);
	
	
	$('#solicitud_fecha').datetimepicker({
		format: 'YYYY-MM-DD'
    });
	
	$('#solicitud_fecha_asignacion').datetimepicker({
		format: 'YYYY-MM-DD'
    });
}

function cancelarEditarDatosSolicitud()
{
	var oportunidad_id = $('input[name=solicitudes_web_oportunidad_id]').val().trim();
	var data = { 
		oportunidad_id: oportunidad_id
	};

	$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
		var obj = jQuery.parseJSON( response );
	
		var solicitud_fecha = '<span class="solicitud_fecha">'+ ((obj.fecha !== null) ? FuncionesGenerales.cambiarFormatoFecha(obj.fecha.trim(),'yyyy-MM-dd') : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_fecha').html(solicitud_fecha);
		
		var solicitud_canal = '<span class="solicitud_canal">'+ ((obj.canal !== null) ? obj.canal.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_canal').html(solicitud_canal);
		
		var solicitud_adultos = '<span class="solicitud_adultos">'+ ((obj.adulto !== null) ? obj.adulto.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_adultos').html(solicitud_adultos);
		
		var solicitud_fecha_asignacion = '<span class="solicitud_fecha_asignacion">'+ ((obj.fecha_asignacion !== null) ? FuncionesGenerales.cambiarFormatoFecha(obj.fecha_asignacion.trim(),'yyyy-MM-dd') : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_fecha_asignacion').html(solicitud_fecha_asignacion);
		
		var solicitud_ninos = '<span class="solicitud_ninos">'+ ((obj.ninos !== null) ? obj.ninos.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_ninos').html(solicitud_ninos);

		if (obj.fecha_flexible == "1")
			$('#solicitudes_web_datos_solicitud_fecha_flexible').html("<span class='solicitud_fecha_flexible'>SI</span>");
		else if(obj.fecha_flexible == "0") 
			$('#solicitudes_web_datos_solicitud_fecha_flexible').html("<span class='solicitud_fecha_flexible'>NO</span>");
		else
			$('#solicitudes_web_datos_solicitud_fecha_flexible').html("<span class='solicitud_fecha_flexible'>SIN DATOS</span>");
		
		var solicitud_habitaciones = '<span class="solicitud_habitaciones">'+ ((obj.habitaciones !== null) ? obj.habitaciones.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_habitaciones').html(solicitud_habitaciones);
		
		var solicitud_agente_viaje = '<span class="solicitud_agente_viaje">'+ ((obj.agente_viaje !== null) ? obj.agente_viaje.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_agente_viaje').html(solicitud_agente_viaje);
		
		var solicitud_edad_ninos = '<span class="solicitud_edad_ninos">'+ ((obj.edad_ninos !== null) ? obj.edad_ninos.trim() : "") +'</span>';
		$('#solicitudes_web_datos_solicitud_edad_ninos').html(solicitud_edad_ninos);
		
		var contacto_botones = 'Datos de la solicitud <small class="pull-right fw600 text-primary"><a onclick="editarDatosSolicitud()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>';
		$('#solicitudes_web_datos_solicitud_acciones').html(contacto_botones);
	});
}

function cancelarContactoSolicitudesWeb() 
{
	var oportunidad_id = $('input[name=solicitudes_web_oportunidad_id]').val().trim();
	var data = { 
		oportunidad_id: oportunidad_id
	};
	
	$.post(Configuraciones.getConfiguraciones().url_get_oportunidad_detalle_web, data).done(function(response){
		var obj = jQuery.parseJSON( response );
		
		$('.contacto_nombre').html(obj.nombre);
		$('.contacto_apellido').html(obj.apellido);
		$('.contacto_telefono').html(obj.telefono);
		$('.contacto_rut').html(obj.rut);
		$('.contacto_email').html(obj.email);
		
		var contacto_nombre = '<span class="contacto_nombre">'+ ((obj.nombre !== null) ? obj.nombre.trim() : "") +'</span>';
		$('#solicitudes_web_datos_contacto_nombre').html(contacto_nombre);
		
		var contacto_apellido = '<span class="contacto_apellido">'+ ((obj.apellido !== null) ? obj.apellido.trim() : "") +'</span>';
		$('#solicitudes_web_datos_contacto_apellido').html(contacto_apellido);
		
		var contacto_telefono = '<span class="contacto_telefono">'+ ((obj.telefono !== null) ? obj.telefono.trim() : "") +'</span>';
		$('#solicitudes_web_datos_contacto_telefono').html(contacto_telefono);
		
		var contacto_rut = '<span class="contacto_rut">'+ ((obj.rut !== null) ? obj.rut.trim() : "") +'</span>';
		$('#solicitudes_web_datos_contacto_rut').html(contacto_rut);
		
		var json_aux = JSON.stringify(obj);
		var contacto_email = "<span class='contacto_email'><a href='#' data-modulo-tag='"+ Configuraciones.getConfiguraciones().general_tag +"' data-contacto-id='' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + ((obj.email !== null) ? obj.email.trim() : "") +"</a></span>";
		$('#solicitudes_web_datos_contacto_email').html(contacto_email);
		
		var contacto_botones = 'Datos del contacto <small class="pull-right fw600 text-primary"><a onclick="editarDatosContacto()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>';
		$('#solicitudes_web_datos_contacto_acciones').html(contacto_botones);
	});
}
 
 function enviarEditarDatosContacto(boton) 
{
	var first_name = $('input#contacto_nombre').val();
	var last_name = $('input#contacto_apellido').val();
	var phone_fax = $('input#contacto_rut').val();
	var email1 = $('input#contacto_email').val();
	var phone_home = $('input#contacto_telefono').val();

	if(!validarEditarContacto())
		return false;
		
	var contacto_id = $('input[name=solicitudes_web_cliente_id]').val();
	
	var $btn = $(boton);
    $btn.button('loading');

	var data = { 
		'contacto_id' : contacto_id,
		'first_name' : first_name,
		'last_name' : last_name,
		'rut_c' : phone_fax,
		'email1' : email1,
		'phone_home' : phone_home
	};
	
	$.post(Configuraciones.getConfiguraciones().url_set_editar_contactos_web, data).done(function(response){
		if(response.trim() == "1")
		{
			cancelarContactoSolicitudesWeb();
			FuncionesGenerales.refrescarRegistroTabla();
		}
		else
		{
			$btn.button('reset');
		}
	});
		
}

function enviarEditarDatosSolicitud(boton) 
{
		
	var fecha 				  = $('input#solicitud_fecha').val();
	var canal 				  = $('input#solicitud_canal').val();
	var adultos 			  = $('select#solicitud_adultos').val();
	var fecha_asignacion      = $('input#solicitud_fecha_asignacion').val();
	var ninos				  = $('select#solicitud_ninos').val();
	var fecha_flexible 		  = $('select#solicitud_fecha_flexible').val();
	var habitaciones 		  = $('select#solicitud_habitaciones').val();
   var agente_viaje 	      = $('input#solicitud_agente_viaje').val();
   var edad_nino			  = $('input#solicitud_edad_ninos').val();
   var oportunidad_id = $('input[name=solicitudes_web_oportunidad_id]').val();
   
   var $btn = $(boton);
    $btn.button('loading');	

	var data = { 
		'oportunidad_id'   : oportunidad_id,
		'fecha'      : fecha,
		'canal'      : canal,
		'adultos'          : adultos,
		'fecha_asignacion'  : fecha_asignacion,
		'ninos'            : ninos,
		'fecha_flexible'   : fecha_flexible,
		'habitaciones' : habitaciones,
		'agente_viaje'           : agente_viaje,
		'edad_nino'           : edad_nino,
	};
	
	$.post(Configuraciones.getConfiguraciones().url_set_editar_detalle_web, data).done(function(response){
		if(response.trim() == "1")
		{
			cancelarEditarDatosSolicitud();
			FuncionesGenerales.refrescarRegistroTabla();
		}
		else
		{
			$btn.button('reset');
		}
	});
}

function validarEditarContacto()
{
	var name = $('input#contacto_nombre').val();
	var rut_c = $('input#contacto_rut').val();
	var email1 = $('input#contacto_email').val();
	var phone_office = $('input#contacto_telefono').val();
	var validate = true;
	
	if(name.trim().length == 0)
	{
		// $('input#contacto_nombre').css({"background-color": "rgba(224, 5, 5, 0.2)"});
		$('#mensaje_contacto_nombre').show();
		validate = false;
	}
	else
	{
		// $('input#contacto_nombre').removeAttr('style').css({"padding": "4px", "width": "100%"});
		$('#mensaje_contacto_nombre').hide();
	}
	
	if(rut_c.trim().length == 0)
	{
		// $('input#contacto_rut').css({"background-color": "rgba(224, 5, 5, 0.2)"});
		$('#mensaje_contacto_rut').show();
		validate = false;
	}
	else
	{
		// $('input#contacto_rut').removeAttr('style').css({"padding": "4px", "width": "100%"});
		$('#mensaje_contacto_rut').hide();
	}
	
	if(email1.trim().length == 0)
	{
		// $('input#contacto_email').css({"background-color": "rgba(224, 5, 5, 0.2)"});
		$('#mensaje_contacto_email').html('* Obligatorio').show();
		validate = false;
	}
	else
	{
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var test_result = re.test(email1);

		if(!test_result) 
		{
			// $('input#contacto_email').css({"background-color": "rgba(224, 5, 5, 0.2)"});
			$('#mensaje_contacto_email').html('* Formato no válido').show();
			validate = false;
		}
		else
		{
			// $('input#contacto_email').removeAttr('style').css({"padding": "4px", "width": "100%"});
			$('#mensaje_contacto_email').hide();
		}
	}
	
	if(phone_office.trim().length == 0)
	{
		// $('input#contacto_telefono').css({"background-color": "rgba(224, 5, 5, 0.2)"});
		$('#mensaje_contacto_telefono').show();
		validate = false;
	}
	else
	{
		// $('input#contacto_telefono').removeAttr('style').css({"padding": "4px", "width": "100%"});
		$('#mensaje_contacto_telefono').hide();
	}
	
	return validate;
}

function resetSolicitudSolicitudesWeb() 
{
	var solicitud_fecha = '<span class="solicitud_fecha"></span>';
	$('#solicitudes_web_datos_solicitud_fecha').html(solicitud_fecha);
	
	var solicitud_canal = '<span class="solicitud_canal"></span>';
	$('#solicitudes_web_datos_solicitud_canal').html(solicitud_canal);
	
	var solicitud_adultos = '<span class="solicitud_adultos"></span>';
	$('#solicitudes_web_datos_solicitud_adultos').html(solicitud_adultos);
	
	var solicitud_fecha_asignacion = '<span class="solicitud_fecha_asignacion"></span>';
	$('#solicitudes_web_datos_solicitud_fecha_asignacion').html(solicitud_fecha_asignacion);
	
	var solicitud_ninos = '<span class="solicitud_ninos"></span>';
	$('#solicitudes_web_datos_solicitud_ninos').html(solicitud_ninos);

	var solicitud_fecha_flexible = '<span class="solicitud_fecha_flexible"></span>';
	$('#solicitudes_web_datos_solicitud_fecha_flexible').html(solicitud_fecha_flexible);
	
	var solicitud_habitaciones = '<span class="solicitud_habitaciones"></span>';
	$('#solicitudes_web_datos_solicitud_habitaciones').html(solicitud_habitaciones);
	
	var solicitud_fecha_formulacion = '<span class="solicitud_fecha_formulacion"></span>';
	$('#solicitudes_web_datos_solicitud_fecha_formulacion').html(solicitud_fecha_formulacion);
	
	var solicitud_agente_viaje = '<span class="solicitud_agente_viaje"></span>';
	$('#solicitudes_web_datos_solicitud_agente_viaje').html(solicitud_agente_viaje);
	
	var solicitud_edad_ninos = '<span class="solicitud_edad_ninos"></span>';
	$('#solicitudes_web_datos_solicitud_edad_ninos').html(solicitud_edad_ninos);
	
	var contacto_botones = 'Datos de la solicitud <small class="pull-right fw600 text-primary"><a onclick="editarDatosSolicitud()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>';
	$('#solicitudes_web_datos_solicitud_acciones').html(contacto_botones);
}

function resetContactoSolicitudesWeb() 
{
	var contacto_nombre = '<span class="contacto_nombre"></span>';
	$('#solicitudes_web_datos_contacto_nombre').html(contacto_nombre);
	
	var contacto_telefono = '<span class="contacto_telefono"></span>';
	$('#solicitudes_web_datos_contacto_telefono').html(contacto_telefono);
	
	var contacto_rut = '<span class="contacto_rut"></span>';
	$('#solicitudes_web_datos_contacto_rut').html(contacto_rut);
	
	var contacto_email = '<span class="contacto_email"></span>';
	$('#solicitudes_web_datos_contacto_email').html(contacto_email);
	
	var contacto_botones = 'Datos del contacto <small class="pull-right fw600 text-primary"><a onclick="editarDatosContacto()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>';
	$('#solicitudes_web_datos_contacto_acciones').html(contacto_botones);
}
