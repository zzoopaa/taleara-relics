async function loadComponent(selector, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.querySelector(selector).innerHTML = data;
}

loadComponent("header", "./hfload/header.html");
loadComponent("footer", "./hfload/footer.html");