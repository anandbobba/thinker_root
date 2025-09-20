import React, { useState } from 'react';
import { HACKATHON_THEMES } from '../constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegistrationModal = ({ isOpen, onClose, onSuccess }: RegistrationModalProps) => {
  if (!isOpen) return null;

  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [shareProof, setShareProof] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ check for uploads
    if (!paymentProof || !shareProof) {
      alert("Please upload all mandatory files");
      return;
    }

    console.log('Form submitted');
    onSuccess();
  };

  const inputClasses =
    "w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-zinc-300 mb-1";
  const legendClasses =
    "text-lg font-medium text-zinc-100 mb-2 w-full border-b border-zinc-700 pb-2";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-zinc-800 rounded-lg shadow-2xl shadow-red-900/20 w-full max-w-2xl border border-zinc-700 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-800/80 backdrop-blur-sm z-10 p-8 pb-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close registration form"
          >
            ✕
          </button>
          <h2
            id="modal-title"
            className="font-display text-3xl font-bold text-red-400 text-center"
          >
            Register Your Interest
          </h2>

          {/* PDF Download Button */}
          <a
            href="public/Thinkerroot.pdf"
            download
            className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
          >
            📄 Download ThinkerRoot PDF
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-8 pt-0">
          {/* Personal Information */}
          <fieldset>
            <legend className={legendClasses}>Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name *
                </label>
                <input type="text" id="firstName" name="firstName" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name *
                </label>
                <input type="text" id="lastName" name="lastName" required className={inputClasses} />
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset>
            <legend className={legendClasses}>Contact Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address *
                </label>
                <input type="email" id="email" name="email" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number *
                </label>
                <input type="tel" id="phone" name="phone" required className={inputClasses} />
              </div>
            </div>
          </fieldset>

          {/* Professional Background */}
          <fieldset>
            <legend className={legendClasses}>Professional Background</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="organization" className={labelClasses}>
                  Organization/University
                </label>
                <input type="text" id="organization" name="organization" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="role" className={labelClasses}>
                  Role/Position
                </label>
                <input type="text" id="role" name="role" className={inputClasses} />
              </div>
            </div>
          </fieldset>

          {/* Innovation Preferences */}
          <fieldset>
            <legend className={legendClasses}>Innovation Preferences</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="theme" className={labelClasses}>
                  Preferred Theme *
                </label>
                <select id="theme" name="theme" required className={inputClasses}>
                  <option value="">Select a theme...</option>
                  {HACKATHON_THEMES.map((theme) => (
                    <option key={theme.title} value={theme.title}>
                      {theme.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="experience" className={labelClasses}>
                  Experience Level
                </label>
                <select id="experience" name="experience" className={inputClasses}>
                  <option value="">Select level...</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Skills & Motivation */}
          <fieldset>
            <legend className={legendClasses}>Skills & Motivation</legend>
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="skills" className={labelClasses}>
                  Technical Skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  className={inputClasses}
                  placeholder="e.g., Python, React, Machine Learning..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="motivation" className={labelClasses}>
                  Why do you want to join ThinkerRoot?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={3}
                  className={inputClasses}
                  placeholder="Tell us about your passion for innovation..."
                ></textarea>
              </div>
            </div>
          </fieldset>

          {/* Social Share Proof */}
          <fieldset>
            <legend className={legendClasses}>Social Media Share Proof *</legend>
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="linkedinLink" className={labelClasses}>
                  LinkedIn Post Link *
                </label>
                <input
                  type="url"
                  id="linkedinLink"
                  name="linkedinLink"
                  required
                  className={inputClasses}
                  placeholder="Paste your LinkedIn post URL"
                />
              </div>
              <div>
                <label htmlFor="shareScreenshot" className={labelClasses}>
                  Upload Screenshot of your LinkedIn Post *
                </label>
                <input
                  type="file"
                  id="shareScreenshot"
                  accept="image/*"
                  required
                  onChange={(e) => setShareProof(e.target.files?.[0] ?? null)}
                  className="text-zinc-300"
                />
              </div>
            </div>
          </fieldset>

          {/* Payment Proof */}
          <fieldset>
            <legend className={legendClasses}>Payment Screenshot *</legend>
            <div className="mt-4">
              <label htmlFor="paymentScreenshot" className={labelClasses}>
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                id="paymentScreenshot"
                accept="image/*"
                required
                onChange={(e) => setPaymentProof(e.target.files?.[0] ?? null)}
                className="text-zinc-300"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Book My Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
