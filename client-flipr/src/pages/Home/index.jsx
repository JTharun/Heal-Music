import { Fragment } from "react";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";
// import playlistImg from "../../images/rock.jpg";
import harris from "../../images/harris.png";
import beast from "../../images/beast.png"
import pacha from "../../images/pacha.png"
import rakita from "../../images/rakita.jpeg"
import asuran from "../../images/songpics/asuran.png"
import billa from "../../images/songpics/billa.png"
import anaegan from "../../images/songpics/anaegan.png"
import attagasam from "../../images/songpics/attagasam.png"
import kaithi from "../../images/songpics/kaithi.png"
import kathi from "../../images/songpics/kathi.png"
import vip from "../../images/songpics/vip.png"
import sivaji from "../../images/songpics/sivaji.png"
import maari from "../../images/songpics/maari.png"
import mahaan from "../../images/songpics/mahaan.png"

const playlists = [
	{ _id: 1, img: harris, name: "Today's Top Song", desc: "By Ramanagiri" },
	{ _id: 1, img: beast, name: "Beast", desc: "By Ramanagiri" },
	{ _id: 1, img: pacha, name: "Love Today", desc: "By Ramanagiri" },
	{ _id: 1, img: rakita, name: "Rakita", desc: "By Ramanagiri" },
	{ _id: 1, img: asuran, name: "asuran", desc: "By Ramanagiri" },
	
];
const playlists1 = [
	{ _id: 1, img: billa, name: "Billa", desc: "By Ramanagiri" },
	{ _id: 1, img: anaegan, name: "Anegan", desc: "By Ramanagiri" },
	{ _id: 1, img: kathi, name: "Kathi", desc: "By Ramanagiri" },
	{ _id: 1, img: kaithi, name: "Kaithi", desc: "By Ramanagiri" },
	{ _id: 1, img: maari, name: "Maari", desc: "By Ramanagiri" },
	
];
const playlists2 = [
	{ _id: 1, img: sivaji, name: "Sivaji", desc: "By Ramanagiri" },
	{ _id: 1, img: mahaan, name: "Mahaan", desc: "By Ramanagiri" },
	{ _id: 1, img: vip, name: "Vip", desc: "By Ramanagiri" },
	{ _id: 1, img: attagasam, name: "Thala", desc: "By Ramanagiri" },
	
];

const Home = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<h1>Good afternoon</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
					
				</div>
				<h1>Just the hits</h1>
				<div className={styles.playlists_container}>
					 <Playlists playlists={playlists1} />
				</div>
				<h1>Recommeded for you</h1>
				<div className={styles.playlists_container}>
					 <Playlists playlists={playlists2} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
