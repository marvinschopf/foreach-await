export async function asyncForEach(
	array: Array<any>,
	cb: Function
): Promise<void> {
	for (let index: number = 0; index < array.length; index++) {
		await cb(array[index], index, array);
	}
}

export default asyncForEach;
