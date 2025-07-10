import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone } from 'lucide-react'; // Import Phone icon

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); // New state for phone number

  const phoneNumber = '+998906915060'; // The phone number

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('courses'), path: '/courses' },
    { name: t('blog'), path: '/blog' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      {/* IlmHub Logo with Gold & Black */}
      <Link to="/" className="text-3xl font-extrabold flex items-center group">
        <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">Ilm</span>
        <span className="text-gray-200 group-hover:text-gray-50 transition-colors duration-300">Hub</span>
      </Link>

      {/* Desktop Nav Links, Language Selector, and Phone Icon */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative text-gray-300 hover:text-yellow-400 transition font-medium text-lg
                  ${location.pathname === link.path
                    ? 'text-yellow-400 font-semibold after:scale-x-100'
                    : 'after:scale-x-0'
                  }
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-400 after:origin-left after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-left`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Selector (visible on desktop) */}
        <div className="relative z-20 ml-6">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-600 transition font-semibold text-base"
          >
            {i18n.language.toUpperCase()}
            <ChevronDown size={18} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-36 rounded-lg shadow-xl bg-gray-800 border border-gray-700 overflow-hidden"
              >
                <div className="py-2">
                  {['uz', 'ru', 'en'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium
                        ${i18n.language === lng
                          ? 'bg-yellow-500 text-gray-900 font-bold'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-300'
                        }
                        transition-colors duration-200`}
                    >
                      {lng === 'uz' ? 'Oʻzbek' : lng === 'ru' ? 'Русский' : 'English'}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Icon (visible on desktop) */}
        <div className="relative z-20 ml-6">
          <button
            onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-600 transition"
            aria-label="Show phone number"
          >
            <Phone size={20} />
          </button>
          <AnimatePresence>
            {showPhoneNumber && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 p-2 rounded-lg shadow-xl bg-gray-800 border border-gray-700 whitespace-nowrap"
              >
                <a href={`tel:${phoneNumber}`} className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2">
                  <Phone size={16} /> {phoneNumber}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile view: Language Selector, Phone Icon, and Burger Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        {/* Language Selector (always visible on mobile) */}
        <div className="relative z-20">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-600 transition font-semibold"
          >
            {i18n.language.toUpperCase()}
            <ChevronDown size={16} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-32 rounded-lg shadow-xl bg-gray-800 border border-gray-700 overflow-hidden"
              >
                <div className="py-1">
                  {['uz', 'ru', 'en'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium
                        ${i18n.language === lng
                          ? 'bg-yellow-500 text-gray-900 font-bold'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-300'
                        }
                        transition-colors duration-200`}
                    >
                      {lng === 'uz' ? 'Oʻzbek' : lng === 'ru' ? 'Русский' : 'English'}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Icon (visible on mobile) */}
        <div className="relative z-20">
          <button
            onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-600 transition"
            aria-label="Show phone number"
          >
            <Phone size={16} />
          </button>
          <AnimatePresence>
            {showPhoneNumber && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 p-2 rounded-lg shadow-xl bg-gray-800 border border-gray-700 whitespace-nowrap"
              >
                <a href={`tel:${phoneNumber}`} className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2">
                  <Phone size={14} /> {phoneNumber}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hamburger/Close Icon (only appears on mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Menu Overlay & Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden" // Overlay
            onClick={() => {
              setMobileMenuOpen(false);
              setShowPhoneNumber(false); // Close phone number dropdown if open
            }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-gray-800 shadow-lg p-6 flex flex-col items-start md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-end mb-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowPhoneNumber(false); // Close phone number dropdown if open
                  }}
                  className="text-white p-2 rounded-md hover:bg-gray-700 transition"
                >
                  <X size={28} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6 w-full">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    <Link
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowPhoneNumber(false); // Close phone number dropdown if open
                      }}
                      className={`block text-2xl py-2 px-4 rounded-md text-gray-200 hover:bg-gray-700 hover:text-yellow-400 transition-colors
                        ${location.pathname === link.path
                          ? 'bg-gray-700 text-yellow-400 font-semibold'
                          : ''
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Phone number also inside mobile menu for easy access */}
              <div className="mt-8 pt-6 border-t border-gray-700 w-full text-center">
                <a href={`tel:${phoneNumber}`} className="text-yellow-400 hover:text-yellow-300 font-semibold text-lg flex items-center justify-center gap-2">
                  <Phone size={20} /> {phoneNumber}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;