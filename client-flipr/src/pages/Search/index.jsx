import { Fragment, useState } from "react";
import Song from "../../components/Song";
import Playlists from "../../components/Playlists";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./styles.module.scss";
import vip2 from "../../images/songpics/vip2.png"
import beast from "../../images/beast.png"

import rakita from "../../images/rakita.jpeg"

import kaithi from "../../images/songpics/kaithi.png"
import kathi from "../../images/songpics/kathi.png"
import vip from "../../images/songpics/vip.png"
import sivaji from "../../images/songpics/sivaji.png"
import mahaan from "../../images/songpics/mahaan.png"
const playlists = [
	{ _id: 1, img: vip2, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: vip, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: beast, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: kaithi, name: "Today's Top Songs", desc: "By Ramanagiri" },

];

const songs = [
	{ _id: 1, img: rakita, name: "Today's Top Songs", artist: "By Ramanagiri" },
	{ _id: 1, img: kathi, name: "Today's Top Songs", artist: "By Ramanagiri" },
	{ _id: 1, img: sivaji, name: "Today's Top Songs", artist: "By Ramanagiri" },
	{ _id: 1, img: mahaan, name: "Today's Top Songs", artist: "By Ramanagiri" },
];

const Search = () => {
	const [search, setSearch] = useState("");
	const handleSearch = async ({ currentTarget: input }) => {
		setSearch(input.value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.search_input_container}>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input
					type="text"
					placeholder="Search for songs and playlists"
					onChange={handleSearch}
					value={search}
				/>
				<IconButton onClick={() => setSearch("")}>
					<ClearIcon />
				</IconButton>
			</div>
			<div className={styles.results_container}>
				<div className={styles.songs_container}>
					{songs.map((song) => (
						<Fragment key={song._id}>
							<Song song={song} />
						</Fragment>
					))}
				</div>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</div>
	);
};

export default Search;
