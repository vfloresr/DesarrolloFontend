<div class="section-separator">
   <h2 id="fugados_title" class="pl15 section-title"><i class="glyphicon glyphicon-list-alt"></i> Fugados</h2>
   <div id="fugados_section" class="col-md-12 section-container">
      <div class="panel">
         <div class="panel-heading">
            <ul id="fugados_tab" class="nav panel-tabs-border panel-tabs panel-tabs-left">
               <li class="mostrar-abierto-table-fugados active">
                  <a href="#tab5_1" data-toggle="tab" aria-expanded="true">
                  Nuevas
                  </a>
               </li>
               <li class="mostrar-pendiente-table-fugados">
                  <a href="#tab5_2" data-toggle="tab" aria-expanded="false">
                  Pendientes
                  </a>
               </li>
               <li class="mostrar-carrado-table-fugados">
                  <a href="#tab5_3" data-toggle="tab" aria-expanded="false">
                  Cerradas
                  </a>
               </li>
            </ul>
         </div>
         <div class="panel-body">
            <div class="tab-content pn br-n">
               <div id="tab5_1" class="mostrar-abierto-table-fugados tab-pane active">
                  <div class="row">
                     <table id="abierto_table_fugados" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <!-- <th class="no-sort"></th><th>Numero negocio</th> <th>Rut comprador</th><th>Nombre comprador</th><th>Monto de la venta</th><th>Clasificacion cliente</th><th>Fecha de compra</th><th>Destino</th><th>Dias</th><th>Email / Telefono</th> -->
							  <th class="no-sort"></th>
                              <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto de la venta <label class="label label-success">USD</label></th>
                              <th>Fecha de compra </br> (YYYY-MM-DD)</th>
                              <th>Email / Teléfono</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
               <div id="tab5_2" class="mostrar-pendiente-table-fugados tab-pane">
                  <div class="row">
                     <table id="negociacion_table_fugados" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <!-- <th class="no-sort"></th><th>Numero negocio</th><th>Rut comprador</th> <th>Nombre comprador</th><th>Monto de la venta</th><th>Clasificacion cliente</th><th>Fecha de compra</th> <th>Destino</th> <th>Dias</th><th>Email / Telefono</th> -->
							  <th class="no-sort"></th>
                              <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto de la venta <label class="label label-success"><i class="fa fa-money"></i> USD</label></th>
                              <th>Fecha de compra</br> (YYYY-MM-DD)</th>
                              <th>Email / Teléfono</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
               <div id="tab5_3" class="mostrar-carrado-table-fugados tab-pane ">
                  <div class="row">
                     <table id="cerrados_table_fugados" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                              <!-- <th class="no-sort"></th><th>Numero negocio</th><th>Rut comprador</th><th>Nombre comprador</th><th>Monto de la venta</th><th>Clasificacion cliente</th> <th>Fecha de compra</th><th>Destino</th><th>Dias</th><th>Email / Telefono</th> <th>Productos</th><th>Descripccion</th><th>Motivo de cierre</th> -->
							  <th class="no-sort"></th>
							  
                              <th>Negocio</th>
                              <th>Destino / Ruta</th>
                              <th>Comprador</th>
                              <th>Monto de la venta <label class="label label-success"><i class="fa fa-money"></i> USD</label></th>
                              <th>Fecha de compra</br> (YYYY-MM-DD)</th>
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