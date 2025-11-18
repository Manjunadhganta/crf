import { MoveUpRight } from "lucide-react";

const services = [
  {
    title: "Pre-Property Registration",
    subtitle: "Sale deeds, agreements, GPA, SPA, Gift deeds etc.",
    img: "/pre-property-registration.jpg",
    link: "/services/pre-property"
  },
  {
    title: "Legal Documentation",
    subtitle: "Lease deeds, rental agreements, mortgage & release deeds.",
    img: "/legal-documentation.jpg",
    link: "/services/legal-documents"
  },
  {
    title: "Registration Processing",
    subtitle: "Slot booking, challan payments, TDS filing, presentation.",
    img: "/registration-processing.jpg",
    link: "/services/registration-process"
  },
  {
    title: "Post Registration Services",
    subtitle: "Property tax, EC, CC, water, sewerage & electricity transfers.",
    img: "/post-registration-services.jpg",
    link: "/services/post-registration"
  },
  {
    title: "Approvals & Permissions",
    subtitle: "Building permits, survey number verification & compliance.",
    img: "/approvals-permissions.jpg",
    link: "/services/approvals"
  },
  {
    title: "Personal Legal Support",
    subtitle: "Affidavits, marriage records, legal heir & name change.",
    img: "/personal-legal-support.jpg",
    link: "/services/personal"
  },
  {
    title: "Organization Registrations",
    subtitle: "Trusts, societies, firms & chit fund registrations.",
    img: "/organization-registrations.jpg",
    link: "/services/organizations"
  },
  {
    title: "Loan Facilitation",
    subtitle: "Bank proposals and document processing.",
    img: "/loan-facilitation.jpg",
    link: "/services/loan"
  },
  {
    title: "NRI Exclusive Services",
    subtitle: "Property verification, registration & documentation support.",
    img: "/nri-exclusive.jpg",
    link: "/services/nri"
  }
];

export default function Services() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      * { font-family: 'Poppins', sans-serif; }
    `}</style>

      <h1 className="text-5xl font-semibold text-center mx-auto">Our Services</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Trusted documentation, legal registration and advisory services for individuals, organizations, and NRIs.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => window.location.href = service.link}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-90 hover:-translate-y-0.5 transition duration-300 cursor-pointer"
          >
            <img className="rounded-xl" src={service.img} alt={service.title} />
            <h3 className="text-base text-slate-900 font-medium mt-3">{service.title}</h3>
            <p className="text-xs text-slate-700 font-medium mt-1">{service.subtitle}</p>
            <p className="text-[11px] text-indigo-600 font-semibold mt-2 underline flex items-center">Link <MoveUpRight className="size-3"/></p>
          </div>
        ))}
      </div>
    </>
  );
}
