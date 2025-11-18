import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="bg-[url('/gridBackground.webp')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
      <Navbar />
      <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-25">
        <span>Your Legal Work — Sorted.</span>
        <button className="flex items-center gap-1 font-medium">
          <span>Read more</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <h5 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-5 tracking-tighter">
        Property & Personal Registrations Made Easy.
      </h5>

      <p className="text-sm md:text-base mx-auto max-w-3xl text-center mt-8 max-md:px-2">
        We assist individuals, businesses, and NRIs with documentation, drafting, registration, government approvals, and post-registration services — all through a guided and transparent digital process.
      </p>

      <div className="mx-auto w-full flex items-center justify-center gap-3 mt-6">
        <button className="bg-slate-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition">
          Get Started
        </button>
        <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3">
          <span>Learn More</span>
          <ArrowRight size={10} />
        </button>
      </div>
    </section>
  );
}
