<!DOCTYPE html>
<html>
    <head>
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <title>Redireccionando...</title>
        <meta name="keywords" content="HTML5 Bootstrap 3 Admin Template UI Theme" />
        <meta name="description" content="AbsoluteAdmin - A Responsive HTML5 Admin UI Framework">
        <meta name="author" content="AbsoluteAdmin">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Font CSS (Via CDN) -->
        <link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'>
        <!-- Theme CSS -->
        <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
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
                    <div class="center-block mt70" style="max-width: 625px">
                        <!-- Login Logo + Meta -->
                        <div class="row table-layout">
                            <div class="col-xs-7 pln">
                                <h2 id="mensaje" class="text-dark mbn confirmation-header"><i class="fa fa-spinner fa-spin text-success"></i> Redireccionando...</h2>
								<input type="hidden" name="username" value="<?php echo $_REQUEST['user']?>">
                            </div>
                        </div>
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
		<script src="assets/js/configuraciones.js"></script>
		<script src="assets/js/funciones_generales.js"></script>
		
        <!-- Page Javascript -->
        <script type="text/javascript">
            jQuery(document).ready(function() {
				  "use strict";
				  Core.init();
				  Demo.init();
				  Configuraciones.init(false);
				  var data = {
						v_class : "log_out"
					}
					$.get(Configuraciones.getUrlConfiguraciones(),data,function(respuesta){
						//$(location).attr('href',"login.php");
					});	  
				  if($('input[name=username]').val()=="")
				  {
						$('#mensaje').html('<i class="fa fa-exclamation-triangle text-danger"></i> Usuario Requerido');
						$('title').html('Usuario Requerido');
						return false;
				  }
				  
				  setTimeout(function(){
					  var data = {
						user : $('input[name=username]').val()
					  }
					  
					  $.post(Configuraciones.getConfiguraciones().url_get_acceso_api, data, function(respuesta)
					  {
							var response = JSON.parse(respuesta);
							
							if(!response.resultado){
								$('#mensaje').html('<i class="fa fa-exclamation-triangle text-danger"></i> Usuario Requerido');
								$('title').html('Usuario Requerido');
								return false;
							}
							
							var data = { 
								user : response.resultado.user_name, 
								// pass : Configuraciones.getConfiguraciones().contrasenia_default,
								pass : response.resultado.user_hash,
								v_class : 'validar_usuario',
								convertir_md5 : true
							};

							$.post(Configuraciones.getUrlConfiguraciones(), data, function(respuesta)
							{
								if(!respuesta){
									$('#mensaje').html('<i class="fa fa-exclamation-triangle text-danger"></i> Usuario Requerido');
									$('title').html('Usuario Requerido');
									return false;
								}
								
								$.get( Configuraciones.getConfiguraciones().url_get_user_detalle, function( p_response ) {
									
									var response = JSON.parse(p_response);
									
									var data = {
										v_class: 'cargar_detalle_user',
										nombre: response[0].nombre,
										apellido: response[0].apellido,
										email: response[0].email,
										telefono: response[0].telefono,
										sucursal: response[0].sucursal,
										crosselling_sucursal: response[0].crosselling_sucursal,
										crosselling_ejecutiva: response[0].crosselling_ejecutiva,
										cargo: response[0].cargo,
										solcitides_web: response[0].solcitides_web,
										croseling: response[0].croseling,
										recompra: response[0].recompra,
										fugados: response[0].fugados,
										retornos: response[0].retornos,
										cumpleanio: response[0].cumpleanio,
										cartera_cliente: response[0].cartera_cliente,
										boton_web: response[0].boton_web,
										proximos_viajes: response[0].proximos_viajes
									}
									
									$.post(Configuraciones.getUrlConfiguraciones(), data ).done(function( p_response ) {
										 var response = JSON.parse(p_response);
										 if(!response.estado){
											$('#mensaje').html('<i class="fa fa-exclamation-triangle text-danger"></i> Usuario Requerido');
											$('title').html('Usuario Requerido');
											return false;
										 }
										 
										 $.get(Configuraciones.getConfiguraciones().url_set_log_acceso, { acceso : "login_api", ubicacion_acceso : "Acceso desde login Api." } ).done(function( p_response ) 
										 {
												var response = JSON.parse(p_response);
												if(response) 
												{
													 setTimeout(function(){
														$(location).attr('href',"index.php");
													 },2000); 
												 } else {
													setTimeout(function(){
														$('#mensaje').html('<i class="fa fa-exclamation-triangle text-danger"></i> Acceso Restringido.');
													},3000); 
												}
										 });
									});
								});

							});
					  });
				  },3000);
            });
        </script>
        <!-- END: PAGE SCRIPTS -->
    </body>
</html>
