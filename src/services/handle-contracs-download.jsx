const downloadFile = (contract) =>
    fetch(getSourceCodeUrl(contract.addr))
        .then((resp) => resp.json())
        .then(handleClick.bind({ address: contract.addr }));

const getSourceCodeUrl = (address) =>
    `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2`;

const handleClick = function (json) {
    const sourceCode = json.result[0].SourceCode;
    const blob = new Blob([sourceCode], { type: "application/json" });
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = `${this.address}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
};

export const handleContractsDownload = (cart) => {
    cart.forEach(downloadFile);
};
