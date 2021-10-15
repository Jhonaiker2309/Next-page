import image0 from "../Shokworks/big immersity logo.png"
import image1 from "../Shokworks/logo_ipass.png"; 
import image2 from "../Shokworks/logo-rojo.png";
import image3 from "../Shokworks/logo_splash.png";
import image4 from "../Shokworks/Group 94.png";
import image5 from "../Shokworks/Group 2788.png";
import LittleCard from "./LittleCard.js"
import styles from "../styles/FifthPage.module.css"

export default function FifthPage() {
    const images = [
			{ image: image0, height: 204, width: 257 },
			{ image: image1, height: 161, width: 274 },
			{ image: image2, height: 156, width: 181 },
			{ image: image3, height: 163, width: 227 },
			{ image: image4, height: 182, width: 95 },
			{ image: image5, height: 107, width: 267 },
		];
    return (
			<div>
				<h1 className={styles.title}>What our clients say</h1>
				<div className={styles.wrapper}>
					{images.map((image) => (
						<div className={styles.wrapper}>
							<LittleCard
								image={image.image}
								height={image.height}
								width={image.width}
							/>
						</div>
					))}
				</div>
			</div>
		);
}
