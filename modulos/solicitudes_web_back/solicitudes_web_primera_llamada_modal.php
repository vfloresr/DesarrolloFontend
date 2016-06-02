<div class="modal fade" id="primera_llamada" tabindex="-1" role="dialog" aria-labelledby="primera_llamada" aria-hidden="true">
  <div style="width: 50%; height: 70%; margin-top: 10% !important;" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Contactado</h2>
      </div>
      <div class="modal-body">
        <form id="cierre_perdido_oportunidades_web_form" class="form-horizontal">
			<div class="row">
			  <div class="col-xs-12 col-sm-12 col-md-12 mt15">
				<h3 class="mb15">Comentarios</h3>
				<textarea class="form-control" rows="3" id="comentarios_primera_llamada_oportunidades_web"></textarea>
			  </div>
			</div>
        </form>
      </div>
	  <input type="hidden" name="comentarios_anterior_primera_llamada" value="">
	  <input type="hidden" name="oportunidad_id_primera_llamada" value="">
      <div class="modal-footer ">
        <button type="button" id="primera_llamada_oportunidades_web_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..." class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Aceptar</button>
        <button type="button" id="primera_llamada_oportunidades_web_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
	  </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>