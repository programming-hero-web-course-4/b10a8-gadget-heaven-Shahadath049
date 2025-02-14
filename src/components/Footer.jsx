
const Footer = () => {
    return (
        <footer className="py-16 border-t bg-white ">
      <div className="w-full mx-auto px-4">
        {/* Logo and Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-2">Gadget Heaven</h2>
          <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className="border-gray-300 mb-8 w-4/6 mx-auto" />
        {/* Footer Links Grid */}
        <div className="grid grid-cols-3 max-w-5xl  mx-auto text-center lg:gap-8 ">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Product Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Order Tracking</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Returns</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;