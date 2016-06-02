<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <title>Sesión bloqueada | Cocha CRM</title>
        <meta name="keywords" content="HTML5 Bootstrap 3 Admin Template UI Theme" />
        <meta name="description" content="AbsoluteAdmin - A Responsive HTML5 Admin UI Framework">
        <meta name="author" content="AbsoluteAdmin">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Font CSS (Via CDN) -->
        <link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'>
        <!-- Theme CSS -->
        <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
        <!-- Admin Forms CSS -->
        <link rel="stylesheet" type="text/css" href="assets/admin-tools/admin-forms/css/admin-forms.css">
        <!-- Favicon -->
        <link rel="shortcut icon" href="assets/img/favicon.ico">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="external-page external-alt sb-l-c sb-r-c">
        <!-- Start: Main -->
        <div id="main" class="animated fadeIn">
            <!-- Start: Content-Wrapper -->
            <section id="content_wrapper">
                <!-- Begin: Content -->
                <section id="content">
                    <div class="admin-form theme-info mw600" style="margin-top: 11%;" id="login1">
                        <div class="row mb15 table-layout">
                            <div class="col-xs-6 pln">
                            </div>
                            <div class="col-xs-6 va-b pr5">
                                <div class="login-links text-right">
                                    <a href="index.php" class="" title="Cocha CRM">¿No eres <?php echo($_SESSION['nombre'].' '.$_SESSION['apellido']) ?>?</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <!-- end .form-header section -->
                            <div class="panel-body bg-light pn">
                                <div class="row table-layout">
                                    <div class="col-xs-3 p20 pv15 va-m br-r bg-light">
                                        <img class="br-a bw4 br-grey img-responsive center-block" src="assets/img/logos/logo_cocha.jpg">
                                    </div>
                                    <div class="col-xs-9 p20 pv15 va-m bg-light">
                                        <h3 class="mb5"> <?php echo($_SESSION['nombre'].' '.$_SESSION['apellido']) ?> </h3>
                                        <p class="text-muted"><?php echo($_SESSION['email']) ?></p>
                                        <div class="section mt25">
                                            <code class="required-field-modal-product" style="display:none">*** Contraseña obligatoria</code>
											<label for="password" class="field prepend-icon">
                                            <input type="password" name="password" class="gui-input" placeholder="Ingrese contraseña">
                                            <input type="hidden" name="username_sesion_previa" value="<?php echo($_SESSION['user_name']) ?>">
                                            <label for="password" class="field-icon">
                                            <i class="fa fa-lock"></i>
                                            </label>
                                            </label>
                                        </div>
                                        <!-- end section -->
                                    </div>
                                </div>
                            </div>
                            <!-- end .form-body section -->
                        </div>
							<div style="padding: 12px; display: none;" class="alert alert-danger alert-border-left alert-dismissable mensaje-login-pagina-bloqueo col-xs-8">
							   <b>Importante:</b> No se puede ingresar, revise sus datos.
							</div>
							<button type="button" id="desbloquer_success" class="button btn-info pull-right" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Desbloqueando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Desbloqueado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!">Desbloquear</button>
                    </div>
                </section>
                <!-- End: Content -->
            </section>
            <!-- End: Content-Wrapper -->
        </div>
        <!-- End: Main -->
        <!-- BEGIN: PAGE SCRIPTS -->
        <!-- jQuery -->
        <script src="vendor/jquery/jquery-1.11.1.min.js"></script>
        <script src="vendor/jquery/jquery_ui/jquery-ui.min.js"></script>
        <!-- Theme Javascript -->
        <script src="assets/js/utility/utility.js"></script>
        <script src="assets/js/demo/demo.js"></script>
        <script src="assets/js/main.js"></script>
		<script src="modulos/pagina_bloqueada/js/pagina_bloqueada.js"></script>
		<script src="assets/js/configuraciones.js"></script>
		<script src="assets/js/funciones_generales.js"></script>
		<script src="assets/js/mensajes.js"></script>
        <!-- END: PAGE SCRIPTS -->
    </body>
</html>