import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaGlobe, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import CountUp from 'react-countup';
import video1 from '../video/video1.mp4';
import foto1 from '../img/ilmhub1.jpg';
import foto2 from '../img/missiya.jpg';

export default function Us() {
  const { t } = useTranslation();
  const controls = useAnimation();

  // State for modal visibility and content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', desc: '', details: '' });

  // Define animation variants for sections and individual items
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Reduced from 0.8
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } }, // Reduced from 0.3
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } }, // Reduced from 0.2
  };

  // Trigger initial animation
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Function to handle opening the modal
  const openModal = (item) => {
    setModalContent({
      title: item.title,
      desc: item.desc,
      details: item.details || t('Bu qadriyat haqida ko‘proq ma’lumot: ') + item.title,
    });
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Values data with additional details for the modal
  const values = [
    {
      icon: <FaBookOpen />,
      title: t('Doimiy O‘rganish'),
      desc: t('Biz o‘quvchilarni doimiy rivojlanishga undaymiz.'),
      details: t('Doimiy o‘rganish – bu IlmHubning asosiy tamoyillaridan biri. Biz har bir o‘quvchiga yangi bilim va ko‘nikmalar olish orqali o‘z salohiyatini yuzaga chiqarishga yordam beramiz. Kurslarimiz zamonaviy metodologiyalar asosida tuzilgan bo‘lib, o‘quvchilarning doimiy ravishda rivojlanishini ta’minlaydi.'),
    },
    {
      icon: <FaLightbulb />,
      title: t('Innovatsiya'),
      desc: t('Darslar texnologiya asosida yaratilgan.'),
      details: t('Innovatsiya – IlmHubning yuragi. Biz eng so‘nggi texnologiyalardan foydalanib, interaktiv va samarali ta’lim tajribasini taqdim etamiz. Virtual sinflar, sun’iy intellekt va boshqa zamonaviy vositalar orqali ta’limni qiziqarli va foydali qilamiz.'),
    },
    {
      icon: <FaGlobe />,
      title: t('Jamoaviylik'),
      desc: t('IlmHub – bilimli jamoa.'),
      details: t('Jamoaviylik IlmHubda muhim o‘rin tutadi. Biz o‘quvchilar, mentorlar va mutaxassislar o‘rtasida mustahkam hamkorlikni shakllantiramiz. Har bir ishtirokchi bilim almashish va birgalikda muvaffaqiyatga erishish uchun bir jamoa sifatida ishlaydi.'),
    },
    {
      icon: <FaHandsHelping />,
      title: t('Qo‘llab-quvvatlash'),
      desc: t('Mentorlar har doim siz bilan.'),
      details: t('IlmHubda har bir o‘quvchi doimiy qo‘llab-quvvatlanadi. Tajribali mentorlarimiz har qadamda yordam berishga tayyor. Siz savollaringizga javob topasiz, yo‘nalish topasiz va maqsadlaringizga erishasiz.'),
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video1} type="video/mp4" />
        {t('video_not_supported')}
      </video>

      {/* Overlay & Main Content Wrapper */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0"></div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16 bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700">
          <h1 className="text-5xl font-extrabold text-amber-300 mb-4 tracking-tight">
            {t('IlmHub - Zamonaviy Ta’lim Markazi')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('IlmHub – bu zamonaviy bilim va texnologiyalarni o‘rgatuvchi platforma bo‘lib, har bir inson uchun teng ta’lim imkoniyatlarini yaratadi.')}
          </p>
          <img
            src={foto1}
            alt="IlmHub Overview"
            className="max-w-md mx-auto rounded-lg mt-3 shadow-lg object-cover"
          />
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800 bg-opacity-60 rounded-xl shadow-2xl p-8 mb-16 border border-gray-700 backdrop-blur-sm"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-amber-300 mb-4 text-center">
            {t('Bizning Missiyamiz')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-6">
            {t('Har kim uchun ta’limni ochiq va qulay qilish – IlmHub jamoasining asosiy maqsadi.')}
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-6">
            {t('Onlayn kurslar, vebinarlar va mentorlik dasturlari orqali biz har bir foydalanuvchiga o‘z salohiyatini namoyon etishda ko‘maklashamiz.')}
          </motion.p>
          <img
            src={foto2}
            alt="Our Mission"
            className="max-w-md mx-auto rounded-lg my-6 shadow-md object-cover"
          />
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 bg-gray-800 bg-opacity-60 rounded-xl shadow-2xl p-8 border border-gray-700 backdrop-blur-sm"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-amber-300 mb-10 text-center">
            {t('Asosiy Qadriyatlarimiz')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gray-700 bg-opacity-60 rounded-lg p-6 text-center shadow-lg border border-gray-600 backdrop-blur-sm cursor-pointer hover:bg-gray-600 transition duration-200" // Reduced from 300
                onClick={() => openModal(item)}
              >
                <div className="text-amber-300 text-5xl mx-auto mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal for Values Details */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-800 bg-opacity-90 p-8 rounded-xl max-w-lg w-full mx-4 border border-gray-700 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-amber-300 mb-4">{modalContent.title}</h3>
              <p className="text-lg text-gray-200 mb-6">{modalContent.desc}</p>
              <p className="text-lg text-gray-200 mb-6">{modalContent.details}</p>
              <button
                className="px-6 py-3 bg-amber-300 text-gray-900 font-bold rounded-full hover:bg-amber-400 transition duration-200" // Reduced from 300
                onClick={closeModal}
              >
                {t('Yopish')}
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Statistics Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800 bg-opacity-60 rounded-xl shadow-2xl p-8 mb-16 border border-gray-700 backdrop-blur-sm"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-amber-300 mb-10 text-center">
            {t('Bizga Ishonishadi')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 5000, label: t('O‘quvchilar'), text: t('5000+ o‘quvchi ta’lim olmoqda.') },
              { value: 20, label: t('Kurslar'), text: t('20 dan ortiq kurslar mavjud.') },
              { value: 50, label: t('Ustozlar'), text: t('50+ tajribali mentorlar.') },
              { value: 80, label: t('Natijalar'), text: t('Tinglovchilarning 80% maqsadiga erishmoqda.'), suffix: '%' },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-gray-700 bg-opacity-60 rounded-lg p-6 text-center shadow-lg backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-amber-300 mb-2">
                  <CountUp start={0} end={item.value} duration={1.5} suffix={item.suffix || '+'} enableScrollSpy={true} scrollSpyOnce={true} /> {/* Reduced from 2.5 */}
                </h3>
                <h4 className="text-xl font-semibold text-white mb-2">{item.label}</h4>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center bg-gray-800 bg-opacity-60 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700"
        >
          <p className="text-xl text-gray-200 mb-8">
            {t('Bugun bizga qo‘shiling va bilim sari birinchi qadamni qo‘ying!')}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-amber-300 text-gray-900 font-bold rounded-full text-xl hover:bg-amber-400 transition duration-200 shadow-lg transform hover:scale-105" // Reduced from 300
            >
              {t('Biz bilan bog‘laning')}
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-amber-300 text-gray-900 font-bold rounded-full text-xl hover:bg-amber-400 transition duration-200 shadow-lg transform hover:scale-105" // Reduced from 300
            >
              {t('Kurslar')}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}