import { Fragment } from "react";
import Song from "../../components/Song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import likeImg from "../../images/like.jpg";
import pacha from "../../images/pacha.png"
import billa from "../../images/songpics/billa.png"
import vip from "../../images/songpics/vip.png"
import sivaji from "../../images/songpics/sivaji.png"
import maari from "../../images/songpics/maari.png"
import jilla from "../../images/songpics/jilla.png"

const songs = [
	{ _id: 1, img: vip, name: "oothu sangu", artist: "Haricharn"},
	{ _id: 2, img: billa , name: "billa villa", artist: "Dhanush"},
	{ _id: 3, img: sivaji, name: "athiradi than", artist: "Benny Dayal"},
	{ _id: 4, img: maari, name: "Donu Donu", artist: "Dhanush"},
	{ _id: 5, img: pacha, name: "pacha elai", artist: "Shaan"},
	{ _id: 6, img: jilla, name: "Jilla Theme", artist: "Hariharan"},
	

];

const LikedSongs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				<img src={likeImg} alt="like songs" />
				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>Liked Songs</h1>
					<span>By Ramangiri</span>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body_nav}>
					<div className={styles.left}>
						<span>#</span>
						<p>Title</p>
					</div>
					<div className={styles.center}>
						<p>Artist</p>
					</div>
					<div className={styles.right}>
						<AccessTimeIcon />
					</div>
				</div>

				{songs.map((song) => (
					<Fragment key={song._id}>
						<Song song={song} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default LikedSongs;
