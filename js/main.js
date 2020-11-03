//Variables for Line Chart
var month = [];
var gender = [];
var numOfDeaths = [];

//Variables for Pie Chart One
var deathsByRace = [];
var race = [];


$(document).ready( function () {
    console.log("Hello");
    $('#dataTable').DataTable();
    loadJSON();
});

function loadJSON() {
  /*$.getJSON("../data/deaths.json", function (deaths){
    parseData(deaths);
  });*/

  $.getJSON("../data/line.json", function (line){
    //console.log(line);
    parseData(line);
  });

  $.getJSON("../data/race.json", function (race){
    //console.log(race);
    parseData(race);
  });

  $.getJSON("../data/age.json", function (age){
    //console.log(age);
    parseData(age);
  });
}

function parseData(line){
  console.log('i am here');
  $.each(line, function(index){
      month.push(parseFloat(line[index].Month));
      gender.push(parseFloat(line[index].Gender));
      numOfDeaths.push(parseFloat(line[index].NumOfDeaths));
  });

  console.log(line);
  month.unshift("Month");
  gender.unshift("Gender");
  numOfDeaths.unshift("Number of Deaths");

//I was unable to make this chart function with JSON data
//Line Chart
/*
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
}); */

}

function parseData(race){

  //$.each(race, function(index){
      //deathsByRace.push(parseFloat(race[index].NumOfDeaths));
      //race.push(parseFloat(race[index].race));
      race.forEach(function(e) {
        race.push(e.Race);
        deathsByRace[e.Race] = e.NumOfDeaths;
  });

    deathsByRace.unshift("Number of Deaths");
    race.unshift("Race/Ethnicity");

}


//Pie Chart for Race
//I was unable to populate with JSON data
  /*var pieChartOne = c3.generate({
      bindto: '#pie-chart-one',
      data: {
        json: [ deathsByRace ],
        keys: {
            value: [ race ]
        },
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      color: {
          pattern: ['#50BBE6', '#0BA4E0', '#097FAD', '#224F61','#054761', '#000080']
      }
  });

}*/



//Line Chart, no JSON data
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
          pattern: ['#2234A8', '#4467C4','#659BDF']
    }
});


//Pie Chart for Race, no JSON data
var pieChartOne = c3.generate({
    bindto: '#pie-chart-one',
    data: {
        columns: [
            ['Hispanic', 27682],
            ['American Indian/Alaska Native', 1533],
            ['Asian', 3964],
            ['Black', 21423],
            ['White', 58746],
            ['Other', 1063],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
          pattern: ['#191970', '#00008C', '#2234A8', '#4467C4','#659BDF', '#87CEFB']
    }
});

//Pie Chart for US Demographics, No JSON (data from Census Bureau)
var pieChartTwo = c3.generate({
    bindto: '#pie-chart-two',
    data: {
        // iris data from R
        columns: [
          ['Hispanic', 18.5],
          ['American Indian/Alaska Native', 1.3],
          ['Asian', 5.9],
          ['Black', 13.4],
          ['White', 60.1],
          ['Other', 0.8],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
          pattern: ['#191970', '#00008C', '#2234A8', '#4467C4','#659BDF', '#87CEFB']
    }
});

//Bar Chart for
var barChart = c3.generate({
    bindto: '#bar-chart',
    data: {
      x : 'x',
      columns: [
          ['x', 'Northeast', 'South', 'Midwest', 'West'],
          ['Number of Deaths', 23472, 52258, 17724, 20957],
        ],
        //groups: [
          //['download', 'loading']
        //],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category' // this needed to load string x value
        }
      },
      color: {
            pattern: ['#191970', '#00008C', '#2234A8', '#4467C4','#659BDF', '#87CEFB']
      }
    });

var chart = c3.generate({
  bindto: '#age',
    data: {
        columns: [
          ['Under 1 Year', 14],
          ['1 to 17', 59],
          ['18 to 39', 2113],
          ['40 to 64', 22788],
          ['65 to 84', 54647],
          ['85 + ', 34788],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#191970', '#00008C', '#2234A8', '#4467C4','#659BDF', '#87CEFB']
    },
    donut: {
        title: ""
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

});
