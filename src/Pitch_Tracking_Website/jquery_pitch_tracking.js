var pitch_count = 1

var all_lists = new Array();

function normalTracking() {
	var lst = new Array();
	lst.push(pitch_count)
	pitch_count = pitch_count + 1

 	document.getElementById("pitch_number").innerHTML = "Pitch Number: " + pitch_count;

 	d = new Date(document.getElementById("date").value);
 	document.getElementById("date").innerHTML = d;

 	n = document.getElementById("name").value;
 	document.getElementById("name").text = n;

 	// Update lists for every pitch
 	lst.push(n);
 	lst.push(d);
 	lst.push(0);
 	lst.push(document.getElementById("pitch_location").value);
 	document.getElementById("pitch_location").value = "";
 	lst.push(0);
 	lst.push(document.getElementById("count").value);
	lst.push(document.getElementById("executed").value);
	lst.push(document.getElementById("hit_miss").value);


 	var radios = document.getElementsByName('Pitch Type');

	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
	    // do whatever you want with the checked radio
	    
	    lst.push(i);
	    // only one radio can be logically checked, don't check the rest
	    break;
  }
}
	lst.push('');
	all_lists.push(lst);

}

function Tracking() {
	var lst = new Array();
	lst.push(pitch_count)
	pitch_count = pitch_count + 1

 	document.getElementById("pitch_number").innerHTML = "Pitch Number: " + pitch_count;

 	d = new Date(document.getElementById("date").value);
 	document.getElementById("date").innerHTML = d;

 	n = document.getElementById("name").value;
 	document.getElementById("name").text = n;

 	// Update lists for every pitch
 	lst.push(n)
 	lst.push(d)
 	lst.push(document.getElementById("live").value)
 	lst.push(document.getElementById("inning").value)
 	lst.push(document.getElementById("pitch_location").value)
 	document.getElementById("pitch_location").value = "";
 	lst.push(document.getElementById("batter_number").value)
 	lst.push(document.getElementById("count").value)
	lst.push(document.getElementById("executed").value)
	lst.push(document.getElementById("hit_miss").value)


 	var radios = document.getElementsByName('Pitch Type');

	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
	    // do whatever you want with the checked radio
	    
	    lst.push(i);
	    // only one radio can be logically checked, don't check the rest
	    break;
  }
}
	lst.push('');
	all_lists.push(lst);

}

function submit(){

// need this to get last pitch data
	var lst = new Array();
	// get value of the notes to add to csv
	lst.push([0,0,0,0,0,0,0,0,0,0,0]);
	lst.push(document.getElementById('note_area').value);

	all_lists.push(lst)

	// Code to write to csv 
   var csv = 'pitch_number,pitcher_name,date,live,inning,pitch_location,batter_number,count,executed,hit_miss,pitch_type,notes\n';
    all_lists.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    var filename = document.getElementById("name").value + document.getElementById("date").value +'.csv';
    hiddenElement.download = filename;
    hiddenElement.click();
};


function showNormal() {
	$("#Normal_Bullpen").show();
	$("#home_page").hide();
	$("#Live_Bullpen").hide();
}

function showLive() {
	$("#Live_Bullpen").show();
	$("#Normal_Bullpen").hide();
	$("#home_page").hide();
}