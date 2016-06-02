<!-- Modal Ganado -->
<div class="modal fade" id="cliente_editar_modal" tabindex="-1" role="dialog" aria-labelledby="cambiar_password" data-backdrop="static" aria-hidden="true">
  <div style="width: 50%;" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Cartera de clientes - <span id="cliente_editar_nombre_title"></span></h2>
      </div>
      <div class="modal-body">
        <form class="form-horizontal row">
		  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
			<h3 class="mb15">Email</h3>
			<input type="text" class="form-control" name="cliente_editar_email">
		  </div>
		  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
			<h3 class="mb15">Fecha de Nacimiento</h3>
			<input type="text" class="form-control" name="cliente_editar_fecha_nacimiento">
		  </div>
		  <input type="hidden" name="cliente_editar_cliente_id">
        </form>
      </div>
      <div class="modal-footer ">
        <button type="button" id="cliente_editar_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Actualizando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Actualizado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Actualizar</button>
        <button type="button" id="cliente_editar_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
<!-- End: Modal Ganado -->