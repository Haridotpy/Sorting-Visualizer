import { ArrayType } from "../types";

const bubbleSort = async (
	arr: ArrayType[],
	update: (arr: ArrayType[]) => Promise<void>,
	callback: () => void
) => {
	let swap = true;
	let i = arr.length - 1;

	try {
		while (swap) {
			swap = false;

			for (let j = 0; j < i; j++) {
				arr[j].isCompared = true;
				arr[j + 1].isCompared = true;

				await update(arr);

				if (arr[j].value > arr[j + 1].value) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					swap = true;

					await update(arr);
				}

				arr[j].isCompared = false;
				arr[j + 1].isCompared = false;
			}

			arr[i].isSorted = true;
			await update(arr);
			i--;
		}

		arr.forEach(element => (element.isSorted = true));
		update(arr);
		callback();
	} catch (err: any) {
		console.log(err);
	}
};

export default bubbleSort;
