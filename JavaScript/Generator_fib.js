function * fib () {
    const series = [0, 1];
    let i = 1;
    while(true) {
        series[i+1] = series[i-1] + series[i];
        yield series[i]
        i++;
    }
}



const f = fib();

for(let i = 0; i < 10; i++) {
    console.log(f.next());
}