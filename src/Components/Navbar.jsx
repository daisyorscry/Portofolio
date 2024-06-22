import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [iconName, setIconName] = useState('menu');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIconName(!isMobileMenuOpen ? 'close' : 'menu');
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "lightDaisy");

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("darkDaisy");
    } else {
      setTheme("lightDaisy");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector('html').setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className='border-b  lg:absolute flex justify-center items-center w-full'>
        <nav className=" container bg-base-100  mx-auto p-10 h-20 flex justify-between items-center ">
          <div>
            <button>
              <h1>Daisy UI</h1>
            </button>
          </div>

          <div className='hidden lg:flex gap-20'>
            <div>
              <ul className='flex gap-5'>
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/blog" className="hover:text-gray-300">Blogs</Link>
                <Link to="/about" className="hover:text-gray-300">Contact</Link>
              </ul>
            </div>

            <div>
              <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleToggle} checked={theme === "darkDaisy"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </label>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="z-20 lg:hidden">
            <button onClick={toggleMobileMenu}>
              <ion-icon size='large' name={iconName}></ion-icon>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 1}}
            className=" z-10 mobileNav flex justify-center items-center fixed top-0 right-0  bg-base-100-gradient  w-full h-full rounded-sm lg:hidden opacity-100"
          >
            <ul className='flex flex-col'>
              <Link to="/" className="py-4 hover:text-gray-300" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/blog" className="py-2 hover:text-gray-300" onClick={toggleMobileMenu}>Blogs</Link>
              <Link to="/about" className="py-2 hover:text-gray-300" onClick={toggleMobileMenu}>Contact</Link>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}
