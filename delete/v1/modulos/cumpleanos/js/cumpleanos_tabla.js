/** Este código nos permite cargar la tabla Cumpleaños. **/

var CumpleanosTabla = function() {
	var cumpleanos;
	var fa_icon_phone = "<i class='fa fa-phone'></i> ";
	var fa_icon_envelope = "<i class='fa fa-envelope-o'></i> ";
	
	return {

		cargarTabla: function() 
		{
			if(!$.fn.dataTable.isDataTable('#table_cumpleanios'))
			{
				CumpleanosTabla.cumpleanos = $('#table_cumpleanios').dataTable({
				 ajax: {
				  'url': Configuraciones.getConfiguraciones().url_table_cumpleanos,
				  'dataSrc': function ( json ) {
					 var i;
					 for(i = 0; i < json.length; i++){
						var json_aux = JSON.stringify(json[i]);
						var plantilla = "cumpleanos";
						
						if(json[i].cumple_mes != "")
							json[i].cumple_mes = "<div style='padding:0px 40px;'>"+FuncionesGenerales.cambiarFormatoFecha(json[i].cumple_mes,'dd-MM-yyyy')+"</div>";
						else	
							json[i].cumple_mes = "<div style='padding:0px 30px;'></div>";
							
						var contador = "";
						if(json[i].c_envio_email > 0)
							contador = " <strong>("+json[i].c_envio_email+")</strong>";
						else
							contador = "";
						
						json[i].buttons = '';
						json[i].email = ( (json[i].email == 'Sin Email') ? fa_icon_envelope+"Sin Email" : "<a href='#' data-modulo-tag='"+ plantilla +"' data-contacto-id='" + json[i].rut + "' data-json=\'"+ json_aux +"'\" onclick='modal_email(this)'>" + fa_icon_envelope + json[i].email + contador + "</a>" ) +' <br> '+( (json[i].telefono.length == 0) ? fa_icon_phone+"Sin Teléfono" : fa_icon_phone+json[i].telefono);
						json[i].description = ( (json[i].description.length == 0) ? "Sin Descripción" : json[i].description);
						json[i].nombre = "<div style='padding:10px;'><strong>"+json[i].nombre+"</strong></br> Rut: <a href='javascript:void(0);' data-rut='"+json[i].rut+"' onclick='modal_editar_cumpleanio(this)' data-json=\'"+ json_aux +"'\">"+json[i].rut + "</a></div>";
					    
				 
					 
					 }
					 if(typeof(json)=="string"){
					  json={};
					   json.buttons = '';
					 }
					  var d = {};
					  return d['data'] = json;
				  }
				},
				columns: [
				  { data: "buttons" },
				  { data: "nombre" },
				  { data: "cumple_mes", sSortDataType: "dom-text" },
				  { data: "email" },
				  { data: "description" },
				
				  
				],
				"bFilter": true,
				"sDom": 'r<"H"lf><"datatable-scroll"t><"F"ip>',
				"bLengthChange": false,
				"processing" : true,
				"iDisplayLength" : 10,
				"oTableTools": {
				  "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
				},
				"oLanguage": {
				  "sLoadingRecords": '<img src="assets/img/loader.gif" />',
				  "sUrl": "vendor/plugins/datatables/Spanish.json"
				}
			  });
				
			  $('#table_cumpleanios tbody').on('click', 'tr', function (e) {
					var nRow = $(this);
					FuncionesGenerales.setRegistroSeleccionado(nRow);
			  });
			  
				CumpleanosTabla.cumpleanos.dataTableExt.afnSortData['dom-text'] = function  ( oSettings, iColumn )
				{
					return this.api().column( iColumn, {order:'index'} ).nodes().map( function ( td, i ) {
						return FuncionesGenerales.cambiarFormatoFecha($(td).text(),'dd-MM')
					});
				}
			}
			else
			{
				CumpleanosTabla.cumpleanos.api().ajax.reload();
				CumpleanosTabla.cumpleanos.dataTableExt.afnSortData['dom-text'] = function  ( oSettings, iColumn )
				{
					return this.api().column( iColumn, {order:'index'} ).nodes().map( function ( td, i ) {
						return FuncionesGenerales.cambiarFormatoFecha($(td).text(),'dd-MM')
					});
				}
			}
        }
	};
}();