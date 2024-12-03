'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { IoSendSharp } from 'react-icons/io5';
import Toast from '../../components/ui/toast';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/ZakariaAkrabou',
    color: 'hover:text-[#2ea44f]'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/zakaria-akrabou/',
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:zakaria.akrabou@gmail.com',
    color: 'hover:text-accent'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form and show success message
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setShowToast(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Toast 
        message="Message sent successfully! I'll get back to you soon." 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary text-lg"
          >
            Have a question or want to work together?
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30" />
            <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background-light/50 border border-accent/10 focus:border-accent/30 focus:ring-1 focus:ring-accent/30 outline-none transition-all text-text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background-light/50 border border-accent/10 focus:border-accent/30 focus:ring-1 focus:ring-accent/30 outline-none transition-all text-text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background-light/50 border border-accent/10 focus:border-accent/30 focus:ring-1 focus:ring-accent/30 outline-none transition-all text-text-primary resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-accent via-secondary to-accent text-white font-medium relative overflow-hidden group cursor-none"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-50 group-hover:opacity-80 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <IoSendSharp className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30" />
              <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/10">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-text-secondary hover:text-accent transition-colors cursor-none ${link.color}`}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30" />
              <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-8 border border-accent/10">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
                  Let's Create Something Amazing
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's bring your ideas to life!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
