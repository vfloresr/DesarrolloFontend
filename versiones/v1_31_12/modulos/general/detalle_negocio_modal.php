<div class="modal fade" id="ver" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="ver" aria-hidden="true">
    <div style="width: 100%; height: 90%; margin-top: 1% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align">Detalle negocio <span id="ver_title"></span></h2>
            </div>
            <div style="max-height: 600px; overflow-y: scroll;" class="modal-body">
                <div class="panel">
                    <div class="panel-heading">
                        <h3>Negocio</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="label-information">
                                    <label>Negocio: </label>
                                    <span id="ver_numero_negocio"></span>
                                </div>
                                <div class="label-information">
                                    <label>Venta Total: </label>
                                    <span id="ver_monto_venta"></span>
                                </div>
                                <div class="label-information">
                                    <label>Oportunidad: </label>
                                    <span id="ver_monto_oportunidad"></span>
                                </div>
                                <div class="label-information">
                                    <label>Días: </label>
                                    <span id="ver_dias"></span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="label-information">
                                    <label>Fecha de Salida: </label>
                                    <span id="ver_salida"></span>
                                </div>
                                <div class="label-information">
                                    <label>Destino: </label>
                                    <span id="ver_destino"></span>
                                </div>
                                <div class="label-information">
                                    <label>Ruta: </label>
                                    <span id="ver_ruta"></span>
                                </div>
                                <div class="label-information">
                                    <label>Comprador: </label>
                                    <span id="ver_id_comprador"></span>
                                </div>
                            </div>
                            <table id="ver_detalle_negocio" class="table table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Venta Pax</th>
                                        <th>Tour Operador</th>
                                        <th>Ruta</th>
                                        <th>Referencia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel mt15">
                    <div class="panel-heading">
                        <h3>Pasajeros</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <table id="ver_detalle_negocio_pasajeros" class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Rut</th>
                                        <th>Nombre</th>
                                        <!-- <th>Clasificación</th> -->
                                        <!-- <th>Tipo Pasajero</th> -->
                                        <th>Teléfono</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_ver_success"  class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Volver </button> 
                <!--<button type="button" id="modal_ver_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span>Salir</button> -->
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>