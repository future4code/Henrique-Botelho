function indice(source, query) {
    for (let q = 0; q < source.length; q++) {
        const element = source[q];
        if (element === query) {
            return q;
        }

    }
    return -1
}

console.log(indice("henrique", "r"))