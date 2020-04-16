export const addToCart = function (event) {
    const checked = !event.target.checked;
    const contract = { addr: this.props.data.contractAddress };
    this.setCart((c) =>
        checked ? c.filter((v) => v.addr !== this.props.id) : [...c, contract]
    );
};
