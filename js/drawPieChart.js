var chartData = [];
  const resolveChart = new Promise((resolve, reject) => {
      // do something asynchronous which eventually calls either:
      getData();
      resolve(chartsDraw()); // fulfilled
      // or
       reject(console.log(error)); // rejected
  });

  function getData (){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            pluckingMode = myObj.pluckingMode;
            for(let value of pluckingMode){
              chartData.push([value.activity, parseFloat(value.totalUnits)]);
              console.log(chartData);
            }
        }
    };
    xmlhttp.open("GET", "../php/getUpdates.php", true);
    xmlhttp.send();
  }

  function chartsDraw(){
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

          // Create the data table.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          data.addRows(chartData);

          // Set chart options
          var options = {'title':'Daily Summary Of Total Units By Methods Of Plucking',
                         'width':400,
                         'height':300};

          // Instantiate and draw our chart, passing in some options.
          var chart = new google.visualization.PieChart(document.getElementById('pieChart_div'));
          chart.draw(data, options);
        }
  }
