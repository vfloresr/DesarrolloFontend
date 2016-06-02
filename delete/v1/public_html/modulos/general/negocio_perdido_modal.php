<div class="modal fade" id="perdido" tabindex="-1" role="dialog" aria-labelledby="perdido" aria-hidden="true">
    <div style="width: 50%; height: 100%; margin-top: 10% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align title_ganado_modal">Cierre Cross Selling<span id="perdido_title_number"></span></h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row">
                   
					<div class="visible-motivos-perdidos-modal">
                        <div class="col-xs-12">
                            <h3 class="mb15">Motivo No Ganado <code class="required-field-modal-product" style="display: none;" >* Obligatorio</code></h3>
                            <select class="form-control" name="motivos-perdidos-modal" id="motivo_perdido">
                                <option value="0">Seleccionar</option>
                                <option value="Visita familiar o amigo">Visita familiar o amigo</option>
                                <option value="Viaje de negocios">Viaje de negocios</option>
                                <option value="No interesado">No interesado</option>
                                <option value="Convenio directo">Convenio directo</option>
                                <option value="Otra">Otra</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xs-12 mt15">
                        <h3 class="mb15">Comentarios</h3>
                        <textarea class="form-control" rows="3" id="comentarios_perdido"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_perdido_success"  data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..." class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Aceptar</button>
                <button type="button" id="modal_perdido_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>