import React, { useContext } from 'react'
import Context from '../context';

export const Homepage = () => {
    const {
        cabinTemp,
        engine,
        killoMeter,
        Light,
        fuel,
        rainSensor,
        rfid,
        slideswitch,
        ultrasonic,
    } = useContext(Context);
    return (
        <div className="main">
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
}
