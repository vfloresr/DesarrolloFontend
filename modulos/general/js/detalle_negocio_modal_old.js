jQuery(document).ready(function(){
	$('#ver').on('show.bs.modal', function (e) {
	
		//Esto se hace si estamos trabajando desde el módulo de buscador.
		if($('table#table_buscador').is(':visible'))
			$('#buscador_modal').hide();
	
		$("#ver_detalle_negocio tbody").html('');
		$("#ver_detalle_negocio_pasajeros tbody").html('');
		var obj = JSON.parse($('input[name^=negocio_cross_selling]').val());
		$('#ver_title_number').html(" ("+obj.id_negocio+")");
		$('#ver_numero_negocio').html(obj.id_negocio);
	  	$('#ver_monto_venta').html('<label class="label label-success"><i class="fa fa-money"></i> USD</label> '+obj.monto_venta);
	  	$('#ver_monto_oportunidad').html('<label class="label label-success"><i class="fa fa-money"></i> USD</label> '+obj.monto_oportunidad);
	  	$('#ver_dias').html(obj.dias);
	  	$('#ver_salida').html(obj.fecha_salida);
	  	$('#ver_destino').html(obj.destino);
	  	$('#ver_ruta').html(obj.ruta);
	  	$('#ver_id_comprador').html(obj.id_contacto);
	  	
		$.get(Configuraciones.getConfiguraciones().url_get_negocio_detalle,{'negocio_id':obj.id_negocio }, function(data){
			$.each(JSON.parse(data), function(i,e){
	  			$('#ver_detalle_negocio tbody').append('<tr><th>'+e.name+'</th><th><label class="label label-success"><i class="fa fa-money"></i> USD</label> '+e.precio+'</th><th>'+e.operador+'</th><th>'+e.ruta+'</th><th>'+e.description+'</th></tr>');
	  		});
	  	});
		
		var id_trx = (typeof obj.id_oportunidad !== 'undefined') ? obj.id_oportunidad : obj.id_tarea;
		
		var data = {
			'negocio_id' : obj.id_negocio,
			'id_trx' : id_trx
		};
	  	
		$.get(Configuraciones.getConfiguraciones().url_get_detalle_pasajeros, data, function(data){
	  		
			var json_aux = $('input[name^=negocio_cross_selling]').val();
			var comprador_id = $('#ver_id_comprador').text();
			$("#ver_detalle_negocio_pasajeros tbody").html('');
			
			$.each(JSON.parse(data), function(i,e){
				
				var v_email = (e.c_envio_email > 0) ? "<span class='email_pasajero'>"+e.email+"</span> ("+ e.c_envio_email+") " : "<span class='email_pasajero'>"+e.email+"</span>";
				
				if(comprador_id == e.rut)
					$('#ver_detalle_negocio_pasajeros tbody').append("<tr style='background-color: #C2D2E8 !important'><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-nombre='" + e.nombre + "' data-json=\'"+ json_aux +"'\" data-contacto-id='"+e.rut+"' data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' href='javascript:void(0);' onclick='modal_email(this)'>" + v_email + "</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
				else	
					$('#ver_detalle_negocio_pasajeros tbody').append("<tr><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-nombre='" + e.nombre + "' data-json=\'"+ json_aux +"'\" data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' data-contacto-id='"+e.rut+"' href='javascript:void(0);' onclick='modal_email(this)'>"+v_email+"</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
			});
	  	});
	});
	
	$('#ver').on('hide.bs.modal', function (e) {
		$("#ver_detalle_negocio tbody").html('');
		$("#ver_detalle_negocio_pasajeros tbody").html('');
		
		//Esto se hace si estamos trabajando desde el módulo de buscador.
		if($('table#table_buscador').is(':visible'))
		{
			if( typeof $("#buscador_modal").data('bs.modal')  != 'undefined' && $("#buscador_modal").data('bs.modal').isShown)
			$('#buscador_modal').show();
		}	
	});
	
	$('#modal_ver_success').on('click',function(){
		$('#ver').modal('toggle');
	});
	$('#modal_ver_cancel').on('click',function(){
		$('#ver').modal('toggle');
	});
});

function editPasajero(row){
  var nRow = $(row).parents('tr')[0];
  var aData = $(nRow).children();
  
  $(nRow).html('<th>' + $(nRow).children().eq(0).text() + '</th><th>' + $(nRow).children().eq(1).text() + '</th><th><input type="number" class="form-control input-sm" name="telefono_input" value="'+ $(nRow).children().eq(2).text().trim() + '"/></th><th><code style="display:none;" class="required-field-modal-product">* Formato invalido</code><input type="text" class="form-control input-sm" onblur="FuncionesGenerales.validateEmail(this);" name="email_input" value="'+ $($(nRow).children().eq(3)).find('.email_pasajero').html() +'" /></th><th><button onClick="sendEditPasajero(this);" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Guardando..." class="btn btn-xs btn-primary" href="javascript:void(0);">Guardar</button><button href="javascript:void(0);" onClick="cancelPasajero(this);" class="btn btn-xs btn-default">Cancelar</button></th>');
}

function cancelPasajero(row){
  var nRow = $(row).parents('tr')[0];
  var aData = $(nRow).children();
  var json_aux = $('input[name^=negocio_cross_selling]').val();
  var obj = JSON.parse($('input[name^=negocio_cross_selling]').val());
  
  var id_trx = (typeof obj.id_oportunidad !== 'undefined') ? obj.id_oportunidad : obj.id_tarea;

  var data = {
	'negocio_id' : obj.id_negocio,
	'id_trx' : id_trx
  };
  
  $.get(Configuraciones.getConfiguraciones().url_get_detalle_pasajeros, data, function(data){
	  		
		var json_aux = $('input[name^=negocio_cross_selling]').val();
		var comprador_id = $('#ver_id_comprador').text();
		$("#ver_detalle_negocio_pasajeros > tbody").html("");
		
		$.each(JSON.parse(data), function(i,e){
			
			var v_email = (e.c_envio_email > 0) ? "<span class='email_pasajero'>"+e.email+"</span> ("+ e.c_envio_email+") " : "<span class='email_pasajero'>"+e.email+"</span>";
			
			if(comprador_id == e.rut)
				$('#ver_detalle_negocio_pasajeros tbody').append("<tr style='background-color: #C2D2E8 !important'><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-nombre='" + e.nombre + "' data-contacto-id='"+e.rut+"' data-modulo-tag="+ FuncionesGenerales.getModuloActual() +" href='javascript:void(0);' onclick='modal_email(this)'>" + v_email + "</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
			else	
				$('#ver_detalle_negocio_pasajeros tbody').append("<tr><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-nombre='" + e.nombre + "' data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' data-contacto-id='"+e.rut+"' href='javascript:void(0);' onclick='modal_email(this)'>"+v_email+"</a></td><td><button href='javascript:void(0);' data-nombre='" + e.nombre + "' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
		});
	});
}

function sendEditPasajero(row){

  var nRow = $(row).parents('tr')[0];
  var aData = $(nRow).children();

  var telefono  = $(nRow).find('input[name=telefono_input]').val();
  var email  = $(nRow).find('input[name=email_input]').val();
  var user_id = $(nRow).children().eq(0).text();
  
  if(email.length == 0)
  {
	$(nRow).find('input[name=email_input]').removeAttr('style');
	$(nRow).find('input[name=email_input]').parent().find('.required-field-modal-product').hide();

  }
  else
  {
     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	 var test_result = re.test(email);

	 if(!test_result) {
		$(nRow).find('input[name=email_input]').css({"background-color": "rgba(224, 5, 5, 0.2)"});
		return false;
	 }
  }
  
  var $btn = $(row);
  $btn.button('loading');
  
  var data = {
	'user_id': user_id,
	'phone_home': telefono,
	'email1': email
  }
  
  $.post(Configuraciones.getConfiguraciones().url_set_editar_contactos, data, function(data){
      if(data == 1)
	  {	
		var comprador_id = $('#ver_id_comprador').text();
		var json_aux = $('input[name^=negocio_cross_selling]').val();
		var obj = JSON.parse($('input[name^=negocio_cross_selling]').val());
		
		var id_trx = (typeof obj.id_oportunidad !== 'undefined') ? obj.id_oportunidad : obj.id_tarea;

		var data = {
			'negocio_id' : obj.id_negocio,
			'id_trx' : id_trx
		};

		$.get(Configuraciones.getConfiguraciones().url_get_detalle_pasajeros, data, function(data){
				
			var json_aux = $('input[name^=negocio_cross_selling]').val();
			var comprador_id = $('#ver_id_comprador').text();
			$("#ver_detalle_negocio_pasajeros > tbody").html("");
			
			$.each(JSON.parse(data), function(i,e){
				
				var v_email = (e.c_envio_email > 0) ? "<span class='email_pasajero'>"+e.email+"</span> ("+ e.c_envio_email+") " : "<span class='email_pasajero'>"+e.email+"</span>";
				
				if(comprador_id == e.rut)
				{
					$('#ver_detalle_negocio_pasajeros tbody').append("<tr style='background-color: #C2D2E8 !important'><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-nombre='" + e.nombre + "'  data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' data-contacto-id='"+e.rut+"' href='javascript:void(0);' onclick='modal_email(this)'>" + v_email + "</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
					if($('table#table_buscador').is(':visible'))
					{
						if( typeof $("#buscador_modal").data('bs.modal')  != 'undefined' && $("#buscador_modal").data('bs.modal').isShown)
						{
							$('#buscador_contacto_email').html( (e.email !== null) ? e.email : "Sin Email" );
							$('#buscador_contacto_telefono').html( (e.telefono !== null) ? e.telefono : "Sin Teléfono" );
						}
					}
				}
				else
				{
					$('#ver_detalle_negocio_pasajeros tbody').append("<tr><td>"+e.rut+"</td><td>"+e.nombre+"</td><td>"+e.telefono+"</td><td><a style='font-weight: bold;' data-json=\'"+ json_aux +"'\" data-modulo-tag='"+ FuncionesGenerales.getModuloActual() +"' data-nombre='" + e.nombre + "' data-contacto-id='"+e.rut+"' href='javascript:void(0);' onclick='modal_email(this)'>"+v_email+"</a></td><td><button href='javascript:void(0);' onClick='editPasajero(this);' class='btn btn-xs btn-warning'>Editar</button></td></tr>");
				}
			});
		});

		if(user_id == comprador_id)
			FuncionesGenerales.refrescarRegistroTabla();
				
		
		$btn.button('reset');
      }
  });
}

function abrirDetalleNegocioModal(el)
{
	$("#ver_detalle_negocio tbody").html('');
	$("#ver_detalle_negocio_pasajeros tbody").html('');
	
	if(typeof $('input[name^=negocio_cross_selling]').val()!=='undefined')
	{
		$('input[name^=negocio_cross_selling]').val(JSON.stringify($(el).data('json')));
		$('#ver').modal('toggle')
	}
	else
	{	
		$('#ver').append($('<input/>').attr({'name':'negocio_cross_selling','type':'hidden'}).val(JSON.stringify($(el).data('json')))).modal('toggle');
	}
}