import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
