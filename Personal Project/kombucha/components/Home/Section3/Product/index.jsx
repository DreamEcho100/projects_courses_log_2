import { useRef } from 'react';

import classes from './index.module.css';

import Button from '@/components/UI/V1/Button';

const Product = ({ settings, textHolder, videoHolder }) => {
	const iframeRef = useRef();
	const imgPosterRef = useRef();
	const playImgRef = useRef();

	const handlePlay = () => {
		const src = `${videoHolder.videoSrc}?autoplay=1&mute=1`;
		if (iframeRef?.current.src !== src) {
			iframeRef.current.src = src;
			[imgPosterRef.current, playImgRef.current].forEach((elem) => {
				elem.style.opacity = '0';
				elem.style.pointerEvents = 'none';
			});
			setTimeout(() => iframeRef.current.scrollIntoViewIfNeeded(), 200);
		}
	};

	return (
		<section
			className={`${classes.product} ${
				settings?.reverseOnBiggerScreen ? classes.reverseOnBiggerScreen : ''
			}`}
			style={{
				'--videHolder-span-color': settings.videHolderSpanColor,
			}}
		>
			<div className={classes.textHolder}>
				<header>
					<h2>
						<span>KOMBUCHA</span>
						<br />
						<span>{textHolder.header.h2Text}</span>
					</h2>
				</header>
				<section>
					<p>{textHolder.section.pText}</p>
					<Button>{textHolder.section.buttonText}</Button>
				</section>
			</div>
			{/* <video
					src='https://www.youtube.com/embed/ZIt1tBGbQec'
					poster='KOMBUCHA - Pineapple . Lyehee & Hibiseus Organic Sparkling Tea.png'
					title='KOMBUCHA - Pineapple . Lyehee & Hibiseus Organic Sparkling Tea'
				></video> */}
			{/* <div className=''> */}
			<div className={classes.videoHolder}>
				<a href='#' id='playvideo' onClick={() => handlePlay()}>
					<iframe
						ref={iframeRef}
						width='560'
						height='315'
						// src='https://www.youtube.com/embed/ZIt1tBGbQec'
						title={videoHolder.videoTitle}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
					<img
						ref={imgPosterRef}
						className={classes.imgPoster}
						src={videoHolder.videoImgPosterSrc}
						alt={videoHolder.videoImgPosterTitle}
					/>
					<img
						ref={playImgRef}
						className={classes.playImg}
						src='images/watch now.png'
						alt=''
					/>
					<span className={classes.spanXUpper}></span>
					<span className={classes.spanYUpper}></span>
					<span className={classes.spanXLower}></span>
					<span className={classes.spanYLower}></span>
				</a>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Product;
