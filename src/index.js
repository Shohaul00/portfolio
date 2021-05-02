import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Routes from "./Routes"
import * as serviceWorker from "./serviceWorker"
import "./Styles/Index.css"

const loader = document.querySelector(".loader")
const showLoader = () => loader.classList.remove("loader--hide")
const hideLoader = () => loader.classList.add("loader--hide")
setTimeout(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Routes hideLoader={hideLoader} showLoader={showLoader} />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    )
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
