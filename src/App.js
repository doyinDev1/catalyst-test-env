import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestDetails from "./components/RequestDetails/RequestDetails";
import Home from './Home'
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/dashboard/customer:id" element={<RequestDetails />} />

        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
