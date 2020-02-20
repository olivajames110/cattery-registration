import React, { useRef, useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signature.css';

const ElectronicSignature = () => {
	const [ containerWidth, setContainerWidth ] = useState(null);
	const ref = useRef(null);
	// const containerWidth = document.querySelector('.electronic-signature-container').offsetWidth;
	useEffect(
		() => {
			const width = ref.current ? ref.current.offsetWidth : 0;
			setContainerWidth(width);
			console.log('width', width);
		},
		[ ref.current ]
	);
	return (
		<div className="input-container">
			<label>Signature</label>
			<div ref={ref} className="electronic-signature-container">
				<SignatureCanvas
					penColor="green"
					canvasProps={{ width: containerWidth, height: 200, className: 'sigCanvas' }}
				/>
				<div className="additional-text-container" />
			</div>
		</div>
	);
};

export default ElectronicSignature;
