<?php 
    if(empty($_SESSION)){
    	session_start();
    	session_unset(); 
    	session_destroy();
    }
    
    ?>
<head>
    <!-- Meta, title, CSS, favicons, etc. -->
    <!--<meta charset="utf-8">-->
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <!--<title>jQuery Mobile Demos</title>
        <link rel="shortcut icon" href="favicon.ico">-->
    <!--<link rel="stylesheet" href="css/themes/default/jquery.mobile-1.4.5.min.css">
        <link rel="stylesheet" href="_assets/css/jqm-demos.css">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">-->
    <meta charset="utf-8">
    <title>Cocha CRM - Iniciar Sesión</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcur icon" href="assets/img/favicon.ico">
    <!-- Font CSS (Via CDN) -->
    <link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'>
    <!-- Theme CSS -->
    <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/theme.css">
    <!-- Hacks CSS -->
    <link rel="stylesheet" type="text/css" href="assets/skin/default_skin/css/custom.css">
    <script src="js/jquery.js"></script>
    <!--<script src="_assets/js/index.js"></script>-->
    <script src="vendor/jquery/jquery-1.11.1.min.js"></script>
    <script src="vendor/jquery/jquery_ui/jquery-ui.min.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
	<style>
		html, body, .container {
			height: 100%;
		}
		.container {
			display: table;
			vertical-align: middle;
		}
		.vertical-center-row {
			display: table-cell;
			vertical-align: middle;
		}
	</style>
</head>