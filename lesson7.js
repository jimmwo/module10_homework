const ODD = 'odd';
const EVEN = 'even';
const ZERO = 'zero';

function countOddAndEvenElements(array) {
	let result = {[ZERO]: 0, [EVEN]: 0, [ODD]: 0};

	result = array.reduce((acc, item) => {
		if (item === 0) {
			acc[ZERO] += 1;
		} else if(typeof item === "number" && isFinite(item) && !isNaN(item)) {
			let prop = item % 2 === 0 ? EVEN : ODD;
			acc[prop] += 1;
		}

		return acc;
	}, result);

	console.log(result);

	return result;
}

countOddAndEvenElements([0, 1,2,3,'s', 0, 0, 6, null, Infinity, '15', true, false, NaN]);

// Не совсем верно. В данном случае не нужно использовать унарный плюс для преобразования значения. Нам необходимо отобрать из массива только числа и "рассортировать" по четным\нечетным\нулям. Все остальные элементы нужно просто отсеять и не учитывать. Использование унарного плюса приводит к ошибкам, потому что значения, которые изначально не являются числами (null, false, строки, состоящие из цифр), преобразуются в числа. 
// Чтобы правильно отделить числа от остальных значений, нужно использовать проверку на typeof. Выше исправила