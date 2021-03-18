function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var data = ["mark","pewdie", "jack","plier","pie","spticeye"];

window.addEventListener("load", function youtube(){

    var perrow = 3, html="<table><tr>";
    for(var i=0 ; i<data.length;i++) {
        html += `<td>${data[i]}</td>`;
        var next = i+1;
        if(next%perrow==0 && next !=data.length){
            html += "</tr><tr>"
        }
    }
    html += "</tr></table>";
    document.getElementById("container").innerHTML=html;
})
window.addEventListener("click", function adding () {
    data.push("something","someone","anything");
    document.getElementById("container").innerHTML=data;
})
