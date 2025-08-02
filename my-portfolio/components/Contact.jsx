'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mariuszf.urban@gmail.com',
      link: 'mailto:mariusz.urban@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+48 888 860 772',
      link: 'tel:+48888860772'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Szczecin, Poland',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Korzengwiezdny',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mariusz-urban-561b8b372/',
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
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find me online or get in touch directly!
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Informacje kontaktowe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                    <div className="bg-blue-600/20 p-4 rounded-lg mb-4">
                      <Icon className="text-blue-400 text-2xl" />
                    </div>
                    <h4 className="text-white font-medium mb-2">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
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
                      <a href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">
                Find me online or get in touch directly!
              </h4>
              <div className="flex justify-center gap-6">
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
                      className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 text-gray-400 ${social.color} transition-all duration-300 flex flex-col items-center gap-3`}
                      title={social.name}
                    >
                      <Icon className="text-3xl" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}