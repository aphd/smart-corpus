export const options = {
    pragma_versions: ["Any", "0.4.*", "0.5.*", "0.6.*"],
    greater_than: {
        Any: 0,
        "Greater than 1": 1,
        "Greater than 10": 10,
        "Greater than 100": 100, //,
        // "Greater than 1000": { $gt: 1000 }
    },
};

export const handleSubmit = function (query) {
    // TODO to improve code readability/reusability
    // this.query["total_lines"] should be based on check type
    this.query = Object.assign({}, query);
    const server =
        "https://raw.githubusercontent.com/aphd/smac-corpus/master/src/fixtures/contracts.json?";
    const total_lines = options.greater_than[query["total_lines"]] || 0;
    const functions = options.greater_than[query["functions"]] || 0;
    const modifiers = options.greater_than[query["modifiers"]] || 0;
    const payable = options.greater_than[query["payable"]] || 0;
    const version = query["vrsion"] === "Any" ? "." : query["vrsion"] || ".";
    console.log(version);
    return fetch(server)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                data: data.filter(
                    (v) =>
                        v.total_lines > total_lines &&
                        v.functions > functions &&
                        v.modifiers > modifiers &&
                        v.payable > payable &&
                        v.vrsion.match(version)
                ),
            });
        })
        .catch((err) => console.log("catch:\n", err));
};
