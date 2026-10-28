import React from 'react';
import { AccountOpenButton } from '@/components/AccountOpenButton';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
      <AccountOpenButton />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">About Equitymine Financial Services</h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
            Helping individuals and families make informed decisions about their financial future in Mansa, Punjab.
          </p>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-16 px-6 sm:px-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Who We Are</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Equitymine Financial Services Pvt. Ltd. provides services across Mutual Funds, SIPs, Insurance, Demat Account Services, and other financial products, with a strong focus on long-term financial planning and investor awareness.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our approach is simple — understand the client&apos;s financial goals, risk profile, and investment horizon, and then help them choose suitable financial solutions. We believe that investing is not just about returns — it is about creating a disciplined financial journey towards important life goals such as wealth creation, children&apos;s education, retirement planning, and financial security.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-600 rounded-t-2xl"></div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Philosophy</h3>
          <blockquote className="text-xl italic font-medium text-slate-800 mb-6 border-l-4 border-brand-500 pl-4">
            “We’ll Give You An Edge.”
          </blockquote>
          <p className="text-slate-600 mb-4">
            We aim to give our clients an edge through financial awareness, disciplined investing, and goal-oriented planning.
          </p>
          <p className="text-slate-600">
            Our mission is to make financial planning simple, transparent, and accessible for every investor — whether they are starting their first SIP or building a long-term investment portfolio.
          </p>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-white py-16 px-6 sm:px-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="bg-slate-100 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-32 h-32 bg-brand-100 rounded-full mx-auto mb-6 flex items-center justify-center text-brand-700 text-4xl font-bold">
                  JS
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Jitender Singh</h3>
                <p className="text-brand-600 font-semibold mt-2">Founder & Financial Services Professional</p>
                <p className="text-sm text-slate-500 mt-1">Equitymine Financial Services Pvt. Ltd.</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Meet the Founder</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Jitender Singh is the Founder of Equitymine Financial Services Pvt. Ltd., a financial services firm dedicated to helping individuals and families make more informed and disciplined financial decisions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                With a strong focus on Mutual Funds, SIP-based investing, Insurance, and financial planning, his vision is to make financial products easier to understand and help investors connect their investments with their long-term financial goals.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Equitymine, Jitender believes that successful investing is not about chasing short-term returns. It is about discipline, consistency, proper financial planning, and staying invested with a clear objective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">His Vision</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The vision behind Equitymine is to bridge the gap between financial products and financial understanding — helping investors make decisions with greater clarity and confidence.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether the objective is wealth creation, children&apos;s education, retirement planning, financial protection, or building a long-term investment portfolio, Equitymine aims to provide a structured approach tailored to the investor&apos;s goals and risk profile.
            </p>
          </div>
          <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-lg border border-brand-800">
            <h3 className="text-2xl font-bold mb-6 text-white">What We Stand For</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-brand-800 text-brand-100 border border-brand-700 px-4 py-2 rounded-full font-medium">Clarity</span>
              <span className="bg-brand-800 text-brand-100 border border-brand-700 px-4 py-2 rounded-full font-medium">Discipline</span>
              <span className="bg-brand-800 text-brand-100 border border-brand-700 px-4 py-2 rounded-full font-medium">Trust</span>
              <span className="bg-brand-800 text-brand-100 border border-brand-700 px-4 py-2 rounded-full font-medium">Long-Term Thinking</span>
            </div>
            <p className="text-brand-100 leading-relaxed">
              Jitender&apos;s goal is to build long-lasting relationships with clients by focusing on investor education, transparent communication, and goal-oriented financial solutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
