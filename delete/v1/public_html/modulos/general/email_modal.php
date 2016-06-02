<div class="modal fade" id="email_modal" tabindex="-1" role="dialog" aria-labelledby="email_modal" data-backdrop="static" aria-hidden="true">
    <div style="width: 100%; height: 90%; margin-top: 1% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align"> <i class="fa fa-envelope-o"></i> Formulario de envío de email</h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                                <label class="label-form-mail">Elija una plantilla</label>
                                <select name="mail_modal_plantilla_value" class="form-control input-sm"></select>
                            </div>
                        </div>
						<hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label class="label-form-mail">Nombre</label>
                                <input type="text" name="mail_modal_nombre_input_value"class="form-control input-sm">
                            </div>
                        </div>
                        <hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label class="label-form-mail">Asunto</label>
                                <input type="text" name="mail_modal_asunto_input_value"class="form-control input-sm">
                            </div>
                        </div>
                        <div id="show_destino">
                            <hr class="alt short">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <label class="label-form-mail">Destino</label>
                                    <input type="text"  name="mail_modal_destino_input_value" class="form-control input-sm">
                                </div>
                            </div>
                        </div>
                        <hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 editor_comentario">
                                <label class="label-form-mail">Comentarios</label>
								<textarea id="comentarios_email_modal" class="form-control" rows="6"></textarea>
                            </div>
                        </div>
						<hr class="alt short">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label class="label-form-mail">Archivos adjuntos</label>
								<input type="file" class="gui-file" id="file-select" name="name_file[]" multiple="5">
                            </div>
                        </div>
                        <input type="hidden" name="mail_modal_comentario_input_value" value="">
                        <input type="hidden" name="mail_modal_contacto_id_input_value" value="">
                        <input type="hidden" name="mail_modal_contact_name" value="">
                        <input type="hidden" name="mail_modal_negocio_id" value="">
                        <input type="hidden" name="mail_modal_contacto_id" value="">
                        <input type="hidden" name="mail_modal_procedencia_id" value="">
                        <input type="hidden" name="mail_modal_procedencia" value="">
                        <input type="hidden" name="mail_modal_estado" value="">
                    </div>
                    <div style="max-height: 600px; overflow-y: scroll;" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 plantilla-mail"></div>
                </form>
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_enviar_mail_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Enviando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Enviado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" class="btn btn-success btn-sm"><span class="fa fa-envelope-o"></span> Enviar</button>
                <button type="button" id="modal_enviar_mail_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
    </div>
</div>
