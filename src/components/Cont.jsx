import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import video4 from '../video/video44.mp4'

const ContactForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <div className="md:w-1/3 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-8 text-center animate-pulse-slow">
        {t('contact_us')}
      </h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">
            {t('form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300 ease-in-out"
            placeholder={t('form.name_placeholder')}
          />
        </div>
        <div>
          <label htmlFor="surname" className="block text-lg font-semibold text-gray-200 mb-2">
            {t('form.surname')}
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            required
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300 ease-in-out"
            placeholder={t('form.surname_placeholder')}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-200 mb-2">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="\+998[0-9]{9}"
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300 ease-in-out"
            placeholder={t('form.phone_placeholder')}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate-bounce-subtle"
          >
            {t('form.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

const MapSection = ({ selectedBranch, setSelectedBranch, branches }) => {
  const { t } = useTranslation();

  return (
    <div className="md:w-2/3 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6 text-center">
        {t('our_branches')}
      </h2>
      <div className="mb-6 flex justify-center space-x-4 flex-wrap gap-2">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setSelectedBranch(branch.id)}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition duration-300 ease-in-out ${
              selectedBranch === branch.id
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>
      <div className="aspect-[16/9] rounded-lg overflow-hidden border border-gray-700 mb-4 transition-opacity duration-500">
        <iframe
          src={branches.find((b) => b.id === selectedBranch).mapSrc}
          width="100%"
          height="100%"
          frameBorder="0"
          title={t(`branches.${selectedBranch}`)}
          allowFullScreen
          className="animate-fade-in"
        ></iframe>
      </div>
      <a
        href={branches.find((b) => b.id === selectedBranch).mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition duration-300 ease-in-out block text-center"
      >
        {t('view_on_yandex_maps')}
      </a>
    </div>
  );
};

const Cont = () => {
  const { t } = useTranslation();
  const [selectedBranch, setSelectedBranch] = useState('chilonzor');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const branches = [
    {
      id: 'chilonzor',
      name: t('branches.chilonzor'),
      mapSrc: 'https://yandex.uz/map-widget/v1/?um=constructor%3Achilonzor_map_code&source=constructor',
      mapLink: 'https://yandex.uz/maps/-/CDuWwX6z',
    },
    {
      id: 'yunusabad',
      name: t('branches.yunusabad'),
      mapSrc: 'https://yandex.uz/map-widget/v1/?um=constructor%3Ayunusabad_map_code&source=constructor',
      mapLink: 'https://yandex.uz/maps/-/CDuWwYDz',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      phone: e.target.phone.value,
    };
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    e.target.reset();
    setTimeout(() => setFormSubmitted(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50 animate-fade-in"
      >
        <source src={video4} type="video/mp4" />
        <span className="text-gray-300">{t('video_not_supported')}</span>
      </video>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        <MapSection
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          branches={branches}
        />
        <ContactForm onSubmit={handleSubmit} />
      </div>

      {/* Submission Confirmation */}
      {formSubmitted && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg animate-slide-up">
          {t('form.success_message')}
        </div>
      )}
    </div>
  );
};

export default Cont;