const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=tema]");

const coresIniciais = {
    background: window.getComputedStyle(html).getPropertyValue("--background"),
    backgroundPainel: window.getComputedStyle(html).getPropertyValue("--background-painel"),
    corTitulo: window.getComputedStyle(html).getPropertyValue("--cor-titulo"),
    corTexto: window.getComputedStyle(html).getPropertyValue("--cor-texto"),
}

const darkMode = {
    background: "#333333",
    backgroundPainel: "#434343",
    corTitulo: "#cacaca",
    corTexto: "#cacaca",
}

const transformKey = key => "--" + key.replace(/[(A-Z)]/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])   
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(coresIniciais)
})