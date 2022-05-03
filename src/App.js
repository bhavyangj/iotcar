import React, { useContext } from "react";
import Context, { ContextProvider } from "./context";
import { app } from "./firebase1";
import { getDatabase, ref, child, get } from "firebase/database";
import { Homepage } from "./Pages/Homepage";

const dbRef = ref(getDatabase());

export const App = () => {
	const {
		cabinTemp,
		setCabinTemp,
		engine,
		setEngine,
		killoMeter,
		setKilloMeter,
		Light,
		setLight,
		fuel,
		setFuel,
		rainSensor,
		setRainSensor,
		rfid,
		setRfid,
		slideswitch,
		setSlidesSwitch,
		ultrasonic,
		setUltraSonic,
	} = useContext(Context);

	const carVars = [
		{ value: "Cabin Temp", setValue: setCabinTemp },
		{ value: "Engine", setValue: setEngine },
		{ value: "Km", setValue: setKilloMeter },
		{ value: "Light", setValue: setLight },
		{ value: "fuel", setValue: setFuel },
		{ value: "rainsensor", setValue: setRainSensor },
		{ value: "rfid", setValue: setRfid },
		{ value: "slideswitch", setValue: setSlidesSwitch },
		{ value: "ultrasonic", setValue: setUltraSonic },
	];

	const getData = () => {
		carVars.forEach((element) => {
			get(child(dbRef, element.value)).then((snapshot) => {
				element.setValue(snapshot.val());
			});
		});
	};

	setInterval(() => {
		getData();
	}, 2000);

	return <Homepage />;
};
