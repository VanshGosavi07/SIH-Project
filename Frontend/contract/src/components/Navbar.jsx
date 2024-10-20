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
  GlobeAltIcon, // Import the globe icon for language selection
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
    <Disclosure as="nav" className="bg-gray-800 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex h-16 items-center justify-between w-full">
          {/* Logo hidden in mobile view */}
          <div className="hidden sm:flex flex-shrink-0">
            <img
              alt="AgriConnect"
              src={AgriConnectLogo}
              className="h-16 w-16 rounded-full" // Increased size for visibility
            />
          </div>

          {/* Mobile Disclosure Button */}
          <div className="flex sm:hidden">
            <DisclosureButton className="flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2">
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Navbar Links */}
          <div className="hidden sm:ml-6 sm:flex items-center space-x-4 flex-grow justify-center">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2 flex items-center" // Updated background color
            >
              <HomeIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md p-2"
            >
              <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
            </a>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-gray-300 rounded-md px-2 py-1 text-sm flex-grow placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Language Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">
                  <GlobeAltIcon className="h-6 w-6 mr-1" aria-hidden="true" />{" "}
                  {/* Globe icon for language selection */}
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

          {/* Right side buttons with more spacing */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
  type="button"
  className="relative flex items-center text-white px-2 py-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
>
  <PlusIcon className="h-5 w-5 mr-0 sm:mr-2" aria-hidden="true" />
  <span className="hidden sm:inline-block">Create Contract</span>
  <span className="absolute hidden text-sm bg-gray-900 px-2 py-1 rounded-md text-white sm:hidden group-hover:block">
    Create Contract
  </span>
</button>


            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User profile"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <input
            type="text"
            placeholder="Search"
            className="block w-full bg-gray-700 text-gray-300 rounded-md px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            Cart
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
            Message
          </a>
          {/* Language Dropdown in Mobile View */}
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base">
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
