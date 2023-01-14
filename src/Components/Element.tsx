import { useArray } from "../context/ArrayProvider";

interface Props {
	value: number;
	isSorted: boolean;
	isMin: boolean;
	isCompared: boolean;
}

const Element = ({ value, isCompared, isSorted, isMin }: Props) => {
	const { arraySize } = useArray();
	const className = `element ${isCompared && "orange"} ${isSorted && "green"} ${isMin && "red"}`;
	const height = value * 4;
	const windowWidth = Math.floor(window.innerWidth);
	const width = Math.floor(windowWidth / arraySize);

	return (
		<div className={className} style={{ minHeight: height, width: width }}>
			{width > 32 && value}
		</div>
	);
};

export default Element;
