import { lazy } from "react";
import Navcomponent from "../components/Nav"
import Experience from "../templates/Experience";
import Welcome from "../templates/welcome";



function Indexapp() {
    return (
        <>
            <Navcomponent />
            <Welcome />
            <Experience />
            {/* <Appejemplo/> */}
        </>
    )
}

export default Indexapp;