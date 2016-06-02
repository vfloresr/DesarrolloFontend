<script src="vendor/jquery/jquery-1.11.1.min.js"></script>
<script src="vendor/jquery/jquery_ui/jquery-ui.min.js"></script>

<div class="section-separator">
   <h2 id="cumpleanios_title" class="pl15 section-title" style="color:#696969;"><i class="glyphicon glyphicon-list-alt"></i> Cumpleaños</h2>
   <div id="cumpleanios_section" class="col-md-12 section-container">
      <div class="panel">
         <div class="panel-heading">
            <ul class="nav panel-tabs-border panel-tabs panel-tabs-left">
               <li class="active">
                  <a href="#tab8_1" data-toggle="tab" aria-expanded="true">
                  <?php  echo nombre_mes(date('m'));?> 
				
                  </a>
               </li>
            </ul>
         </div>
		
		<div class="col-md-12 center-block" style="padding-top:12px;margin-left:20px;">
		 <button type="button" class="btn btn-primary" id="asignar_cumpleanios">Agendar</button>
		 
			 <button type="button" class="btn btn-primary" id="quitar_cumpleanios">Modificar</button>
		 </div>
       <DIV id="resultado"></DIV>   
 
	    <div class="panel-body">
            <div class="tab-content pn br-n">
               <div id="tab8_1" class="tab-pane active">
                  <div class="row">
                      <div id ="div_count" style="color:red"></div>
           			 <table id="table_cumpleanios" class="table table-striped table-hover table table-bordered table-striped custom-cross" cellspacing="0" width="100%">
                        <thead class="danger">
                           <tr>
                             <th class="no-sort">&nbsp;
							   <input name="select_all" value="1" id="select_all" type="checkbox" title="Seleccionar Todos"/>
							  
                                  <div class="btn-group">
									  <button type="button" class="btn btn-secondary dropdown-toggle" style="background-color:#BDBDBD;display:none;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="quitar_cumpleanios" >
										Quitar
									  </button>
								  </div>
							  </th>
							 
                              <th>Nombre / Rut</th>
                              <th>Fecha </br> (DD-MM-YYYY)</th>
                              <th>Email / Teléfono</th>
                              <th>Comentarios</th>
							</tr>
                        </thead>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <input type="hidden" name="nombre_cumpleaniero" value="">
</div>

<div class="modal fade" id="cumpleanios_plantillas" tabindex="-1" role="dialog" aria-labelledby="cumpleanios_plantillas" aria-hidden="true">
    <div style="width:80%; height: 90%; margin-top: 1% !important; text-rendering: auto;" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h2 class="modal-title custom_align"> <i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Plantillas de Cumpleaños</h2>
            </div>
            <div class="modal-body">
                <form class="form-horizontal row" id="admin-form">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="row"> 
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;"> 
                                <label class="label-form-mail">Elija una plantilla</label>
                                <select id="plantillas_cumple" name="plantillas_cumple" class="form-control input-sm">
								<option value="1_cumpleanos_plantilla_cumpleaños_formal.html">Cumpleanos Plantilla Cumpleaños Formal</option>
								<option value="2_cumpleanos_plantilla_cumpleaños_informal_genérica.html">Cumpleanos Plantilla Cumpleaños Informal Genérica</option>
								<option value="3_cumpleanos_plantilla_cumpleaños_informal_cuba.html">Cumpleanos Plantilla Cumpleaños Informal Cuba</option>
								<option value="4_cumpleanos_plantilla_cumpleaños_informal_caribe.html">Cumpleanos Plantilla Cumpleaños Informal Caribe</option>
								<option value="5_cumpleanos_plantilla_cumpleaños_informal_asia.html">Cumpleanos Plantilla Cumpleaños Informal Asia</option>
							  </select>
						    </div>
							<br><br><br>
							 <div class="row">     
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="color:#696969;"> 
                       		   <label>Este correo será enviado a:</label>
                                <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="lista_clientes"></span>
							    </span>


                              </div>
                            </div>	
                        </div> 
						<hr class="alt short">
						 <input type="hidden" name="contactos_id" id="contactos_id" value="">
              			<input type="hidden" id="tipo_estado"  name="tipo_estado" value="">
						<input type="hidden" name="valor_plantilla" value="">
					</div>
			      </form>
            </div>
            	
		   <DIV id ="plantilla_cumple_formal">
			
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
			  <html xmlns="http://www.w3.org/1999/xhtml">
			   <head>
				  <!-- NAME: 1 COLUMN -->
				  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
				  <meta name="viewport" content="width=device-width, initial-scale=1.0">
				  <title>plantilla_cumpleaños_formal</title>
				  <style type="text/css">
				 body,#bodyTable,#bodyCell{
				 height:100% !important;
				 margin:0;
				 padding:0;
				 width:100% !important;
				 }
				 table{
				 border-collapse:collapse;
				 }
				 img,a img{
				 border:0;
				 outline:none;
				 text-decoration:none;
				 }
				 h1,h2,h3,h4,h5,h6{
				 margin:0;
				 padding:0;
				 }
				 p{
				 margin:1em 0;
				 padding:0;
				 }
				 a{
				 word-wrap:break-word;
				 }
				 .ReadMsgBody{
				 width:100%;
				 }
				 .ExternalClass{
				 width:100%;
				 }
				 .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
				 line-height:100%;
				 }
				 table,td{
				 mso-table-lspace:0pt;
				 mso-table-rspace:0pt;
				 }
				 #outlook a{
				 padding:0;
				 }
				 img{
				 -ms-interpolation-mode:bicubic;
				 }
				 body,table,td,p,a,li,blockquote{
				 -ms-text-size-adjust:100%;
				 -webkit-text-size-adjust:100%;
				 }
				 #bodyCell{
				 padding:20px;
				 }
				 .mcnImage{
				 vertical-align:bottom;
				 }
				 .mcnTextContent img{
				 height:auto !important;
				 }
				 /*
				 @tab Page
				 @section background style
				 @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
				 */
				 body,#bodyTable{
				 /*@editable*/background-color:#F2F2F2;
				 }
				 /*
				 @tab Page
				 @section background style
				 @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
				 */
				 #bodyCell{
				 /*@editable*/border-top:0;
				 }
				 /*
				 @tab Page
				 @section email border
				 @tip Set the border for your email.
				 */
				 #templateContainer{
				 /*@editable*/border:0;
				 }
				 /*
				 @tab Page
				 @section heading 1
				 @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
				 @style heading 1
				 */
				 h1{
				 /*@editable*/color:#606060 !important;
				 display:block;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:40px;
				 /*@editable*/font-style:normal;
				 /*@editable*/font-weight:bold;
				 /*@editable*/line-height:125%;
				 /*@editable*/letter-spacing:-1px;
				 margin:0;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Page
				 @section heading 2
				 @tip Set the styling for all second-level headings in your emails.
				 @style heading 2
				 */
				 h2{
				 /*@editable*/color:#404040 !important;
				 display:block;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:26px;
				 /*@editable*/font-style:normal;
				 /*@editable*/font-weight:bold;
				 /*@editable*/line-height:125%;
				 /*@editable*/letter-spacing:-.75px;
				 margin:0;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Page
				 @section heading 3
				 @tip Set the styling for all third-level headings in your emails.
				 @style heading 3
				 */
				 h3{
				 /*@editable*/color:#606060 !important;
				 display:block;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:18px;
				 /*@editable*/font-style:normal;
				 /*@editable*/font-weight:bold;
				 /*@editable*/line-height:125%;
				 /*@editable*/letter-spacing:-.5px;
				 margin:0;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Page
				 @section heading 4
				 @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
				 @style heading 4
				 */
				 h4{
				 /*@editable*/color:#808080 !important;
				 display:block;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:16px;
				 /*@editable*/font-style:normal;
				 /*@editable*/font-weight:bold;
				 /*@editable*/line-height:125%;
				 /*@editable*/letter-spacing:normal;
				 margin:0;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Preheader
				 @section preheader style
				 @tip Set the background color and borders for your email's preheader area.
				 */
				 #templatePreheader{
				 /*@editable*/background-color:#FFFFFF;
				 /*@editable*/border-top:0;
				 /*@editable*/border-bottom:0;
				 }
				 /*
				 @tab Preheader
				 @section preheader text
				 @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
				 */
				 .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
				 /*@editable*/color:#606060;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:11px;
				 /*@editable*/line-height:125%;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Preheader
				 @section preheader link
				 @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
				 */
				 .preheaderContainer .mcnTextContent a{
				 /*@editable*/color:#606060;
				 /*@editable*/font-weight:normal;
				 /*@editable*/text-decoration:underline;
				 }
				 /*
				 @tab Header
				 @section header style
				 @tip Set the background color and borders for your email's header area.
				 */
				 #templateHeader{
				 /*@editable*/background-color:#ebebeb;
				 /*@editable*/border-top:0;
				 /*@editable*/border-bottom:0;
				 }
				 /*
				 @tab Header
				 @section header text
				 @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
				 */
				 .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
				 /*@editable*/color:#ffffff;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:15px;
				 /*@editable*/line-height:150%;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Header
				 @section header link
				 @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
				 */
				 .headerContainer .mcnTextContent a{
				 /*@editable*/color:#ffffff;
				 /*@editable*/font-weight:normal;
				 /*@editable*/text-decoration:none;
				 }
				 /*
				 @tab Body
				 @section body style
				 @tip Set the background color and borders for your email's body area.
				 */
				 #templateBody{
				 /*@editable*/background-color:#ffffff;
				 /*@editable*/border-top:0;
				 /*@editable*/border-bottom:0;
				 }
				 /*
				 @tab Body
				 @section body text
				 @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
				 */
				 .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
				 /*@editable*/color:#474747;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:15px;
				 /*@editable*/line-height:150%;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Body
				 @section body link
				 @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
				 */
				 .bodyContainer .mcnTextContent a{
				 /*@editable*/color:#6DC6DD;
				 /*@editable*/font-weight:normal;
				 /*@editable*/text-decoration:underline;
				 }
				 /*
				 @tab Footer
				 @section footer style
				 @tip Set the background color and borders for your email's footer area.
				 */
				 #templateFooter{
				 /*@editable*/background-color:#ffffff;
				 /*@editable*/border-top:0;
				 /*@editable*/border-bottom:0;
				 }
				 /*
				 @tab Footer
				 @section footer text
				 @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
				 */
				 .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
				 /*@editable*/color:#606060;
				 /*@editable*/font-family:Helvetica;
				 /*@editable*/font-size:11px;
				 /*@editable*/line-height:125%;
				 /*@editable*/text-align:left;
				 }
				 /*
				 @tab Footer
				 @section footer link
				 @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
				 */
				 .footerContainer .mcnTextContent a{
				 /*@editable*/color:#606060;
				 /*@editable*/font-weight:normal;
				 /*@editable*/text-decoration:underline;
				 }
				 @media only screen and (max-width: 480px){
				 body,table,td,p,a,li,blockquote{
				 -webkit-text-size-adjust:none !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 body{
				 width:100% !important;
				 min-width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[id=bodyCell]{
				 padding:10px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnTextContentContainer]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnBoxedTextContentContainer]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcpreview-image-uploader]{
				 width:100% !important;
				 display:none !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 img[class=mcnImage]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnImageGroupContentContainer]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageGroupContent]{
				 padding:9px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageGroupBlockInner]{
				 padding-bottom:0 !important;
				 padding-top:0 !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 tbody[class=mcnImageGroupBlockOuter]{
				 padding-bottom:9px !important;
				 padding-top:9px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{
				 width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
				 padding-right:18px !important;
				 padding-left:18px !important;
				 padding-bottom:0 !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardBottomImageContent]{
				 padding-bottom:9px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardTopImageContent]{
				 padding-top:18px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
				 padding-right:18px !important;
				 padding-left:18px !important;
				 padding-bottom:0 !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardBottomImageContent]{
				 padding-bottom:9px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnImageCardTopImageContent]{
				 padding-top:18px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{
				 padding-top:9px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{
				 padding-top:18px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnBoxedTextContentColumn]{
				 padding-left:18px !important;
				 padding-right:18px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=mcnTextContent]{
				 padding-right:18px !important;
				 padding-left:18px !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section template width
				 @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
				 */
				 table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{
				 /*@tab Mobile Styles
				 @section template width
				 @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.*/max-width:600px !important;
				 /*@editable*/width:100% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section heading 1
				 @tip Make the first-level headings larger in size for better readability on small screens.
				 */
				 h1{
				 /*@editable*/font-size:24px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section heading 2
				 @tip Make the second-level headings larger in size for better readability on small screens.
				 */
				 h2{
				 /*@editable*/font-size:20px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section heading 3
				 @tip Make the third-level headings larger in size for better readability on small screens.
				 */
				 h3{
				 /*@editable*/font-size:18px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section heading 4
				 @tip Make the fourth-level headings larger in size for better readability on small screens.
				 */
				 h4{
				 /*@editable*/font-size:16px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section Boxed Text
				 @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				 */
				 table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{
				 /*@editable*/font-size:18px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section Preheader Visibility
				 @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
				 */
				 table[id=templatePreheader]{
				 /*@editable*/display:none !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section Preheader Text
				 @tip Make the preheader text larger in size for better readability on small screens.
				 */
				 td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{
				 /*@editable*/font-size:14px !important;
				 /*@editable*/line-height:115% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section Header Text
				 @tip Make the header text larger in size for better readability on small screens.
				 */
				 td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{
				 /*@editable*/font-size:18px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section Body Text
				 @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
				 */
				 td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{
				 /*@editable*/font-size:18px !important;
				 /*@editable*/line-height:125% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 /*
				 @tab Mobile Styles
				 @section footer text
				 @tip Make the body content text larger in size for better readability on small screens.
				 */
				 td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{
				 /*@editable*/font-size:14px !important;
				 /*@editable*/line-height:115% !important;
				 }
				 }	@media only screen and (max-width: 480px){
				 td[class=footerContainer] a[class=utilityLink]{
				 display:block !important;
				 }
				 }
			  </style>
			  <script src="vendor/plugins/ckeditor/ckeditor.js"></script>
		   </head>
		   <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
			  <center>
				 <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
					<tr>
					   <td align="center" valign="top" id="bodyCell">
						  <!-- BEGIN TEMPLATE // -->
						  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
							 <tr>
								<td align="center" valign="top">
								   <!-- BEGIN PREHEADER // -->
								   <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader">
									  <tr>
										 <td valign="top" class="preheaderContainer" style="padding-top:9px;">
											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
											   <tbody class="mcnTextBlockOuter">
												  <tr>
													 <td valign="top" class="mcnTextBlockInner">
														<table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
														   <tbody>
															  <tr>
															 <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
																<div style="text-align: center;"><span style="font-size:12px">Feliz Cumpleaños</span><br style="font-size: 11px;color: #414141;font-family: Arial, sans-serif;line-height: normal;text-align: -webkit-center;background-color: #CCCCCC;">
																   <span style="color: #606060;font-family: arial,sans-serif;font-size: 10px;line-height: 12px;text-align: -webkit-center;">Para asegurar la entrega de nuestros e-mail en su correo,<br>
																   por favor agregue&nbsp;<span style="color: #0073AE;"><a href="mailto:noticias@cocha.com" style="color: #1155CC;word-wrap: break-word;" target="_blank">noticias@cocha.com</a>&nbsp;</span>a su libreta de direcciones de correo.</span>
																</div>
															 </td>
                                                          </tr>
                                                       </tbody>
                                                   </table>
                                                  <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                                                    <tbody>
                                                      <tr>
                                                         <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:0;">
                                                            <div style="text-align: center;"><a style="color: #606060;font-family: Helvetica;font-size: 11px;line-height: 11px;text-align: center;word-wrap: break-word;text-decoration: underline;">Ver esta dirección de correo electrónico en su navegador</a></div>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                           <!-- // END PREHEADER -->
                        </td>
                     </tr>
                     <tr>
                        <td align="center" valign="top">
                           <!-- BEGIN HEADER // -->
                           <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                              <tr>
                                 <td valign="top" class="headerContainer">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                                       <tbody class="mcnTextBlockOuter">
                                          <tr>
                                             <td valign="top" class="mcnTextBlockInner">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
                                                               <tbody class="mcnTextBlockOuter">
                                                                  <tr>
                                                                     <td class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="top">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td class="mcnTextContent" style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top"><br>
                                                                                    <img align="none" height="84" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/7dbe4134-8fa9-4f47-ac30-fc18d69de2ae.png" style="width: 205px;height: 84px;margin: 0px;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="205">
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top">
                                                                                    <div style="text-align: right; line-height:120%;margin:-5px 0px;padding:0px;"><br>
                                                                                       <span style="color:#777777"><span style="line-height:20.7999992370605px; text-align:right"><span id="user_detalle_fullname" style="font-family:arial,sans-serif; font-size:12.8000001907349px; line-height:normal">$user_fullname</span><br>
                                                                                       <span id="user_detalle_email">$email</span></span><br style="line-height: 20.7999992370605px; text-align: right;">
                                                                                       <span id="user_detalle_telefono">$telefono</span><br>
                                                                                       <span id="user_detalle_sucursal">$sucursal</span><br>
                                                                                       <br>
                                                                                       Comuníquese conmigo<br>
                                                                                       para cotizar su próximo viaje.</span>
                                                                                    </div>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock">
                                       <tbody class="mcnDividerBlockOuter">
                                          <tr>
                                             <td class="mcnDividerBlockInner" style="padding: 2px 18px;">
                                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 2px;border-top-style: solid;border-top-color: #999999;">
                                                   <tbody>
                                                      <tr>
                                                         <td>
                                                            <span></span>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                           <!-- // END HEADER -->
                        </td>
                     </tr>
                     <tr>
                        <td align="center" valign="top">
                           <!-- BEGIN BODY // -->
                           <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                              <tr>
                                 <td valign="top" class="bodyContainer">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                                       <tbody class="mcnTextBlockOuter">
                                          <tr>
                                             <td valign="top" class="mcnTextBlockInner">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                                             <span style="color:#696969"><strong>["Nombre Cliente"]</strong></span>
                                                            <div class="mail_modal_comentario_value" style="color:#1C1C1C"></div>
															<br>
															<textarea name="comentarios_ejecutivo" id="comentarios_ejecutivo" rows="10" cols="80" placeholder="escriba aqui su comentario">
																										
															</textarea>                                  
										
															<script>
																													
															CKEDITOR.replace( 'comentarios_ejecutivo', {
																language: 'ar',
																uiColor: '#E6E6E6',
																resize_enabled: 'false',
																removePlugins: 'elementspath',
																toolbar: [
																	[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
																	[ 'TextColor', 'BGColor' ],
																	[ 'BidiRtl', 'BidiLtr' ],
																	[ 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ],
																	[ 'Blockquote', 'HorizontalRule', 'Smiley', 'SpecialChar' ],
																	[ 'Preview', 'Maximize' ]
																],
																height: 200,
																width: '100%'
															});	
														
															</script>
                                                           <br>
														
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                                       <tbody class="mcnImageBlockOuter">
                                          <tr>
                                             <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                                            <a href="http://" title="" class="" target="_blank">
                                                            <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/0c4b8d57-4ab4-4cff-8b1e-d9a64f69c56d.jpg" width="600" style="max-width:660px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                                            </a>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
									
								   <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
										  <tbody class="mcnTextBlockOuter">
											<tr>
											  <td valign="top" class="mcnTextBlockInner">
												<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
												  <tbody>
													<tr>
													  <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
														<div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
														<div style="font-family: arial, sans-serif; font-size: 12.8px; line-height: normal;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color: #696969;">Saludos,</span></span><br>
														  <br>
														  <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="user_detalle_fullname">$user_fullname</span></span><br>
														  &nbsp;
														</div>
													  </td>
													</tr>
												  </tbody>
												</table>
											  </td>
											</tr>
										  </tbody>
								      </table>
                                   </td>
                              </tr>
                           </table>
                           <!-- // END BODY -->
                        </td>
                     </tr>
                     <tr>
                        <td align="center" valign="top">
                           <!-- BEGIN FOOTER // -->
                           <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter">
                              <tr>
                                 <td valign="top" class="footerContainer" style="padding-bottom:9px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                                       <tbody class="mcnImageBlockOuter">
                                          <tr>
                                             <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                                            <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/4e34d7b8-a7bd-45c8-8bb4-64402932de4c.jpg" width="600" style="max-width:620px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock">
                                       <tbody class="mcnFollowBlockOuter">
                                          <tr>
                                             <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td align="center" style="padding-left:9px;padding-right:9px;">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;">
                                                               <tbody>
                                                                  <tr>
                                                                     <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                                                                        <table border="0" cellpadding="0" cellspacing="0">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td valign="top">
                                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                                                   <tbody>
                                                                                                      <tr>
                                                                                                         <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                                                               <tbody>
                                                                                                                  <tr>
                                                                                                                     <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                                                        <a href="https://www.facebook.com/Cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                                                     </td>
                                                                                                                  </tr>
                                                                                                               </tbody>
                                                                                                            </table>
                                                                                                         </td>
                                                                                                      </tr>
                                                                                                   </tbody>
                                                                                                </table>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                    <!--[if gte mso 6]>
                                                                                 </td>
                                                                                 <td align="left" valign="top">
                                                                                    <![endif]-->
                                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                                                   <tbody>
                                                                                                      <tr>
                                                                                                         <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                                                               <tbody>
                                                                                                                  <tr>
                                                                                                                     <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                                                        <a href="https://twitter.com/cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                                                     </td>
                                                                                                                  </tr>
                                                                                                               </tbody>
                                                                                                            </table>
                                                                                                         </td>
                                                                                                      </tr>
                                                                                                   </tbody>
                                                                                                </table>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                    <!--[if gte mso 6]>
                                                                                 </td>
                                                                                 <td align="left" valign="top">
                                                                                    <![endif]-->
                                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                                                   <tbody>
                                                                                                      <tr>
                                                                                                         <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                                                               <tbody>
                                                                                                                  <tr>
                                                                                                                     <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                                                        <a href="https://www.youtube.com/channel/UC4H7ewqROY9nkSaJi2psPPg?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                                                     </td>
                                                                                                                  </tr>
                                                                                                               </tbody>
                                                                                                            </table>
                                                                                                         </td>
                                                                                                      </tr>
                                                                                                   </tbody>
                                                                                                </table>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                    <!--[if gte mso 6]>
                                                                                 </td>
                                                                                 <td align="left" valign="top">
                                                                                    <![endif]-->
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                                       <tbody class="mcnTextBlockOuter">
                                          <tr>
                                             <td valign="top" class="mcnTextBlockInner">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                                   <tbody>
                                                      <tr>
                                                         <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                                            <div style="text-align: center;"><em>Copyright 2015 |&nbsp;Cocha.com, All rights reserved.</em><br>
                                                               <span style="text-align:center">El Bosque Norte 0430, Las Condes, Santiago - Chile</span><br>
                                                               <br>
                                                               <a class="utilityLink" href="*|UNSUB|*" style="word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-weight: normal;text-decoration: underline;" target="_blank">Anular suscripción</a>
                                                            </div>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                           <!-- // END FOOTER -->
                        </td>
                      </tr>
                    </table>
                  <!-- // END TEMPLATE -->
                 </td>
              </tr>
            </table>
          </center>
        </body>
     </html>
			
	</DIV><!--FIN PLANTILLA 1 !-->
			
	<DIV id ="plantilla_cumple_generica" style ="display:none">
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <!-- NAME: 1 COLUMN -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLANTILLA 2</title>
    <style type="text/css">
      body,#bodyTable,#bodyCell{
      height:100% !important;
      margin:0;
      padding:0;
      width:100% !important;
      }
      table{
      border-collapse:collapse;
      }
      img,a img{
      border:0;
      outline:none;
      text-decoration:none;
      }
      h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
      }
      p{
      margin:1em 0;
      padding:0;
      }
      a{
      word-wrap:break-word;
      }
      .ReadMsgBody{
      width:100%;
      }
      .ExternalClass{
      width:100%;
      }
      .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
      line-height:100%;
      }
      table,td{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
      }
      #outlook a{
      padding:0;
      }
      img{
      -ms-interpolation-mode:bicubic;
      }
      body,table,td,p,a,li,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
      }
      #templatePreheader,#templateHeader,#templateBody,#templateFooter{
      min-width:100%;
      }
      #bodyCell{
      padding:20px;
      }
      .mcnImage{
      vertical-align:bottom;
      }
      .mcnTextContent img{
      height:auto !important;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      body,#bodyTable{
      /*@editable*/background-color:#F2F2F2;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      #bodyCell{
      /*@editable*/border-top:0;
      }
      /*
      @tab Page
      @section email border
      @tip Set the border for your email.
      */
      #templateContainer{
      /*@editable*/border:0;
      }
      /*
      @tab Page
      @section heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
      h1{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:40px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-1px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
      h2{
      /*@editable*/color:#404040 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:26px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.75px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
      h3{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:18px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.5px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
      h4{
      /*@editable*/color:#808080 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:16px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:normal;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader style
      @tip Set the background color and borders for your email's preheader area.
      */
      #templatePreheader{
      /*@editable*/background-color:#FFFFFF;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Preheader
      @section preheader text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
      .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .preheaderContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Header
      @section header style
      @tip Set the background color and borders for your email's header area.
      */
      #templateHeader{
      /*@editable*/background-color:#ebebeb;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Header
      @section header text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
      .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
      /*@editable*/color:#ffffff;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Header
      @section header link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .headerContainer .mcnTextContent a{
      /*@editable*/color:#ffffff;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:none;
      }
      /*
      @tab Body
      @section body style
      @tip Set the background color and borders for your email's body area.
      */
      #templateBody{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Body
      @section body text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
      .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
      /*@editable*/color:#474747;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Body
      @section body link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
      .bodyContainer .mcnTextContent a{
      /*@editable*/color:#6DC6DD;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Footer
      @section footer style
      @tip Set the background color and borders for your email's footer area.
      */
      #templateFooter{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Footer
      @section footer text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
      .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Footer
      @section footer link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
      .footerContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      @media only screen and (max-width: 480px){
      body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
      }
      }	@media only screen and (max-width: 480px){
      body{
      width:100% !important;
      min-width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[id=bodyCell]{
      padding:10px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      .mcnBoxedTextContentContainer{
      max-width:100% !important;
      min-width:100% !important;
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcpreview-image-uploader]{
      width:100% !important;
      display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      img[class=mcnImage]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnImageGroupContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupContent]{
      padding:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupBlockInner]{
      padding-bottom:0 !important;
      padding-top:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      tbody[class=mcnImageGroupBlockOuter]{
      padding-bottom:9px !important;
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnBoxedTextContentColumn]{
      padding-left:18px !important;
      padding-right:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnTextContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
      */
      table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{
      /*@tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.*/max-width:600px !important;
      /*@editable*/width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
      h1{
      /*@editable*/font-size:24px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
      h2{
      /*@editable*/font-size:20px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
      h3{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
      h4{
      /*@editable*/font-size:16px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
      table[id=templatePreheader]{
      /*@editable*/display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
      td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
      td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section footer text
      @tip Make the body content text larger in size for better readability on small screens.
      */
      td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=footerContainer] a[class=utilityLink]{
      display:block !important;
      }
      }
    </style>
	 <script src="vendor/plugins/ckeditor/ckeditor.js"></script>
  </head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr>
          <td align="center" valign="top" id="bodyCell">
            <!-- BEGIN TEMPLATE // -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN PREHEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader">
                    <tr>
                      <td valign="top" class="preheaderContainer" style="padding-top:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
                                        <div style="text-align: center;"><span style="font-size:12px">¡Felicidades!</span><br style="font-size: 11px;color: #414141;font-family: Arial, sans-serif;line-height: normal;text-align: -webkit-center;background-color: #CCCCCC;">
                                          <span style="color: #606060;font-family: arial,sans-serif;font-size: 10px;line-height: 12px;text-align: -webkit-center;">Para asegurar la entrega de nuestros e-mail en su correo,<br>
                                          por favor agregue&nbsp;<span style="color: #0073AE;"><a href="mailto:noticias@cocha.com" style="color: #1155CC;word-wrap: break-word;" target="_blank">noticias@cocha.com</a>&nbsp;</span>a su libreta de direcciones de correo.</span>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                        <div style="text-align: center;"><a href="*|ARCHIVE|*" style="color: #606060;font-family: Helvetica;font-size: 11px;line-height: 11px;text-align: center;word-wrap: break-word;text-decoration: underline;" target="_blank">Ver esta dirección de correo electrónico en su navegador</a></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END PREHEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN HEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                    <tr>
                      <td valign="top" class="headerContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
                                          <tbody class="mcnTextBlockOuter">
                                            <tr>
                                              <td class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top"><br>
                                                        <img align="none" height="84" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/7dbe4134-8fa9-4f47-ac30-fc18d69de2ae.png" style="width: 205px;height: 84px;margin: 0px;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="205">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top">
                                                        <div style="text-align: right; line-height:120%;margin:-5px 0px;padding:0px;"><br>
                                                          <span style="color:#777777"><span style="line-height:20.7999992370605px; text-align:right"><span id="user_detalle_fullname" style="font-family:arial,sans-serif; font-size:12.8000001907349px; line-height:normal">$user_fullname</span><br>
                                                          <span id="user_detalle_email">$email</span></span><br style="line-height: 20.7999992370605px; text-align: right;">
                                                          <span id="user_detalle_telefono">$telefono</span><br>
                                                          <span id="user_detalle_sucursal">$sucursal</span><br>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="background-color: #EEEEEE;">
                          <tbody class="mcnDividerBlockOuter">
                            <tr>
                              <td class="mcnDividerBlockInner" style="padding: 2px 18px;">
                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 2px;border-top-style: solid;border-top-color: #999999;">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END HEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN BODY // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                    <tr>
                      <td valign="top" class="bodyContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                         <span style="color:#696969"><strong>["Nombre Cliente"]</strong></span>
										<br><br>
										<textarea name="comentarios_ejecutivo_2" id="comentarios_ejecutivo_2" rows="10" cols="80" placeholder="escriba aqui su comentario">
										
										</textarea>                                  
										
										<script>
											CKEDITOR.replace( 'comentarios_ejecutivo_2', {
																language: 'ar',
																uiColor: '#E6E6E6',
																resize_enabled: 'false',
																removePlugins: 'elementspath',
																toolbar: [
																	[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
																	[ 'TextColor', 'BGColor' ],
																	[ 'BidiRtl', 'BidiLtr' ],
																	[ 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ],
																	[ 'Blockquote', 'HorizontalRule', 'Smiley', 'SpecialChar' ],
																	[ 'Preview', 'Maximize' ]
																],
																height: 200,
																width: '100%'
															});	
															
										</script> 
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">
                                          <span style="color: #1C1C1C;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;" class="mail_modal_comentario_value"></span>
                                          <!-- <div class="mail_modal_comentario_value"></div> -->
                                        </div>
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                      </td>
                                    </tr>  
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <a href="http://" title="" class="" target="_blank">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/9217ce5e-3f6c-4dc8-981b-eeb3298e151f.jpg" width="600" style="max-width:660px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                        <div style="font-family: arial, sans-serif; font-size: 12.8px; line-height: normal;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color: #696969;">Saludos,</span></span><br>
                                          <br>
                                          <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="user_detalle_fullname">$user_fullname</span></span><br>
                                          &nbsp;
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END BODY -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN FOOTER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter">
                    <tr>
                      <td valign="top" class="footerContainer" style="padding-bottom:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/4e34d7b8-a7bd-45c8-8bb4-64402932de4c.jpg" width="600" style="max-width:620px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock">
                          <tbody class="mcnFollowBlockOuter">
                            <tr>
                              <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="padding-left:9px;padding-right:9px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.facebook.com/Cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://twitter.com/cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.youtube.com/channel/UC4H7ewqROY9nkSaJi2psPPg?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://instagram.com/cochaviajes/" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <div style="text-align: center;"><em>Copyright 2015 |&nbsp;Cocha.com, All rights reserved.</em><br>
                                          <span style="text-align:center">El Bosque Norte 0430, Las Condes, Santiago - Chile</span><br>
                                          <br>
                                          <a class="utilityLink" href="*|UNSUB|*" style="word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-weight: normal;text-decoration: underline;" target="_blank">Anular suscripción</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END FOOTER -->
                </td>
              </tr>
            </table>
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
		
   </DIV><!--FIN PLANTILLA 2 !-->
			
 <DIV ID="plantilla_cumple_cuba" style="display:none;">
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <!-- NAME: 1 COLUMN -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>plantilla 3</title>
    <style type="text/css">
      body,#bodyTable,#bodyCell{
      height:100% !important;
      margin:0;
      padding:0;
      width:100% !important;
      }
      table{
      border-collapse:collapse;
      }
      img,a img{
      border:0;
      outline:none;
      text-decoration:none;
      }
      h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
      }
      p{
      margin:1em 0;
      padding:0;
      }
      a{
      word-wrap:break-word;
      }
      .ReadMsgBody{
      width:100%;
      }
      .ExternalClass{
      width:100%;
      }
      .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
      line-height:100%;
      }
      table,td{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
      }
      #outlook a{
      padding:0;
      }
      img{
      -ms-interpolation-mode:bicubic;
      }
      body,table,td,p,a,li,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
      }
      #bodyCell{
      padding:20px;
      }
      .mcnImage{
      vertical-align:bottom;
      }
      .mcnTextContent img{
      height:auto !important;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      body,#bodyTable{
      /*@editable*/background-color:#F2F2F2;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      #bodyCell{
      /*@editable*/border-top:0;
      }
      /*
      @tab Page
      @section email border
      @tip Set the border for your email.
      */
      #templateContainer{
      /*@editable*/border:0;
      }
      /*
      @tab Page
      @section heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
      h1{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:40px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-1px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
      h2{
      /*@editable*/color:#404040 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:26px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.75px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
      h3{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:18px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.5px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
      h4{
      /*@editable*/color:#808080 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:16px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:normal;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader style
      @tip Set the background color and borders for your email's preheader area.
      */
      #templatePreheader{
      /*@editable*/background-color:#FFFFFF;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Preheader
      @section preheader text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
      .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .preheaderContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Header
      @section header style
      @tip Set the background color and borders for your email's header area.
      */
      #templateHeader{
      /*@editable*/background-color:#ebebeb;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Header
      @section header text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
      .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
      /*@editable*/color:#ffffff;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Header
      @section header link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .headerContainer .mcnTextContent a{
      /*@editable*/color:#ffffff;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:none;
      }
      /*
      @tab Body
      @section body style
      @tip Set the background color and borders for your email's body area.
      */
      #templateBody{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Body
      @section body text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
      .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
      /*@editable*/color:#474747;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Body
      @section body link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
      .bodyContainer .mcnTextContent a{
      /*@editable*/color:#6DC6DD;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Footer
      @section footer style
      @tip Set the background color and borders for your email's footer area.
      */
      #templateFooter{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Footer
      @section footer text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
      .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Footer
      @section footer link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
      .footerContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      @media only screen and (max-width: 480px){
      body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
      }
      }	@media only screen and (max-width: 480px){
      body{
      width:100% !important;
      min-width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[id=bodyCell]{
      padding:10px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnBoxedTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcpreview-image-uploader]{
      width:100% !important;
      display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      img[class=mcnImage]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnImageGroupContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupContent]{
      padding:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupBlockInner]{
      padding-bottom:0 !important;
      padding-top:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      tbody[class=mcnImageGroupBlockOuter]{
      padding-bottom:9px !important;
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnBoxedTextContentColumn]{
      padding-left:18px !important;
      padding-right:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnTextContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
      */
      table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{
      /*@tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.*/max-width:600px !important;
      /*@editable*/width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
      h1{
      /*@editable*/font-size:24px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
      h2{
      /*@editable*/font-size:20px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
      h3{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
      h4{
      /*@editable*/font-size:16px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
      table[id=templatePreheader]{
      /*@editable*/display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
      td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
      td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section footer text
      @tip Make the body content text larger in size for better readability on small screens.
      */
      td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=footerContainer] a[class=utilityLink]{
      display:block !important;
      }
      }
    </style>
  </head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr>
          <td align="center" valign="top" id="bodyCell">
            <!-- BEGIN TEMPLATE // -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN PREHEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader">
                    <tr>
                      <td valign="top" class="preheaderContainer" style="padding-top:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
                                        <div style="text-align: center;"><span style="font-size:12px">Feliz Cumpleaños</span><br style="font-size: 11px;color: #414141;font-family: Arial, sans-serif;line-height: normal;text-align: -webkit-center;background-color: #CCCCCC;">
                                          <span style="color: #606060;font-family: arial,sans-serif;font-size: 10px;line-height: 12px;text-align: -webkit-center;">Para asegurar la entrega de nuestros e-mail en su correo,<br>
                                          por favor agregue&nbsp;<span style="color: #0073AE;"><a href="mailto:noticias@cocha.com" style="color: #1155CC;word-wrap: break-word;" target="_blank">noticias@cocha.com</a>&nbsp;</span>a su libreta de direcciones de correo.</span>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:0;">
                                        <div style="text-align: center;"><a style="color: #606060;font-family: Helvetica;font-size: 11px;line-height: 11px;text-align: center;word-wrap: break-word;text-decoration: underline;">Ver esta dirección de correo electrónico en su navegador</a></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END PREHEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN HEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                    <tr>
                      <td valign="top" class="headerContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
                                          <tbody class="mcnTextBlockOuter">
                                            <tr>
                                              <td class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top"><br>
                                                        <img align="none" height="84" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/7dbe4134-8fa9-4f47-ac30-fc18d69de2ae.png" style="width: 205px;height: 84px;margin: 0px;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="205">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top">
                                                        <div style="text-align: right; line-height:120%;margin:-5px 0px;padding:0px;"><br>
                                                          <span style="color:#777777"><span style="line-height:20.7999992370605px; text-align:right"><span id="user_detalle_fullname" style="font-family:arial,sans-serif; font-size:12.8000001907349px; line-height:normal">$user_fullname</span><br>
                                                          <span id="user_detalle_email">$email</span></span><br style="line-height: 20.7999992370605px; text-align: right;">
                                                          <span id="user_detalle_telefono">$telefono</span><br>
                                                          <span id="user_detalle_sucursal">$sucursal</span><br>
                                                          <br>
                                                          Comuníquese conmigo<br>
                                                          para cotizar su próximo viaje.</span>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="background-color: #EEEEEE;">
                          <tbody class="mcnDividerBlockOuter">
                            <tr>
                              <td class="mcnDividerBlockInner" style="padding: 2px 18px;">
                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 2px;border-top-style: solid;border-top-color: #999999;">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END HEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN BODY // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                    <tr>
                      <td valign="top" class="bodyContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                         <span style="color:#696969"><strong>["Nombre Cliente"]</strong></span>
                                        <div class="mail_modal_comentario_value" style="color: #1C1C1C;"></div>
										<br><br>
										<textarea name="comentarios_ejecutivo_3" id="comentarios_ejecutivo_3" rows="10" cols="80" placeholder="escriba aqui su comentario" style="color: #1C1C1C;">
										
										</textarea>                                  
										
										<script>
										CKEDITOR.replace( 'comentarios_ejecutivo_3', {
																language: 'ar',
																uiColor: '#E6E6E6',
																resize_enabled: 'false',
																removePlugins: 'elementspath',
																toolbar: [
																	[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
																	[ 'TextColor', 'BGColor' ],
																	[ 'BidiRtl', 'BidiLtr' ],
																	[ 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ],
																	[ 'Blockquote', 'HorizontalRule', 'Smiley', 'SpecialChar' ],
																	[ 'Preview', 'Maximize' ]
																],
																height: 200,
																width: '100%'
															});			
										</script> 
                                        <br>
                                       </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <a href="http://" title="" class="" target="_blank">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/fdd11ca2-6d66-4198-9b55-d2b44c3315bd.jpg" width="600" style="max-width:660px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
										  <tbody class="mcnTextBlockOuter">
											<tr>
											  <td valign="top" class="mcnTextBlockInner">
												<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
												  <tbody>
													<tr>
													  <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
														<div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
														<div style="font-family: arial, sans-serif; font-size: 12.8px; line-height: normal;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color: #696969;">Saludos,</span></span><br>
														  <br>
														  <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="user_detalle_fullname">$user_fullname</span></span><br>
														  &nbsp;
														</div>
													  </td>
													</tr>
												  </tbody>
												</table>
											  </td>
											</tr>
								 </tbody>
					         </table>
                         </td>
                       </tr>
                  </table>
                  <!-- // END BODY -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN FOOTER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter">
                    <tr>
                      <td valign="top" class="footerContainer" style="padding-bottom:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/4e34d7b8-a7bd-45c8-8bb4-64402932de4c.jpg" width="600" style="max-width:620px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock">
                          <tbody class="mcnFollowBlockOuter">
                            <tr>
                              <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="padding-left:9px;padding-right:9px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.facebook.com/Cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://twitter.com/cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.youtube.com/channel/UC4H7ewqROY9nkSaJi2psPPg?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <div style="text-align: center;"><em>Copyright 2015 |&nbsp;Cocha.com, All rights reserved.</em><br>
                                          <span style="text-align:center">El Bosque Norte 0430, Las Condes, Santiago - Chile</span><br>
                                          <br>
                                          <a class="utilityLink" href="*|UNSUB|*" style="word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-weight: normal;text-decoration: underline;" target="_blank">Anular suscripción</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END FOOTER -->
                </td>
              </tr>
            </table>
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
 
 </DIV><!--FIN PLANTILLA 3 !-->	
			
 <DIV id="plantilla_cumple_caribe" style="display:none">
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <!-- NAME: 1 COLUMN -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>plantilla 4</title>
    <style type="text/css">
      body,#bodyTable,#bodyCell{
      height:100% !important;
      margin:0;
      padding:0;
      width:100% !important;
      }
      table{
      border-collapse:collapse;
      }
      img,a img{
      border:0;
      outline:none;
      text-decoration:none;
      }
      h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
      }
      p{
      margin:1em 0;
      padding:0;
      }
      a{
      word-wrap:break-word;
      }
      .ReadMsgBody{
      width:100%;
      }
      .ExternalClass{
      width:100%;
      }
      .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
      line-height:100%;
      }
      table,td{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
      }
      #outlook a{
      padding:0;
      }
      img{
      -ms-interpolation-mode:bicubic;
      }
      body,table,td,p,a,li,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
      }
      #templatePreheader,#templateHeader,#templateBody,#templateFooter{
      min-width:100%;
      }
      #bodyCell{
      padding:20px;
      }
      .mcnImage{
      vertical-align:bottom;
      }
      .mcnTextContent img{
      height:auto !important;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      body,#bodyTable{
      /*@editable*/background-color:#F2F2F2;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      #bodyCell{
      /*@editable*/border-top:0;
      }
      /*
      @tab Page
      @section email border
      @tip Set the border for your email.
      */
      #templateContainer{
      /*@editable*/border:0;
      }
      /*
      @tab Page
      @section heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
      h1{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:40px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-1px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
      h2{
      /*@editable*/color:#404040 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:26px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.75px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
      h3{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:18px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.5px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
      h4{
      /*@editable*/color:#808080 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:16px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:normal;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader style
      @tip Set the background color and borders for your email's preheader area.
      */
      #templatePreheader{
      /*@editable*/background-color:#FFFFFF;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Preheader
      @section preheader text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
      .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .preheaderContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Header
      @section header style
      @tip Set the background color and borders for your email's header area.
      */
      #templateHeader{
      /*@editable*/background-color:#ebebeb;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Header
      @section header text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
      .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
      /*@editable*/color:#ffffff;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Header
      @section header link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .headerContainer .mcnTextContent a{
      /*@editable*/color:#ffffff;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:none;
      }
      /*
      @tab Body
      @section body style
      @tip Set the background color and borders for your email's body area.
      */
      #templateBody{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Body
      @section body text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
      .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
      /*@editable*/color:#474747;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Body
      @section body link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
      .bodyContainer .mcnTextContent a{
      /*@editable*/color:#6DC6DD;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Footer
      @section footer style
      @tip Set the background color and borders for your email's footer area.
      */
      #templateFooter{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Footer
      @section footer text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
      .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Footer
      @section footer link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
      .footerContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      @media only screen and (max-width: 480px){
      body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
      }
      }	@media only screen and (max-width: 480px){
      body{
      width:100% !important;
      min-width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[id=bodyCell]{
      padding:10px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      .mcnBoxedTextContentContainer{
      max-width:100% !important;
      min-width:100% !important;
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcpreview-image-uploader]{
      width:100% !important;
      display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      img[class=mcnImage]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnImageGroupContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupContent]{
      padding:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupBlockInner]{
      padding-bottom:0 !important;
      padding-top:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      tbody[class=mcnImageGroupBlockOuter]{
      padding-bottom:9px !important;
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnBoxedTextContentColumn]{
      padding-left:18px !important;
      padding-right:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnTextContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
      */
      table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{
      /*@tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.*/max-width:600px !important;
      /*@editable*/width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
      h1{
      /*@editable*/font-size:24px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
      h2{
      /*@editable*/font-size:20px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
      h3{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
      h4{
      /*@editable*/font-size:16px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
      table[id=templatePreheader]{
      /*@editable*/display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
      td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
      td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section footer text
      @tip Make the body content text larger in size for better readability on small screens.
      */
      td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=footerContainer] a[class=utilityLink]{
      display:block !important;
      }
      }
    </style>
  </head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr>
          <td align="center" valign="top" id="bodyCell">
            <!-- BEGIN TEMPLATE // -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN PREHEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader">
                    <tr>
                      <td valign="top" class="preheaderContainer" style="padding-top:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
                                        <div style="text-align: center;"><span style="font-size:12px">¡Felicidades!</span><br style="font-size: 11px;color: #414141;font-family: Arial, sans-serif;line-height: normal;text-align: -webkit-center;background-color: #CCCCCC;">
                                          <span style="color: #606060;font-family: arial,sans-serif;font-size: 10px;line-height: 12px;text-align: -webkit-center;">Para asegurar la entrega de nuestros e-mail en su correo,<br>
                                          por favor agregue&nbsp;<span style="color: #0073AE;"><a href="mailto:noticias@cocha.com" style="color: #1155CC;word-wrap: break-word;" target="_blank">noticias@cocha.com</a>&nbsp;</span>a su libreta de direcciones de correo.</span>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                        <div style="text-align: center;"><a href="*|ARCHIVE|*" style="color: #606060;font-family: Helvetica;font-size: 11px;line-height: 11px;text-align: center;word-wrap: break-word;text-decoration: underline;" target="_blank">Ver esta dirección de correo electrónico en su navegador</a></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END PREHEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN HEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                    <tr>
                      <td valign="top" class="headerContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
                                          <tbody class="mcnTextBlockOuter">
                                            <tr>
                                              <td class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top"><br>
                                                        <img align="none" height="84" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/7dbe4134-8fa9-4f47-ac30-fc18d69de2ae.png" style="width: 205px;height: 84px;margin: 0px;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="205">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top">
                                                        <div style="text-align: right; line-height:120%;margin:-5px 0px;padding:0px;"><br>
                                                          <span style="color:#777777"><span style="line-height:20.7999992370605px; text-align:right"><span id="user_detalle_fullname" style="font-family:arial,sans-serif; font-size:12.8000001907349px; line-height:normal">$user_fullname</span><br>
                                                          <span id="user_detalle_email">$email</span></span><br style="line-height: 20.7999992370605px; text-align: right;">
                                                          <span id="user_detalle_telefono">$telefono</span><br>
                                                          <span id="user_detalle_sucursal">$sucursal</span><br>
                                                          &nbsp;
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="background-color: #EEEEEE;">
                          <tbody class="mcnDividerBlockOuter">
                            <tr>
                              <td class="mcnDividerBlockInner" style="padding: 2px 18px;">
                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 2px;border-top-style: solid;border-top-color: #999999;">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END HEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN BODY // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                    <tr>
                      <td valign="top" class="bodyContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                          <span style="color:#696969"><strong>["Nombre Cliente"]</strong></span>
										<br><br>
										<textarea name="comentarios_ejecutivo_4" id="comentarios_ejecutivo_4" rows="10" cols="80" placeholder="escriba aqui su comentario" style="color: #1C1C1C;">
										
										</textarea>                                  
										
										<script>
											CKEDITOR.replace( 'comentarios_ejecutivo_4', {
																language: 'ar',
																uiColor: '#E6E6E6',
																resize_enabled: 'false',
																removePlugins: 'elementspath',
																toolbar: [
																	[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
																	[ 'TextColor', 'BGColor' ],
																	[ 'BidiRtl', 'BidiLtr' ],
																	[ 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ],
																	[ 'Blockquote', 'HorizontalRule', 'Smiley', 'SpecialChar' ],
																	[ 'Preview', 'Maximize' ]
																],
																height: 200,
																width: '100%'
															});	
															
										</script> 
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">
                                          <span style="color: #1C1C1C;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;" class="mail_modal_comentario_value"></span>
                                        
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody> 
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <a href="http://" title="" class="" target="_blank">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/0143166e-f942-4648-b112-ca415d90194c.jpg" width="600" style="max-width:660px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                        <div style="font-family: arial, sans-serif; font-size: 12.8px; line-height: normal;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color: #696969;">Saludos,</span></span><br>
                                          <br>
                                          <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="user_detalle_fullname">$user_fullname</span></span><br>
                                          &nbsp;
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END BODY -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN FOOTER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter">
                    <tr>
                      <td valign="top" class="footerContainer" style="padding-bottom:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/4e34d7b8-a7bd-45c8-8bb4-64402932de4c.jpg" width="600" style="max-width:620px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock">
                          <tbody class="mcnFollowBlockOuter">
                            <tr>
                              <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="padding-left:9px;padding-right:9px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.facebook.com/Cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://twitter.com/cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.youtube.com/channel/UC4H7ewqROY9nkSaJi2psPPg?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://instagram.com/cochaviajes/" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <div style="text-align: center;"><em>Copyright 2015 |&nbsp;Cocha.com, All rights reserved.</em><br>
                                          <span style="text-align:center">El Bosque Norte 0430, Las Condes, Santiago - Chile</span><br>
                                          <br>
                                          <a class="utilityLink" href="*|UNSUB|*" style="word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-weight: normal;text-decoration: underline;" target="_blank">Anular suscripción</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END FOOTER -->
                </td>
              </tr>
            </table>
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>



</DIV><!--FIN PLANTILLA 4 !--> 
			
 <DIV id="plantilla_cumple_asia" style="display:none;">
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <!-- NAME: 1 COLUMN -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>plantilla 5</title>
    <style type="text/css">
      body,#bodyTable,#bodyCell{
      height:100% !important;
      margin:0;
      padding:0;
      width:100% !important;
      }
      table{
      border-collapse:collapse;
      }
      img,a img{
      border:0;
      outline:none;
      text-decoration:none;
      }
      h1,h2,h3,h4,h5,h6{
      margin:0;
      padding:0;
      }
      p{
      margin:1em 0;
      padding:0;
      }
      a{
      word-wrap:break-word;
      }
      .ReadMsgBody{
      width:100%;
      }
      .ExternalClass{
      width:100%;
      }
      .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
      line-height:100%;
      }
      table,td{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
      }
      #outlook a{
      padding:0;
      }
      img{
      -ms-interpolation-mode:bicubic;
      }
      body,table,td,p,a,li,blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
      }
      #templatePreheader,#templateHeader,#templateBody,#templateFooter{
      min-width:100%;
      }
      #bodyCell{
      padding:20px;
      }
      .mcnImage{
      vertical-align:bottom;
      }
      .mcnTextContent img{
      height:auto !important;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      body,#bodyTable{
      /*@editable*/background-color:#F2F2F2;
      }
      /*
      @tab Page
      @section background style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
      #bodyCell{
      /*@editable*/border-top:0;
      }
      /*
      @tab Page
      @section email border
      @tip Set the border for your email.
      */
      #templateContainer{
      /*@editable*/border:0;
      }
      /*
      @tab Page
      @section heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
      h1{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:40px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-1px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
      h2{
      /*@editable*/color:#404040 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:26px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.75px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
      h3{
      /*@editable*/color:#606060 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:18px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:-.5px;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Page
      @section heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
      h4{
      /*@editable*/color:#808080 !important;
      display:block;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:16px;
      /*@editable*/font-style:normal;
      /*@editable*/font-weight:bold;
      /*@editable*/line-height:125%;
      /*@editable*/letter-spacing:normal;
      margin:0;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader style
      @tip Set the background color and borders for your email's preheader area.
      */
      #templatePreheader{
      /*@editable*/background-color:#FFFFFF;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Preheader
      @section preheader text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
      .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Preheader
      @section preheader link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .preheaderContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Header
      @section header style
      @tip Set the background color and borders for your email's header area.
      */
      #templateHeader{
      /*@editable*/background-color:#ebebeb;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Header
      @section header text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
      .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
      /*@editable*/color:#ffffff;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Header
      @section header link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
      .headerContainer .mcnTextContent a{
      /*@editable*/color:#ffffff;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:none;
      }
      /*
      @tab Body
      @section body style
      @tip Set the background color and borders for your email's body area.
      */
      #templateBody{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Body
      @section body text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
      .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
      /*@editable*/color:#474747;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:15px;
      /*@editable*/line-height:150%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Body
      @section body link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
      .bodyContainer .mcnTextContent a{
      /*@editable*/color:#6DC6DD;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      /*
      @tab Footer
      @section footer style
      @tip Set the background color and borders for your email's footer area.
      */
      #templateFooter{
      /*@editable*/background-color:#ffffff;
      /*@editable*/border-top:0;
      /*@editable*/border-bottom:0;
      }
      /*
      @tab Footer
      @section footer text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
      .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
      /*@editable*/color:#606060;
      /*@editable*/font-family:Helvetica;
      /*@editable*/font-size:11px;
      /*@editable*/line-height:125%;
      /*@editable*/text-align:left;
      }
      /*
      @tab Footer
      @section footer link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
      .footerContainer .mcnTextContent a{
      /*@editable*/color:#606060;
      /*@editable*/font-weight:normal;
      /*@editable*/text-decoration:underline;
      }
      @media only screen and (max-width: 480px){
      body,table,td,p,a,li,blockquote{
      -webkit-text-size-adjust:none !important;
      }
      }	@media only screen and (max-width: 480px){
      body{
      width:100% !important;
      min-width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[id=bodyCell]{
      padding:10px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      .mcnBoxedTextContentContainer{
      max-width:100% !important;
      min-width:100% !important;
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcpreview-image-uploader]{
      width:100% !important;
      display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      img[class=mcnImage]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnImageGroupContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupContent]{
      padding:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageGroupBlockInner]{
      padding-bottom:0 !important;
      padding-top:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      tbody[class=mcnImageGroupBlockOuter]{
      padding-bottom:9px !important;
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionTopContent],table[class=mcnCaptionBottomContent]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftTextContentContainer],table[class=mcnCaptionRightTextContentContainer],table[class=mcnCaptionLeftImageContentContainer],table[class=mcnCaptionRightImageContentContainer],table[class=mcnImageCardLeftTextContentContainer],table[class=mcnImageCardRightTextContentContainer]{
      width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardLeftImageContent],td[class=mcnImageCardRightImageContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      padding-bottom:0 !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardBottomImageContent]{
      padding-bottom:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnImageCardTopImageContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      table[class=mcnCaptionLeftContentOuter] td[class=mcnTextContent],table[class=mcnCaptionRightContentOuter] td[class=mcnTextContent]{
      padding-top:9px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnCaptionBlockInner] table[class=mcnCaptionTopContent]:last-child td[class=mcnTextContent]{
      padding-top:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnBoxedTextContentColumn]{
      padding-left:18px !important;
      padding-right:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=mcnTextContent]{
      padding-right:18px !important;
      padding-left:18px !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
      */
      table[id=templateContainer],table[id=templatePreheader],table[id=templateHeader],table[id=templateBody],table[id=templateFooter]{
      /*@tab Mobile Styles
      @section template width
      @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.*/max-width:600px !important;
      /*@editable*/width:100% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
      h1{
      /*@editable*/font-size:24px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
      h2{
      /*@editable*/font-size:20px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
      h3{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
      h4{
      /*@editable*/font-size:16px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      table[class=mcnBoxedTextContentContainer] td[class=mcnTextContent],td[class=mcnBoxedTextContentContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
      table[id=templatePreheader]{
      /*@editable*/display:none !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
      td[class=preheaderContainer] td[class=mcnTextContent],td[class=preheaderContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
      td[class=headerContainer] td[class=mcnTextContent],td[class=headerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
      td[class=bodyContainer] td[class=mcnTextContent],td[class=bodyContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:18px !important;
      /*@editable*/line-height:125% !important;
      }
      }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section footer text
      @tip Make the body content text larger in size for better readability on small screens.
      */
      td[class=footerContainer] td[class=mcnTextContent],td[class=footerContainer] td[class=mcnTextContent] p{
      /*@editable*/font-size:14px !important;
      /*@editable*/line-height:115% !important;
      }
      }	@media only screen and (max-width: 480px){
      td[class=footerContainer] a[class=utilityLink]{
      display:block !important;
      }
      }
    </style>
  </head>
  <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
        <tr>
          <td align="center" valign="top" id="bodyCell">
            <!-- BEGIN TEMPLATE // -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer">
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN PREHEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader">
                    <tr>
                      <td valign="top" class="preheaderContainer" style="padding-top:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
                                        <div style="text-align: center;"><span style="font-size:12px">¡Felicidades!</span><br style="font-size: 11px;color: #414141;font-family: Arial, sans-serif;line-height: normal;text-align: -webkit-center;background-color: #CCCCCC;">
                                          <span style="color: #606060;font-family: arial,sans-serif;font-size: 10px;line-height: 12px;text-align: -webkit-center;">Para asegurar la entrega de nuestros e-mail en su correo,<br>
                                          por favor agregue&nbsp;<span style="color: #0073AE;"><a href="mailto:noticias@cocha.com" style="color: #1155CC;word-wrap: break-word;" target="_blank">noticias@cocha.com</a>&nbsp;</span>a su libreta de direcciones de correo.</span>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                        <div style="text-align: center;"><a href="*|ARCHIVE|*" style="color: #606060;font-family: Helvetica;font-size: 11px;line-height: 11px;text-align: center;word-wrap: break-word;text-decoration: underline;" target="_blank">Ver esta dirección de correo electrónico en su navegador</a></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END PREHEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN HEADER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader">
                    <tr>
                      <td valign="top" class="headerContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
                                          <tbody class="mcnTextBlockOuter">
                                            <tr>
                                              <td class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" valign="top">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top"><br>
                                                        <img align="none" height="84" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/7dbe4134-8fa9-4f47-ac30-fc18d69de2ae.png" style="width: 205px;height: 84px;margin: 0px;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" width="205">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="282">
                                                  <tbody>
                                                    <tr>
                                                      <td class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #ffffff;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;" valign="top">
                                                        <div style="text-align: right; line-height:120%;margin:-5px 0px;padding:0px;"><br>
                                                          <span style="color:#777777"><span style="line-height:20.7999992370605px; text-align:right"><span id="user_detalle_fullname" style="font-family:arial,sans-serif; font-size:12.8000001907349px; line-height:normal">$user_fullname</span><br>
                                                          <span id="user_detalle_email">$email</span></span><br style="line-height: 20.7999992370605px; text-align: right;">
                                                          <span id="user_detalle_telefono">$telefono</span><br>
                                                          <span id="user_detalle_sucursal">$sucursal</span><br>
                                                          <br>
                                                          &nbsp;
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="background-color: #EEEEEE;">
                          <tbody class="mcnDividerBlockOuter">
                            <tr>
                              <td class="mcnDividerBlockInner" style="padding: 2px 18px;">
                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 2px;border-top-style: solid;border-top-color: #999999;">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END HEADER -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN BODY // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                    <tr>
                      <td valign="top" class="bodyContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                         <span style="color:#696969"><strong>["Nombre Cliente"]</strong></span>
										<br><br>
										<textarea name="comentarios_ejecutivo_5" id="comentarios_ejecutivo_5" rows="10" cols="80" placeholder="escriba aqui su comentario" style="color: #1C1C1C;">
										
										</textarea>                                  
										
										<script>
										CKEDITOR.replace( 'comentarios_ejecutivo_5', {
																language: 'ar',
																uiColor: '#E6E6E6',
																resize_enabled: 'false',
																removePlugins: 'elementspath',
																toolbar: [
																	[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
																	[ 'TextColor', 'BGColor' ],
																	[ 'BidiRtl', 'BidiLtr' ],
																	[ 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ],
																	[ 'Blockquote', 'HorizontalRule', 'Smiley', 'SpecialChar' ],
																	[ 'Preview', 'Maximize' ]
																],
																height: 200,
																width: '100%'
															});	
															
										</script> 
                                      
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">
                                          <span style="color: #696969;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;" class="mail_modal_comentario_value" style="color: #1C1C1C;"></span>
                                         
                                        </div>
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <a href="http://" title="" class="" target="_blank">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/639b3360-76f9-4559-a267-f38d00902ad3.jpg" width="600" style="max-width:660px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding: 9px 18px;color: #CECECE;line-height: 100%;">
                                        <div style="color: #222222;font-family: arial, sans-serif;font-size: 12.8000001907349px;line-height: normal;">&nbsp;</div>
                                        <div style="font-family: arial, sans-serif; font-size: 12.8px; line-height: normal;"><span style="font-family:arial,helvetica neue,helvetica,sans-serif"><span style="color: #696969;">Saludos,</span></span><br>
                                          <br>
                                          <span style="color: #696969;font-family: arial,helvetica neue,helvetica,sans-serif;font-size: 12.8px;line-height: normal;"><span id="user_detalle_fullname">$user_fullname</span></span><br>
                                          &nbsp;
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END BODY -->
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <!-- BEGIN FOOTER // -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter">
                    <tr>
                      <td valign="top" class="footerContainer" style="padding-bottom:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock">
                          <tbody class="mcnImageBlockOuter">
                            <tr>
                              <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                                  <tbody>
                                    <tr>
                                      <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0;">
                                        <img align="left" alt="" src="https://gallery.mailchimp.com/cf8e3f784ee65fee4bea0e12f/images/4e34d7b8-a7bd-45c8-8bb4-64402932de4c.jpg" width="600" style="max-width:620px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock">
                          <tbody class="mcnFollowBlockOuter">
                            <tr>
                              <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="padding-left:9px;padding-right:9px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContent" style="border: 1px solid #EEEEEE;background-color: #FAFAFA;">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.facebook.com/Cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://twitter.com/cochaviajes?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://www.youtube.com/channel/UC4H7ewqROY9nkSaJi2psPPg?email=*|EMAIL|*" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                <a href="https://instagram.com/cochaviajes/" target="_blank"><img src="http://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if gte mso 6]>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <![endif]-->
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock">
                          <tbody class="mcnTextBlockOuter">
                            <tr>
                              <td valign="top" class="mcnTextBlockInner">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer">
                                  <tbody>
                                    <tr>
                                      <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                                        <div style="text-align: center;"><em>Copyright 2015 |&nbsp;Cocha.com, All rights reserved.</em><br>
                                          <span style="text-align:center">El Bosque Norte 0430, Las Condes, Santiago - Chile</span><br>
                                          <br>
                                          <a class="utilityLink" href="*|UNSUB|*" style="word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-weight: normal;text-decoration: underline;" target="_blank">Anular suscripción</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // END FOOTER -->
                </td>
              </tr>
            </table>
            <!-- // END TEMPLATE -->
          </td>
        </tr>
      </table>
    </center>
    </body>
  </html>		
</DIV><!--FIN PLANTILLA 5 !-->

			<div class="modal-footer">
                <button type="button" id="modal_enviar_plantillas" data-loading-text="<i class=&quot;fa fa-spinner fa-spin&quot;></i> Enviando..." data-complete-text="<i class=&quot;fa fa-check&quot;></i> Enviado!" data-problem-text="<i class=&quot;fa fa-check&quot;></i> Problemas!" class="btn btn-success btn-sm"><span class="fa fa-envelope-o"></span>&nbsp;Aceptar</button>
                <!--a href="#" data-dismiss="modal" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span>Cerrar</a!-->
				<button type="button" data-dismiss="modal"  class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove-sign"></span>Cerrar</button>
            </div>
         </div>
      </div>
</div>
  
<div id="dialog" title="Mensaje de Alerta" style="display:none;">
  <p>Alerta de uso si agendas el envío de el mail de cumpleaños a tu cliente no se puede revertir. ¿Estás seguro?</p>
   <button type="button" id="aceptar_dialog" class="btn btn-success btn-sm" style="margin-left:45px;">&nbsp;&nbsp;Aceptar</button>
   <button type="button" id="cerrar_dialogs" class="btn btn-danger btn-sm">&nbsp;&nbsp;Cerrar</button>
</div>

 <div id="dialog_notificacion" title="Mensaje de éxito" style="display:none;">
  <p>Notificación importante.</p>
  <p>El envío del saludo de cumpleaños ya fue agendado.</p>
 </div>

  <div id="dialog_quitar" title="Mensaje de Confirmación" style="display:none;">
	<p>¿Está Seguro que desea realizar la modificación?</p>
	<button type="button" id="aceptar_quitar" class="btn btn-success btn-sm" style="margin-left:45px;">&nbsp;&nbsp;Aceptar</button>
	<button type="button" id="cerrar_dialog" class="btn btn-danger btn-sm">&nbsp;&nbsp;Cerrar</button>
  
 </div>
 
 <div id="dialog_exito_quitar" title="Mensaje de Notificación" style="display:none;">
	  <p>El Usuario ha sido Modificado</p>
	  
  </div>
 
 
 
 
<?php

function nombre_mes($mes){
 setlocale(LC_TIME, 'spanish');  
 $nombre=strftime("%B",mktime(0, 0, 0, $mes, 1, 2000)); 
 return strtoupper($nombre);
} 

?>