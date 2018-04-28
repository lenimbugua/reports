function dailyPluckingTotalUrl() {
	let url = "../php/getUpdates.php";
	return url;
}




function filterByDateUrl(startDate, endDate) {
	let url = "../php/getUpdatesphp?q=";
	url += startDate + "&q2=" + endDate;
	getData(url);
}



function getStartDate() {
    return document.getElementById("dateInput1").value;
}

function getEndDate() {
    return document.getElementById("dateInput2").value;
}