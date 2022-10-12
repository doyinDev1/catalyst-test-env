import React from 'react'
import Dashboard from "./components/Dashboard/Dashboard";
import Request from "./components/Dashboard/Requests/Request";
import Navbar from "./components/NavBar/Navbar";
const Home = () => {
    return (
        <div>
            <Navbar />
            <Dashboard />
            <Request />
        </div>
    )
}

export default Home
