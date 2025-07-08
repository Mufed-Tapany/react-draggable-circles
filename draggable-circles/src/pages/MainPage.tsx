import React, { useState, useRef, useCallback } from 'react';
import type { DraggableEvent } from 'react-draggable';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { CircleDraggable } from '../components/CircleDraggable';
import { CircleInput } from '../components/CircleInput';
import { MaterialSelector } from '../components/MaterialSelector';
import type { Circle } from '../types';
import '../style/index.css';

export const MainPage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [circles, setCircles] = useState<Circle[]>([]);
	const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
	const materials = ['Material A', 'Material B', 'Material C', 'Material D', 'Material E'];

	const addCircle = useCallback(() => {
		const id = uuidv4();
		const newCircle: Circle = {
			id,
			x: 100 + Math.random() * 100,
			y: 100 + Math.random() * 100,
			nodeRef: React.createRef<HTMLDivElement>(),
		};
		setCircles((prev) => [...prev, newCircle]);
	}, []);

	const handleDrag = useCallback((id: string, _e: DraggableEvent, data: { x: number; y: number }) => {
		setCircles((prevCircles) =>
			prevCircles.map((circle) =>
				circle.id === id
					? {
							...circle,
							x: Number.parseFloat(data.x.toFixed(2)),
							y: Number.parseFloat(data.y.toFixed(2)),
						}
					: circle
			)
		);
	}, []);

	const handleInputChange = useCallback((id: string, axis: 'x' | 'y', value: number) => {
		setCircles((prev) =>
			prev.map((circle) => (circle.id === id ? { ...circle, [axis]: Number.parseFloat(value.toFixed(2)) } : circle))
		);
	}, []);

	const handleInputChangeX = (id: string, value: number) => {
		handleInputChange(id, 'x', value);
	};

	const handleInputChangeY = (id: string, value: number) => {
		handleInputChange(id, 'y', value);
	};

	const handleSubmit = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;

		const { offsetWidth, offsetHeight } = container;

		const output = circles.map((circle) => ({
			x: circle.x,
			y: circle.y,
			xPercent: `${((circle.x / offsetWidth) * 100).toFixed(2)}%`,
			yPercent: `${((circle.y / offsetHeight) * 100).toFixed(2)}%`,
		}));

		console.log({ circles: output, selectedMaterial });

		setCircles([]);
		setSelectedMaterial(null);

		toast.success('Submitted successfully!');
	}, [circles, selectedMaterial]);

	return (
		<div className="main-page-container">
			<div className="left-panel">
				<div className="image-container" ref={containerRef}>
					{circles.map((circle) => (
						<CircleDraggable
							key={circle.id}
							id={circle.id}
							x={circle.x}
							y={circle.y}
							onDrag={handleDrag}
							nodeRef={circle.nodeRef}
						/>
					))}
				</div>
				<button disabled={circles.length === 0} type="submit" className="submit-button" onClick={handleSubmit}>
					Submit
				</button>
				<ToastContainer position="top-center" />
			</div>

			<div className="right-panel">
				<h1>Distance for Circle</h1>
				<button type="button" onClick={addCircle} className="add-button">
					Add Circle
				</button>

				{circles.map((circle) => (
					<CircleInput
						key={circle.id}
						id={circle.id}
						x={Number.parseFloat(circle.x.toFixed(2))}
						y={Number.parseFloat(circle.y.toFixed(2))}
						onChangeX={handleInputChangeX}
						onChangeY={handleInputChangeY}
					/>
				))}

				<MaterialSelector
					materials={materials}
					selected={selectedMaterial}
					onSelect={setSelectedMaterial}
					disabled={circles.length === 0}
				/>
			</div>
		</div>
	);
};
