export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo/Brand Name */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold">NextWeb</h1>
            </div>
            
            {/* Links Section */}
            <div className="flex flex-col md:flex-row md:space-x-8">
              <a href="#about" className="hover:underline">
                About Us
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
  
          <div className="mt-6 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} NextWeb. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Social Media Icons */}
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.667 19.667h-3.67v-5.08c0-1.213-.024-2.783-1.7-2.783-1.699 0-1.95 1.328-1.95 2.683v5.18h-3.67V10.5h3.43v1.475h.05c.477-.902 1.646-1.855 3.389-1.855 3.627 0 4.295 2.389 4.295 5.493v4.154zm-15.334 0H1.333V5.667h3.666v14zm1.833-15.66c-1.165 0-2.056.883-2.056 1.96 0 1.06.895 1.96 2.06 1.96 1.164 0 2.057-.898 2.057-1.96-.001-1.077-.894-1.96-2.059-1.96z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.207 11.388.6.111.793-.26.793-.577 0-.285-.011-1.236-.017-2.241-3.338.724-4.043-1.607-4.043-1.607-.546-1.386-1.333-1.756-1.333-1.756-1.086-.743.083-.728.083-.728 1.202.084 1.832 1.234 1.832 1.234 1.066 1.829 2.8 1.299 3.48.992.108-.772.417-1.299.762-1.597-2.664-.303-5.467-1.332-5.467-5.931 0-1.313.47-2.386 1.239-3.227-.124-.303-.537-1.528.117-3.176 0 0 1.008-.322 3.302 1.23.96-.267 1.99-.4 3.005-.404 1.015.004 2.046.137 3.007.404 2.294-1.552 3.302-1.23 3.302-1.23.655 1.648.242 2.873.118 3.176.77.841 1.239 1.914 1.239 3.227 0 4.607-2.807 5.622-5.475 5.924.429.37.815 1.098.815 2.219 0 1.605-.014 2.898-.014 3.288 0 .318.192.694.797.577A12.022 12.022 0 0024 12.297c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  