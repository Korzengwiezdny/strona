'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { sanitizeHtml, isValidEmail, formRateLimiter } from '../utils/security';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Sanityzacja danych wejściowych
    const sanitizedValue = sanitizeHtml(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Wyczyść błędy dla tego pola
    setErrors(prev => {
      if (prev[name]) {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return prev;
    });
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Sanityzacja i walidacja imienia
    const sanitizedName = sanitizeHtml(formData.name.trim());
    if (!sanitizedName) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    } else if (sanitizedName.length < 2) {
      newErrors.name = 'Imię musi mieć co najmniej 2 znaki';
    }
    
    // Walidacja email
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }
    
    // Sanityzacja i walidacja wiadomości
    const sanitizedMessage = sanitizeHtml(formData.message.trim());
    if (!sanitizedMessage) {
      newErrors.message = 'Wiadomość jest wymagana';
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = 'Wiadomość musi mieć co najmniej 10 znaków';
    } else if (sanitizedMessage.length > 1000) {
      newErrors.message = 'Wiadomość nie może być dłuższa niż 1000 znaków';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!formRateLimiter.isAllowed('contact-form')) {
      alert('Zbyt wiele prób wysłania formularza. Spróbuj ponownie za minutę.');
      return;
    }
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Tutaj można dodać logikę wysyłania formularza do API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Symulacja API call
      
      alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mariusz.urban@example.com',
      link: 'mailto:mariusz.urban@example.com'
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Lokalizacja',
      value: 'Warszawa, Polska',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/mariuszurban',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mariuszurban',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-20 ml-16">
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Skontaktuj się ze mną
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Masz projekt do zrealizowania lub chcesz po prostu porozmawiać? 
            Napisz do mnie - odpowiem najszybciej jak to możliwe!
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lewa strona - informacje kontaktowe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Informacje kontaktowe
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                      <div className="bg-blue-600/20 p-3 rounded-lg">
                        <Icon className="text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{info.title}</h4>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {info.link ? (
                        <a href={info.link} className="block hover:scale-105 transition-transform duration-200">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Znajdź mnie również tutaj:
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-blue-500/30 text-gray-400 ${social.color} transition-all duration-300`}
                      title={social.name}
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Prawa strona - formularz kontaktowy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Wyślij wiadomość
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="Twoje imię i nazwisko"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="twoj@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Temat wiadomości"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 resize-vertical ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-blue-500'
                    }`}
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Wyślij wiadomość
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}