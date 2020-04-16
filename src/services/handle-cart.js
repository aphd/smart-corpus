export const addToCart = function (event, address, setCart) {
    const checked = !event.target.checked;
    const currentContract = { addr: address };
    setCart((c) =>
        checked ? c.filter((v) => v.addr !== address) : [...c, currentContract]
    );
};
