import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ProductProvider } from "./components/ProductContext";
import { Toaster } from "sonner";


function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          className: "",
          duration: 3000,
        }}
      />
    <div className="bg-gray-200">
      <ProductProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ProductProvider>
    </div>
    </>
  );
}

export default App;
