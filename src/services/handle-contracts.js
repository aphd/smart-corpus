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

export const addToCart = function (event, address) {
    const checked = !event.target.checked;
    const cart = this.state.cart;

    this.setState({
        cart: checked ? cart.filter((v) => v !== address) : [...cart, address],
    });
};

export const handleContracts = function (conditions) {
    let metricsUrl =
        "https://raw.githubusercontent.com/aphd/smac-corpus-api/master/data/metrics.json";
    metricsUrl = "./metrics.json";
    this.setState({ loading: true });
    return fetch(metricsUrl)
        .then((res) => res.json())
        .then((data) => filter_data(data, conditions))
        .then(setState.bind(this))
        .catch((err) => console.log("catch:\n", err));
};

const filter_data = (data, conditions) => {
    const obj = get_conditions(conditions);
    return data.filter(
        (v) =>
            v.total_lines >= obj.total_lines &&
            v.functions >= obj.functions &&
            v.modifiers >= obj.modifiers &&
            v.payable >= obj.payable &&
            v.vrsion.match(obj.version)
    );
};

const get_conditions = (conditions) => ({
    total_lines: options.greater_than[conditions["total_lines"]] || 0,
    functions: options.greater_than[conditions["functions"]] || 0,
    modifiers: options.greater_than[conditions["modifiers"]] || 0,
    payable: options.greater_than[conditions["payable"]] || 0,
    version: conditions["vrsion"] === "Any" ? "." : conditions["vrsion"] || ".",
});

const setState = function (data) {
    this.setState({
        data: data,
        loading: false,
        nFound: data.length,
        cart: [],
    });
};
