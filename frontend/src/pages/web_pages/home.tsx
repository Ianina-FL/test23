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
  AboutUsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Seamless Department Integration',
      description:
        'Connect sales, customer service, and marketing departments effortlessly. Ensure smooth communication and data sharing across your law firm.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Advanced Lead Tracking',
      description:
        'Monitor lead statuses, categories, and ownership with precision. Stay informed and make data-driven decisions to boost client acquisition.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Comprehensive Case Management',
      description:
        'Organize case files, manage documents, and track legal tasks efficiently. Empower your team to deliver exceptional legal services.',
      icon: 'mdiFileDocumentOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our workflow. The seamless integration between departments has saved us countless hours and improved our client interactions.',
      company: 'Lexis Solutions',
      user_name: 'John Doe, Managing Partner',
    },
    {
      text: 'The lead tracking feature is a game-changer. We can now monitor and manage our leads with ease, leading to increased client acquisition.',
      company: 'Legal Innovators',
      user_name: 'Jane Smith, Head of Marketing',
    },
    {
      text: 'Our team collaboration has never been better. ${projectName} has made it easy to share information and keep everyone on the same page.',
      company: 'Justice League Law Firm',
      user_name: 'Michael Brown, Senior Paralegal',
    },
    {
      text: "The case management tools are intuitive and efficient. We've seen a significant improvement in our case handling and client satisfaction.",
      company: 'Advocate Associates',
      user_name: 'Emily White, Lead Attorney',
    },
    {
      text: 'I love how user-friendly ${projectName} is. It has streamlined our processes and made our team more productive.',
      company: 'Barrister \u0026 Co.',
      user_name: 'David Green, Customer Service Manager',
    },
    {
      text: 'The insights and analytics provided by ${projectName} have been invaluable. We can now make informed decisions to drive our business forward.',
      company: 'Legal Pioneers',
      user_name: 'Sarah Johnson, Business Analyst',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Law Industry CRM - Connect, Organize, and Manage`}</title>
        <meta
          name='description'
          content={`Discover our CRM solution tailored for the law industry, connecting departments and streamlining lead management. Enhance your firm's efficiency with our comprehensive features.`}
        />
      </Head>
      <WebSiteHeader projectName={'test23'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test23'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Law Firm's Efficiency`}
          subTitle={`Connect departments seamlessly with ${projectName}. Streamline lead management and enhance collaboration for unparalleled legal service delivery.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test23'}
          image={['Dashboard showcasing CRM features']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Enhance your law firm's operations with ${projectName}. Streamline processes, improve collaboration, and manage leads effectively.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test23'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <AboutUsSection
          projectName={'test23'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing the legal industry by providing a comprehensive CRM solution. Our mission is to enhance collaboration, streamline processes, and drive efficiency for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <ContactFormSection
          projectName={'test23'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team is ready to assist you with any inquiries or support you need. Expect a prompt response from our dedicated team.`}
        />
      </main>
      <WebSiteFooter projectName={'test23'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
