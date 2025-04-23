import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test23';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Integrated Communication',
      description:
        'Facilitate seamless communication across departments, ensuring everyone stays informed and aligned. Enhance collaboration and reduce miscommunication.',
      icon: 'mdiMessageTextOutline',
    },
    {
      name: 'Customizable Dashboards',
      description:
        'Tailor your dashboard to display the most relevant information for your role. Stay organized and focused on what matters most.',
      icon: 'mdiViewDashboard',
    },
    {
      name: 'Automated Task Management',
      description:
        'Streamline your workflow with automated task assignments and reminders. Never miss a deadline and improve productivity.',
      icon: 'mdiCalendarCheckOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The seamless integration and user-friendly interface have significantly improved our efficiency.',
      company: 'Legal Eagles Inc.',
      user_name: 'Alice Johnson, Senior Partner',
    },
    {
      text: 'Thanks to ${projectName}, our team collaboration has reached new heights. The features are intuitive and cater perfectly to our needs.',
      company: 'Justice Advocates',
      user_name: 'Robert Smith, Head of Operations',
    },
    {
      text: 'The automated task management feature has saved us countless hours. ${projectName} is an indispensable tool for our daily operations.',
      company: 'Barrister Solutions',
      user_name: 'Emily Davis, Project Manager',
    },
    {
      text: 'We love how customizable ${projectName} is. It allows us to tailor the system to fit our unique requirements, enhancing our productivity.',
      company: 'LawTech Innovators',
      user_name: 'Michael Brown, IT Director',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Advocate Partners',
      user_name: 'Sarah Wilson, Customer Success Manager',
    },
    {
      text: 'Our client interactions have improved dramatically since adopting ${projectName}. The integrated communication tools are top-notch.',
      company: 'Legal Pioneers',
      user_name: 'David Green, Client Relations Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, and how we are transforming the legal industry with our innovative CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'test23'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test23'}
          image={['Team brainstorming in modern office']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`Explore our journey and commitment to revolutionizing the legal industry. At ${projectName}, we strive to empower law firms with cutting-edge CRM solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Our Story`}
        />

        <AboutUsSection
          projectName={'test23'}
          image={['Diverse team collaborating effectively']}
          mainText={`Our Mission at ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the legal industry with innovative CRM solutions. Our team is committed to enhancing efficiency and collaboration for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'test23'}
          image={['Features dashboard with icons']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover how ${projectName} can transform your law firm's operations with our innovative features designed for efficiency and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test23'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients `}
        />
      </main>
      <WebSiteFooter projectName={'test23'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
