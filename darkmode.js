const temas = {
    ligth: {
        backgroud: "white",
        text: "black",    
    },
    dark: {
        backgroud: "black",
        text: "white",
    }
};

function setTheme(novoTema) {
    const corTemas = temas[novoTema];

    Object.keys(corTemas).map(function(key){
        html.style.setProperty(`--${key}`, corTemas[key]);
    })
}