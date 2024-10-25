import React from 'react'

function Footer() {
  return (
    <div>
            <footer className="bg-green-600 text-white py-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
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
      </footer>
    </div>
  )
}

export default Footer
