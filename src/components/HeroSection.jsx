
// import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";


const HeroSection = () => {
  return (
    <div className="">
      <div className="w-full bg-purple-600  -mb-32 md:-mb-48 lg:-mb-48 rounded-b-3xl ">
      <div className="max-w-7xl mx-auto px-4 py-8  ">



        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto mb-48  backdrop-blur-2xl p-5 rounded-3xl ">
          <h1 className="text-white lg:text-5xl text-4xl font-extrabold  leading-tight mb-5">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
          </p>
          <button onClick={() => {
            const productListEl = document.querySelector(".product-list");
            productListEl.scrollIntoView({behavior: "smooth"});
          }} className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>

        {/* VR Headset Image */}

      </div>


      </div>

      <div className=" mx-auto p-5 bg-purple-700 rounded-3xl max-w-4xl h-full lg:w-full border bg-white/10 backdrop-blur-2xl   ">
          <img 
            src="/assets/banner.jpg"
            alt="VR Headset"
            className="w-full max-h-96   rounded-2xl object-cover "
          />
      </div>
      <div className="product-list">
        <ProductList></ProductList>
      </div>
      {/* <ProductDetails></ProductDetails> */}

    </div>
  );
};


export default HeroSection;