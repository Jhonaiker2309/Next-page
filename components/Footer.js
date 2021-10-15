import styles from "../styles/Footer.module.css"
import myImage from "../Shokworks/Group 2487.png"
import Image from "next/image"
import facebookIcon from "../Shokworks/facebook.png"
import skypeIcon from "../Shokworks/skype.png"
import linkedinIcon from "../Shokworks/linkedin.png"
import instagramIcon from "../Shokworks/instagram.png";



export default function Footer() {
    const icons = [facebookIcon, skypeIcon, linkedinIcon, instagramIcon]
    return (
			<div>
				<Image src={myImage} />
				<div className={styles.wrapper}>
					<div>
						<ul className={styles.listContainer}>
							<li>
								<h1>Contact Us</h1>
							</li>
							<li>+(1) 824-5428</li>
							<li>Miami, United States</li>
							<li>yfuentes@shokworks.io</li>
						</ul>
					</div>
					<div>
						<ul className={styles.listContainer}>
							<li>
								<h1>Our Company</h1>
							</li>
							<li>About</li>
							<li>Product</li>
							<li>Portfolio</li>
							<li>Career</li>
							<li>Blog</li>
						</ul>
					</div>
					<div>
						<ul className={styles.listContainer}>
							<li>
								<h1>Social Contacts</h1>
							</li>
							<li>Facebook</li>
							<li>Linked In</li>
							<li>Youtube</li>
							<li>Vimeo</li>
							<li>Skype</li>
						</ul>
					</div>
					<div>
						<ul className={styles.listContainer}>
							<li>
								<h1>Address</h1>
							</li>
							<li>
								Internet Systems Consortium, Inc. 950 Charter Street Redwood
								City, CA USA.
							</li>
							<li>
								<h2>Follow us</h2>
							</li>
							<li>
								{icons.map((icon, index) => (
									<div className={styles.image} key={index}>
										<Image height={130} width={130} src={icon} />
									</div>
								))}
							</li>
						</ul>
					</div>
				</div>
				<div></div>
			</div>
		);
}
