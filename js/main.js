var numOfDeaths = [];
var ageGroup = [];
$(document).ready( function () {
    console.log("Hello");
    $('#dataTable').DataTable();
    loadJSON();
});

function loadJSON() {
  $.getJSON("../data/deaths.json", function (deaths){
    console.log(deaths);
    parseData(deaths);
  });
}

function parseData(deaths){

  var html = "";

  $.each(deaths, function(index){
    console.log(deaths[index].NumOfDeaths);
    html += '<p>' + deaths[index].numofdeaths + '</p>';
    html += '<ul><li>Age Group' + deaths[index].agegroup + '</li>';
    html += '<li>Sex' + deaths[index].sex + '</li></ul>';

    numOfDeaths.push(parseFloat(deaths[index].numofdeaths));
    ageGroup.push(parseFloat(deaths[index].agegroup));
  });
  numOfDeaths.unshift("Number Of Deaths");
  ageGroup.unshift("Age Group");
  $("#test").append(html);
}

//Line Chart
var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x', '5', '6', '7', '8'],
        ['Total', 37940, 17718, 30401, 28352],
        ['Males', 19220, 9248, 17004, 15459],
        ['Females', 18720, 8470, 13397, 12893]
      ]
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Number of Cases',
          position: 'outer-middle'
        }
      }
    },
    color: {
        pattern: ['#000080', '#1f77b4', '#aec7e8', ]
    }
});

//Pie Chart for Race
var pieChartOne = c3.generate({
    bindto: '#pie-chart-one',
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#1f77b4', '#aec7e8']
    }
});

//Pie Chart for Age
var pieChartTwo = c3.generate({
    bindto: '#pie-chart-two',
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#1f77b4', '#aec7e8']
    }
});


$('#dataTable').DataTable( {
  "ajax" : "../data/deaths.json",
  "columns" : [
    {"data" : "DateOfDeathMonth"},
    {"data" : "Region"},
    {"data" : "AgeGroup"},
    {"data" : "RaceEthnicity"},
    {"data" : "NumOfDeaths"},
    {"data" : "Sex"},
    {"data" : "PlaceofDeath"}
  ]

} );
