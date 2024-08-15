import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "./ProfileWidget.module.css";
import Awatar from "../assets/Awatar.png";
function ProfileWidget() {
	const { User, selectedGenres } = useContext(AppContext);

	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
             <img src={Awatar}/>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>{User.name}</p>
              <p className={styles.email}>{User.email}</p>
              <p className={styles.username}>{User.username}</p>
              <div className={styles.genres}>
              {selectedGenres.slice(0,4).map((genre , index)=>(
                <div  key={index} className={styles.pill}>{genre}</div>
              ))}
              </div>
            </div>
		</div>
	);
}

export default ProfileWidget;