import React, { useState } from "react";

const Context = React.createContext({
	cabinTemp: 0,
	engine: "OFF",
	killoMeter: 0,
	Light: "OFF",
	fuel: 0,
	rainSensor: 5000,
	rfid: false,
	slideswitch: "ON",
	ultrasonic: 0,
	setCabinTemp: () => {},
	setEngine: () => {},
	setKilloMeter: () => {},
	setLight: () => {},
	setFuel: () => {},
	setRainSensor: () => {},
	setRfid: () => {},
	setSlidesSwitch: () => {},
	setUltraSonic: () => {},
});

export const ContextProvider = (props) => {
	const [cabinTemp, setCabinTemp] = useState(12);
	const [engine, setEngine] = useState("OFF");
	const [killoMeter, setKilloMeter] = useState(0);
	const [Light, setLight] = useState("OFF");
	const [fuel, setFuel] = useState(0);
	const [rainSensor, setRainSensor] = useState(0);
	const [rfid, setRfid] = useState("False");
	const [slideswitch, setSlidesSwitch] = useState(0);
	const [ultrasonic, setUltraSonic] = useState(0);

	const contextValue = {
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
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default Context;
