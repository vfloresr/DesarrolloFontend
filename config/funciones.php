<?php
ini_set('display_errors', '1');
// $url = "http://104.131.85.230/prototipo/custom/service/v4_1_custom/rest.php";

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

function logout()
{
	if (isset($_SESSION['session_id']))
	{
		// session_unset();
		// session_destroy();
		unset ($_SESSION['session_id']);
	}
	return true;
}
?>
