<div class="section-separator">
    <h2 id="oportunidad_title" class="pl15 section-title" style="color:#696969;"><i class="glyphicon glyphicon-list-alt"></i> Cross Selling</h2>
    <!--div class="alert alert-success" style="display:none;width:180px;"; id="msj_estado" data-dismiss="alert">Cross Selling Abierto...</div!-->
	<div id="cross_selling_section" class="col-md-12 section-container">
	<div class="alert alert-success alert-dismissable text-center" style="display:none;font-size:16px;" id="msj_estado" data-dismiss="alert">Cross Selling Abierto...</div>
        <div class="panel">
		 
            <div class="panel-heading">
			       <ul id="cross_selling_tab" class="nav panel-tabs-border panel-tabs panel-tabs-left">
                    <li class="mostrar-abierto-table-cross-selling active">
                        <a href="#tab2_1" data-toggle="tab" aria-expanded="true">
                        Nuevas
                        </a>
                    </li>
                    <li class="mostrar-pendiente-table-cross-selling">
                        <a href="#tab2_2" data-toggle="tab" aria-expanded="false">
                        Pendientes
                        </a>
                    </li>
                    <li class="mostrar-carrado-table-cross-selling">
                        <a href="#tab2_3" data-toggle="tab" aria-expanded="false">
                        Cerradas
                        </a>
                    </li>
                </ul>
            </div>
			
            <div class="panel-body">
			
                <div class="tab-content pn br-n">
                    <div id="tab2_1" class="mostrar-abierto-table-cross-selling tab-pane active">
                        <div class="row">
                            <table id="abierto_table" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
										<th>Negocio</th>
                                        <th>Destino / Ruta</th>
                                        <th>Comprador</th>
                                        <th class="no-sort">Email / Teléfono</th>
                                        <th>Salida </br> (YYYY-MM-DD)</th>
                                        <!--th>
                                            Aéreo
                                            <label class="label label-success"><i class="fa fa-money"></i> USD</label>
                                        </th!-->
                                        <th>
                                            Oportunidad
                                            <label class="label label-success"></label>
                                        </th>
										<th style="display:none;">Fecha Modificacion</th>
										<!--th> Hotel</th>
                                        <!--th> Asistencia</th!-->
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="tab2_2" class="mostrar-pendiente-table-cross-selling tab-pane">
                        <div class="row">
                            <table id="negociacion_table" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th>Negocio</th>
                                        <th>Destino / Ruta</th>
                                        <th>Comprador</th>
                                        <th class="no-sort">Email / Teléfono</th>
                                        <th>Salida </br> (YYYY-MM-DD)</th>
                                        <th>
                                            Aéreo <label class="label label-success">USD</label>
                                        </th>
                                        <th>
                                            Oportunidad <label class="label label-success">USD</label>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
					
                    <div id="tab2_3" class="mostrar-carrado-table-cross-selling tab-pane ">
                        <div class="row">
                            <table id="cerrados_table" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th> Negocio</th>
                                        <th> Destino / Ruta</th>
                                        <th> Comprador</th>
                                        <th class="no-sort">Email / Teléfono</th>
                                        <th> Salida </br>(YYYY-MM-DD)</th>
                                        <th> Aéreo <label class="label label-success">USD</label></th>
                                        <th> Oportunidad <label class="label label-success">USD</label></th>
										<th> Estado</th>
                                        <th> Productos</th>
										<th style="display:none;">Fecha Modificacion</th>
								
										
                                        <!--th> Descripción</th>
                                        <th> Motivo de cierre</th!-->
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
					
                </div>
				
            </div>
			
        </div>
    </div>
</div>

<div id="myModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- dialog body -->
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        Cross Selling Abierto....!!!
      </div>
      <!-- dialog buttons -->
      <div class="modal-footer"><button type="button" class="btn btn-primary">Aceptar</button></div>
    </div>
  </div>
</div>