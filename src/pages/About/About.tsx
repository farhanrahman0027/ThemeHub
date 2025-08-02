import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Palette, Code, Heart, Users } from 'lucide-react';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Designer',
      description: 'Passionate about creating beautiful, user-centered designs',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      description: 'Expert in React and modern web technologies',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Rodriguez',
      role: 'UX Researcher',
      description: 'Focused on understanding user needs and behaviors',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Excellence',
      description: 'We believe great design should be accessible to everyone, regardless of technical expertise.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Our commitment to writing maintainable, scalable code ensures long-term success.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User First',
      description: 'Every decision we make prioritizes the user experience and accessibility.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We build products that bring people together and foster collaboration.',
    },
  ];

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
          About{' '}
          <span style={{ color: theme.colors.primary }}>
            ThemeHub
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${theme.fonts.bodyWeight}`}
          style={{ 
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.secondary,
          }}
        >
          We're a passionate team dedicated to creating beautiful, accessible, and performant web experiences. 
          Our mission is to demonstrate the power of thoughtful design systems and dynamic theming.
        </p>
      </section>

      {/* Story Section */}
      <section className={theme.spacing.xl}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className={`text-3xl ${theme.fonts.headingWeight} mb-6`}
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.primary,
              }}
            >
              Our Story
            </h2>
            
            <p 
              className={`text-lg mb-6 leading-relaxed ${theme.fonts.bodyWeight}`}
              style={{ 
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.secondary,
              }}
            >
              ThemeHub was born from a simple idea: what if users could completely transform 
              the look and feel of a web application with just a click? We wanted to showcase 
              how modern web technologies can create seamless, delightful user experiences.
            </p>
            
            <p 
              className={`text-lg leading-relaxed ${theme.fonts.bodyWeight}`}
              style={{ 
                color: theme.colors.textSecondary,
                fontFamily: theme.fonts.secondary,
              }}
            >
              Today, ThemeHub serves as both a demonstration of technical excellence and a 
              testament to the importance of user-centered design. Every theme tells a different 
              story and caters to different preferences and use cases.
            </p>
          </div>
          
          <div className="relative">
            <div 
              className={`${theme.layout.borderRadius} overflow-hidden ${theme.layout.shadow}`}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={theme.spacing.xl}>
        <h2 
          className={`text-3xl ${theme.fonts.headingWeight} text-center mb-12`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${theme.spacing.lg} ${theme.layout.borderRadius} border transition-all duration-300 hover:scale-105`}
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              }}
            >
              <div 
                className={`inline-flex items-center justify-center w-16 h-16 ${theme.layout.borderRadius} mb-4`}
                style={{ backgroundColor: theme.colors.primary }}
              >
                <span style={{ color: theme.colors.background }}>
                  {value.icon}
                </span>
              </div>
              
              <h3 
                className={`text-xl ${theme.fonts.headingWeight} mb-3`}
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.primary,
                }}
              >
                {value.title}
              </h3>
              
              <p 
                className={`leading-relaxed ${theme.fonts.bodyWeight}`}
                style={{ 
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.secondary,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={theme.spacing.xl}>
        <h2 
          className={`text-3xl ${theme.fonts.headingWeight} text-center mb-12`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center ${theme.spacing.lg} ${theme.layout.borderRadius} border transition-all duration-300 hover:scale-105`}
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              }}
            >
              <div className="mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              
              <h3 
                className={`text-xl ${theme.fonts.headingWeight} mb-2`}
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.primary,
                }}
              >
                {member.name}
              </h3>
              
              <p 
                className={`mb-3 ${theme.fonts.bodyWeight}`}
                style={{ color: theme.colors.primary }}
              >
                {member.role}
              </p>
              
              <p 
                className={`leading-relaxed ${theme.fonts.bodyWeight}`}
                style={{ 
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.secondary,
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};