async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
}

loadComponent("header", "./hfload/header.html");
loadComponent("footer", "./hfload/footer.html");