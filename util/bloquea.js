read("ListaPalabras").then(res => {
    for (item in res) {
        let variable = $(":contains('" + res[item] + "'):not(:has(:contains('" + res[item] + "')))");
        $(variable).attr("style", "color:red !important;");
    }
})