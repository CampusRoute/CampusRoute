import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import { Home } from "./App/Home/Home";
import { Plus } from "./App/Infomation/Items/Plus/Plus";
import { Status } from "./App/Infomation/Status";
import { About } from "./App/Infomation/Items/About/About";

import { InformationItem } from "./App/Infomation/Information";

import InformationTOS from "./App/Infomation/Items/Legal/TOS.md";
import InformationPrivacy from "./App/Infomation/Items/Legal/Privacy.md";

import InformationDevlogOne from "./App/Infomation/Items/Devlog/One.md";

import { AppRedirect } from "./App/App/Redirect";
import { AppHome } from "./App/App/Pages/Home";
import { AppSetup } from "./App/App/Pages/Setup";
import { AppMap } from "./App/App/Pages/Map";
import { AppTimetable } from "./App/App/Pages/Timetable";
import { AppEdit } from "./App/App/Pages/Edit";
import { AppSettings } from "./App/App/Pages/Settings";

import { AppSignin } from "./App/App/Signin";

import { NotFound } from "./App/Home/404";
import { Error } from "./App/Home/Error";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ["en","mi","fr","jp","zu","nl","sv"],
        fallbackLng: "en",
        detection: {
            order: [
                "cookie",
                "htmlTag",
                "localStorage",
                "querystring",
                "path",
                "subdomain",
            ],
            caches: ["cookie"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        },
        react: {
            useSuspense: true
        }
    });

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route
                path="/tos"
                element={<InformationItem file={InformationTOS} />}
                errorElement={<Error />}
            />
            <Route
                path="/privacy"
                element={<InformationItem file={InformationPrivacy} />}
                errorElement={<Error />}
            />
            <Route path="/plus" element={<Plus />} errorElement={<Error />} />
            <Route path="/about" element={<About />} errorElement={<Error />} />
            <Route
                path="/information/status"
                element={<Status />}
                errorElement={<Error />}
            />
            <Route
                path="/information/devlog/one"
                element={<InformationItem file={InformationDevlogOne} />}
                errorElement={<Error />}
            />
            <Route
                path="/signin"
                element={<AppSignin />}
                errorElement={<Error />}
            />
            <Route
                path="/app"
                element={<AppRedirect />}
                errorElement={<Error />}
            />
            <Route
                path="/app/home"
                element={<AppHome />}
                errorElement={<Error />}
            />
            <Route
                path="/app/setup"
                element={<AppSetup />}
                errorElement={<Error />}
            />
            <Route
                path="/app/map"
                element={<AppMap />}
                errorElement={<Error />}
            />
            <Route
                path="/app/edit"
                element={<AppEdit />}
                errorElement={<Error />}
            />
            <Route
                path="/app/settings"
                element={<AppSettings />}
                errorElement={<Error />}
            />
            <Route
                path="/app/timetable"
                element={<AppTimetable />}
                errorElement={<Error />}
            />
            <Route path="*" element={<NotFound />} errorElement={<Error />} />
        </>
    )
);

for (let i = 0; i < 10; i++) {
    console.log(
        "%cStop!",
        "color:red;font-family:system-ui;font-size:3rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    console.log(
        "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here it is a scam and will give them access to your account.",
        "color:white;font-family:system-ui;font-size:1rem;font-weight:bold"
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="branding-blue">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);
