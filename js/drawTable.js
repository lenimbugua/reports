function getData (){

   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                myObj = JSON.parse(this.responseText);
                pluckingMode = myObj.pluckingMode;
                for(let value of pluckingMode){
                  createTable(value)
                }
            }
        };
        xmlhttp.open("GET","../php/getUpdates.php", true);
        xmlhttp.send();
    
}
getData();