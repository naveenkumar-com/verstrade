function fib(n, res = [0, 1, 1]) {
    if (res[n]) {
        return res[n];
    }

    res[n] = fib(n - 1, res) + fib(n - 2, res);
    return res[n];
}
