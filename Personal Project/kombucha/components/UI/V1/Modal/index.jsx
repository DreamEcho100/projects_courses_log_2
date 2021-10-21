import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './index.module.css';

import { handleAllClasses } from '@/lib/v1/className';

const ModalHOC = ({
	defaultClasses,
	extraClasses,
	className,
	modelStyles,

	click,
	CloseButtonElement,
	showModal,
	hideScrollOnView = true,
}) => {
	const modalWrapperRef = useRef();

	const [existingElements] = useState({
		header: false,
		body: false,
		footer: false,
	});

	const findByKey = (name) => {
		return children.filter((child) => {
			const condition = child.key === name;
			if (condition)
				existingElements((prev) => ({ ...prev, [child.key]: condition }));

			return condition;
		});
	};

	const closeModal = (event) => {
		event.stopPropagation();

		if (event.target.classList.contains('modal-close')) {
			click();
		}
	};

	const allClasses = handleAllClasses({
		classes,
		defaultClasses,
		extraClasses,
		className,
	});

	useEffect(() => {
		if (!hideScrollOnView) return;

		if (showModal) {
			modalWrapperRef.current.scrollIntoView();
			return (document.body.style.overflowY = 'hidden');
		}

		document.body.style.overflowY = 'auto';
		click();
	}, [showModal]);

	if (!showModal) {
		return <></>;
	}

	return createPortal(
		<section
			className={`${allClasses} modal-close`}
			style={modelStyles['modal-mask']}
			onClick={closeModal}
		>
			<div
				className={`${classes['modal-wrapper']}`}
				style={modelStyles['modal-wrapper']}
				ref={modalWrapperRef}
			>
				<div
					className={`${classes['modal-container']}`}
					style={modelStyles['modal-container']}
				>
					<header
						className={`${classes['modal-header']}`}
						style={modelStyles['modal-header']}
					>
						{findByKey('header')}
					</header>
					<main
						className={`${classes['modal-body']}`}
						style={modelStyles['modal-body']}
					>
						{findByKey('body')}
					</main>
					<footer
						className={`${classes['modal-footer']}`}
						style={modelStyles['modal-footer']}
					>
						{CloseButtonElement && (
							<button className='modal-close' onClick={closeModal} />
						)}
						{findByKey('footer')}
					</footer>
				</div>
			</div>
		</section>,
		document.getElementById('__next')
	);
};

export default ModalHOC;
