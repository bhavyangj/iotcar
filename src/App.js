import React, { useState } from "react";
import { app } from "./firebase1";
import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());

export const App = () => {
	const [cabinTemp, setCabinTemp] = useState(0);
	const [engine, setEngine] = useState("OFF");
	const [killoMeter, setKilloMeter] = useState(0);
	const [Light, setLight] = useState("OFF");
	const [fuel, setFuel] = useState(0);
	const [rainSensor, setRainSensor] = useState(0);
	const [rfid, setRfid] = useState("False");
	const [slideswitch, setSlidesSwitch] = useState(0);
	const [ultrasonic, setUltraSonic] = useState(0);

	const getData = () => {
		get(child(dbRef, `Cabin Temp`)).then((snapshot) => {
			setCabinTemp(snapshot.val());
		});
		get(child(dbRef, `Engine`)).then((snapshot) => {
			setEngine(snapshot.val());
		});
		get(child(dbRef, `Km`)).then((snapshot) => {
			setKilloMeter(snapshot.val());
		});
		get(child(dbRef, `Light`)).then((snapshot) => {
			setLight(snapshot.val());
		});
		get(child(dbRef, `fuel`)).then((snapshot) => {
			setFuel(snapshot.val());
		});
		get(child(dbRef, `rainsensor`)).then((snapshot) => {
			setRainSensor(snapshot.val());
		});
		get(child(dbRef, `rfid`)).then((snapshot) => {
			setRfid(snapshot.val());
		});
		get(child(dbRef, `slideswitch`)).then((snapshot) => {
			setSlidesSwitch(snapshot.val());
		});
		get(child(dbRef, `ultrasonic`)).then((snapshot) => {
			setUltraSonic(snapshot.val());
		});
	};

	setInterval(() => {
		getData();
	}, 2000);

	return (
		<div>
			{`Cabin Temp:${cabinTemp}`}
			<br />
			{`Engine: ${engine}`}
			<br />
			{`Km: ${killoMeter}`}
			<br />
			{`Light: ${Light}`}
			<br />
			{`fuel: ${fuel}`}
			<br />
			{`rainsensor:${rainSensor}`}
			<br />
			{`rfid: ${rfid}`}
			<br />
			{`slideswitch: ${slideswitch}`}
			<br />
			{`ultrasonic: ${ultrasonic}`}
			<br />
			{`Cabin Temp:${cabinTemp}`}
			<br />
			{`Engine: ${engine}`}
			<br />
			{`Km: ${killoMeter}`}
			<br />
			{`Light: ${Light}`}
			<br />
			{`fuel: ${fuel}`}
			<br />
			{`rainsensor:${rainSensor}`}
			<br />
			{`rfid: ${rfid}`}
			<br />
			{`slideswitch: ${slideswitch}`}
			<br />
			{`ultrasonic: ${ultrasonic}`}
			<br />
		</div>
	);
};
