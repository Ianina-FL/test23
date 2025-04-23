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
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test233';

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
      name: 'Client Relationship Management',
      description:
        'Manage client interactions and data efficiently. Enhance client satisfaction and retention with personalized service and streamlined communication.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Document Automation',
      description:
        'Automate document creation and management. Save time and reduce errors with templates and easy access to all your legal documents.',
      icon: 'mdiFileDocument',
    },
    {
      name: 'Analytics and Reporting',
      description:
        "Gain insights into your firm's performance with comprehensive analytics. Make informed decisions with detailed reports and data visualization.",
      icon: 'mdiChartBar',
    },
    {
      name: 'Secure Data Storage',
      description:
        'Keep your sensitive information safe with robust security measures. Ensure compliance and protect client confidentiality with encrypted data storage.',
      icon: 'mdiLock',
    },
    {
      name: 'Task and Workflow Automation',
      description:
        'Automate repetitive tasks and streamline workflows. Increase productivity and focus on high-value activities with efficient task management.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'Customizable User Interface',
      description:
        'Tailor the interface to suit your needs. Enhance user experience with customizable dashboards and intuitive navigation.',
      icon: 'mdiMonitor',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has streamlined our operations and improved client satisfaction. The intuitive interface and powerful features are unmatched.',
      company: 'Legal Visionaries',
      user_name: 'Anna Thompson, Managing Partner',
    },
    {
      text: 'The document automation feature has saved us countless hours. ${projectName} is an essential tool for our firm.',
      company: 'Justice League Law',
      user_name: 'Mark Davis, Senior Attorney',
    },
    {
      text: "Our team collaboration has improved significantly since adopting ${projectName}. It's a game-changer for our daily operations.",
      company: 'Advocate Solutions',
      user_name: 'Lisa Brown, Operations Manager',
    },
    {
      text: 'The analytics and reporting tools provide invaluable insights. We can now make data-driven decisions with confidence.',
      company: 'Barrister Partners',
      user_name: 'James Wilson, Business Analyst',
    },
    {
      text: 'The secure data storage gives us peace of mind. We trust ${projectName} to keep our sensitive information safe.',
      company: 'LawTech Innovators',
      user_name: 'Emily White, IT Director',
    },
    {
      text: 'The customizable interface allows us to tailor the system to our needs. ${projectName} enhances our productivity and efficiency.',
      company: 'Legal Pioneers',
      user_name: 'David Green, Project Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the range of services offered by ${projectName} to enhance your law firm's operations. Discover how our innovative solutions can streamline your processes and improve efficiency.`}
        />
      </Head>
      <WebSiteHeader projectName={'test233'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test233'}
          image={['Law firm team in discussion']}
          mainText={`Transform Your Legal Services with ${projectName}`}
          subTitle={`Discover how ${projectName} can revolutionize your law firm's operations. Our tailored services are designed to enhance efficiency, streamline processes, and drive success.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'test233'}
          image={['Features displayed on a screen']}
          withBg={0}
          features={features_points}
          mainText={`Unleash the Power of ${projectName}`}
          subTitle={`Explore the innovative features of ${projectName} designed to elevate your law firm's efficiency and productivity.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'test233'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test233'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
