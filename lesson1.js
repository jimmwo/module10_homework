function oddOrEven() {
	let askNumber = +prompt('Введите число!');

	if (isNaN(askNumber)) {
		console.log('Упс, кажется, вы ошиблись');
	} else {
		const oddOrEven = askNumber % 2 === 0 ? 'чётное' : 'нечётное';

		console.log(oddOrEven);

		return oddOrEven;
	}
}

oddOrEven();


