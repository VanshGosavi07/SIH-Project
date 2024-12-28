import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-green-600 text-white py-16 mt-20">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Address Section */}
            <div className="con-item text-center sm:text-left">
              <img
                src="images/address2.png"
                alt="Address Icon"
                className="w-8 h-8 mb-4 mx-auto sm:mx-0"
              />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-sm">
                1261 Shilp Epitom, Rajpath,
                <br />
                Rangoli Road Off Sindhu Bhavan
                <br />
                Road, Bodakdev, Ahmedabad-
                <br />
                380054, Gujarat, India
              </p>
            </div>

            {/* Helpline Section */}
            <div className="con-item text-center sm:text-left">
              <img
                src="images/call.png"
                alt="Phone Icon"
                className="w-8 h-8 mb-4 mx-auto sm:mx-0"
              />
              <h3 className="text-xl font-semibold mb-2">Helpline & Support</h3>
              <p className="text-sm">
                +91 9699226629
                <br />
                +91 7249529986
                <br />
                +91 8805228128
                <br />
                +91 9825434390
              </p>
            </div>

            {/* Email Section */}
            <div className="con-item text-center sm:text-left">
              <img
                src="images/email.webp"
                alt="Email Icon"
                className="w-8 h-8 mb-4 mx-auto sm:mx-0"
              />
              <h3 className="text-xl font-semibold mb-2">Send an Email</h3>
              <p className="text-sm">
                support@example.com
                <br />
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
