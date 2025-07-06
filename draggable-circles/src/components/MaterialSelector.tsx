import type { MaterialSelectorProps } from '../types';
import '../style/index.css';

export const MaterialSelector = ({ materials, selected, onSelect, disabled = false }: MaterialSelectorProps) => {
	return (
		<div className="material-container">
			<h2>Material Selection</h2>
			{materials.map((materail) => (
				<button
					key={materail}
					type="button"
					disabled={disabled}
					onClick={() => onSelect(materail)}
					className={`material-button ${selected === materail ? 'selected' : ''}`}
				>
					{materail}
				</button>
			))}
		</div>
	);
};
