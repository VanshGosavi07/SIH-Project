import AgriConnectLogo from "../../../../Media/Logo.jpg";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  PlusIcon,
  ShoppingCartIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Search", href: "#", current: false },
  { name: "Cart", href: "#", current: false },
  { name: "Message", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-green-600 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex h-16 items-center justify-between w-full">
          {/* Logo hidden in mobile view */}
          <div className="hidden sm:flex flex-shrink-0">
            <img
              alt="AgriConnect"
              src={AgriConnectLogo}
              className="h-12 w-12 rounded-full border-2 border-white" // Reduced logo size
            />
          </div>

          {/* Mobile Disclosure Button */}
          <div className="flex sm:hidden">
            <DisclosureButton className="flex items-center justify-center text-white hover:bg-green-700 rounded-md p-2">
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Navbar Links */}
          <div className="hidden sm:ml-6 sm:flex items-center space-x-4 flex-grow justify-center">
            <a
              href="#"
              className="text-white hover:bg-green-700 hover:text-white rounded-md p-2 flex items-center"
            >
              <HomeIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="text-white hover:bg-green-700 hover:text-white rounded-md p-2"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-white hover:bg-green-700 hover:text-white rounded-md p-2"
            >
              <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            {/* Search Input */}
            <input
              type="text"
              placeholder="⌕ Search"
              className="bg-gray-200 text-gray-900 rounded-md px-2 py-1 text-sm flex-grow placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Language Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="flex items-center text-white hover:bg-green-700 rounded-md px-3 py-2 text-sm">
                  <GlobeAltIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                  Language
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Marathi
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Hindi
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    English
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          {/* Right side buttons with more spacing */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative flex items-center text-white px-2 py-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              <PlusIcon className="h-5 w-5 mr-0 sm:mr-2" aria-hidden="true" />
              <span className="hidden sm:inline-block">Create Contract</span>
            </button>

            <button
              type="button"
              className="relative rounded-full bg-green-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-green-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User profile"
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="text-white hover:bg-green-700 block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <input
            type="text"
            placeholder="Search"
            className="block w-full bg-white text-gray-900 rounded-md px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <a
            href="#"
            className="text-white hover:bg-green-700 block rounded-md px-3 py-2 text-base font-medium"
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            Cart
          </a>
          <a
            href="#"
            className="text-white hover:bg-green-700 block rounded-md px-3 py-2 text-base font-medium"
          >
            <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
            Message
          </a>
          {/* Language Dropdown in Mobile View */}
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="flex items-center text-white hover:bg-green-700 rounded-md px-3 py-2 text-base">
                <GlobeAltIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                Language
              </MenuButton>
            </div>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Marathi
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Hindi
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  English
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
