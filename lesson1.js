function oddOrEven() {
	let askNumber = +prompt('Введите число!');

	if (!askNumber || isNaN(askNumber)) {
		console.log('Упс, кажется, вы ошиблись');
	} else {
		const oddOrEven = askNumber % 2 === 0 ? 'чётное' : 'нечётное';

		console.log(oddOrEven);

		return oddOrEven;
	}
}

oddOrEven();

// Было бы ещё неплохо учесть ситуацию, когда пользователь не ввёл значение prompt и нажал вместо этого отмена, тогда prompt вернет null. Сейчас в таком случае выводится "четное", что не совсем правильно. Выше показала, как это можно исправить