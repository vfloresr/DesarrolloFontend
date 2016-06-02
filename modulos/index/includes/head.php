<head>
	<BODY  onLoad="if ('Navigator' == navigator.appName) document.forms[0].reset();">
	<!-- Meta, title, CSS, favicons, etc. -->
	<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Inicio | Cocha CRM</title>
	<meta name="viewport"  content="width=device-width, initial-scale=1.0, no-cache">
	<!-- Font CSS (Via CDN) -->
	<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'>
	<!-- Datatables CSS -->
	<link rel="stylesheet" type="text/css" href="vendor/plugins/datatables/media/css/dataTables.bootstrap.css">
	<!-- Datatables Editor Addon CSS -->
	<link rel="stylesheet" type="text/css" href="vendor/plugins/datatables/extensions/Editor/css/dataTables.editor.css">
	<!-- Datatables ColReorder Addon CSS -->
	<link rel="stylesheet" type="text/css" href="vendor/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.min.css">
	<!-- X-editable CSS -->
	<link rel="stylesheet" type="text/css" href="vendor/plugins/xeditable/css/bootstrap-editable.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/xeditable/inputs/address/address.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/xeditable/inputs/typeaheadjs/lib/typeahead.js-bootstrap.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/datepicker/css/bootstrap-datetimepicker.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/datepicker/css/bootstrap-datetimepicker.css">
	<!-- Modal-Mail-Cotización -->
	<link rel="stylesheet" type="text/css" href="vendor/plugins/magnific/magnific-popup.css">
	<!-- Theme CSS -->
	<link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
	<link rel="stylesheet" type="text/css" href="assets/admin-tools/admin-forms/css/admin-forms.css">
	<!-- CUSTOM CSS -->
	<link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/custom.css">
	<link rel="stylesheet" type="text/css" href="vendor/plugins/webui-popover-master/src/jquery.webui-popover.css">
	
	<!-- Bootstrap Switch !-->
	<link href="vendor/plugins/bootstrap-switch-master/dist/css/bootstrap3/bootstrap-switch.css" rel="stylesheet">
	<!--- Agregado por JG el dia 03-05-2016 para mensaje de alerta de modulo cumpleaños !-->
	<link href="assets/css/jquery-ui.css" rel="stylesheet">
	<!-- Favicon -->
	<link rel="shortcut icon" href="assets/img/favicon.ico">
	<style>
		.label-form-mail {
			margin-bottom: 5px !important;
			font-weight: bold !important;
		}
		
		#preloader {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(228, 231, 234, 0.59);
			z-index: 10000;
		}
		
		#status {
			width: 30px;
			height: 30px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -15px 0 0 -15px;
			font-size: 32px;
		}
		img.encuesta {
			width: 40% !important;
			transition: all 0.5s ease;
		}
		
		img.encuesta:hover {
			width: 50% !important;
			transition: all 0.5s ease;
		}
		
		.bs-callout {
			padding: 0px 20px;
			margin: 5px 0;
			border: 1px solid #eee;
			border-left-width: 5px;
			border-radius: 3px;
		}
		
		table.solicitudes_web_datos_contacto tr td:first-child {
			border-right: 1px solid #eee !important;
		}
		
		table.solicitudes_web_datos_solicitud tr td:first-child {
			border-right: 1px solid #eee !important;
		}
		
		.divisor-table {
			border-right: 5px solid #eee !important;
		}
		
		
		.boton_listo{
			width:16%;
			font-size:14px;
		}
		
		.btn_estados{
		   margin-top:-10px;
		   left:850px;
           display:inline-block;		   
	 	}
		
		.panel_encabezado{
			margin-top:-10px;
		}
		
		.texto{
		font-size:14px;
		font-family: Arial, Helvetica, sans-serif;
		font-weight:bold;
		color:black;
		}
		
		.btn_email{
			margin-top:-17px;
		}
		
		@media screen and (min-width: 700px) and (max-width: 1000px) {
		width: 800px;
       }
	   
	   
	   a {
		color: #0254EB
		}
		a:visited {
			color: #0254EB
		}
		a.morelink {
			text-decoration:none;
			outline: none;
		}
		.morecontent span {
			display: none;
		}
		.comment {
			width: 400px;
			background-color: #f0f0f0;
			margin: 10px;
		}

		//Alinear el Data Table a la Izquierda
		#abierto_table_solicitudes_web      td { text-align: left }
		#negociacion_table_solicitudes_web 	td { text-align: left }
		#cerrados_table_solicitudes_web     td { text-align: left }
		
		.btn_group_estados{
			position: relative;
			display: inline-block;
			vertical-align: middle;
			width:160px;
			
		}
		
		.mail_modal_comentario_value{
			color: black;font-family: helvetica;font-size: 12px;line-height: 15px;
		}
		
		.saludo_cumple{
			color: #000000 !important;
		}
		
		p{
			color: #000000 !important;
		}
		
	</style>
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	<![endif]-->
</head>