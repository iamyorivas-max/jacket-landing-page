
// Import React to provide access to the React namespace for type definitions like React.ReactNode
import React from 'react';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}