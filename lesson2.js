function getArgumentType(arg) {
	const type = typeof arg;
	let result;

	switch (type) {
		case 'number':
			result = `${arg} - число`;
			break;
		case 'string':
			result = `${arg} - строка`;
			break;
		case 'boolean':
			result = `${arg} - логическое значение`;
			break;
		default:
			result = `Тип ${arg} не определён`;
	}

	console.log(result);

	return result;
}

getArgumentType(undefined);

