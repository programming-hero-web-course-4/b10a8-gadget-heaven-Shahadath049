import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ProductProvider } from "./components/ProductContext";


function App() {
  return (
    <div className="bg-gray-200">
      <ProductProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
