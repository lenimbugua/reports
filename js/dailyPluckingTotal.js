function getData (){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            pluckingMode = myObj.pluckingMode;
            for(let value of pluckingMode){
              var tr = document.createElement("tr");

              var th = document.createElement("th");              
              th.scope = "row";

              var dateTextNode = document.createTextNode(value.date);
              th.appendChild(dateTextNode);

              var tdActivity = document.createElement("td");
              var activityTextNode = document.createTextNode(value.activity);
              tdActivity.appendChild(activityTextNode);

              var tdTotalUnits = document.createElement("td");
              var totalUnitsTextNode = document.createTextNode(value.totalUnits);
              tdTotalUnits.appendChild(totalUnitsTextNode);

              tr.appendChild(th);
              tr.appendChild(tdActivity);
              tr.appendChild(tdTotalUnits);              

              //chartData.push([value.activity, parseFloat(value.totalUnits)]);
              //console.log(chartData);

              var tagArray =document.getElementsByTagName("tbody");
              tagArray[0].appendChild(tr);
            }            
        }
    };
    xmlhttp.open("GET", "../php/getUpdates.php", true);
    xmlhttp.send();
  }
  getData();