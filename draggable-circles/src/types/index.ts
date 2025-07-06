import type { DraggableData, DraggableEvent } from 'react-draggable';

export type Circle = {
	id: string;
	x: number;
	y: number;
	nodeRef: React.RefObject<HTMLDivElement | null>;
};

export type CircleInputProps = {
	id: string;
	x: number;
	y: number;
	onChangeX: (id: string, value: number) => void;
	onChangeY: (id: string, value: number) => void;
};

export type CircleDraggableProps = {
	id: string;
	x: number;
	y: number;
	onDrag: (id: string, e: DraggableEvent, data: DraggableData) => void;
	nodeRef: React.RefObject<HTMLDivElement | null>;
};

export type MaterialSelectorProps = {
	materials: string[];
	selected: string | null;
	onSelect: (material: string) => void;
	disabled?: boolean;
};
