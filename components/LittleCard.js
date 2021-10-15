import Image from "next/image";
import styles from "../styles/LittleCard.module.css"

export default function LittleCard({image, height, width}) {
	return (
		<div className={styles.card}>
			<Image src={image} width={width} height={height} />
			<p>Learn more</p>
		</div>
	);
}
