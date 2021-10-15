import React from "react";
import city from "../Shokworks/article-image-5.png";
import styles from "../styles/ThirdPage.module.css"
import Image from "next/image";
export default function ThirdPage() {
	return (
		<div className={styles.wrapper}>
			<div>
				<Image src={city} />
			</div>
			<div>
				<h1>We are here to always help you</h1>
				<p>
					Shokworks team provide solutions and guidance to every project, taking
					the project vision to high level.
				</p>
			</div>
		</div>
	);
}
