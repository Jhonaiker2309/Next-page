import Link from "next/link";
import Image from "next/image";
import logo from "../Shokworks/Group2486.png";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<span className={styles.logo}>
				<Image src={logo} width={280} height={23} />
			</span>
			<ul className={styles.linksContainer}>
				<Link href="/">
					<li>Home</li>
				</Link>
				<Link href="/">
					<li>About</li>
				</Link>
				<Link href="/">
					<li>Porfafolio</li>
				</Link>
				<Link href="/">
					<li>Product</li>
				</Link>
				<Link href="/">
					<li>Career</li>
				</Link>
				<Link href="/">
					<li>Blog</li>
				</Link>
			</ul>

			<input className={styles.input} placeholder="Search here" />
			<button className={styles.button}>Contact us</button>
		</div>
	);
}
