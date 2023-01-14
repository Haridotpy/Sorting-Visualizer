import { useEffect } from "react";
import Header from "./Components/Header";
import { useArray } from "./context/ArrayProvider";
import Element from "./Components/Element";
import { v4 as uuidV4 } from "uuid";
import "./App.css";

const App = () => {
	const { array } = useArray();

	useEffect(() => {
		document.title = "Sorting Visualizer";
	}, []);

	return (
		<div className="App">
			<Header />
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
