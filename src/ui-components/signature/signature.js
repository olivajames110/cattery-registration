import React, { useRef, useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signature.css';

const ElectronicSignature = (props) => {
	const [ containerWidth, setContainerWidth ] = useState(null);
	const [ dataUrl, setDataUrl ] = useState(null);
	const containerRef = useRef(null);
	// const canvasRef = useRef(null);
	// const containerWidth = document.querySelector('.electronic-signature-container').offsetWidth;
	let sigCanvas = {};
	useEffect(
		() => {
			const width = containerRef.current ? containerRef.current.offsetWidth : 0;
			setContainerWidth(width);
			console.log('width', width);
		},
		[ containerRef.current ]
	);

	let clear = (e) => {
		e.preventDefault();
		console.log('clears');
		sigCanvas.clear();
	};

	let createImage = (e) => {
		e.preventDefault();
		let url = sigCanvas.toDataURL();
		console.log(url);
		props.updateUser('dataUrl', url);
		// setDataUrl(url);
	};

	let updateUrl = () => {};

	return (
		<div className="input-container">
			<div ref={containerRef} onClick={createImage} className="electronic-signature-container">
				<SignatureCanvas
					onEnd={createImage}
					ref={(ref) => (sigCanvas = ref)}
					penColor="#616c70"
					canvasProps={{ width: containerWidth, height: 300, className: 'sigCanvas' }}
				/>
				<div className="additional-text-container">
					<button onClick={clear} className="clear-btn">
						Clear
					</button>
					<button onClick={createImage} className="create-btn">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default ElectronicSignature;
