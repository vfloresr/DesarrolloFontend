<div class="section-separator">
    <h2 id="solicitudes_title" class="pl15 section-title"><i class="glyphicon glyphicon-list-alt"></i> Solicitudes web</h2>
     <h4 id="solicitudes_title" class="pl15 section-title"><a data-modulo-tag='solicitudes_web' data-producto-id='' data-pdf='' data-oportunidad-id='' data-contacto-id='' data-contacto-nombre='' data- onclick='modal_email_solicitudes_web(this)' class='btn btn-success btn-md'>Enviar Cotización</a></h4>
	<div id="solicitudes_section" class="col-md-12 section-container">
        <div class="panel">
			<?php if( $_SESSION['boton_web'] == "1") { ?>
			<div class="panel-heading">
					<button type="button" id="cargar_btn_solicitud_web" style="display:none;" class="btn btn-hover btn-info" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cargando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Cargado!" data-mensaje-text="" data-problem-text="<i class=&quot;fa fa-exclamation-circle&quot;></i> Problemas!"> Cargar solicitudes </button>
   			       <p class="texto">Quiero Recibir Solicitudes: 
			 	  <input type="checkbox" name="check_disponibilidad" data-on-text="Si" data-on-color="success" data-off-text="No" data-off-color="danger" style="width: 339px; margin-left: -43px;"></p>
			</div>
				
		<?php } ?>
			
			<div class="panel-heading">
                <ul id="solicitudes_web_tab" class="nav panel-tabs-border panel-tabs panel-tabs-left">
                    <li class="mostrar-abierto-table-solicitudes-web active">
                        <a href="#tab3_1" data-toggle="tab" aria-expanded="true"> Nuevas </a>
                    </li>
                    <li class="mostrar-pendiente-table-solicitudes-web">
                        <a href="#tab3_2" data-toggle="tab" aria-expanded="false"> Pendientes </a>
                    </li>
                    <li class="mostrar-cerrado-table-solicitudes-web">
                        <a href="#tab3_3" data-toggle="tab" aria-expanded="false"> Cerradas </a>
                    </li>
			
					
                </ul>
            </div>
            <div class="panel-body">
                <div class="tab-content pn br-n">
                    <div id="tab3_1" class="mostrar-abierto-table-solicitudes-web tab-pane active">
                        <div class="row">
                            <table id="abierto_table_solicitudes_web" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th class="no-sort">Oportunidad</th>
                                        <th>Fecha de viaje </br> (YYYY-MM-DD)</th>
                                        <th>Nombre</th>
                                        <th>Rut</th>
                                        <th>Teléfono / Email</th>
                                        <th>Fecha asignación </br> (YYYY-MM-DD H:M:S)</th>
										<th>Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="tab3_2" class="mostrar-pendiente-table-solicitudes-web tab-pane">
                        <div class="row">
                            <table id="negociacion_table_solicitudes_web" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th class="no-sort">Oportunidad</th>
                                        <th>Fecha Viaje (YYYY-MM-DD)</th>
                                        <th>Nombre</th>
                                        <th>Rut</th>
                                        <th>Teléfono / Email</th>
                                        <th>Fecha asignación </br> (YYYY-MM-DD H:M:S)</th>
										<th>Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="tab3_3" class="mostrar-cerrado-table-solicitudes-web tab-pane ">
                        <div class="row">
                            <table id="cerrados_table_solicitudes_web" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th class="no-sort">Oportunidad</th>
                                        <th>Fecha Viaje (YYYY-MM-DD)</th>
                                        <th>Nombre</th>
                                        <th>Rut</th>
                                        <th>Teléfono / Email</th>
                                        <th>Fecha asignación </br> (YYYY-MM-DD H:M:S)</th>
										<th>Estado</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>	  
</div>