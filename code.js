function divideAndConquerSum(a) {
	//console.log(a);
	if (a.length == 0)
		return 0;
	return (arrayBreakUp(0, a.length-1, a)+ a[a.length-1]);
}

function arrayBreakUp(lo, hi, tmp) {
	if(hi - lo <= 1){
		//console.log(tmp[lo]);
		//console.log(tmp[hi]);
		//console.log(" ");
		if (lo == hi)
			return 0
		else if (lo > hi)
			return tmp[hi]
		else if (lo < hi)
			return tmp[lo]
		else
			return 0
	}
	else {
		var firstThird = lo + Math.floor((hi - lo) / 3);
		var secondThird = lo + 2 * Math.floor((hi - lo) / 3) + 1;
		return (arrayBreakUp(lo, firstThird, tmp)) + (arrayBreakUp(firstThird, secondThird, tmp)) + (arrayBreakUp(secondThird, hi, tmp));
	}
}

