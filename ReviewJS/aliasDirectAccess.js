function runit(top) {
    
    const data = {
        team: [{n: [{idx: top}]}]
    };
    console.log('-------------------------------', top);
    let start = Date.now();
    for(let i = top; i > 0; i--) {
        data.team[0].n[0].idx = i
    }
    console.log(Date.now() - start);

    start = Date.now();
    let me = data.team[0].n[0];
    for(let i = top; i > 0; i--) {
        me.idx = i
    }
    console.log(Date.now() - start);
}



runit(1000)
runit(10000)
runit(100000)
runit(1000000)
runit(10000000)
runit(100000000)
runit(1000000000)