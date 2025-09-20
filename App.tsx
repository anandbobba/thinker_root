import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ThemeCard from './components/ThemeCard';
import SpecialFeature from './components/SpecialFeature';
import VisionCard from './components/VisionCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegistrationModal from './components/RegistrationModal';
import AnnouncementBanner from './components/AnnouncementBanner';
import EventDetails from './components/EventDetails';
import Sponsors from './components/Sponsors';
import SuccessToast from './components/SuccessToast';
import PoweredBy from './components/PoweredBy';
import ClickSpark from './components/ClickSpark';
import ParticlesBackground from './components/ParticlesBackground';
import CampusAmbassadorModal from './components/CampusAmbassadorModal'; // new import
import { HACKATHON_THEMES, SPECIAL_FEATURES, VISION_POINTS } from './constants';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false); // new state

  const handleRegisterSuccess = () => {
    setIsModalOpen(false);
    setShowSuccessToast(true);
  };

  return (
    <ClickSpark sparkColor="#ef4444">
      <div className="relative bg-zinc-900 text-zinc-200 font-sans leading-relaxed overflow-x-hidden">
        <ParticlesBackground />

        <Navbar
          onRegisterClick={() => setIsModalOpen(true)}
          onCampusClick={() => setIsCampusModalOpen(true)}
        />
        <AnnouncementBanner />

        <RegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleRegisterSuccess}
        />

        <CampusAmbassadorModal
          isOpen={isCampusModalOpen}
          onClose={() => setIsCampusModalOpen(false)}
          onSuccess={() => {
            setIsCampusModalOpen(false);
            setShowSuccessToast(true);
          }}
        />

        <SuccessToast
          isVisible={showSuccessToast}
          onDismiss={() => setShowSuccessToast(false)}
        />

        <div className="relative z-10">
          <Header onRegisterClick={() => setIsModalOpen(true)} />
          <PoweredBy />

          <main>
            <EventDetails />
            <Sponsors />

            <Section id="vision" title="Our Vision">
              <div className="grid md:grid-cols-3 gap-8">
                {VISION_POINTS.map((point) => (
                  <VisionCard
                    key={point.title}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </Section>

            <Section id="themes" title="6 Groundbreaking Themes">
              <p className="max-w-3xl mx-auto text-center text-zinc-300 mb-12 text-lg">
                Dive into one of our six future-forward themes. Each one is a launchpad for radical
                ideas, blending core science with frontier technology to challenge your creativity
                and push the boundaries of what's possible.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {HACKATHON_THEMES.map((theme) => (
                  <ThemeCard
                    key={theme.title}
                    icon={theme.icon}
                    title={theme.title}
                    description={theme.description}
                  />
                ))}
              </div>
            </Section>

            <Section id="special" title="What Makes ThinkerRoot Special?">
              <div className="max-w-4xl mx-auto space-y-8">
                {SPECIAL_FEATURES.map((feature) => (
                  <SpecialFeature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </Section>
          </main>

          <Footer />
        </div>
      </div>
    </ClickSpark>
  );
};

export default App;
