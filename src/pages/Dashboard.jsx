import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import carImage from '../assets/images/homepage_car.png'
import Context from '../context'
import { app } from "../firebase";

import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase(app));

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'driver',
        'total distance',
        'Cost'
    ],
    body: [
        {
            "username": "Bhavyang Jariwala",
            "order": "490 Km",
            "price": "$580"
        },
        {
            "username": "Shiven Desai",
            "order": "250 Km",
            "price": "$1,251"
        },
        {
            "username": "Dipam Modi",
            "order": "120 Km",
            "price": "$1,840"
        },
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)


const Dashboard = () => {
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

    let rainOutside = "No"
    if (rainSensor > 2500)
        rainOutside = "No"
    else if (rainSensor > 2000)
        rainOutside = "Low"
    else if (rainSensor > 1500)
        rainOutside = "Med"
    else if (rainSensor <= 1500)
        rainOutside = "High"
    // const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <StatusCard
                                icon="bx bx-ruler"
                                count={`${cabinTemp} °C`}
                                title="Cabin Temparature"
                            />
                        </div>
                        <div className="col-6">
                            <StatusCard
                                icon="bx bx-car"
                                count={`${killoMeter} Km`}
                                title="Trip Distance"
                            />
                        </div>
                        <div className="col-6">
                            <StatusCard
                                icon="bx bx-shopping-bag"
                                count={rainOutside}
                                title="Rain outside"
                            />
                        </div>
                        <div className="col-6">
                            <StatusCard
                                icon="bx bx-shopping-bag"
                                count="19 L"
                                title="Fuel Consumption"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height" style={{ overflow: 'hidden' }}>
                        <img src={carImage} alt="car" style={{ width: "30rem" }} />
                        <div className="battery">
                            <i className={`bx bx-bolt-circle`}></i>
                            Good battery Health
                        </div>
                        {/* chart */}
                        {/* <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        /> */}
                    </div>
                </div>
                <div className="col-5">
                    <div className="card">
                        <div className="card__header">
                            <h3>Drivers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="card">
                        <div className="card__header">
                            <h3>Recent Trips</h3>
                        </div>
                        <div className="card__body">
                            {/* <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            /> */}
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
