'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Search, ArrowRight, ShieldCheck, Zap, Users, Building, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-darkNavy/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              H
            </div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HireHub
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link href="/jobs" className="hover:text-primary transition">Find Jobs</Link>
            <Link href="/companies" className="hover:text-primary transition">Companies</Link>
            <Link href="/pricing" className="hover:text-primary transition">Pricing</Link>
            <Link href="/about" className="hover:text-primary transition">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 text-sm font-semibold text-secondary dark:text-white hover:text-primary transition">
              Sign In
            </Link>
            <Link href="/register" className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Recruitment Platform</span>
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-none mb-6">
              Connecting Talent with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Opportunity</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              Discover verified roles, evaluate with AI insights, and accelerate your career or hiring workflow instantly.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <Search className="w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Job Title or Keyword" className="bg-transparent w-full text-sm outline-none" />
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <Globe className="w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Location" className="bg-transparent w-full text-sm outline-none" />
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <select className="bg-transparent w-full text-sm outline-none">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>
            <button className="w-full bg-primary text-white font-semibold rounded-xl py-3 shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center justify-center space-x-2">
              <span>Search Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 py-12 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; 2026 HireHub Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/contact" className="hover:text-primary">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}