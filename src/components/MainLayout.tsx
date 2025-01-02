import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Fezzani. Dentel.</p>
          <p>&copy; Devloper Maminoufz2003@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}