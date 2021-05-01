import React, { useEffect } from "react"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Home/Home"

const Routes = ({hideLoader}) => {
    useEffect(() => {
        hideLoader()
    }, [])
    return (
        <>
            <Navigation/>
            <Home />
        </>
    )
}
export default Routes
