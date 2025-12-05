import JoinForm from "@/components/JoinForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join SWAPO | Membership Portal",
  description: "Become a member of the SWAPO Party of Namibia today.",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-neutral-100 pb-20">
      
      {/* Header Banner */}
      <div className="bg-swapo-blue text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern (Optional CSS decoration) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-swapo-red/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-swapo-red font-bold tracking-widest uppercase text-sm bg-white px-3 py-1 rounded-full mb-4 inline-block">
            Membership Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Join the Movement
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Become a registered member of SWAPO today. Secure your digital membership card and help shape the future of Namibia.
          </p>
        </div>
      </div>

      {/* Main Content Area - Form is pulled up slightly over the banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <JoinForm />
      </div>

    </div>
  );
}