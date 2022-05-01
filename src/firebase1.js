// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDms-ytIt0Gw0yRyWFmAR5MBz_U-C8VEm8",
	authDomain: "smart-car-tech.firebaseapp.com",
	databaseURL: "https://smart-car-tech-default-rtdb.firebaseio.com/",
	projectId: "smart-car-tech",
	storageBucket: "smart-car-tech.appspot.com",
	messagingSenderId: "478231068597",
	appId: "1:478231068597:web:97f7f4acf7fc60db6763fc",
	measurementId: "G-4JL0YVHYQE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
