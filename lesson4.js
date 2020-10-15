function getRandomInt() {
	const int = Math.floor(Math.random() * 101);

	console.log(int);

	return int;
}

getRandomInt();

// Не совсем правильно, т.к. в вашем случае код возвращает значения от 0 до 99. 100 не включается в диапазон, а по заданию должно. Исправила выше на верный вариант