import React, { useState, useEffect, useRef } from "react";
//import { SliderData } from "./SliderData.js";
import arrowLeft from "../Shokworks/arrow-left.png"
import arrowRight from "../Shokworks/arrow-right.png"
import Image from "next/image"
import Card from "./Card.js"
import styles from "../styles/Slider.module.css"
import axios from "axios"



const ImageSlider = () => {

    const [originalSlides, setOriginalSlides] = useState([])
	const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(0)
    const [slides, setSlides] = useState([])
    const [active, setActive] = useState(false)
    let url ="https://newsapi.org/v2/everything?q=Apple&from=2021-10-14&sortBy=popularity&apiKey=42f1842d0a814de592e7034442799a27";



    useEffect(async () => {
      let response = await axios.get(url)
      let data = response.data
      let articles = data.articles 
      setOriginalSlides(articles)
      setLength(articles.length)
      setSlides(articles.slice(0,5)) 
      setActive(true)    
    },[])

    useEffect(()=> {
      if(active){
				let currentSlides = [];
				for (let i = 0; i < 5; i++) {
					currentSlides.push(originalSlides[(current + i) % length]);
				}
				console.log(currentSlides);
				setSlides(currentSlides);
			}
    },[current])


	const prevSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const nextSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section>
			<div className={styles.wrapper}>
				{slides.map((slide, index) => {
					return (
						<div key={index}>
							<Card slide={slide} />
						</div>
					);
				})}
			</div>
			<div className={styles.arrows}>
				<div className={styles.arrow}>
						<Image src={arrowLeft} onClick={prevSlide} width={30} height={30} />
				</div>
				<div className={styles.arrow}>
						<Image
							src={arrowRight}
							onClick={nextSlide}
							width={30}
							height={30}
						/>
				</div>
			</div>
		</section>
	);
};

export default ImageSlider;
