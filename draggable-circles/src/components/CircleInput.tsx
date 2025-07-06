import type { CircleInputProps } from '../types';
import '../style/index.css';

export const CircleInput = ({ id, x, y, onChangeX, onChangeY }: CircleInputProps) => {
	return (
		<div className="circle-input-wrapper">
			<strong>Circle {id.slice(0, 2)}:</strong>
			<label style={{ marginLeft: 10 }}>
				X:
				<input
					type="number"
					value={x}
					onChange={(e) => onChangeX(id, Number.parseFloat(e.target.value))}
					className="circle-input"
				/>
			</label>
			<label style={{ marginLeft: 10 }}>
				Y:
				<input
					type="number"
					value={y}
					onChange={(e) => onChangeY(id, Number.parseFloat(e.target.value))}
					className="circle-input"
				/>
			</label>
		</div>
	);
};
