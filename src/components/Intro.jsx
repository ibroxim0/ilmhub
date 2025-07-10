import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import video from '../video/video.mp4'; // Make sure this path is correct, or use the public asset if it's there

export default function Intro() {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        src={video} // Path to your video file. Ensure 'video.mp4' is correctly imported or in 'public'
        autoPlay
        loop
        muted // Crucial for autoplay to work in most browsers
        playsInline // Recommended for better mobile compatibility
      >
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl bg-black bg-opacity-40 p-8 rounded-xl shadow-2xl backdrop-blur-sm"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-100">
          {t('title')} - <span className="text-amber-300">{t('title_highlight')}</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Link to Courses Page */}
          <Link
            to="/courses" // Changed from href="#courses" to to="/courses"
            className="inline-flex items-center px-6 py-3 bg-amber-300 text-blue-900 font-semibold rounded-full hover:bg-amber-400 transition duration-300 shadow-lg"
          >
            <FaGraduationCap className="mr-2 text-xl" /> {t('buttons.courses')}
          </Link>
          {/* Link to Contact Page */}
          <Link
            to="/contact" // Changed from href="#contact" to to="/contact"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-100 text-gray-100 font-semibold rounded-full hover:bg-gray-100 hover:text-blue-900 transition duration-300 shadow-lg"
          >
            <FaRocket className="mr-2 text-xl" /> {t('buttons.contact')}
          </Link>
        </div>

        {/* Icon Decorations */}
        <div className="absolute top-4 left-4 opacity-40 animate-pulse hidden sm:block">
          <FaLaptopCode size={48} className="text-amber-200" />
        </div>
        <div className="absolute bottom-4 right-4 opacity-40 animate-pulse hidden sm:block">
          <FaGraduationCap size={48} className="text-amber-200" />
        </div>
      </motion.div>
    </div>
  );
}