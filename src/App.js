import Dashboard from "./components/Dashboard/Dashboard";
import Request from "./components/Dashboard/Requests/Request";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Request/>
    </div>
  );
}

export default App;
