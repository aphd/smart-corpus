const formOptions = {
    contract_types: {
        Any: "Any",
        Contract: "contract",
        Interface: "interface",
        Library: "library"
    },
    pragma_version: {
        Any: "Any",
        "0.4.25": "0.4.25",
        "0.5.0": "0.5.0"
    }
};

const handleSubmit = function(par) {
    console.log(par);
    if (par.Type === "Any") delete par.Type;
    if (par.CV === "Any") delete par.CV;
    console.log(par);
    fetch("https://smac.ga/object/" + JSON.stringify(par))
        .then(res => res.json())
        .then(data => this.setState({ smacs: data }))
        .catch(err => console.log("catch:\n", err));
};

export { formOptions, handleSubmit };
