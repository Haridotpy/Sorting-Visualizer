interface Props {
	algorithm: string;
	arraySize: number;
	speed: number;
	onSelectChange: (value: string) => void;
	onRangeChange: (value: number) => void;
	onClick: () => void;
	onInputChange: (value: number) => void;
}

const Header = ({
	arraySize,
	algorithm,
	speed,
	onSelectChange,
	onRangeChange,
	onClick,
	onInputChange
}: Props) => {
	return (
		<div className="header">
			<h1>Sorting Visualizer</h1>
			<select
				defaultValue="bubble_sort"
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelectChange(e.target.value)}
			>
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onRangeChange(parseInt(e.target.value))
					}
				/>
			</div>

			<div>
				<label htmlFor="number-input">Speed: </label>
				<input
					type="number"
					id="number-input"
					value={speed}
					max={250}
					min={0}
					step={50}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onInputChange(parseInt(e.target.value))
					}
				/>
				<span>ms</span>
			</div>

			<div className="header-group">
				<button className="btn" onClick={() => onClick()}>
					Sort
				</button>
			</div>
		</div>
	);
};

export default Header;
