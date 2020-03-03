export const formOptions = {
    contract_types: ["Any", "contract", "interface", "library"],
    pragma_versions: ["Any", "0.4.25", "0.5.0", "0.5.4"]
};

export const handleSubmit = function(query) {
    this.query = Object.assign({}, query);
    Object.keys(query).forEach(v => {
        if (this.query[v] === "Any") delete this.query[v];
    });
    fetch("https://smac.ga/object/" + JSON.stringify(this.query))
        .then(res => res.json())
        .then(data => this.setState({ smacs: data }))
        .catch(err => console.log("catch:\n", err));
};
