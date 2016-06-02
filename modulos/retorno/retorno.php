<div class="section-separator">
    <h2 id="retorno_title" class="pl15 section-title"><i class="glyphicon glyphicon-list-alt"></i> Retorno</h2>
    <div id="retorno_section" class="col-md-12 section-container">
        <div class="panel">
            <div class="panel-heading">
                <ul id="retorno_tab" class="nav panel-tabs-border panel-tabs panel-tabs-left">
                    <li class="mostrar-abierto-table-retorno active">
                        <a href="#tab7_1" data-toggle="tab" aria-expanded="true">
                        Nuevas
                        </a>
                    </li>
                    <li class="mostrar-pendiente-table-retorno">
                        <a href="#tab7_2" data-toggle="tab" aria-expanded="false">
                        Pendientes
                        </a>
                    </li>
                    <li class="mostrar-carrado-table-retorno">
                        <a href="#tab7_3" data-toggle="tab" aria-expanded="false">
                        Cerradas
                        </a>
                    </li>
                </ul>
            </div>
            <div class="panel-body">
                <div class="tab-content pn br-n">
                    <div id="tab7_1" class="mostrar-abierto-table-retorno tab-pane active">
                        <div class="row">
                            <table id="abierto_table_retorno" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th>Negocio</th>
                                        <th>Destino / Ruta</th>
                                        <th>Comprador</th>
                                        <th>Encuesta</th>
                                        <th>Monto de la venta <label class="label label-success">USD</label></th>
                                        <th>Fecha de retorno</br> (YYYY-MM-DD)</th>
                                        <th>Email / Teléfono</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="tab7_2" class="mostrar-pendiente-table-retorno tab-pane">
                        <div class="row">
                            <table id="negociacion_table_retorno" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th>Negocio</th>
                                        <th>Destino / Ruta</th>
                                        <th>Comprador</th>
                                        <th>Monto de la venta</th>
                                        <th>Fecha de retorno</br> (YYYY-MM-DD)</th>
                                        <th>Email / Teléfono</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="tab7_3" class="mostrar-carrado-table-retorno tab-pane ">
                        <div class="row">
                            <table id="cerrados_table_retorno" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                                <thead class="danger">
                                    <tr>
                                        <th class="no-sort"></th>
                                        <th>Negocio</th>
                                        <th>Destino / Ruta</th>
                                        <th>Comprador</th>
										<th>Encuesta</th>
                                        <th>Monto de la venta <label class="label label-success"><i class="fa fa-money"></i> USD</label></th>
                                        <th>Fecha de retorno</br> (YYYY-MM-DD)</th>
                                        <th>Email / Teléfono</th>
                                        <th>Motivo de cierre</th>
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