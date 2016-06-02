<div class="modal fade" id="cierre_proximos_viajes" tabindex="-1" role="dialog" aria-labelledby="cierre_proximos_viajes" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Cierre próximo viaje<span id="cierre_proximos_viajes_title_number"></span></h2>
      </div>
      <div class="modal-body">
        <form class="form-horizontal row">
          <div class="col-xs-12 mt15">
            <h3 class="mb15">Comentarios</h3>
            <textarea class="form-control" rows="3" id="comentarios_cierre_proximos_viajes"></textarea>
          </div>
		  <input type="hidden" name="comentarios_anteriores_cierre_proximos_viajes" value=""/>
        </form>
      </div>
      <div class="modal-footer ">
        <button type="button" id="modal_cierre_proximos_viajes_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..."  class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Aceptar</button>
        <button type="button" id="modal_cierre_proximos_viajes_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
	  </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>