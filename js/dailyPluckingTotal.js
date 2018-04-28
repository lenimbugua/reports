function getStartDate() {
    return document.getElementById("dateInput1").value;

}

function getEndDate() {
    return document.getElementById("dateInput2").value;
}


function getFilteredData(startDate, endDate){

   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);

                 myObj = JSON.parse(this.responseText);
            pluckingMode = myObj.pluckingMode;
                for(let value of pluckingMode){
                  createTable(value)
                }
            }
            else{
                console.log(startDate, endDate);
            }
        };
        xmlhttp.open("GET","../php/getFilterDailyPluckingTotal.php?q=" + startDate + "&q2=" + endDate, true);
        xmlhttp.send();
    
}
getFilteredData();