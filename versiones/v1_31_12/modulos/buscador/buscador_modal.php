<div class="modal fade" id="buscador_modal" tabindex="-1" data-width="760" role="dialog" data-backdrop="static" aria-labelledby="solicitudes_web_oportunidades" aria-hidden="true">
  <div style="width:99%; height: 90%; margin-top: 1% !important; text-rendering: auto;" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h2 class="modal-title custom_align">Detalle Contacto<span id="perdido_title_number"></span></h2>
      </div>
      <div class="modal-body">
		<div style="width: 100% !important;" class="admin-form theme-primary">
		  <div class="panel heading-border panel-primary">
			<div class="panel-body bg-light">
				<div style="display: flex;"> 
					<span>Datos del contacto</span>
					<!-- <a style="width:2%;margin-left: 10px;margin-bottom: 5px; padding: 0px;" title="Editar Datos del Contacto" onclick="editarDatosContacto();" class="btn btn-xs btn-warning btn-block"><i class="fa fa-edit"></i></a> -->
				</div> 
				<hr style="margin: 0px 0px !important;">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6">
						<ul class="icon-list">
						  <li id="solicitudes_web_datos_contacto_nombre">
							<b> Rut:</b> <span id="buscador_contacto_rut"></span>
						  </li>
						  <li id="solicitudes_web_datos_contacto_nombre">
							<b> Nombre:</b> <span id="buscador_contacto_nombre"></span>
						  </li>
						  <li id="solicitudes_web_datos_contacto_telefono">
							<b> Email:</b> <span id="buscador_contacto_email"></span>
						  </li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6">
						<ul class="icon-list">
						  <li id="solicitudes_web_datos_contacto_rut">
							<b> Fecha Nacimiento:</b> <span id="buscador_contacto_fecha_nacimiento"></span>
						  </li>
						  <li id="solicitudes_web_datos_contacto_email">
							<b> Teléfono:</b> <span id="buscador_contacto_telefono"></span>
						  </li>
						  <li id="solicitudes_web_datos_contacto_email">
							<b> Comentario:</b> <span id="buscador_contacto_comentario"></span>
						  </li>
						</ul>
					</div>
				</div>
				<h3 style="margin-bottom: 20px !important;">Oportunidades de Ventas</h3>
				<div class="row">
					<table id="buscador_table_oportunidades" class="table table-striped table-hover table table-bordered table-striped custom-cross">
						<thead>
						  <tr>
							<th>Negocio</th>
							<th>Tipo de Oportunidad de Ventas</th>
							<th>Tipo de Cliente</th> 
							<th>Destino / Ruta</th>
						  </tr>
						</thead>
						<tbody></tbody>
				  </table>
				</div>
				<h3 style="margin-bottom: 20px !important;">Post Ventas</h3>
				<div class="row">
					<table id="buscador_table_tareas" class="table table-striped table-hover table table-bordered table-striped custom-cross">
						<thead>
						  <tr>
							<th>Negocio</th>
							<th>Tipo de Post Venta</th>
							<th>Tipo de Cliente</th> 
							<th>Destino / Ruta</th>
							<th>Fecha de Salida</th>
							<th>Fecha de Retorno</th>
						  </tr>
						</thead>
						<tbody></tbody>
				  </table>
				</div>
			</div>
		  </div>
		</div>
      </div>
      <div class="modal-footer ">
        <button type="button" id="modal_buscador_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Cerrar</button>
	  </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>