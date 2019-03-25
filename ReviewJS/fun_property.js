function factorial(n) {
	if(isFinite(n) && n > 0 && n === Math.round(n)) {
		if(!factorial[n]){
			if(n === 1) {
				factorial[n] = n;
			} else {
				factorial[n] = factorial(n - 1) * n;
			}
		}
		return factorial[n];
	} else {
		return NaN;
	}
}