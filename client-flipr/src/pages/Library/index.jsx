import { Link } from "react-router-dom";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";
// import Playlists1 from "../../components/Playlists 1";
import kaithi from "../../images/songpics/kaithi.png"
import vikram from "../../images/songpics/vikram.png"
import vip from "../../images/songpics/vip.png"
import maari from "../../images/songpics/maari.png"
const playlists = [
	{ _id: 1, img: maari, name: "Top Dhanush Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: kaithi, name: "Top Karthi Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: vikram, name: "Top Kamal Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: vip, name: "Top Aniruth Songs", desc: "By Ramanagiri" },
];

const Library = () => {
	return (<>
		<div className={styles.container}>
			<h1>Playlists</h1>
			<div className={styles.playlists_container}>
				<Link to="/collection/tracks">
					<div className={styles.liked_songs}>
						<h1>Liked Songs</h1>
						<p>1 Liked Songs</p>
					</div>
				</Link>
				<Playlists playlists={playlists} />
			</div>
		</div> 
		
		</>
	);
};



export default Library;
