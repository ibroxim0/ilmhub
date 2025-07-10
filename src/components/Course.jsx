import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto5 from '../img/user.jpg';

// Teachers data
const teachers = [
  { id: 1, name: 'Ali Valiyev', specialty: 'specialty.programming', img: foto5, instagram: '@alivaliyev_dev', telegram: 't.me/alivaliyev', phone: '+998901234501' },
  { id: 2, name: 'Dilnoza Karimova', specialty: 'specialty.math', img: foto5, instagram: '@dilnozakarimova_math', telegram: 't.me/dilnoza_math', phone: '+998901234502' },
  { id: 3, name: 'Sherzod Rashidov', specialty: 'specialty.english', img: foto5, instagram: '@sherzodenglish', telegram: 't.me/sherzod_eng', phone: '+998901234503' },
  { id: 4, name: 'Fotima Azimova', specialty: 'specialty.art', img: foto5, instagram: '@fotima_art', telegram: 't.me/fotima_art', phone: '+998901234504' },
  { id: 5, name: 'Javohir Saidov', specialty: 'specialty.robotics', img: foto5, instagram: '@javohir_robotics', telegram: 't.me/javohir_robot', phone: '+998901234505' },
  { id: 6, name: 'Gulnora Odilova', specialty: 'specialty.gymnastics', img: foto5, instagram: '@gulnora_gym', telegram: 't.me/gulnora_gym', phone: '+998901234506' },
  { id: 7, name: 'Rustam Ismoilov', specialty: 'specialty.physics', img: foto5, instagram: '@rustam_physics', telegram: 't.me/rustam_phy', phone: '+998901234507' },
  { id: 8, name: 'Nigora Sobirova', specialty: 'specialty.chemistry', img: foto5, instagram: '@nigora_chemistry', telegram: 't.me/nigora_chem', phone: '+998901234508' },
  { id: 9, name: 'Sardor Qodirov', specialty: 'specialty.geography', img: foto5, instagram: '@sardor_geo', telegram: 't.me/sardor_geo', phone: '+998901234509' },
  { id: 10, name: 'Zaynab Umarova', specialty: 'specialty.music', img: foto5, instagram: '@zaynab_music', telegram: 't.me/zaynab_mus', phone: '+998901234510' },
  { id: 11, name: 'Bekzod Hamroyev', specialty: 'specialty.history', img: foto5, instagram: '@bekzod_history', telegram: 't.me/bekzod_hist', phone: '+998901234511' },
  { id: 12, name: 'Madina Boboqulova', specialty: 'specialty.literature', img: foto5, instagram: '@madina_lit', telegram: 't.me/madina_lit', phone: '+998901234512' },
  { id: 13, name: 'Elyor Jo\'rayev', specialty: 'specialty.drawing', img: foto5, instagram: '@elyor_drawing', telegram: 't.me/elyor_draw', phone: '+998901234513' },
  { id: 14, name: 'Shahnoza Sattorova', specialty: 'specialty.biology', img: foto5, instagram: '@shahnoza_bio', telegram: 't.me/shahnoza_bio', phone: '+998901234514' },
  { id: 15, name: 'Temur G\'aniyev', specialty: 'specialty.it', img: foto5, instagram: '@temur_it', telegram: 't.me/temur_it', phone: '+998901234515' },
  { id: 16, name: 'Aziza Mansurova', specialty: 'specialty.marketing', img: foto5, instagram: '@aziza_marketing', telegram: 't.me/aziza_dm', phone: '+998901234516' },
  { id: 17, name: 'Dilshod Rahmatov', specialty: 'specialty.graphic_design', img: foto5, instagram: '@dilshod_design', telegram: 't.me/dilshod_gd', phone: '+998901234517' },
  { id: 18, name: 'Zulxumor Nurullayeva', specialty: 'specialty.animation', img: foto5, instagram: '@zulxumor_anim', telegram: 't.me/zulxumor_anim', phone: '+998901234518' },
  { id: 19, name: 'Komil Olimov', specialty: 'specialty.sport_programming', img: foto5, instagram: '@komil_sport', telegram: 't.me/komil_sport', phone: '+998901234519' },
  { id: 20, name: 'Sevara Mirzayeva', specialty: 'specialty.art_history', img: foto5, instagram: '@sevara_art_history', telegram: 't.me/sevara_art', phone: '+998901234520' },
  { id: 21, name: 'Doniyor Hoshimov', specialty: 'specialty.web_programming', img: foto5, instagram: '@doniyor_web', telegram: 't.me/doniyor_web', phone: '+998901234521' },
  { id: 22, name: 'Lola Davlatova', specialty: 'specialty.mobile_apps', img: foto5, instagram: '@lola_mobile', telegram: 't.me/lola_mobile', phone: '+998901234522' },
  { id: 23, name: 'Sarvar Qosimxo\'jayev', specialty: 'specialty.network_tech', img: foto5, instagram: '@sarvar_network', telegram: 't.me/sarvar_net', phone: '+998901234523' },
  { id: 24, name: 'Kamola Ibrohimova', specialty: 'specialty.psychology', img: foto5, instagram: '@kamola_psy', telegram: 't.me/kamola_psy', phone: '+998901234524' },
  { id: 25, name: 'Umid Eshonov', specialty: 'specialty.accounting', img: foto5, instagram: '@umid_bux', telegram: 't.me/umid_bux', phone: '+998901234525' },
  { id: 26, name: 'Shahodat Hakimova', specialty: 'specialty.management', img: foto5, instagram: '@shahodat_management', telegram: 't.me/shahodat_mgm', phone: '+998901234526' },
  { id: 27, name: 'Davron Abduxoliqov', specialty: 'specialty.economics', img: foto5, instagram: '@davron_econ', telegram: 't.me/davron_eco', phone: '+998901234527' },
  { id: 28, name: 'Mohira Rustamova', specialty: 'specialty.law', img: foto5, instagram: '@mohira_law', telegram: 't.me/mohira_law', phone: '+998901234528' },
  { id: 29, name: 'Farrux Saidov', specialty: 'specialty.logistics', img: foto5, instagram: '@farrux_logistics', telegram: 't.me/farrux_log', phone: '+998901234529' },
  { id: 30, name: 'Zebo Mahmudova', specialty: 'specialty.sociology', img: foto5, instagram: '@zebo_soc', telegram: 't.me/zebo_soc', phone: '+998901234530' },
  { id: 31, name: 'Asror Jo\'rayev', specialty: 'specialty.architecture', img: foto5, instagram: '@asror_arch', telegram: 't.me/asror_arch', phone: '+998901234531' },
  { id: 32, name: 'Diyora Karimjonova', specialty: 'specialty.design', img: foto5, instagram: '@diyora_design', telegram: 't.me/diyora_des', phone: '+998901234532' },
  { id: 33, name: 'Qahramon Ismatov', specialty: 'specialty.medicine', img: foto5, instagram: '@qahramon_med', telegram: 't.me/qahramon_med', phone: '+998901234533' },
  { id: 34, name: 'Nargiza Olimova', specialty: 'specialty.pharmacy', img: foto5, instagram: '@nargiza_pharm', telegram: 't.me/nargiza_pharm', phone: '+998901234534' },
  { id: 35, name: 'Iskandar Solihov', specialty: 'specialty.veterinary', img: foto5, instagram: '@iskandar_vet', telegram: 't.me/iskandar_vet', phone: '+998901234535' },
  { id: 36, name: 'Manzura Saidaxonova', specialty: 'specialty.agrochemistry', img: foto5, instagram: '@manzura_agro', telegram: 't.me/manzura_agro', phone: '+998901234536' },
];

// Courses data
const coursesData = {
  '5-9': [
    { id: '1a', title: 'course.art_creativity', price: '300,000 UZS/oy', details: 'course.art_creativity_details', duration: '3 oy', schedule: 'schedule.twice_week' },
    { id: '2a', title: 'course.music_rhythm', price: '280,000 UZS/oy', details: 'course.music_rhythm_details', duration: '3 oy', schedule: 'schedule.twice_week' },
    { id: '3a', title: 'course.fun_math', price: '320,000 UZS/oy', details: 'course.fun_math_details', duration: '4 oy', schedule: 'schedule.thrice_week' },
    { id: '4a', title: 'course.english_tales', price: '290,000 UZS/oy', details: 'course.english_tales_details', duration: '5 oy', schedule: 'schedule.twice_week' },
    { id: '5a', title: 'course.mini_cooking', price: '250,000 UZS/oy', details: 'course.mini_cooking_details', duration: '2 oy', schedule: 'schedule.once_week' },
    { id: '6a', title: 'course.lego', price: '310,000 UZS/oy', details: 'course.lego_details', duration: '3 oy', schedule: 'schedule.twice_week' },
    { id: '7a', title: 'course.yoga', price: '260,000 UZS/oy', details: 'course.yoga_details', duration: '2 oy', schedule: 'schedule.twice_week' },
  ],
  '9-11': [
    { id: '1b', title: 'course.scratch', price: '350,000 UZS/oy', details: 'course.scratch_details', duration: '4 oy', schedule: 'schedule.twice_week' },
    { id: '2b', title: 'course.robotics_basics', price: '400,000 UZS/oy', details: 'course.robotics_basics_details', duration: '5 oy', schedule: 'schedule.twice_week' },
    { id: '3b', title: 'course.nature_secrets', price: '310,000 UZS/oy', details: 'course.nature_secrets_details', duration: '4 oy', schedule: 'schedule.twice_week' },
    { id: '4b', title: 'course.scientific_projects', price: '330,000 UZS/oy', details: 'course.scientific_projects_details', duration: '3 oy', schedule: 'schedule.twice_week' },
    { id: '5b', title: 'course.story_writing', price: '290,000 UZS/oy', details: 'course.story_writing_details', duration: '3 oy', schedule: 'schedule.once_week' },
    { id: '6b', title: 'course.chess', price: '270,000 UZS/oy', details: 'course.chess_details', duration: '6 oy', schedule: 'schedule.twice_week' },
    { id: '7b', title: 'course.arduino', price: '380,000 UZS/oy', details: 'course.arduino_details', duration: '4 oy', schedule: 'schedule.twice_week' },
    { id: '8b', title: 'course.comics', price: '300,000 UZS/oy', details: 'course.comics_details', duration: '3 oy', schedule: 'schedule.once_week' },
  ],
  '11-15': [
    { id: '1c', title: 'course.python_basics', price: '450,000 UZS/oy', details: 'course.python_basics_details', duration: '6 oy', schedule: 'schedule.thrice_week' },
    { id: '2c', title: 'course.web_programming', price: '480,000 UZS/oy', details: 'course.web_programming_details', duration: '8 oy', schedule: 'schedule.thrice_week' },
    { id: '3c', title: 'course.graphic_design', price: '480,000 UZS/oy', details: 'course.graphic_design_details', duration: '7 oy', schedule: 'schedule.twice_week' },
    { id: '4c', title: 'course.computer_literacy', price: '380,000 UZS/oy', details: 'course.computer_literacy_details', duration: '3 oy', schedule: 'schedule.thrice_week' },
    { id: '5c', title: 'course.video_editing', price: '400,000 UZS/oy', details: 'course.video_editing_details', duration: '4 oy', schedule: 'schedule.twice_week' },
    { id: '6c', title: 'course.english_intermediate', price: '390,000 UZS/oy', details: 'course.english_intermediate_details', duration: '12 oy', schedule: 'schedule.thrice_week' },
    { id: '7c', title: 'course.animation_3d', price: '520,000 UZS/oy', details: 'course.animation_3d_details', duration: '6 oy', schedule: 'schedule.twice_week' },
    { id: '8c', title: 'course.logical_games', price: '470,000 UZS/oy', details: 'course.logical_games_details', duration: '8 oy', schedule: 'schedule.thrice_week' },
  ],
  '15-20': [
    { id: '1d', title: 'course.frontend', price: '600,000 UZS/oy', details: 'course.frontend_details', duration: '9 oy', schedule: 'schedule.four_times_week' },
    { id: '2d', title: 'course.backend', price: '650,000 UZS/oy', details: 'course.backend_details', duration: '9 oy', schedule: 'schedule.four_times_week' },
    { id: '3d', title: 'course.ai_ml', price: '700,000 UZS/oy', details: 'course.ai_ml_details', duration: '10 oy', schedule: 'schedule.thrice_week' },
    { id: '4d', title: 'course.mobile_apps', price: '680,000 UZS/oy', details: 'course.mobile_apps_details', duration: '8 oy', schedule: 'schedule.thrice_week' },
    { id: '5d', title: 'course.business_startup', price: '550,000 UZS/oy', details: 'course.business_startup_details', duration: '6 oy', schedule: 'schedule.twice_week' },
    { id: '6d', title: 'course.cybersecurity', price: '720,000 UZS/oy', details: 'course.cybersecurity_details', duration: '7 oy', schedule: 'schedule.thrice_week' },
    { id: '7d', title: 'course.data_science', price: '750,000 UZS/oy', details: 'course.data_science_details', duration: '9 oy', schedule: 'schedule.thrice_week' },
    { id: '8d', title: 'course.game_development', price: '800,000 UZS/oy', details: 'course.game_development_details', duration: '12 oy', schedule: 'schedule.four_times_week' },
  ],
};

// News data
const newsData = [
  { id: 1, title: 'news.discount_20', text: 'news.discount_20_text' },
  { id: 2, title: 'news.friend_invite', text: 'news.friend_invite_text' },
  { id: 3, title: 'news.new_cybersecurity', text: 'news.new_cybersecurity_text' },
  { id: 4, title: 'news.summer_intensive', text: 'news.summer_intensive_text' },
  { id: 5, title: 'news.free_coding_girls', text: 'news.free_coding_girls_text' },
  { id: 6, title: 'news.olympiad_prep', text: 'news.olympiad_prep_text' },
];

const Course = () => {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll handler for background color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Course slider settings
  const courseSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Teacher slider settings
  const teacherSliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  // News slider settings
  const newsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleEnrollClick = () => {
    setSelectedCourse(null);
    navigate('/contact');
  };

  return (
    <div className={`relative w-full min-h-screen text-white font-sans overflow-hidden transition-colors duration-1000 ${isScrolled ? 'bg-scrolled' : 'bg-animated'}`}>
      <style>
        {`
          .bg-animated {
            background: linear-gradient(45deg, rgb(11, 17, 33), rgb(3, 47, 41), rgb(67, 4, 78), rgb(10, 7, 54));
            background-size: 400% 400%;
            animation: colorChange 30s ease-in-out infinite;
          }
          .bg-scrolled {
            background: linear-gradient(45deg, rgb(25, 7, 37), rgb(5, 60, 12), rgb(48, 51, 3), rgb(72, 33, 4));
            background-size: 400% 400%;
            animation: colorChange 40s ease-in-out infinite;
          }
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="relative z-10 p-5 bg-gradient-to-b from-transparent to-gray-900/80">
        {/* Courses Section */}
        <section id="courses" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-cyan-400 drop-shadow-lg animate-fade-in">
            {t('our_courses')}
          </h2>
          <div className="flex flex-col space-y-16">
            {Object.keys(coursesData).map((ageGroupKey, index) => (
              <div
                key={ageGroupKey}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-3xl font-bold mb-8 text-green-300">
                  {t(`age_group.${ageGroupKey}`)}
                </h3>
                <div className="max-w-7xl mx-auto px-4">
                  <Slider {...courseSliderSettings}>
                    {coursesData[ageGroupKey].map((course, courseIndex) => (
                      <div key={course.id} className="p-4">
                        <div
                          className="bg-gray-800 bg-opacity-80 rounded-xl p-6 text-left shadow-lg transform transition duration-200 hover:scale-105 hover:bg-gray-700 cursor-pointer animate-fade-in"
                          style={{ animationDelay: `${courseIndex * 0.05}s` }}
                          onClick={() => setSelectedCourse(course)}
                        >
                          <h4 className="text-2xl font-semibold mb-3 text-yellow-300">{t(course.title)}</h4>
                          <p className="text-lg text-gray-300">{t(course.details).substring(0, 100)}...</p>
                          <p className="mt-4 text-xl font-bold text-blue-400">{course.price}</p>
                          <button className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-medium transition-colors duration-200">
                            {t('details')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-cyan-400 drop-shadow-lg animate-fade-in">
            {t('news_promotions')}
          </h2>
          <div className="max-w-7xl mx-auto px-4">
            <Slider {...newsSliderSettings}>
              {newsData.map(newsItem => (
                <div key={newsItem.id} className="p-4">
                  <div className="bg-yellow-600 bg-opacity-20 p-8 rounded-xl text-left shadow-lg border border-yellow-300 border-opacity-40 animate-slide-in-up">
                    <h3 className="text-3xl font-semibold mb-4 text-yellow-300">{t(newsItem.title)}</h3>
                    <p className="text-lg text-gray-200" dangerouslySetInnerHTML={{ __html: t(newsItem.text) }} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Teachers Section */}
        <section id="teachers" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-cyan-400 drop-shadow-lg animate-fade-in">
            {t('our_teachers')}
          </h2>
          <div className="max-w-7xl mx-auto px-4">
            <Slider {...teacherSliderSettings}>
              {teachers.map(teacher => (
                <div key={teacher.id} className="p-4">
                  <div
                    className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg transform transition duration-200 hover:scale-105 hover:bg-gray-700 flex flex-col items-center cursor-pointer animate-fade-in"
                    onClick={() => setSelectedTeacher(teacher)}
                  >
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-cyan-500 shadow-md"
                    />
                    <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                    <p className="text-md text-gray-300 italic">{t(teacher.specialty)}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="py-16 text-center bg-gray-800 bg-opacity-70 rounded-2xl mx-auto max-w-4xl shadow-xl border border-white border-opacity-20 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-400 drop-shadow-lg">
            {t('contact_us')}
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            {t('contact_us_text')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform transition duration-200 hover:bg-cyan-700 hover:scale-105 animate-pulse-custom"
          >
            {t('go_to_contact')}
          </Link>
        </section>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gray-800 rounded-xl p-8 max-w-lg w-full shadow-2xl relative border border-white border-opacity-30">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>
            <h3 className="text-4xl font-bold mb-4 text-yellow-300">{t(selectedCourse.title)}</h3>
            <p className="text-xl text-gray-200 mb-6">{t(selectedCourse.details)}</p>
            <p className="text-2xl font-extrabold text-blue-400 mb-2">{t('price')}: {selectedCourse.price}</p>
            <p className="text-lg text-gray-300 mb-2">{t('duration')}: {selectedCourse.duration}</p>
            <p className="text-lg text-gray-300 mb-6">{t('schedule')}: {t(selectedCourse.schedule)}</p>
            <button
              className="w-full bg-cyan-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors duration-200"
              onClick={handleEnrollClick}
            >
              {t('enroll_course')}
            </button>
          </div>
        </div>
      )}

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gray-800 rounded-xl p-8 max-w-sm w-full shadow-2xl relative border border-white border-opacity-30 text-center">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold"
              onClick={() => setSelectedTeacher(null)}
            >
              ×
            </button>
            <img
              src={selectedTeacher.img}
              alt={selectedTeacher.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-cyan-500 shadow-md"
            />
            <h3 className="text-3xl font-bold mb-2 text-green-300">{selectedTeacher.name}</h3>
            <p className="text-xl text-gray-300 italic mb-6">{t(selectedTeacher.specialty)}</p>

            <div className="space-y-3 mb-6">
              <p className="text-lg text-gray-200 flex items-center justify-center">
                <a href={`https://instagram.com/${selectedTeacher.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                  <svg className="w-6 h-6 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.792.058.974.045 1.613.197 2.13.398.53.21 1.029.47 1.488.929.479.48.749.979.929 1.488.201.517.353 1.156.398 2.13.045 1.008.058 1.352.058 3.798v.001c0 2.43-.013 2.784-.058 3.792-.045.974-.197 1.613-.398 2.13-.21.53-.47 1.029-.929 1.488-.48.479-.979.749-1.488.929-.517.201-1.156.353-2.13.398-1.008.045-1.352.058-3.798.058h-.002c-2.43 0-2.784-.013-3.792-.058-.974-.045-1.613-.197-2.13-.398-.53-.21-1.029-.47-1.488-.929-.479-.48-.749-.979-.929-1.488-.201-.517-.353-1.156-.398-2.13-.045-1.008-.058-1.352-.058-3.798v-.001c0-2.43.013-2.784.058-3.792.045-.974.197-1.613.398-2.13.21-.53.47-1.029.929-1.488.48-.479.979-.749 1.488-.929.517-.201 1.156-.353 2.13-.398C9.214 2.013 9.557 2 12 2h.002zm0 2.162a8.381 8.381 0 00-2.903.54C7.054 5.23 6.444 5.922 5.904 6.462a6.38 6.38 0 00-.54 2.903c-.045.964-.058 1.298-.058 3.784v.002c0 2.486.013 2.82.058 3.784.045.965.197 1.574.398 2.083.21.503.47 1.002.929 1.462.48.48.979.749 1.488.929.517.201 1.156.353 2.13.398C9.214 21.987 9.557 22 12 22h.002c2.43 0 2.784-.013 3.792-.058.974-.045 1.613-.197 2.13-.398.53-.21 1.029-.47 1.488-.929.479-.48.749-.979.929-1.488.201-.517.353-1.156.398-2.13.045-1.008.058-1.352.058-3.798v-.002c0-2.486-.013-2.82-.058-3.784a6.38 6.38 0 00-.398-2.083 6.38 6.38 0 00-.929-1.462c-.48-.48-.979-.749-1.488-.929-.517-.201-1.156-.353-2.13-.398A8.381 8.381 0 0012.315 4.162zm-.002 3.162a4.675 4.675 0 100 9.35 4.675 4.675 0 000-9.35zm0 2.162a2.513 2.513 0 110 5.026 2.513 2.513 0 010-5.026zm6.406-7.061a.987.987 0 100 1.974.987.987 0 000-1.974z" clipRule="evenodd" />
                  </svg>
                  {selectedTeacher.instagram}
                </a>
              </p>
              <p className="text-lg text-gray-200 flex items-center justify-center">
                <a href={selectedTeacher.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.427 8.647l-4.823 3.617c-.38.285-.92.285-1.3 0l-.823-.617c-.38-.285-.38-.76 0-1.045l6.5-4.875c.38-.285.92-.285 1.3 0l.823.617c.38.285.38.76 0 1.045zM12 20a8 8 0 100-16 8 8 0 000 16zM9.47 14.53l-.823-.617c-.38-.285-.38-.76 0-1.045l.823-.617c-.38-.285.92-.285 1.3 0l4.823 3.617c.38.285.38.76 0 1.045l-.823.617c-.38.285-.92-.285-1.3 0l-4.823-3.617z" clipRule="evenodd" />
                    <path d="M12.001 9.09l-3.323 2.493c-.38.285-.38.76 0 1.045l.823.617c.38.285.92.285 1.3 0l2.5-1.875c.38-.285.38-.76 0-1.045l-.823-.617c-.38-.285-.92-.285-1.3 0z" />
                  </svg>
                  {selectedTeacher.telegram}
                </a>
              </p>
              <p className="text-lg text-gray-200 flex items-center justify-center">
                <a href={`tel:${selectedTeacher.phone}`} className="flex items-center text-blue-400 hover:underline">
                  <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h15a3 3 0 013 3v15a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5zm19.5 0v15H4.5V4.5h15zm-9 3a.75.75 0 00-.75.75v5.5a.75.75 0 001.5 0V8.25A.75.75 0 0012 7.5zm0 10a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zM12 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    <path d="M12 11.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75z" />
                  </svg>
                  {selectedTeacher.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;