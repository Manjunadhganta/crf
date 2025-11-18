import { ArrowRight } from "lucide-react";
import ImageSection from "./ImageSection";

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section id="about us" className="flex flex-col items-center justify-center gap-10 max-md:px-4 py-16">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-slate-700 uppercase text-center">
          About Us
        </h1>

        {/* Image Section */}
        <ImageSection />

        {/* Content */}
        <div className="text-md text-slate-800 max-w-3xl leading-relaxed space-y-4">
          <p>
            This organization was established to serve the public by assisting
            with documentation, society and firm registrations, marriage
            registrations, and related legal processes across India—especially
            in Andhra Pradesh and Telangana. Our objective is to offer accurate,
            updated, and relevant information through this platform, while also
            extending dedicated support to NRIs through email and other
            communication channels.
          </p>

          <p>
            Our team consists of experienced professionals, including retired
            civil servants from revenue and registration departments, along with
            legal experts well-versed in applicable laws.
          </p>

          <p>
            We are committed to providing reliable, transparent, and
            high-quality services to everyone who seeks our assistance.
          </p>
          <div className="flex justify-center">
            <button
                className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-slate-800 hover:bg-black py-3 px-8 rounded-full text-white">
                    <span>Read more</span>
                    <ArrowRight />
            </button>
          </div>
        </div>


      </section>
    </>
  );
}
