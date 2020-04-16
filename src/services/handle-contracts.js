export const addToCart = function (event, address) {
    const checked = !event.target.checked;
    const cart = this.state.cart;

    this.setState({
        cart: checked ? cart.filter((v) => v !== address) : [...cart, address],
    });
};

export const handleContracts = function (query) {
    // TODO to improve code readability/reusability
    // this.query["total_lines"] should be based on check type
    // TODO you need to get the data from the mongodb.
    this.query = Object.assign({}, query);
    let metricsUrl =
        "https://raw.githubusercontent.com/aphd/smac-corpus-api/master/data/metrics.json";
    // metricsUrl = "./metrics.json";
    const total_lines = options.greater_than[query["total_lines"]] || 0;
    const functions = options.greater_than[query["functions"]] || 0;
    const modifiers = options.greater_than[query["modifiers"]] || 0;
    const payable = options.greater_than[query["payable"]] || 0;
    const version = query["vrsion"] === "Any" ? "." : query["vrsion"] || ".";
    this.setState({ loading: true });
    return fetch(metricsUrl)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                data: data.filter(
                    (v) =>
                        v.total_lines >= total_lines &&
                        v.functions >= functions &&
                        v.modifiers >= modifiers &&
                        v.payable >= payable &&
                        v.vrsion.match(version)
                ),
                loading: false,
                total: data.length,
                cart: [],
            });
        })
        .catch((err) => console.log("catch:\n", err));
};

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
