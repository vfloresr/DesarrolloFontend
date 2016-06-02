$( document ).ready(function() {
  
 // window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Oportunidades por Canal"
		},
		legend:{
			verticalAlign: "center",
			horizontalAlign: "left",
			fontSize: 18,
			fontFamily: "Helvetica"        
		},
		theme: "theme2",
		data: [
		{        
			type: "pie",       
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 20,
			indexLabel: "{label} {y}%",
			startAngle:-20,      
			showInLegend: true,
			toolTipContent:"{legendText} {y}",
			dataPoints: [
			
				{  y: 5, legendText:"rr", label: "fffg" },
				{  y: 15, legendText:"ddrr", label: "sddfffg" },
			
			]
		}
		]
	});
	chart.render();
});
/*
}*/