import React from 'react'
import city from "../Shokworks/what-can-you-build.png"
import Image from "next/image"
import styles from "../styles/SecondPage.module.css"
export default function secondPage() {
    return (
			<div className={styles.wrapper}>
				<div>
					<h1>The process about our work</h1>
					<p>
						<b>Alejandro Laplana</b> leads and adaptable end-to-end development
						team consisting of a large portion of captable enterprise mixed
						reality solutions.
					</p>
					<button className={styles.buttonKnow}>Know more</button>
				</div>
				<div>
					<Image src={city} />
				</div>
			</div>
		);
}
