window.onload = (e) => {
    document.getElementById("navbarDiv").innerHTML = loadPage("template.html");
}

loadPage = (href) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}