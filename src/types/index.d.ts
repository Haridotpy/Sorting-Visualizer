export interface ArrayType {
	value: number;
	isSorted: boolean;
	isCompared: boolean;
	isMin?: boolean;
}

export interface ArrayContextType {
	array: ArrayType[];
	arraySize: number;
	updateArray: (array: ArrayType[]) => Promise<void>;
	setArraySize: React.Dispatch<React.SetStateAction<number>>;
}
