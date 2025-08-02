import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'hello@themehub.com',
      description: 'Send us a message anytime',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: '123 Design Street, Tech City',
      description: 'Come say hello at our HQ',
    },
  ];

  if (isSubmitted) {
    return (
      <div className={`max-w-7xl mx-auto ${theme.layout.containerPadding} py-20`}>
        <div className="max-w-2xl mx-auto text-center">
          <div 
            className={`${theme.spacing.xl} ${theme.layout.borderRadius} border`}
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.success,
            }}
          >
            <CheckCircle 
              className="w-16 h-16 mx-auto mb-6"
              style={{ color: theme.colors.success }}
            />
            <h2 
              className={`text-3xl ${theme.fonts.headingWeight} mb-4`}
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.primary,
              }}
            >
              Message Sent Successfully!
            </h2>
            <p 
              className={`text-lg ${theme.fonts.bodyWeight}`}
              style={{ 
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.secondary,
              }}
            >
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto ${theme.layout.containerPadding}`}>
      {/* Hero Section */}
      <section className={`text-center ${theme.spacing.xl}`}>
        <h1 
          className={`text-4xl md:text-6xl ${theme.fonts.headingWeight} mb-6 leading-tight`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Get in{' '}
          <span style={{ color: theme.colors.primary }}>
            Touch
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${theme.fonts.bodyWeight}`}
          style={{ 
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.secondary,
          }}
        >
          Have questions about ThemeHub? Want to collaborate? We'd love to hear from you. 
          Drop us a line and we'll get back to you as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section>
          <div 
            className={`${theme.spacing.lg} ${theme.layout.borderRadius} border ${theme.layout.shadow}`}
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            }}
          >
            <h2 
              className={`text-2xl ${theme.fonts.headingWeight} mb-6`}
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.primary,
              }}
            >
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name"
                    className={`block text-sm ${theme.fonts.headingWeight} mb-2`}
                    style={{ 
                      color: theme.colors.text,
                      fontFamily: theme.fonts.secondary,
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 ${theme.layout.borderRadius} border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    style={{
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.border,
                      color: theme.colors.text,
                      focusRingColor: theme.colors.primary,
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className={`block text-sm ${theme.fonts.headingWeight} mb-2`}
                    style={{ 
                      color: theme.colors.text,
                      fontFamily: theme.fonts.secondary,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 ${theme.layout.borderRadius} border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    style={{
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.border,
                      color: theme.colors.text,
                      focusRingColor: theme.colors.primary,
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject"
                  className={`block text-sm ${theme.fonts.headingWeight} mb-2`}
                  style={{ 
                    color: theme.colors.text,
                    fontFamily: theme.fonts.secondary,
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${theme.layout.borderRadius} border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  style={{
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.text,
                    focusRingColor: theme.colors.primary,
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className={`block text-sm ${theme.fonts.headingWeight} mb-2`}
                  style={{ 
                    color: theme.colors.text,
                    fontFamily: theme.fonts.secondary,
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 ${theme.layout.borderRadius} border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-vertical`}
                  style={{
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.text,
                    focusRingColor: theme.colors.primary,
                  }}
                />
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 ${theme.layout.borderRadius} text-lg ${theme.fonts.headingWeight} transition-all duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2`}
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  fontFamily: theme.fonts.secondary,
                  focusRingColor: theme.colors.primary,
                }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="space-y-8">
            <div>
              <h2 
                className={`text-2xl ${theme.fonts.headingWeight} mb-6`}
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.primary,
                }}
              >
                Contact Information
              </h2>
              
              <p 
                className={`text-lg leading-relaxed ${theme.fonts.bodyWeight} mb-8`}
                style={{ 
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.secondary,
                }}
              >
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${theme.spacing.sm} ${theme.layout.borderRadius} border transition-all duration-300 hover:scale-105`}
                style={{
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                }}
              >
                <div 
                  className={`flex-shrink-0 p-3 ${theme.layout.borderRadius}`}
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <span style={{ color: theme.colors.background }}>
                    {info.icon}
                  </span>
                </div>
                
                <div>
                  <h3 
                    className={`text-lg ${theme.fonts.headingWeight} mb-1`}
                    style={{ 
                      color: theme.colors.text,
                      fontFamily: theme.fonts.primary,
                    }}
                  >
                    {info.title}
                  </h3>
                  
                  <p 
                    className={`${theme.fonts.headingWeight} mb-1`}
                    style={{ color: theme.colors.primary }}
                  >
                    {info.details}
                  </p>
                  
                  <p 
                    className={`text-sm ${theme.fonts.bodyWeight}`}
                    style={{ 
                      color: theme.colors.textSecondary,
                      fontFamily: theme.fonts.secondary,
                    }}
                  >
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};