import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../App.module.css";

import { Header } from "../../Home/Components/Header";
import { Footer } from "../../Home/Components/Footer";

import { Menu } from "../Components/Menu";
import { Map } from "../Components/Map";
import { TimeTable } from "../Components/Timetable";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { fetchSignInMethodsForEmail } from "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAeeTvV_czzoX_qxVOgRMxrE1aNEo6SMgQ",
    authDomain: "campusroute-ca268.firebaseapp.com",
    projectId: "campusroute-ca268",
    storageBucket: "campusroute-ca268.appspot.com",
    messagingSenderId: "164037552565",
    appId: "1:164037552565:web:e64461bee2e260d57191fc",
    measurementId: "G-7GN7W7HW1C",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export function AppHome() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <>
                <section className={styles["app-top"]}>
                    <Header />
                    <div
                        className={styles["app-top-content"]}
                        style={{ textAlign: "start" }}
                    >
                        <Menu />
                        <TimeTable />
                        <Map />
                    </div>
                </section>
                <Footer />
            </>
        );
    } else {
        return navigate("/signin");
    }
}
