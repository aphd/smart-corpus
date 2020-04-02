const moveToFirstPosition = function(keys, value) {
    let index = keys.indexOf(value);
    if (index > -1) {
        keys.splice(index, 1);
        keys.unshift("contractAddress");
    }
    return keys;
};

const removeElements = (keys, valuesToRemove) =>
    keys.filter(i => valuesToRemove.indexOf(i) === -1);

export const metrics = function(data) {
    let keys = Object.keys(data);
    keys = removeElements(keys, ["_id", "AvgNL", "FS", "LS"]);
    return moveToFirstPosition(keys, "contractAddress");
};
