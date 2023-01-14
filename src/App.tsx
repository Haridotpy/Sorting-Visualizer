import { useState } from "react";
import { useArray } from "./context/ArrayProvider";
import { bubbleSort, selectionSort } from "./algorithms";
import { v4 as uuidV4 } from "uuid";
import Header from "./Components/Header";
import Element from "./Components/Element";
import "./App.css";

const App = () => {
	const [algorithm, setAlgorithm] = useState<string>("bubble_sort");
	const { array, arraySize, speed, setArraySize, updateArray, setSpeed } = useArray();

	const changeAlgorithm = (value: string) => {
		setAlgorithm(value);
	};

	const changeArraySize = (size: number) => {
		setArraySize(size);
	};

	const changeSpeed = (speed: number) => {
		if (speed > 250) return setSpeed(250);
		if (speed < 1) return setSpeed(1);
		setSpeed(speed);
	};

	const sort = () => {
		console.log("Started!");

		if (algorithm === "bubble_sort") {
			return bubbleSort(array, updateArray, () => {
				console.log("Completed!");
			});
		}

		if (algorithm === "selection_sort") {
			return selectionSort(array, updateArray, () => {
				console.log("Completed!");
			});
		}
	};

	return (
		<div className="App">
			<Header
				arraySize={arraySize}
				algorithm={algorithm}
				speed={speed}
				onRangeChange={changeArraySize}
				onSelectChange={changeAlgorithm}
				onClick={sort}
				onInputChange={changeSpeed}
			/>
			<div className="container">
				<div id="array">
					{array.map(a => (
						<Element
							key={uuidV4()}
							value={a.value}
							isCompared={a.isCompared}
							isSorted={a.isSorted}
							isMin={a?.isMin ?? false}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
