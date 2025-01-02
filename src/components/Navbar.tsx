import { useState } from 'react';
import {  LogOut, PlusCircle, Menu } from 'lucide-react';
import { Link } from './Link';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  // Destructure isAuthenticated and logout from useAuth() hook
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // State for managing the drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle logout functionality
  const handleLogout = () => {
    logout(); // Call logout from context
    navigate('/'); // Navigate to home after logout
    localStorage.removeItem("userSession");
  };

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="https://ylxnarsehkproxfjzjmi.supabase.co/storage/v1/object/public/images/teeth_4968561.png" className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Dr. Fezzani Dental</span>
          </div>

          {/* Menu for large screens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>

            {user ? (
              <>
                <button
                  onClick={() => navigate('/add-case')}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <PlusCircle className="h-5 w-5 mr-1" />
                  Add Case
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </button>
            )}
          </div>

          {/* Hamburger Menu Icon for small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDrawer} className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for small screens */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 w-64 h-full bg-white p-4 shadow-lg z-50">
            <div className="flex justify-between items-center">
              <img src="https://ylxnarsehkproxfjzjmi.supabase.co/storage/v1/object/public/images/teeth_4968561.png" className="h-8 w-8 text-blue-600" />
              <button
                onClick={toggleDrawer}
                className="text-gray-700"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="#experience" className="text-gray-700 hover:text-blue-600">Experience</Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

              {user ? (
                <>
                  <button
                    onClick={() => navigate('/add-case')}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <PlusCircle className="h-5 w-5 mr-1" />
                    Add Case
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
