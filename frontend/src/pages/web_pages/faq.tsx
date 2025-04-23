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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        "${projectName} offers a range of features including client relationship management, document automation, analytics and reporting, secure data storage, and customizable user interfaces to enhance your law firm's operations.",
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        '${projectName} employs robust security measures, including encryption and secure data storage, to protect your sensitive information and ensure compliance with industry standards.',
    },
    {
      question: 'Can I customize the dashboard in ${projectName}?',
      answer:
        'Yes, ${projectName} allows you to tailor your dashboard to display the most relevant information for your role, enhancing your productivity and focus.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'Yes, we offer a trial period for new users to explore the features and benefits of ${projectName} before committing to a subscription.',
    },
    {
      question: 'How does ${projectName} improve team collaboration?',
      answer:
        '${projectName} facilitates seamless communication across departments, ensuring everyone stays informed and aligned, which enhances collaboration and reduces miscommunication.',
    },
    {
      question: 'What kind of support does ${projectName} provide?',
      answer:
        'Our dedicated support team is available to assist you with any inquiries or technical issues. We offer email support and a comprehensive help center to ensure you have the best experience.',
    },
    {
      question: 'Can ${projectName} integrate with other software?',
      answer:
        "Yes, ${projectName} is designed to integrate with various third-party applications, allowing you to streamline your workflow and enhance your firm's efficiency.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our services, features, and how we can assist your law firm.`}
        />
      </Head>
      <WebSiteHeader projectName={'test233'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test233'}
          image={['Person reading FAQ on tablet']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. We're here to help you make the most of our services.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'test233'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test233'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
