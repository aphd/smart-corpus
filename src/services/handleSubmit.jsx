export const formOptions = {
    contract_types: ["Any", "contract", "interface", "library"],
    pragma_versions: ["Any", "0.4.25", "0.5.0", "0.5.4"]
};

export const handleSubmit = function(par) {
    Object.keys(par).forEach(v => {
        if (par[v] === "Any") delete par[v];
    });
    fetch("https://smac.ga/object/" + JSON.stringify(par))
        .then(res => res.json())
        .then(data => this.setState({ smacs: data }))
        .catch(err => console.log("catch:\n", err));
};
