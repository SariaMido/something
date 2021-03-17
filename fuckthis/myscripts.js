'use strict';
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function adding() {
    var table = document..getElementById("youtubrs");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "new cell1";
    cell2.innerHTML = "new cell2";
    
}
