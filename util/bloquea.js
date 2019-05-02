read("ListaPalabras").then(res => {
    for (item in res) {
        let variable = $(":contains('" + res[item] + "'):not(:has(:contains('" + res[item] + "')))");
        //$(variable).attr("style", "filter: blur(4px) !important;");
        $(variable).addClass("bloqueado");
    }
})