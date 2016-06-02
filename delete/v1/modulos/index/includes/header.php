<header class="navbar navbar-fixed-top navbar-shadow bg-dark">
    <div class="navbar-branding dark bg-dark">
        <a class="navbar-brand" href="">
        <img src="assets/img/logos/logo_cocha.jpg" alt="Logo" class="logo-cocha">
        </a>
        <span id="toggle_sidemenu_l" class="ad ad-lines"></span>
    </div>
    <div class="navbar-form navbar-left navbar-search square" role="search">
		<?php if( $_SESSION['cartera_cliente'] == "1") { ?>
			<div class="form-group">
				<div style="padding: 0px;" class="col-md-12">
				  <select class="multiselect5">
					<option value="no" selected>Nombres</option>
					<option value="ne">Negocios</option>
				  </select>
				</div>
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="buscar_contacto" placeholder="Búsqueda Cartera de Clientes">
			</div>
			<a href="#buscador_section" type="button" id="buscar_contacto_anchor" class="btn btn-danger btn-sm scroll_menu hidden-xs"><i class="fa fa-search"></i></a>
		<?php } ?>
		<span id="header_label_title" class="hidden-xs hidden-sm hidden-md" style="font-size: 19px;color: white;"><b>CROSS ESPERADO: <?php echo($_SESSION['crosselling_sucursal']) ?>% / CROSS CONSULTOR: <?php echo($_SESSION['crosselling_ejecutiva']) ?>% </b></span>
    </div>
    <ul class="nav navbar-nav navbar-right">
        <li class="dropdown menu-merge">
            <div class="navbar-btn btn-group">
                <button data-toggle="dropdown" onclick="Mensajes.init();Mensajes.cargarConversacionesChat();" class="btn btn-sm dropdown-toggle">
                    <span class="fa fa-envelope fs14 va-m"></span>
                    <!--se oculto la notificaion de email.-->
                    <span id="cantidad_msj_nuevo" class="badge badge-danger"></span>
                </button>
                <div class="dropdown-menu dropdown-persist w350 animated animated-shorter fadeIn" role="menu">
                    <div class="panel mbn">
                        <div class="panel-menu">
                            <div class="btn-group btn-group-justified btn-group-nav" role="tablist">
                                <!-- <a href="#nav-tab1" data-toggle="tab" data-tab="mensaje" id="tab_mensaje" class="chat-menu btn btn-default btn-sm active">Mensajes</a> -->
                                <a href="#nav-tab2" data-toggle="tab" data-tab="conversacion" id="tab_conversacion" class="btn btn-default btn-sm active">Conversación</a>
                            </div>
                        </div>
                        <div class="panel-body panel-scroller scroller-navbar pn">
                            <div class="tab-content br-n pn">
								<!--
									<div id="nav-tab1" class="tab-pane alerts-widget active" role="tabpanel">
										<div class="media">
											<a class="media-left" href="#"> <span class="glyphicon glyphicon-user text-info"></span> </a>
											<div class="media-body">
												<h5 class="media-heading">Nombre Nombre
													<small class="text-muted"></small>
												</h5>
											</div>
											<div class="media-right">
												<div class="btn-group">
													<a href="javascript:void(0);" class="btn btn-default btn-xs light">
														<i class="fa fa-eye text-success"></i> Ver conversación
													</a>
												</div>
											</div>
										</div>
									</div>
								-->
                                <div id="nav-tab2" class="tab-pane chat-widget active" role="tabpanel">
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer text-center p7">
							<div class="area-enviar-comentario">
								<textarea class="form-control" maxlength="200" id="textArea1" rows="3"></textarea>
								<hr style="margin: 5px 0;" class="alt short">
								<button id="enviar_mensaje_chat" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Enviando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Enviado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" style="width: 35%; margin-left: 65%;" type="button" class="btn btn-xs btn-primary btn-block">Enviar</button>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </li>
        <li class="menu-divider hidden-xs">
            <i class="fa fa-circle"></i>
        </li>
        <li class="dropdown menu-merge">
            <a href="#" class="dropdown-toggle fw600 p15" data-toggle="dropdown">
            <img src="<?php echo $configuraciones->getAvatarUsuario(); ?>" alt="avatar" class="mw30 br64">
            <span class="hidden-xs pl15"> <?php echo $_SESSION['user_name'];?> </span>
            <span class="caret caret-tp hidden-xs"></span>
            </a>
            <ul class="dropdown-menu list-group dropdown-persist w100" role="menu">
				<?php if($configuraciones->getActivarContrasenia()) { ?>
					<li class="list-group-item">
						<a onclick="modal_cambiar_password(this);" href="#"> <span class="fa fa-gear"></span> Ajustes </a>
					</li>
				<?php } ?>
                <li class="list-group-item">
                    <a href="javascript:void(0);" class="logout"><span class="fa fa-power-off pr5"></span> Salir </a>
                </li>
            </ul>
        </li>
    </ul>
</header>
