import { ArrayType } from "../types";

const selectionSort = async (
	arr: ArrayType[],
	update: (arr: ArrayType[]) => Promise<void>,
	callback: () => void
) => {
	try {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			arr[min].isMin = true;

			await update(arr);

			for (let j = i + 1; j < arr.length; j++) {
				arr[j].isCompared = true;

				await update(arr);

				if (arr[j].value < arr[min].value) {
					arr[min].isMin = false;
					min = j;
					arr[min].isMin = true;
					await update(arr);
				}

				arr[j].isCompared = false;
				arr[min].isCompared = false;

				await update(arr);
			}

			if (min !== i) {
				let temp = arr[min];
				arr[min] = arr[i];
				arr[i] = temp;

				arr[i].isSorted = true;
				arr[min].isMin = false;
				await update(arr);
			} else {
				arr[min].isSorted = true;
			}
		}

		arr.forEach(element => (element.isSorted = true));
		await update(arr);
		callback();
	} catch (err: any) {
		console.log(err);
	}
};

export default selectionSort;
