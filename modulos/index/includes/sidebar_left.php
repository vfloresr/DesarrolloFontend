<aside id="sidebar_left" class="nano nano-light affix">
	<!-- Start: Sidebar Left Content -->
	<div class="sidebar-left-content nano-content">
		<!-- Start: Sidebar Header -->
		<header class="sidebar-header">
			<!-- Sidebar Widget - Search (hidden) -->
			<div class="sidebar-widget search-widget hidden">
				<div class="input-group">
					<span class="input-group-addon">
					<i class="fa fa-search"></i>
					</span>
					<input type="text" id="sidebar-search" href="#clientes_section" class="form-control" placeholder="Búsqueda Cartera de Clientes">
				</div>
			</div>
		</header>
		
	
		<!-- End: Sidebar Header -->
		<!-- Start: Sidebar Menu -->
		<ul class="nav sidebar-menu">
			<li class="sidebar-label pt20">MENU</li>
			<li>
			   				
				<!--a class="accordion-toggle menu-open" href="#"!-- JG 03-05-2016!-->
				<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
				<span class="glyphicon glyphicon-fire"></span>
				
				<span style="text-transform: uppercase;" class="sidebar-title">Oportunidades de Venta</span>
				<span class="caret"></span>
				</a>
				<!--ul class="nav sub-nav"!-->
				<ul class="nav sub-nav panel-collapse collapse in" id="collapse1">
					<?php if( $_SESSION['solcitides_web'] == "1") { ?>
						<li>
							<a id="solicitudes_section_menu" href="#solicitudes_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Solicitudes Web
							<span id="solicitudes_web_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['croseling'] == "1") { ?>					
						
						 <li class="cross_menu">
						   <a id="cross_selling_section_menu" href="#cross_selling_section" data-toggle="popover" class="scroll_menu">
							  <span class="glyphicon glyphicon-list-alt"></span>
							   <span>Cross Selling</span> 
							 <span id="cross_selling_count" class="label label-rounded label-danger"></span>
							</a>
						</li> 
                 
					<?php } ?>
					<?php if( $_SESSION['recompra'] == "1") { ?>
						<li class="recompra_menu">
							<a id="recompra_section_menu" href="#recompra_section" data-toggle="popover"  class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Recompra
							<span id="recompra_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['fugados'] == "1") { ?>
						 <li class="fugados_menu">
							<a id="fugados_section_menu" href="#fugados_section" data-toggle="popover" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Fugados
							<span id="fugados_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?> 
				
						
				</ul>
				
			</li>
			<li>
				<!--a class="accordion-toggle menu-open" href="#"!-->
				<a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
				<span class="glyphicon glyphicon-check"></span>
				<span style="text-transform: uppercase;" class="sidebar-title">Post Venta y Fidelizaci&oacute;n</span>
				<span class="caret"></span>
				</a>
				<ul class="nav sub-nav panel-collapse collapse in" id="collapse2">
				<!--ul class="nav sub-nav"!-->
					<?php if( $_SESSION['proximos_viajes'] == "1") { ?>
						<li class="proxviajes_menu">
							<a id="proximos_viajes_section_menu" href="#proximos_viajes_section"  class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Pr&oacute;ximos Viajes
							<span id="proximos_viajes_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['retornos'] == "1") { ?>
						<li class="retorno_menu">
							<a id="retorno_section_menu" href="#retorno_section" class="scroll_menu" data-toggle="popover">
							<span class="glyphicon glyphicon-list-alt"></span>
							Retorno
							<span id="retorno_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['cumpleanio'] == "1") { ?>
						 <li class="cumpleanios_menu">
							<a id="cumpleanios_section_menu" href="#cumpleanios_section" class="scroll_menu" data-toggle="popover">
							<span class="glyphicon glyphicon-list-alt"></span>
							Cumplea&ntilde;os
							<span id="cumpleanios_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['cartera_cliente'] == "1") { ?>
						<li>
							<a id="clientes_section_menu" href="#clientes_section" class="scroll_menu clientes_section_btn">
							<span class="glyphicon glyphicon-list-alt"></span>
							Cartera de Clientes
							</a>
						</li>
					<?php } ?>
				</ul>
			</li>
		</ul>
		<!-- End: Sidebar Menu -->
		
		<!-- Cross Selling -->	
		  <div id="popover_cross" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Cross Selling</h5>
			    <div class="row">
				  <div class="col-md-12">
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Negocios vacacionales emitidos que cuentan con al menos un ticket y existe la oportunidad de emitir asistencia, hoteles u ambos.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		
		<!-- Recompra-->	 
		<div id="popover_recompra" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Recompra</h5>
			    <div class="row">
				  <div class="col-md-12">
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Negocios vacacionales de clientes pagadores que compraron el a&ntilde;o pasado en este mismo trimestre y no han vuelto a comprar otro viaje.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		 
		<!-- Fugados--> 
		 <div id="popover_fugados" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Fugados</h5>
			    <div class="row">
				  <div class="col-md-12">
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Misma definici&oacute;n de clientes Recompra pero cuya fecha de compra es anterior al a&ntilde;o pasado.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		 
		<!-- Proximos Viajes --> 
		 <div id="popover_proxviajes" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Pr&oacute;ximos Viajes</h5>
			    <div class="row">
				  <div class="col-md-12"> 
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Negocios que inician su viaje dentro de los pr&oacute;ximos 45 d&iacute;as.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		 		 	 
	  	<!-- Retorno--> 
		 <div id="popover_retorno" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Retorno</h5>
			    <div class="row">
				  <div class="col-md-12">
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Negocios que han regresado de su viaje en los &uacute;ltimos 15 d&iacute;as o que regresar&aacute;n en los pr&oacute;ximos 7 d&iacute;as.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		 	 
		  	<!-- Cumpleaños--> 
		 <div id="popover_cumpleanio" class="col-md-12 hidden">
			    <h5 class="mt5 mbn ph10 pb5 br-b fw600">Cumplea&ntilde;os</h5>
			    <div class="row">
				  <div class="col-md-12">
					  <table class="table mbn tc-med-1 tc-bold-last tc-fs13-last">
						<tr>
							<td><p style="text-align: justify;">Clientes con fecha de cumplea&ntilde;os el mes en curso y la fecha de nacimiento se rescata del profile de Turbo.</p></td>
						 </tr>
					  </table>
				  </div>
				</div>
		 </div>
		 
		 
   </div><!-- End: Sidebar Left Content -->
</aside>
<!-- jQuery -->
  <script src="vendor/jquery/jquery-1.11.1.min.js"></script>
  <script src="vendor/jquery/jquery_ui/jquery-ui.min.js"></script>


 <script type="text/javascript">
jQuery.noConflict();
  jQuery(document).ready(function() {

    "use strict";

    // Init Demo JS  
    Demo.init();
 

    // Init Theme Core    
    Core.init();


    // Init Widget Demo JS
    // demoHighCharts.init();

    // Because we are using Admin Panels we use the OnFinish 
    // callback to activate the demoWidgets. It's smoother if
    // we let the panels be moved and organized before 
    // filling them with content from various plugins

    // Init plugins used on this page
    // HighCharts, JvectorMap, Admin Panels

    // Init Admin Panels on widgets inside the ".admin-panels" container
    $('.admin-panels').adminpanel({
      grid: '.admin-grid',
      draggable: true,
      preserveGrid: true,
      // mobile: true,
      onStart: function() {
        // Do something before AdminPanels runs
      },
      onFinish: function() {
        $('.admin-panels').addClass('animated fadeIn').removeClass('fade-onload');

        // Init the rest of the plugins now that the panels
        // have had a chance to be moved and organized.
        // It's less taxing to organize empty panels
        demoHighCharts.init();
        runVectorMaps(); // function below
      },
      onSave: function() {
        $(window).trigger('resize');
      }
    });


   });
  
  
  
  </script>