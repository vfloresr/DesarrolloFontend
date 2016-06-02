<div class="modal fade" id="retorno_encuesta_modal" tabindex="-1" role="dialog" aria-labelledby="ganado" aria-hidden="true">
  <div style="width: 80%; height: 90%; margin-top: 1% !important;"  class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Encuesta - <span id="retorno_encuesta_nombre"></span> (<span id="retorno_encuesta_estado"></span>)</h2>
      </div>
      <div style="max-height: 600px; overflow-y: scroll;" class="modal-body">
		  <div class="panel">
			<div class="panel-heading">
				<h3 style="color: #aa6708;">Detalles</h3>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-xs-12 col-sm-6">
						<div class="label-information">
							<label style="color: #aa6708;">Rut: </label>
							<span id="retorno_encuesta_rut"></span>
						</div>
						<div class="label-information">
							<label style="color: #aa6708;">Fecha de Respuesta: </label>
							<span id="retorno_encuesta_fecha_respuesta"></span>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6">
						<div class="label-information">
							<label style="color: #aa6708;">Fecha de Envio: </label>
							<span id="retorno_encuesta_fecha_envio"></span>
						</div>
						<div class="label-information">
							<label style="color: #aa6708;">Fecha de Vista: </label>
							<span id="retorno_encuesta_fecha_vista"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel">
			<div class="panel-heading">
				<h3 style="color: #aa6708;">Preguntas y Respuestas</h3>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-xs-12 col-sm-12">
						<div class="bs-callout bs-callout-warning" style="border-left-color: #aa6708;">
							<h4 style="color: #aa6708;" id="retorno_encuesta_pregunta_1"></h4>
							<p id="retorno_encuesta_respuesta_1"></p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12">
						<div class="bs-callout bs-callout-warning" style="border-left-color: #aa6708;">
							<h4 style="color: #aa6708;" id="retorno_encuesta_pregunta_2"></h4>
							<p id="retorno_encuesta_respuesta_2"></p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12">
						<div class="bs-callout bs-callout-warning" style="border-left-color: #aa6708;">
							<h4 style="color: #aa6708;" id="retorno_encuesta_pregunta_3"></h4>
							<p id="retorno_encuesta_respuesta_3"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
      </div>
      <div class="modal-footer ">
        <button type="button" id="retorno_encuesta_modal_success" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Listo</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
