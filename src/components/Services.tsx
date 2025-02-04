'use client';

import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import {
  FaTools,
  FaPaintRoller,
  FaHammer,
  FaHardHat,
  FaBrush,
  FaHome,
  FaCouch,
  FaWindowMaximize,
} from 'react-icons/fa';

const services = [
  {
    title: 'Basement Renovations',
    description:
      'Transform your basement into a functional and stylish living space, adding value and comfort to your home.',
    icon: <FaTools size={45} />,
  },
  {
    title: 'Custom Designs',
    description:
      'Bring your vision to life with personalized design solutions tailored to your unique style and needs.',
    icon: <FaPaintRoller size={45} />,
  },
  {
    title: 'Kitchen Renovations',
    description:
      'Create your dream kitchen with modern designs, premium materials, and expert craftsmanship.',
    icon: <FaCouch size={45} />,
  },
  {
    title: 'Bathroom Renovations',
    description:
      'Transform your bathroom into a luxurious spa-like retreat with our expert renovation services.',
    icon: <FaWindowMaximize size={45} />,
  },
  {
    title: 'Flooring Installation',
    description:
      'Enhance your space with premium flooring options expertly installed for durability and beauty.',
    icon: <FaHammer size={45} />,
  },
  {
    title: 'Framing & Structural Work',
    description:
      'Build a solid foundation with our precise framing and structural services for lasting integrity.',
    icon: <FaHardHat size={45} />,
  },
  {
    title: 'Interior & Exterior Painting',
    description:
      'Refresh your property with high-quality painting services that rejuvenate and protect.',
    icon: <FaBrush size={45} />,
  },
  {
    title: 'Home Improvements',
    description:
      'Enhance your living space with custom improvements and upgrades that add value to your home.',
    icon: <FaHome size={45} />,
  },
];

function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Expert renovation solutions tailored to transform your space"
        image="/images/in.png"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;