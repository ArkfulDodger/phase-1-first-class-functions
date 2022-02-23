function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    const namedFunction = x => x;
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return (x) => x;
}