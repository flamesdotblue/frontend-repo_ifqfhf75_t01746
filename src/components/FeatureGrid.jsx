import React from 'react';
import { CreditCard, Bell, ShieldCheck, Truck, User } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Route-aware discovery',
    desc: 'Find stores and hotels along your exact travel route with ETA and distance.',
  },
  {
    icon: CreditCard,
    title: 'Secure payments',
    desc: 'Pay in advance with Stripe test mode, skip the queue when you arrive.',
  },
  {
    icon: Bell,
    title: 'Live notifications',
    desc: 'Get alerts when your order is ready and when your bus nears the stop.',
  },
  {
    icon: ShieldCheck,
    title: 'Protected accounts',
    desc: 'JWT-based authentication keeps your profile and orders secure.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="how-it-works" className="py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">How Nearbuy Pick works</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
              Create an account, enter your bus route, choose a store, and pre-order. We’ll keep you updated until you pick it up.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> Traveler & Store portals</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
