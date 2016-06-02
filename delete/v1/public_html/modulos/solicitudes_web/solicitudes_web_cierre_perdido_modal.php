<div class="modal fade" id="cierre_perdido_oportunidades_web" tabindex="-1" role="dialog" aria-labelledby="cierre_perdido_oportunidades_web" aria-hidden="true">
  <div style="width: 50%; height: 70%; margin-top: 10% !important;" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Cierre Solicitud Web</h2>
      </div>
      <div class="modal-body">
        <form id="cierre_perdido_oportunidades_web_form" class="form-horizontal">
			<div class="row">
			  <div class="col-xs-12 col-sm-12 col-md-12">
				<h3 class="mb15">Motivo no ganado <code class="required-field-modal-motivos-solicitudes-web" style="display: none;" >* Obligatorio</code></h3>
				<input type="text" name="motivo_cierre_perdido_oportunidades_web" class="form-control">
			  </div>
			</div>
			<div class="row">
			  <div class="col-xs-12 col-sm-12 col-md-12 mt15">
				<h3 class="mb15">Comentarios</h3>
				<textarea class="form-control" rows="3" id="comentarios_cierre_perdido_oportunidades_web"></textarea>
			  </div>
			</div>
			<input type="hidden" name="comentarios_anterior_cierre_perdido" value="">
        </form>
      </div>
      <div class="modal-footer ">
        <button type="button" id="cierre_perdido_oportunidades_web_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..." class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Aceptar</button>
        <button type="button" id="cierre_perdido_oportunidades_web_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
	  </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>