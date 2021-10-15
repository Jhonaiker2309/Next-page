import React from 'react'
import styles from "../styles/Card.module.css"

export default function Card({slide}) {
    return (
			<div
				className={styles.card}>
				<img
					src={slide.urlToImage}
					alt="image from api"
					className={styles.image}
				/>
				<p>
					{slide.title}
				</p>
			</div>
		);
}
