import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MapPin } from 'lucide-react';

const HeroCover = ({ onGetStarted }) => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-300" />
          <span className="text-white/90">Introducing Nearbuy Pick</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Order on the way. Pick up at your stop.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Pre‑order from convenience stores and hotels along your bus route. Pay online, grab it when you arrive.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <MapPin className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Get started
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
