import React from 'react';
import { 
  ShieldCheck, 
  Wind, 
  Thermometer, 
  Layers, 
  CloudRain, 
  Package 
} from 'lucide-react';
import { ProductImage, Benefit, Review, FAQItem } from './types.ts';

export const PRODUCT_IMAGES: ProductImage[] = [
  { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop', alt: 'TNF Reversible Jacket - Face A' },
  { url: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', alt: 'TNF Reversible Jacket - Face B' },
  { url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop', alt: 'TNF Jacket Lifestyle Wear' },
  { url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop', alt: 'TNF Jacket Close-up Detail' },
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: 'Reversible 2-in-1 Design',
    description: 'Switch looks instantly. One side sleek urban, one side rugged technical.',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Premium Insulation',
    description: 'Advanced Heatseeker™ technology keeps you warm in sub-zero conditions.',
    icon: <Thermometer className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Wind & Water Resistant',
    description: 'DWR finish and wind-blocking tech ensures you stay dry and comfortable.',
    icon: <Wind className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Perfect for Winter',
    description: 'Tested in extreme environments to guarantee performance in snow and ice.',
    icon: <CloudRain className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Built to Last',
    description: 'High-tenacity nylon ripstop ensures durability for years of use.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Free Worldwide Shipping',
    description: 'Get your jacket delivered to your doorstep at no extra cost today.',
    icon: <Package className="w-8 h-8" />,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Marcus J.',
    rating: 5,
    comment: 'Best jacket I have ever owned. The reversible feature is like getting two premium jackets for the price of one. Quality is top notch.',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Sarah L.',
    rating: 5,
    comment: 'Keeps me incredibly warm during morning commutes. The fit is perfect and it feels very high-end.',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'David K.',
    rating: 4,
    comment: 'Rugged and stylish. Used it for a weekend hike and then for a dinner in the city. Truly versatile.',
    date: '2 weeks ago',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Is the jacket truly reversible?',
    answer: 'Yes! Both sides feature functional pockets, high-quality zippers, and different aesthetic designs to match your needs.',
  },
  {
    id: 2,
    question: 'How long is delivery?',
    answer: 'Standard shipping takes 3-5 business days. We currently offer free expedited shipping for a limited time!',
  },
  {
    id: 3,
    question: 'What sizes are available?',
    answer: 'We offer sizes from S to XXL. Our sizing is true-to-fit, but we recommend checking the size guide for a perfect match.',
  },
  {
    id: 4,
    question: 'Can I pay on delivery?',
    answer: 'Depending on your location, we offer secure payment methods including Credit Card, PayPal, and Cash on Delivery in select regions.',
  },
];