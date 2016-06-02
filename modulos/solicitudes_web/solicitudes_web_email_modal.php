

<meta content="text/html; charset=ISO-8859-15" http-equiv="Content-Type">

<div class="modal fade" id="email_solicitud_web" tabindex="-1" role="dialog" aria-labelledby="email_solicitud_web" data-backdrop="static" aria-hidden="true">
  <div style="width: 100%; height: 90%; margin-top: 0%;" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
		<h2 class="modal-title custom_align"> <i class="fa fa-envelope-o"></i> <span>Formulario Env&iacute;o Cotizaci&oacute;n</span> - <span style="color: #3498db !important; cursor: pointer !important;" data-toggle="popover" id ="detalles_pasajero" class="contacto_nombre"></span></h2>
      </div>
      <div class="modal-body">
		 <div style="position: absolute; z-index: 9999; width: 98%; height: 120%; background-color: #fafafa; margin: 0%; display: none;" id="email_enviado_correcto_mensaje">
			<div style="margin-top: 15%;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
				<div style="font-size: 20px;" class="alert alert-micro alert-border-left alert-success alert-dismissable">
				  <i class="fa fa-check pr10"></i>
				  <strong>Su correo ha sido enviado correctamente. Muchas gracias.</strong>
				</div>
			</div>
		 </div>
		 <form class="form-horizontal row">
			 <input type="hidden" name="mail_modal_solicitud_web_contacto_id_value" value=""/>
			 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			   <div class="selector_plantilla_show">
				   <div class="row">
					 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
					   <label class="label-form-mail">Elija una plantilla</label>
					   <select name="mail_modal_solicitud_web_plantilla_value" class="form-control input-sm">
							
					   </select>
					 </div>
				   </div>
				   <hr class="alt short">
			   </div>
			   <div class="row">
				 <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5"> 
				   <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					   <label class="label-form-mail">Destino</label>
				   </div>
				   <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
					   <select name="mail_modal_solicitud_web_destinos_value" class="form-control input-sm"></select>
				   </div>
				 </div>
				 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<div class="selector_programas_show">
						<div class="col-xs-10 col-sm-10 col-md-3 col-lg-3">
					      <label class="label-form-mail">Programa</label>
						</div>
						<div class="col-xs-10 col-sm-10 col-md-3 col-lg-9">
							<select name="mail_modal_solicitud_web_programas_value" class="form-control input-sm"></select>
						</div>
					</div>
				 </div>
			   </div>
			   <hr class="alt short">
			   <div class="row">	
				 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
						<label class="label-form-mail">Asunto</label>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">
						<input type="text" name="mail_modal_solicitud_web_asunto_value"class="form-control input-sm">
					</div>
				 </div>
			   </div>
			   
						   
			   <hr class="alt short">
			   <div class="row">	
				 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"> 
				   <div class="col-xs-12 col-sm-12 col-md-5 col-lg-6" >
					   <label class="label-form-mail">Texto Estimado(a)</label>
				   </div>
				   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-left:-4px";>
					   <select name="mail_modal_solicitud_web_estimado_value" class="form-control input-sm">
						<option value="-999">Selecccionar...</option>
						<option value="Estimado">Estimado</option>
						<option value="Estimada">Estimada</option>
					   </select>
				   </div>
				 </div>
				 <div class="col-xs-12 col-sm-12 col-md-2 col-lg-6"> 
				   <div class="col-xs-12 col-sm-12 col-md-5 col-lg-6" style="margin-left:-20px";>
						<label class="label-form-mail">Nombre del Cliente</label>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7" style="margin-left:-20px";>
						<input type="text" name="mail_modal_solicitud_web_nombre_cliente_value" class="form-control input-sm">
					</div>
				 </div>
			   </div>
			   <hr class="alt short">
			   <div class="row">	
				 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				   <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					  <div class="panel panel-default">
						<div style="height: 40px !important; padding: 10px 10px !important;" class="panel-heading" role="tab" id="headingTarifas">
						  <h4 class="panel-title">
							<a class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#tarifas" href="#collapseTarifas" aria-expanded="true" aria-controls="collapseOne">
							  <i class="indicator glyphicon glyphicon-chevron-up  pull-right"></i> Mostrar Tarifas
							</a>
						  </h4>
						</div>
						
						<div id="collapseTarifas" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTarifas">
						  <div class="panel-body">
							<div class="row">
								<div style="margin: 5px;" class="row">
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="checkbox" name="mail_modal_solicitud_tarifas" value="Doble"> Doble  
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<input type="text" name="mail_modal_solicitud_tarifas_value" class="form-control input-sm" onkeydown="FuncionesGenerales.validarDecimal(this)" value="0.00" placeholder="0.00">
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<select name="mail_modal_solicitud_web_diviza" class="form-control input-sm">
											<option value="USD">USD</option>
											<option value="CLP$">CLP$</option>
											<option value="EUR$">EUR$</option>
										</select>
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="text" name="mail_modal_solicitud_tarifas_comentarios" class="form-control input-sm"  placeholder="Comentario">
									</div>
								</div>
								<div style="margin: 5px;" class="row">
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="checkbox" name="mail_modal_solicitud_tarifas" value="Triple"> Triple 
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<input type="text" name="mail_modal_solicitud_tarifas_value" class="form-control input-sm" onkeydown="FuncionesGenerales.validarDecimal(this)" value="0.00" placeholder="0.00">
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<select name="mail_modal_solicitud_web_diviza" class="form-control input-sm">
											<option value="USD">USD</option>
											<option value="CLP$">CLP$</option>
											<option value="EUR$">EUR$</option>
										</select>
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="text" name="mail_modal_solicitud_tarifas_comentarios" class="form-control input-sm" placeholder="Comentario">
									</div>
								</div>
								<div style="margin: 5px;" class="row">
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="checkbox" name="mail_modal_solicitud_tarifas" value="Single"> Single 
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<input type="text" name="mail_modal_solicitud_tarifas_value" class="form-control input-sm" onkeydown="FuncionesGenerales.validarDecimal(this)" value="0.00" placeholder="0.00">
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<select name="mail_modal_solicitud_web_diviza" class="form-control input-sm">
											<option value="USD">USD</option>
											<option value="CLP$">CLP$</option>
											<option value="EUR$">EUR$</option>
										</select>
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="text" name="mail_modal_solicitud_tarifas_comentarios" class="form-control input-sm" placeholder="Comentario">
									</div>
								</div>
								<div style="margin: 5px;" class="row">
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="checkbox" name="mail_modal_solicitud_tarifas" value="Plan Familiar 2 ADL + 2 NI&Ntilde;OS compartiendo habitaci&oacute;n"> Plan Familiar 2 ADL + 2 NI&Ntilde;OS compartiendo habitaci&oacute;n
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<input type="text" name="mail_modal_solicitud_tarifas_value" class="form-control input-sm" onkeydown="FuncionesGenerales.validarDecimal(this)" value="0.00" placeholder="0.00">
									</div>
									<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
										<select name="mail_modal_solicitud_web_diviza" class="form-control input-sm">
											<option value="USD">USD</option>
											<option value="CLP$">CLP$</option>
											<option value="EUR$">EUR$</option>
										</select>
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
										<input type="text" name="mail_modal_solicitud_tarifas_comentarios" class="form-control input-sm" placeholder="Comentario">
									</div>
								</div>
						    </div>
						  </div>
						</div>
					  </div>
					</div> 
				 </div>
			   </div>
			   <hr class="alt short">
			  <div style="height: 40px !important; padding: 10px 10px !important;" class="panel-heading" role="tab" id="headingVuelos">
			  <h4 class="panel-title">
				<a class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#vuelos" href="#collapseVuelos" aria-expanded="false" aria-controls="collapseOne">
				  <i class="indicator glyphicon glyphicon-chevron-up  pull-right" style="text-decoration:none;"></i>Mostrar Vuelos</a>
			  </h4>
			  </div>
			<div id="collapseVuelos" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingVuelos">
			   <div class="panel-body">  
			     <div class="row">
			      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 vuelos_cotizacion"></div>
				    
					<!--textarea align="justified" class="form-control" id="vuelos_pasajero" rows="5" ></textarea-->
				
			     </div>
              </div>
            </div>			  
			   
		
           <hr class="alt short">
 			  <div class="row">	
				 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				   <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
					  <label class="label-form-mail">Documentaci&oacute;n</label>
				   </div>
				   <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
					   <select name="mail_modal_solicitud_web_documentacion_value" class="form-control input-sm">
							<option value="-999">Selecccionar...</option>
							<option value="Para este viaje se requiere contar con pasaporte vigente (m&iacute;nimo 6 meses a la fecha de regreso) y en buen estado.">Contar con pasaporte</option>
							<option value="Para este viaje se requiere pasaporte vigente (m&iacute;nimo 6 meses a la fecha de regreso)  y visa.">Pasaporte vigente visa</option>
							<option value="Por favor revise sus documentos de viaje, carnet de identidad, Pasaporte y Visas de acuerdo al destino, teniendo presente que deben estar en buen estado y vigentes al menos 6 meses a la fecha de regreso.">Revise documentos viaje</option>
					   </select>
				   </div>
				 </div>
				 
							 
				 
				 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					  <label class="label-form-mail">Telefono Consultor</label>
				   </div>
				   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<input type="text" name="mail_modal_solicitud_web_telefonos_ejecutiva_value" class="form-control input-sm" value="224641300">
				   </div>
				 </div>
			   </div>
			   <hr class="alt short">
			   <div class="row">
				 <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 datos_practicos_cotizacion">
				 </div>
				 <div style="margin-top: 25px !important;" class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<div class="row">
						<input type="checkbox" name="mail_modal_solicitud_web_imagen_value" value="">&nbsp;Imagen
					</div>
					 <hr class="alt short">
					<div class="row">
						<input type="checkbox" name="mail_modal_solicitud_web_incluye_value" value="">&nbsp;Incluye
					</div>
					<hr class="alt short">
					<div class="incluye_pdf_cotizacion" class="row" style='margin-top:-22px;margin-left:-12px'>
						
					</div>
				 </div>
			   </div>
			   <hr class="alt short">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					   <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
							<label class="label-form-mail">Archivos adjuntos</label>
					   </div>
					   <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
							<input type="file" class="gui-file" id="file-select_solicitud_web" name="name_file[]" multiple="5">
					   </div>
					</div>
				</div>
			</div>
			<!-- <div style="max-height: 700px; overflow-y: scroll;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 plantilla-mail-solicitud-web"></div> -->
			<div style="display:none;" class="plantilla-mail-solicitud-web"></div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 plantilla-mail-solicitud-web-editor"></div>
		
		    <!--Vuelos !-->
		    <div style="display:none;" class="plantilla-mail-solicitud-web"></div>
		
		</form>
		<input type="hidden" name="mail_modal_solicitud_we_oportunidad_id" value="">
		<input type="hidden" name="mail_modal_solicitud_web_programa_id_default" value="">
		<input type="hidden" name="mail_modal_solicitud_web_datos_practicos" value="">
      </div>
      <div class="modal-footer ">
        <button type="button" id="modal_enviar_mail_solicitud_web_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Enviando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Enviado!" class="btn btn-success btn-sm"><i class="fa fa-envelope-o"></i> Enviar </button>
        <button type="button" id="modal_enviar_mail_solicitud_web_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span>Cancelar</button>
	  </div>
    </div>
  </div>
</div>

<div id="popover_detalles" class="col-md-12 hidden">
  <h5 class="mt5 mbn ph10 pb5 br-b fw600">Datos del contacto</h5>
  <div class="row">
	  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
			<thead>
			  <tr class="hidden">
				<th></th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td> <i class="glyphicon glyphicon-user fa-lg pr10"></i> <span> Nombres:</span> <span id="contacto_nombre"></span></td>
				<td><span class="contacto_nombre"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-phone"></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Tel&eacute;fonos:</span>
				</td>
				<td><span class="contacto_telefono"></span></td>
			  </tr>
			</tbody>
		  </table>
	  </div>
	  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
			<thead>
			  <tr class="hidden">
				<th></th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td>
				  <i class="glyphicon glyphicons-file"></i> <span>Rut:</span>
				</td>
				<td><span class="contacto_rut"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-envelope-o"></i> <span>Email:</span>
				</td>
				<td><span class="contacto_email"></span></td>
			  </tr>
			</tbody>
		  </table>
	  </div>
  </div>
  <h5 class="mt15 mbn ph10 pb5 br-b fw600">Datos de la solicitud</h5>
  <div class="row">
	  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
			<thead>
			  <tr class="hidden">
				<th></th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Fecha:</span>
				</td>
				<td><span class="solicitud_fecha"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Canal:</span>
				</td>
				<td><span class="solicitud_canal"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Adultos:</span>
				</td>
				<td><span class="solicitud_adultos"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Fecha Asignaci&oacute;n:</span>
				</td>
				<td><span class="solicitud_fecha_asignacion"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Ni&ntilde;os:</span>
				</td>
				<td><span class="solicitud_ninos"></span></td>
			  </tr>
			</tbody>
		  </table>
	  </div>
	  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
			<thead>
			  <tr class="hidden">
				<th></th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Fecha Flexible:</span> 
				</td>
				
				
				<td><span class="solicitud_fecha_flexible"></span></td>
			  </tr>
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Habitaciones:</span> 
				</td>
				<td><span class="solicitud_habitaciones"></span></td>
			  </tr>
			  
			  <tr>
				<td>
				  <i class="fa fa-circle text-warning fs8 pr15"></i><span>Fecha Fomulaci&oacute;n:</span> 
				</td>
				<td><span class="solicitud_fecha_formulacion"></span></td>
			  </tr>
			  <tr>
				<td>
				  	<i class="fa fa-circle text-warning fs8 pr15"></i><span>Agente de viajes:</span> <span id="solicitud_agente_viaje"></span>
				</td>
				<td><span class="solicitud_agente_viaje"></span></td>
			  </tr>
			  <tr>
				<td>
				   <i class="fa fa-circle text-warning fs8 pr15"></i><span>Edad Ni&ntilde;os:</span>
				</td>
				<td><span class="solicitud_edad_ninos"></span></td>
			  </tr>
			</tbody>
		  </table>
	  </div>
     </div>
   </div>
