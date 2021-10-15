import styles from "../styles/FirstPage.module.css"
import community from "../Shokworks/community1.png"
import Image from "next/image"

export default function firstPage() {
    return (
			<div className={styles.firstPage}>
				<Image src={community} width={500} height={420} />
				<div>
					<h1>A brand new way to see the world</h1>
				</div>
				<div>
					<button className={styles.buttonWork}>Our works</button>
					<button className={styles.buttonKnow}>Know More</button>
				</div>
			</div>
		);
}
