import type { CircleInputProps } from '../types';
import '../style/index.css';

export const CircleInput = ({ id, x, y, onChangeX, onChangeY }: CircleInputProps) => {
	return (
		<div className="circle-input-wrapper">
			<span className="circle-input-label">Circle {id.slice(0, 2)}</span>
			<div className="circle-input-fields">
				<input
					type="number"
					value={x}
					onChange={(e) => onChangeX(id, parseFloat(e.target.value))}
					placeholder="X"
					className="circle-input"
				/>
				<input
					type="number"
					value={y}
					onChange={(e) => onChangeY(id, parseFloat(e.target.value))}
					placeholder="Y"
					className="circle-input"
				/>
			</div>
		</div>
	);
};
