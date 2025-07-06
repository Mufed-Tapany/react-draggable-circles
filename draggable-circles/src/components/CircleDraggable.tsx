import Draggable from 'react-draggable';
import type { CircleDraggableProps } from '../types';
import '../style/index.css';

export const CircleDraggable = ({ id, x, y, onDrag, nodeRef }: CircleDraggableProps) => {
	return (
		<Draggable nodeRef={nodeRef} position={{ x, y }} bounds="parent" onDrag={(e, data) => onDrag(id, e, data)}>
			<div ref={nodeRef} className="circle-draggable" />
		</Draggable>
	);
};
