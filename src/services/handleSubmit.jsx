export const formOptions = {
    contract_types: ["Any", "contract", "interface", "library"],
    pragma_versions: ["Any", "0.4.25", "0.5.0", "0.5.4"],
    greater_than: {
        Any: "Any",
        "Greater than 1": { $gt: 1 },
        "Greater than 10": { $gt: 10 },
        "Greater than 100": { $gt: 100 },
        "Greater than 1000": { $gt: 1000 }
    }
};

export const handleSubmit = function(query) {
    // TODO to improve code readability/reusability
    this.query = Object.assign({}, query);
    Object.keys(query).forEach(v => {
        if (this.query[v] === "Any") delete this.query[v];
    });
    this.query["SLOC"] = formOptions.greater_than[this.query["SLOC"]];
    this.query["NF"] = formOptions.greater_than[this.query["NF"]];
    fetch("https://smac.ga/object/" + JSON.stringify(this.query))
        .then(res => res.json())
        .then(data => this.setState({ smacs: data }))
        .catch(err => console.log("catch:\n", err));
};
