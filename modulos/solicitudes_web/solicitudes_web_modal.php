<link rel="stylesheet" type="text/css" href="assets/fonts/glyphicons-pro/glyphicons-pro.css">
   
<div class="modal fade" id="solicitudes_web_oportunidades" tabindex="-1" data-width="760" role="dialog" data-backdrop="static" aria-labelledby="solicitudes_web_oportunidades" aria-hidden="true">
   <div style="width:100%; height: 90%; margin-top: 1% !important; text-rendering: auto;" class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" aria-hidden="true"></button>
            <h2 class="modal-title custom_align">
               <span class="glyphicon glyphicon-tags" style="color:#FACC2E;"></span>&nbsp;&nbsp;Producto: <span class="producto_solicitud" id="producto_solicitud"></span>
            </h2>
            <!--div class="col-lg-12 col-offset-6 " style="position:absolute;top:22px;left:1160px;";>
               <p><strong><?php echo strtoupper($_SESSION['nombre']).'   '.strtoupper($_SESSION['apellido']) ?><strong></p>
                </div-->
            <div class="row">
               <div class="col-md-12">
                  <!--li id="estados_solicitudes_web" style="text-decoration:none;"!-->
                  <!--div class="btn-group btn_estados"!-->
				  <div class="btn-group col-md-offset-8">
                     <button id="btn_estado" style="margin-top: 0px !important; margin-left: 40px !important;" type="button" class="btn btn-sm active" ><i class='fa fa-list-alt'></i>Nuevo</button>
                     <button id="btn_estado_drop_down" style="margin-top: 0px !important;" type="button" class="btn btn-sm dropdown-toggle"  data-toggle="dropdown">
                     <span class="caret"></span>
                     <span class="sr-only">Nuevo</span>
                     </button>
                     <ul style="margin-left: 10%;" class="dropdown-menu" role="menu">
                        <li class="solicitudes_web_opciones_primera_llamada">
                           <a onclick="modal_primera_llamada_oportunidades_web(this);" class="solicitudes_web_estados" href="#" ><i class="fa fa-crosshairs"></i>&nbsp;&nbsp;Contactado</a>
                        </li>
                        <li class="solicitudes_web_opciones_seguimiento_1">
                           <a onclick="modal_seguimiento_uno_oportunidades_web(this);" class="solicitudes_web_estados" href="#" ><i class="fa fa-crosshairs"></i>&nbsp;&nbsp;Cotizacion Enviada</a>
                        </li>
                        <li class="solicitudes_web_opciones_seguimiento_2">
                           <a onclick="modal_seguimiento_dos_oportunidades_web(this);" class="solicitudes_web_estados" href="#" ><i class="fa fa-crosshairs"></i>&nbsp;&nbsp En Negociacion</a>
                        </li>
                     
					 </ul>
                     <button id="btn_cerrado_ganado" onclick="modal_cierre_ganador_oportunidades_web(this);" type="button" class="btn btn-sm" > Cerrado Ganado</button>
                     <button id="btn_cerrado_perdido" onclick="modal_cierre_perdido_oportunidades_web(this);" type="button" class="btn btn-sm"> Cerrado Perdido</button>
                  </div>
               </div>
            </div>
         </div>
         <!--modal-header !-->                                                                                                         
         <div class="modal-body">
            <div class="admin-form theme-primary">
               <div class="panel heading-border panel-primary panel_encabezado";>
                  <div style="padding: 15px 0px !important;" class="panel-body bg-light">
                     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 divisor-table">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <h3 id="solicitudes_web_datos_contacto_acciones" class="mt15 mbn ph10 pb5 br-b fw600">Datos del contacto
                              <small class="pull-right fw600 text-primary"><a onclick="editarDatosContacto()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>
                           </h3>
                           <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                              <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last solicitudes_web_datos_contacto">
                                 <thead>
                                    <tr class="hidden">
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td style="white-space:nowrap;"> 
										<i class="glyphicon glyphicon-user fa-lg pr10"></i> 
										  <span> Nombres:</span> 
										<span id="contacto_nombre"></span>
									   </td>
                                       <td id="solicitudes_web_datos_contacto_nombre" style="text-align:left;">
									   <span class="contacto_nombre"></span></td>
                                    </tr>
                                    <tr>
                                       <td style="white-space:nowrap;">
                                          <i class="fa fa-phone"></i> 
										  <span>&nbsp;&nbsp;&nbsp;&nbsp;Tel&eacute;fonos:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_contacto_telefono" style="text-align:left;">
									   <span class="contacto_telefono"></span></td>
                                    </tr>
									<tr> 
                                       <td style="white-space:nowrap;">
                                          <i class="fa fa-envelope-o"></i> 
										  <span>&nbsp;&nbsp;&nbsp;&nbsp;Email:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_contacto_email">
									   <span class="contacto_email"></span></td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                              <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last solicitudes_web_datos_contacto">
                                 <thead>
                                    <tr class="hidden">
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
									<tr>
                                       <td style="white-space:nowrap;">
                                         <i class="glyphicon glyphicon-user fa-lg pr10"></i>
										 <span>Apellidos:</span>
                                         <!--span id="contacto_apellido"></span!-->
									   </td>
                                       <td id="solicitudes_web_datos_contacto_apellido">
									      <span class="contacto_apellido"></span>
									   </td>
                                    </tr>
        							<tr>
                                       <td>
                                         <i class="glyphicon glyphicons-file fa-lg pr10"></i><span>Rut:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_contacto_rut">
									   <span class="contacto_rut"></span></td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
						
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <h3 id="solicitudes_web_datos_solicitud_acciones" class="mt15 mbn ph10 pb5 br-b fw600">Datos de la solicitud
                              <small class="pull-right fw600 text-primary"><a onclick="editarDatosSolicitud()" href="javascript:void(0);" style="cursor:pointer;"><i class="glyphicons glyphicons-pencil" ></i> Editar</a></small>
                           </h3>
                           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last solicitudes_web_datos_solicitud">
                                 <thead>
                                    <tr class="hidden">
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                       <td>
                                          <i class="fa fa-circle text-warning fs8 pr15"></i><span>Adultos:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_adultos"><span class="solicitud_adultos"></span></td>
                                    </tr>
								    
									 <tr>
                                       <td>
                                          <i class="fa fa-circle text-warning fs8 pr15"></i><span>Ni&ntilde;os:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_ninos"><span class="solicitud_ninos"></span></td>
                                    </tr>
									
									<tr>
                                       <td>
                                          <i class="fa fa-circle text-warning fs8 pr15"></i><span>Edad Ni&ntilde;os:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_edad_ninos"><span class="solicitud_edad_ninos"></span></td>
                                    </tr>
									
									
									
                                    <tr> 
                                       <td style="white-space: nowrap;">
                                          <i class="fa fa-circle text-warning fs8 pr15"></i>
										    <span style="white-space: nowrap;">Fecha Asignaci&oacute;n:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_fecha_asignacion">
									   <span class="solicitud_fecha_asignacion"></span></td>
                                    </tr>
                                  
                                    
									
								 </tbody>
                              </table>
                           </div>
                           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last solicitudes_web_datos_solicitud">
                                 <thead>
                                    <tr class="hidden">
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td style="white-space: nowrap;">
                                          <i class="fa fa-circle text-warning fs8 pr15"></i><span>Habitaciones:</span> 
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_habitaciones"><span class="solicitud_habitaciones"></span></td>
                                    </tr>
                                     																		
									 <tr>
                                       <td>
                                          <i class="fa fa-circle text-warning fs8 pr15"></i><span>Fecha Viaje:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_fecha"><span class="solicitud_fecha"></span></td>
                                    </tr>
									 		
									 
									 <!--tr>
                                       <td style="white-space: nowrap;">
                                          <i class="fa fa-circle text-warning fs8 pr15"></i>
										  <span>Fecha Creacion:</span> 
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_fecha_formulacion">
									   <span class="solicitud_fecha_formulacion"></span></td>
                                    </tr-->
									
									<tr>
                                       <td>
                                          <i class="fa fa-circle text-warning fs8 pr15"></i>
										   <span>Fecha Flexible:</span> 
                                       </td>
                                        <td id="solicitudes_web_datos_solicitud_fecha_flexible">
										<span class="solicitud_fecha_flexible"></span></td>
                                    </tr>
									
									
									
									<tr>
                                       <td style="white-space: nowrap;">
                                          <i class="fa fa-circle text-warning fs8 pr15" ></i>
										  <span style="white-space: nowrap;">Agente de Viajes:</span>
                                       </td>
                                       <td id="solicitudes_web_datos_solicitud_agente_viaje"><span class="solicitud_agente_viaje"></span></td>
                                    </tr>
									
									                               							 
								 </tbody>
                              </table>
                           </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 solicitudes_web_datos_solicitud">
                           <table width="100%">
                                 <thead>
                                    <tr class="hidden">
                                       <th></th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
								  <tr>
                                    <td>
									<i class="fa fa-circle text-warning fs8 pr15" style="margin-left:20px;"></i>
									<span>Descripcion:
									     
										<div id="descripcion_solicitud" class="comment more"></div>
									  </div>
                         		   </td>
                                  </tr>								   
                                </tbody>
                              </table>
						</div>
                    </div>
                     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h3 style="margin-bottom: 2px !important;">&nbsp;&nbsp;Productos Solicitados</h3>
                        <div class="row" >
                           <table id="ver_detalle_negocio_pasajeros" class="table table-hover" style="border-bottom: 1px solid #e6e6e6;">
                              <tbody id="productos_solicitudes_web">
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <!--row !-->
               </div>
               <!--container !-->
               <div class="row">
                  <div class="col-md-12">
                     <div class="text-center" style="margin-bottom:0px;position:relative;">
                        <button type="button" id="modal_solicitudes_web_oportunidades_cancel"  class="boton_listo btn btn-success btn-lg col-sm-offset-2 col-md-offset-2" ><span class="glyphicon glyphicon-remove-sign"></span> Listo</button>
                     </div>                                    
                  </div>
               </div>
            </div>
            <!--panel-body bg-light !-->
         </div>
         <!--admin-form theme-primary!--> 
      </div>
      <!--panel heading-border panel-primary !-->			 
   </div>
   <!--modal body !-->  
   <input type="hidden" name="solicitudes_web_comentarios" value="">
   <input type="hidden" name="solicitudes_web_cliente_id" value="">
   <input type="hidden" name="solicitudes_web_oportunidad_id" value="">
   <input type="hidden" id="email_contacto" name="email_contacto" value="">
</div>
<!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->
</div>
<!--modal fade -->
