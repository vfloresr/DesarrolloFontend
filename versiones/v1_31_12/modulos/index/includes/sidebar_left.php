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
			   				
				<a class="accordion-toggle menu-open" href="#">
				<span class="glyphicon glyphicon-fire"></span>
				
				<span style="text-transform: uppercase;" class="sidebar-title">Oportunidades de Venta</span>
				<span class="caret"></span>
				</a>
				<ul class="nav sub-nav">
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
						<li>
							<a id="cross_selling_section_menu" href="#cross_selling_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Cross Selling
							<span id="cross_selling_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['recompra'] == "1") { ?>
						<li>
							<a id="recompra_section_menu" href="#recompra_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Recompra
							<span id="recompra_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['fugados'] == "1") { ?>
						<li>
							<a id="fugados_section_menu" href="#fugados_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Fugados
							<span id="fugados_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?> 
				
			      <?php  { ?>
						<!--li>
							<a id="prueba_section_menu" href="#prueba_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Prueba Jose
							<span id="prueba_count" class="label label-rounded label-danger"></span>
							</a>
						</li!-->
					<?php } ?>
				
				</ul>
				
			</li>
			<li>
				<a class="accordion-toggle menu-open" href="#">
				<span class="glyphicon glyphicon-check"></span>
				<span style="text-transform: uppercase;" class="sidebar-title">Post Venta y Fidelización</span>
				<span class="caret"></span>
				</a>
				<ul class="nav sub-nav">
					<?php if( $_SESSION['proximos_viajes'] == "1") { ?>
						<li>
							<a id="proximos_viajes_section_menu" href="#proximos_viajes_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Próximos Viajes
							<span id="proximos_viajes_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['retornos'] == "1") { ?>
						<li>
							<a id="retorno_section_menu" href="#retorno_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Retorno
							<span id="retorno_count" class="label label-rounded label-danger"></span>
							</a>
						</li>
					<?php } ?>
					<?php if( $_SESSION['cumpleanio'] == "1") { ?>
						<li>
							<a id="cumpleanios_section_menu" href="#cumpleanios_section" class="scroll_menu">
							<span class="glyphicon glyphicon-list-alt"></span>
							Cumpleaños
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
	</div>
	<!-- End: Sidebar Left Content -->
</aside>