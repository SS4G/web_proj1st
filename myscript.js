function changeColumn1Text() {
    document.getElementById("col1").innerHTML = "TextChanged"
    window.console.log("changeColumn1Text called")
}

function changeColumn2Color() {
    document.getElementById("col2").style.color = "yellow"
    window.console.log("changeColumn2Color called")
}

function changeColumn3Bgcolor() {
    document.getElementById("col3").style.backgroundColor = "black"
    window.console.log("changeColumn3Bgcolor called")
}