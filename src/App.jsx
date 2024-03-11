import "./App.css";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
