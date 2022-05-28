import styles from "./styles.module.css";
import pdf from "../../pdf.png";

const Songs = ({song}) => {
	return (
		<div className={styles.song_container}>
			{/* <img src={song.img} alt="song_img" className={styles.song_img} /> */}
			{/* <div className={styles.song_info}>
				<p className={styles.song_name} >{song.name}</p>
				<p className={styles.song_artist} >{song.artist}</p>
			</div> */}
			<a href={song.song}>
			<img src={pdf} alt="check circle" className={styles.check_img} /></a>
			{/* <object data={song.song} type="application/pdf" width="100%" height="100%" controls /> */}
			<a href={song.song}>{song.name}</a>
		</div>
	);
};

export default Songs;
