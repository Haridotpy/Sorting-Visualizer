export interface ArrayType {
	value: number;
	isSorted: boolean;
	isCompared: boolean;
	isMin?: boolean;
}

export interface ArrayContextType {
	array: ArrayType[];
	arraySize: number;
	speed: number;
	isRunning: boolean;
	updateArray: (array: ArrayType[]) => Promise<void>;
	setArraySize: React.Dispatch<React.SetStateAction<number>>;
	setSpeed: React.Dispatch<React.SetStateAction<number>>;
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}
