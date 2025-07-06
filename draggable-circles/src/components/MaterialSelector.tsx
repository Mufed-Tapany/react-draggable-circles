import type { MaterialSelectorProps } from '../types';

export const MaterialSelector = ({ materials, selected, onSelect, disabled = false }: MaterialSelectorProps) => {
	return (
		<div className="materail-container">
			<h2>Material Selection</h2>
			{materials.map((materail) => (
				<button
					key={materail}
					type="button"
					disabled={disabled}
					onClick={() => onSelect(materail)}
					className={`materail-button ${selected === materail ? 'selected' : ''}`}
				>
					{materail}
				</button>
			))}
		</div>
	);
};
