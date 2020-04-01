export const formOptions = {
    pragma_versions: ["Any", "0.4.25", "0.5.0", "0.5.2", "0.6.0"],
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
    // this.query["total_lines"] should be based on check type
    this.query = Object.assign({}, query);
    const server = "http://smac.ga/object/" || "http://localhost:8080/";
    // this.query = { functions: 27, vrsion: "0.4.12" };
    Object.keys(query).forEach(v => {
        if (this.query[v] === "Any") delete this.query[v];
    });
    this.query["total_lines"] =
        formOptions.greater_than[this.query["total_lines"]];
    fetch(server + JSON.stringify(this.query))
        .then(res => res.json())
        .then(data => this.setState({ data: data }))
        .catch(err => console.log("catch:\n", err));
};
