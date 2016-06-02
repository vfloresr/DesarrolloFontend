<!DOCTYPE html>
<html>
    <?php include('modulos/login/includes/head.php')?>
    <body class="login-page">
          <!-- Main Container start -->
		  <div class="main-container">
			<div class="row">
			  <form action="#" id="form_login" class="login-wrapper" method="post">
		
				<div class="header">
				  <div class="row">
					<div class="col-xs-12">
					<!--MARQUEE><p style="color:red;font-size:16px;">!-----Estamos resolviendo unos Cambios Volveremos en Breve.........."</p></MARQUEE!-->
					  <h2>Ingreso<img style="width: 40%;" src="assets/img/logos/logo_cocha.jpg" alt="Logo" class="pull-right"></h2>
					  <p>Rellene los campos del formulario para ingresar.</p>
					  <p style="display:none" id="msjError" >No posee las credenciales para ingresar al sistema.</p>
					</div>
				  </div>
				</div>
				<div class="content">
				  <div class="row">
					<div class="col-xs-12">
					  <input class="form-control" id="txtuser" name="txtuser" placeholder="Ingrese Usuario" required="required" value="">
					</div>
				  </div>
				  <div class="row">
					<div class="col-xs-12">
					  <input class="form-control" id="txtpassword" name="txtpassword" placeholder="Ingrese Clave" required="required" type="password">
					</div>
				  </div>
				</div>
				<div class="actions">
				  <a id="btnLogin" class="btn btn-danger btn-lg btn-block">Ingresar</a>
				  <a class="link" href="#">No recuerda su contraseña?</a>
				  <div class="clearfix"></div>
				</div>
			  </form>
			</div>
		  </div>
		  <!-- Main Container end -->
        <script src="modulos/login/js/login.js"></script>
        <script src="assets/js/configuraciones.js"></script>
		<script src="assets/js/funciones_generales.js"></script>
		<script src="assets/js/mensajes.js"></script>
    </body>
</html>