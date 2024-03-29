import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import styles from "../App.module.css";

import { useNavigate } from "react-router-dom";

export function Menu() {
    const navigate = useNavigate();

    const [homeSelected, setHomeSelected] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const [timeSelected, setTimeSelected] = useState(false);
    const [editSelected, setEditSelected] = useState(false);
    const [settingSelected, setSettingSelected] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/app/home") {
            setHomeSelected(true);
        } else if (window.location.pathname === "/app/map") {
            setMapSelected(true);
        } else if (window.location.pathname === "/app/timetable") {
            setTimeSelected(true);
        } else if (window.location.pathname === "/app/edit") {
            setEditSelected(true);
        } else if (window.location.pathname === "/app/settings") {
            setSettingSelected(true);
        }
    }, []);

    return (
        <div className={`${styles["app-box"]} ${styles["menu"]}`}>
            <div
                className={`${styles["menu-item"]} ${
                    homeSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/home");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:house-chimney"
                    />
                    Home
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    mapSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/map");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:map"
                    />
                    Map
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    timeSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/timetable");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:calendar-days"
                    />
                    Timetable
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    editSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/edit");
                }}
            >
                <p>
                    <Icon
                        className={styles["menu-icon"]}
                        icon="fa6-solid:pencil"
                    />
                    Edit
                </p>
            </div>
            <div
                className={`${styles["menu-item"]} ${
                    settingSelected ? styles["selected"] : ""
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/app/settings");
                }}
            >
                <p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        className={styles["menu-icon"]}
                    >
                        {/*Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                        <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                    </svg>
                    Settings
                </p>
            </div>
        </div>
    );
}
