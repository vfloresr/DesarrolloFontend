<div class="section-separator">
   <h2 id="recompra_title" class="pl15 section-title" style="color:#696969;"><i class="glyphicon glyphicon-list-alt"></i> Recompra</h2>
   <div id="recompra_section" class="col-md-12 section-container">
    <div class="alert alert-success alert-dismissable text-center" style="display:none;font-size:16px;" id="msj_estado_recompra" data-dismiss="alert">Recompra Abierto...</div>
	  <div class="panel">
         <div class="panel-heading">
            <ul id="recompra_tab" class="nav panel-tabs-border panel-tabs panel-tabs-left">
               <li class="mostrar-abierto-table-recompra active">
                  <a href="#tab4_1" data-toggle="tab" aria-expanded="true">
					Nuevas
                  </a>
               </li>
               <li class="mostrar-pendiente-table-recompra">
                  <a href="#tab4_2" data-toggle="tab" aria-expanded="false">
					Pendientes
                  </a>
               </li>
               <li class="mostrar-carrado-table-recompra">
                  <a href="#tab4_3" data-toggle="tab" aria-expanded="false">
					Cerradas
                  </a>
               </li>
            </ul>
         </div>
         <div class="panel-body">
            <div class="tab-content pn br-n">
               <div id="tab4_1" class="mostrar-abierto-table-recompra tab-pane active">
                  <div class="row">
                     <table id="abierto_table_recompra" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <th class="no-sort"></th>
							  <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto <label class="label label-success">USD</label></th>
                              <th>Fecha de compra </br> (YYYY-MM-DD)</th>
                              <th>Email / Teléfono</th>
							  <th style="display:none;">Fecha Modificacion</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
               <div id="tab4_2" class="mostrar-pendiente-table-recompra tab-pane">
                  <div class="row">
                     <table id="negociacion_table_recompra" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <th class="no-sort"></th>
                              <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto<label class="label label-success"><i class="fa fa-money"></i> USD</label></th>
                              <th>Fecha de compra </br> (YYYY-MM-DD)</th>
                              <th>Email / Teléfono</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
               <div id="tab4_3" class="mostrar-carrado-table-recompra tab-pane ">
                  <div class="row">
                     <table id="cerrados_table_recompra" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <th class="no-sort"></th>
                              <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto <label class="label label-success"><i class="fa fa-money"></i> USD</label></th>
                              <th>Fecha de compra </br> (YYYY-MM-DD)</th>
                              <th>Email / Teléfono</th>
							  <th>Estado</th>
                              <th>Productos</th>
                              <th>Descripción</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>