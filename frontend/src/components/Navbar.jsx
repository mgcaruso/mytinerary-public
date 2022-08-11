/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link as LinkRouter } from 'react-router-dom'
import UserIcon from '../assets/user-icon-2.png'
import Logo from '../assets/only-logo.png'
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Alert from '../components/Alert'
import '../styles/navbar.css'

const navigation = [
  { name: 'Home', to: '/', current: 'page' },
  { name: 'Cities', to: '/cities', current: 'page' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

}



export default function Navbar() {

  let logBtn;
  let signUpBtn = "Sign Up";
  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(userActions.userSignOut())
  }

  const user = useSelector(store => store.usersReducer.loggedUser)

  const finalImage = user ? user.urlImage : UserIcon 

  



  if (user) {
    logBtn = "Sign out"

  } else {
    logBtn = "Sign in"
  }



  return (

    <Disclosure as="nav" className="nav-box bg-[#0c252c70]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger menu X and Lines */}
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* MYTinerary logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">


                  <LinkRouter to="/">
                    <img
                      className="logo-img block h-10 w-auto user-icon"
                      src={Logo}
                      alt="logo"
                    />
                  </LinkRouter>
                </div>
                {/* Navigation: "Home" and "Cities" when the menu is NOT collapsed*/}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <LinkRouter
                        key={item.name}
                        to={item.to}
                        onClick={() => { }}
                        className='menu-item'
                        aria-current={item.current}
                      >
                        {item.name}
                      </LinkRouter>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ">
                      <span className="sr-only">Open user menu</span>

                        <img
                          className="logo-img block h-10 w-auto user-icon rounded-full"
                          // src={userImage}
                          src={finalImage}
                          alt="logo"
                        />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="menu-background origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ">

                    { !user && <Menu.Item>
                        {({ active }) => (

                          <LinkRouter
                            to="/signUp"
                            className={classNames(active ? 'bg-gray-100' : '', 'menu-item2 block px-4 py-2 text-sm text-gray-700 text-center')}
                          >
                            {signUpBtn}

                          </LinkRouter>


                        )}
                      </Menu.Item>}
                      <Menu.Item>
                        {({ active }) => (

                          logBtn === "Sign out" ?

                            <button onClick={handleSignOut}
                              className={classNames(active ? 'bg-gray-100' : '', 'menu-item2 block px-4 py-2 text-sm text-gray-700 m-0 w-full text-center')}
                            >
                              {logBtn}
                            </button>

                            :
                            <LinkRouter
                              to="/signIn"
                              className={classNames(active ? 'bg-gray-100' : '', 'menu-item2 block px-4 py-2 text-sm text-gray-700 text-center')}
                            >
                              {logBtn}
                            </LinkRouter>


                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, i) => (
                <LinkRouter key={i}
                  as="a"
                  to={item.to}
                  aria-current={item.current ? 'page' : undefined}>
                  <Disclosure.Button
                    className="menu-item text-white nav text-xl text-gray-100 hover:bg-gray-700 hover:text-white 
                      block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
                  >
                    {item.name}
                  </Disclosure.Button>
                </LinkRouter>
              ))}
                <Alert />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
