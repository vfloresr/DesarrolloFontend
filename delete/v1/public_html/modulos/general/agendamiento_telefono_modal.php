<div class="modal fade" id="agendamiento_telefono_modal" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="agendamiento_telefono_modal" aria-hidden="true">
    <div style="width: 50%; height: 80%; margin-top: 5% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align title_ganado_modal">Genera Llamada<span id="perdido_title_number"></span></h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row">
                    <div class="visible-motivos-perdidos-modal">
                        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">
                            <h3 class="mb15">Asunto<code class="required-field-modal-product" style="display: none;" >* Obligatorio</code></h3>
                            <select class="form-control" name="motivos-perdidos-modal" id="motivo_perdido">
                                <option value="1">Respondió</option>
                                <option value="2">No Respondió</option>
                                <option value="3">Ocupado, volver a llamar</option>
                                <option value="4">Realizar encuesta telefónica</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xs-12 mt15">
                        <h3 class="mb15">Comentarios</h3>
                        <textarea class="form-control" rows="3" id="comentarios_perdido"></textarea>
                    </div>
					<div class="col-xs-12 col-sm-12 col-md-2 col-lg-12">
                        <h3 class="mb15">Volver a Llamar</h3>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<input type="text" class="form-control" name="modal_agendamiento_telefono_fecha">
						</div>
						<div class="col-md-6">
						  <input type="text" class="form-control" id="datetimepicker5">
						</div>
                    </div>
                </form>
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_perdido_success" onclick="$('#agendamiento_telefono_modal').modal('toggle');"  data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..." class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Guardar</button>
                <button type="button" id="modal_perdido_cancel" onclick="$('#agendamiento_telefono_modal').modal('toggle');"   class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>