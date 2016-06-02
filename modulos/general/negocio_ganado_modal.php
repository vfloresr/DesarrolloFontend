<?php
$ano = date ("Y");
$ano_actual = substr($ano, -1);
//echo "ano:".$ano_actual."<br>";
//$valor = '<span id = "oportunidad_hotel" ></span>';
?>

<div class="modal fade" id="ganado" tabindex="-1" role="dialog" aria-labelledby="ganado" aria-hidden="true">
    <div style="width: 50%; height: 90%; margin-top: 10% !important;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align title_ganado_modal">Cierre Cross Selling<span id="ganado_title_number"></span></h2>
			 
            </div>
			
            <div class="modal-body">
			 		
            	<form class="form-horizontal row">
                    <div class="row">
					   <div class="col-xs-4 form-inline">
						  <h3 class="mb15">Numero Negocio:</h3>
							 <input type="text"  class="form-control" id="numero_negocio_c1"   name = "numero_negocio_c1" maxlength="1" style="width:20%" title="Ingrese Ultimo Digito del Año Actual Ej:6" onkeydown="FuncionesGenerales.validarDecimal(this)" ></input>
					         <input type="text"  class="form-control" id="numero_negocio_c2"   name = "numero_negocio_c2" maxlength="3" style="width:25%" title="Ingrese Tres Caracteres del Codigo Ejecutivo Ej:K90 "></input>
                             <input type="text"  class="form-control" id="numero_negocio_c3"   name = "numero_negocio_c3" maxlength="3" style="width:30%" title="Ingrese Tres Numeros Correlativos ej:123" onkeydown="FuncionesGenerales.validarDecimal(this)"></input>
					   </div>
					    
					 </div>
                     <div class="row">					  
					    <div class="col-md-4">
							<h3 class="mb15">Monto<span class="label label-success">US$</span></h3>
							<input onkeydown="FuncionesGenerales.validarDecimal(this)" type="text" class="form-control" id="monto_ganado">
                        </div>
					</div>
											
					<div class="col-xs-12 col-sm-6">
                        <h3 class="mb15">Producto <code class="required-field-modal-product" style="display:none">* Obligatorio</code></h3>
                        
						<div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-1" value="hotel">
                            <label for="cross-selling-productos-1">Hotel</label>
                        </div>
						
						<div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-2" value="asistencia" >
                            <label for="cross-selling-productos-2">Asistencia</label>
                        </div>
                        <div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-3" value="auto">
                            <label for="cross-selling-productos-3">Auto</label>
                        </div>
                        <div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-4" value="circuitos">
                            <label for="cross-selling-productos-4">Circuitos</label>
                        </div>
                        <div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-5" value="cruceros">
                            <label for="cross-selling-productos-5">Cruceros</label>
                        </div>
                        <div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-6" value="traslados">
                            <label for="cross-selling-productos-6">Traslados</label>
                        </div>
						<div class="mostrar-vuelos">
							<div class="checkbox-custom mb5">
								<input type="checkbox" onclick="validar(this);" id="cross-selling-productos-8" value="vuelos">
								<label for="cross-selling-productos-8">Vuelos</label>
							</div>
						</div>
                        <div class="checkbox-custom mb5">
                            <input type="checkbox" onclick="validar(this);" id="cross-selling-productos-7" value="otros">
                            <label for="cross-selling-productos-7">Otros</label>
                        </div>
                    </div>
                  
                    <div class="col-xs-12 mt15">
                        <h3 class="mb15">Comentarios</h3>
                        <textarea class="form-control" rows="3" id="comentarios_ganado"></textarea>
                    </div>
                </form>
			   
            </div>
            <div class="modal-footer ">
                <button type="button" id="modal_success" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Cerrando..."  class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok-sign"></span> Aceptar</button>
                <button type="button" id="modal_cancel"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
