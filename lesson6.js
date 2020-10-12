function isEqualArrayElements(array) {
	if (array.length) {
		return !!array.reduce((acc, item) => {
			return acc === item ? acc : NaN;
		}, array[0]);
	} else {
		return true;
	}

}

isEqualArrayElements(['a','a']);
