const domain =
    "https://raw.githubusercontent.com/aphd/smac-corpus-api/master/data/contracts/";

const downloadFile = (addr) => {
    const fn = `${addr}.json`;
    let url = `${domain}/${addr.substr(0, 4)}/${fn}`;

    return fetch(url, {
        method: "GET",
    })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (json) {
            const sourceCode = json.result[0].SourceCode;
            const blob = new Blob([sourceCode], { type: "application/json" });
            let a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = fn;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
};

export const handleContractsDownload = (cart) => {
    cart.forEach((contract) => {
        downloadFile(contract.addr);
    });
};
