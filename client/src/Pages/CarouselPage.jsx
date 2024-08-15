import React from "react";
import styles from "./CarouselPage.module.css";
import ProfileWidget from "../Components/ProfileWidget";
import WeatherWidget from "../Components/WeatherWidget";
import NewsWidget from "../Components/NewsWidget";

function CarouselPage() {
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>
            <ProfileWidget />
			</div>
			<div className={styles.weatherWidget}>
				<WeatherWidget />
			</div>
			<div className={styles.newsWidget}>
				<NewsWidget />
			</div>
			
		</div>
	);
}

export default CarouselPage;