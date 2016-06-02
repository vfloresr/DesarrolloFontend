<?php session_start();
include('config/configuraciones.php');
if (!isset($_SESSION['session_id']))
	header ('Location: login.php');
	
$configuraciones = new Configuraciones;

function nombremes($mes){
	setlocale(LC_TIME, 'spanish');
	$nombre=strftime("%B",mktime(0, 0, 0, $mes, 1, 2000)); 
	
	switch($nombre){
		case 'January':
		$mes = 'Enero';
		break;
		
		case 'February':
		$mes = 'Febrero';
		break;
		
		case 'March':
		$mes = 'Marzo';
		break;
		
		case 'April':
		$mes = 'Abril';
		break;
		
		case 'May':
		$mes = 'Mayo';
		break;
		
		case 'June':
		$mes='Junio';
		break;
		
		case 'July':
		$mes ='Julio';
		break;
		
		case 'August':
		$mes = 'Agosto';
		break;
		
		case 'September':
		$mes ='Septiembre';
		break;
		
		case 'October':
		$mes = 'Octubre';
		break;
				
		case 'November':
		$mes = 'Noviembre';
		break;
		
		case 'December':
		$mes = 'Diciembre';
		break;
		
	}
	//return ucwords($nombre);

  return ucwords($mes);	
}    
?>
<!DOCTYPE html>
<html>
	<!-- INICIO: HEAD -->
		<?php include('modulos/index/includes/head.php')?>
	
	    
	<!-- FIN: HEAD -->
	
    <body id="top" class="dashboard-page" >
		<div id="preloader" style="display: none;">
			<div id="status" style="display: none;"><i class="fa fa-spinner fa-spin"></i></div>
		</div>
        <div style="display: none">
            <input value="<?php echo($_SESSION['nombre']) ?>" name="input_user_detalle_nombre" type="hidden">
            <input value="<?php echo($_SESSION['apellido']) ?>" name="input_user_detalle_apellido" type="hidden">
            <input value="<?php echo($_SESSION['user_name']) ?>" name="input_username_detalle_apellido" type="hidden">
            <input value="<?php echo($_SESSION['email']) ?>" name="input_user_detalle_email" type="hidden">
            <input value="<?php echo($_SESSION['telefono']) ?>" name="input_user_detalle_telefono" type="hidden">
            <input value="<?php echo($_SESSION['sucursal']) ?>" name="input_user_detalle_sucursal" type="hidden">
            <input value="<?php echo($_SESSION['crosselling_sucursal']) ?>" name="input_user_detalle_crosselling_sucursal" type="hidden">
            <input value="<?php echo($_SESSION['crosselling_ejecutiva']) ?>" name="input_user_detalle_crosselling_ejecutiva" type="hidden">
            <input value="<?php echo($_SESSION['cargo']) ?>" name="input_user_detalle_cargo" type="hidden">
        </div>
        <!-- INICIO: PANEL DE COLORES -->
			<?php include('modulos/index/includes/panel_colores.php')?>
        <!-- FIN: PANEL DE COLORES -->
        <!-- Start: Main -->
        <div id="main">
            <!-- INICIO: HEADER -->
				<?php include('modulos/index/includes/header.php')?>
            <!-- FIN: HEADER -->
            <!-- INICIO: SIDEBAR LEFT -->
				<?php include('modulos/index/includes/sidebar_left.php')?>
            <!-- FIN: SIDEBAR LEFT -->
            <!-- INICIO: CONTENEDOR PRINCIPAL -->
				<section id="content_wrapper">
					<!-- INICIO: CONTENIDO -->
						<section id="content" class="animated fadeIn">
							<div class="row">
							 <!--html>
							<head>
							<script type="text/javascript">
							function redireccionar(){
							  window.location="http://crm.cochadigital.com/login.php";
							} 
							setTimeout ("redireccionar()", 5000); //tiempo expresado en milisegundos
							</script>
							</head>
							<body>
							<MARQUEE><p style="color:red";> Espere por favor, será redireccionado en 5 segundos.</p></MARQUEE>
							</body>
							</html!-->
			
							<?php
							
															
					
								if( $_SESSION['solcitides_web'] == "1") 
										include('modulos/solicitudes_web/solicitudes_web.php');
									if( $_SESSION['croseling'] == "1") 	
										include('modulos/cross_selling/cross_selling.php');
									if( $_SESSION['recompra'] == "1") 	
										include('modulos/recompra/recompra.php');
									if( $_SESSION['fugados'] == "1") 	
										include('modulos/fugados/fugados.php');
									if( $_SESSION['proximos_viajes'] == "1") 	
										include('modulos/proximos_viajes/proximos_viajes.php');
									if( $_SESSION['retornos'] == "1") 	
										include('modulos/retorno/retorno.php');
									if( $_SESSION['cumpleanio'] == "1") 	
										include('modulos/cumpleanos/cumpleanos.php');
									if( $_SESSION['cartera_cliente'] == "1")
									{
										include('modulos/cartera_clientes/cartera_clientes.php');
										include('modulos/buscador/buscador.php');
									}
									
																		
										include('modulos/prueba_jose/prueba_JG.php');
										
								
									
									
								?>
								
																
							</div>
						</section>
					<!-- FIN: CONTENIDO -->
					<!-- INICIO: Page Footer -->
						<?php include('modulos/index/includes/footer.php')?>
					<!-- FIN: Page Footer -->
				</section>
            <!-- FIN: CONTENEDOR PRINCIPAL -->
        </div>
        <!-- End: Main -->
		
		<!-- INICIO: CARGA DE MODALS -->
		    <?php
				 
				include ('modulos/ventana_emergente/modal_emergente.php');
				
				include('modulos/general/negocio_ganado_modal.php');
				include('modulos/general/negocio_perdido_modal.php');
				
				include('modulos/general/email_modal.php');
				include('modulos/general/detalle_negocio_modal.php');
				// include('modulos/general/agendamiento_telefono_modal.php');
				
				if( $_SESSION['proximos_viajes'] == "1") 
					include('modulos/proximos_viajes/proximos_viajes_cierre_modal.php');
				
				if( $_SESSION['solcitides_web'] == "1") 
				{
					include('modulos/solicitudes_web/solicitudes_web_cierre_ganado_modal.php');
					include('modulos/solicitudes_web/solicitudes_web_cierre_perdido_modal.php');
					include('modulos/solicitudes_web/solicitudes_web_email_modal.php');
					include('modulos/solicitudes_web/solicitudes_web_modal.php');  
					include('modulos/solicitudes_web/solicitudes_web_primera_llamada_modal.php');  
					include('modulos/solicitudes_web/solicitudes_web_seguimiento_1_modal.php');  
					include('modulos/solicitudes_web/solicitudes_web_seguimiento_2_modal.php');  
				}
				
				if( $_SESSION['retornos'] == "1") 
					include('modulos/retorno/retorno_encuesta_modal.php');  
				
				if( $_SESSION['cumpleanio'] == "1") 
					include('modulos/cumpleanos/cumpleanos_modal.php');  
				
				if( $_SESSION['cartera_cliente'] == "1") 
					include('modulos/cartera_clientes/cartera_clientes_modal.php');
				include('modulos/buscador/buscador_modal.php'); 
				
				if($configuraciones->getActivarContrasenia())
					include('modulos/general/cambiar_password_modal.php');
			?>
		<!-- FIN: CARGA DE MODALS -->
			
        <!-- BEGIN: PAGE SCRIPTS -->
			<?php include('modulos/index/includes/scripts.php')?>
        <!-- END: PAGE SCRIPTS -->
		
		
    </body>

</html>