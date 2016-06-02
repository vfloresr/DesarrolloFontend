<div class="modal fade" id="cambiar_password" tabindex="-1" role="dialog" aria-labelledby="cambiar_password" data-backdrop="static" aria-hidden="true">
    <div style="width: 30%;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align">Cambiar contraseña</h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row">
					<div class="col-xs-12 col-sm-12">
                        <h3 class="mb15">Contraseña actual <span id="verificando-loader" style="font-size: 13px; font-style: italic;"><i class="fa fa-spinner fa-spin"></i> Verificando</span><code class="error-show-contrasenia-actual" style="display:none">* Obligatorio</code></h3>
                        <input type="password" class="form-control" name="contrasenia_actual">
                    </div>
                    <div class="col-xs-12 col-sm-12">
                        <h3 class="mb15">Nueva contraseña <code class="error-show-contrasenia-nueva" style="display:none">* Obligatorio</code></h3>
                        <input type="password" class="form-control" name="nueva_contrasenia">
                    </div>
					<div class="col-xs-12 col-sm-12">
                        <h3 class="mb15">Repetir contraseña <code class="error-show-contrasenia-repetir" style="display:none">* Obligatorio</code></h3>
                        <input type="password" class="form-control" name="repetir_contrasenia">
                    </div>
                </form>
            </div>
            <div class="modal-footer ">
                <button type="button" id="cambiar_password_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Actualizando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Actualizado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Actualizar</button>
                <button type="button" id="cambiar_password_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
    </div>
</div>