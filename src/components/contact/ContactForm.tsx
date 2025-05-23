import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormData, FormErrors } from '@/types/contact';

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm = ({
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit
}: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;    setIsSending(true);
    setSendStatus('idle');
    const serviceID = 'service_x2szltb';
    const templateID = 'template_ur5idsw'; // Corrected Template ID
    const publicKey = 'FARwrgz8G5Am07IzT';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(        () => {
          console.log('SUCCESS!');
          setSendStatus('success');
          setIsSending(false);
          // form.current?.reset(); // Removed form reset
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSendStatus('error');
          setIsSending(false);
        },
      );
  };

  return (
    <div className="md:col-span-3">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="Tell us about your project"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full btn btn-primary py-3 px-6 rounded-md text-white ${
                isSending ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {sendStatus === 'success' && (
            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
          )}
          {sendStatus === 'error' && (
            <p className="text-red-600 text-center mt-4">Failed to send message. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
