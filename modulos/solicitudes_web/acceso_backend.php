<?php
	require_once('../../config/configuraciones.php');
	$configuraciones = new Configuraciones;
	$url = $configuraciones->getUrlPrototipo();
	// echo $_SERVER['HTTP_HOST']."/modulos/solicitudes_web/cotizador_email_backend.php?id_registro=";
	// die();
    $username = md5($_GET['user_name']);
	//$url = "desa-backend.cochadigital.com/service/v4_1/rest.php";
    //login -----------------------------------------     
		 $parametros = array(
			"user_name" => $username
		);
    $login_result = call("get_acceso_api", $parametros, $url);
	
	// echo $login_result->user_name;
	// echo $login_result->user_hash;
    // echo "<pre>";
    // print_r($login_result);
    // echo "</pre>";
	$login_parameters = array(
         "user_auth" => array(
              "user_name" => $login_result->user_name,
              "password" => $login_result->user_hash,
              "version" => "1"
         ),
         "application_name" => "RestTest",
         "name_value_list" => array(),
    );

    $login = call("login", $login_parameters, $url);
	
	// echo $_GET['user_name'];
	// die();
	Header("Location: /modulos/solicitudes_web/cotizador_email_backend.php?id_registro=".$_GET['id_registro']."&id_solicitud=".$_GET['id_solicitud']."&id_session=".$login->id);
	
function call($method, $parameters, $url)
    {
        ob_start();
        $curl_request = curl_init();

        curl_setopt($curl_request, CURLOPT_URL, $url);
        curl_setopt($curl_request, CURLOPT_POST, 1);
        curl_setopt($curl_request, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl_request, CURLOPT_HEADER, 1);
        curl_setopt($curl_request, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl_request, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_request, CURLOPT_FOLLOWLOCATION, 0);

        $jsonEncodedData = json_encode($parameters);

        $post = array(
             "method" => $method,
             "input_type" => "JSON",
             "response_type" => "JSON",
             "rest_data" => $jsonEncodedData
        );

        curl_setopt($curl_request, CURLOPT_POSTFIELDS, $post);
        $result = curl_exec($curl_request);
        curl_close($curl_request);

        $result = explode("\r\n\r\n", $result, 2);
        $response = json_decode($result[1]);
        ob_end_flush();

        return $response;
    }

?>



















