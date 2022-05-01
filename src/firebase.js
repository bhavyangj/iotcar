// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAZ_Z2FHE-gjgQ3-lnN0MHY_OBCiFY-BYM",
	authDomain: "iot-autocar.firebaseapp.com",
	databaseURL: "https://iot-autocar-default-rtdb.firebaseio.com",
	projectId: "iot-autocar",
	storageBucket: "iot-autocar.appspot.com",
	messagingSenderId: "145897778882",
	appId: "1:145897778882:web:6135689c17fda9439c955b",
	measurementId: "G-7J3ZF85RFJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
