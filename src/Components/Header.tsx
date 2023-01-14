import { useState } from "react";
import { bubbleSort } from "../algorithms";
import { useArray } from "../context/ArrayProvider";

const Header = () => {
	const { array, updateArray, arraySize, setArraySize } = useArray();
	const [algorithm, setAlgorithm] = useState<string>("bubble_sort");

	const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: number = parseInt(e.target.value);

		setArraySize(value);
	};

	const handleClick = () => {
		console.log("Started!");
		if (algorithm === "bubble_sort") {
			return bubbleSort(array, updateArray, () => {
				console.log("Completed");
			});
		}
	};

	const changeAlgorithm = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setAlgorithm(value);
	};

	return (
		<div className="header">
			<h1>Sorting Visualizer</h1>
			<select defaultValue="bubble_sort" onChange={changeAlgorithm}>
				<option defaultChecked={algorithm === "bubble_sort"} value="bubble_sort">
					Bubble Sort
				</option>
				<option defaultChecked={algorithm === "selection_sort"} value="selection_sort">
					Selection Sort
				</option>
			</select>

			<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
				<label htmlFor="size-range">Array Size: </label>
				<input
					type="range"
					id="size-range"
					value={arraySize}
					min={3}
					max={100}
					onChange={onRangeChange}
				/>
			</div>

			<div className="header-group">
				<button className="btn" onClick={handleClick}>
					Sort
				</button>
			</div>
		</div>
	);
};

export default Header;
