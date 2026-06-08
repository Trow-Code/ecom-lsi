"use client";
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "919000000000"; // Placeholder premium contact
  const message = encodeURIComponent("Hello LivingSpace, I would like to schedule a design consultation.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 sm:bottom-10 left-6 z-[70] group flex items-center justify-center"
    >
      <div className="relative w-12 h-12 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110">
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.18.7 4.21 2.01 5.89L2.87 22l4.29-1.13a9.985 9.985 0 0 0 4.84 1.25c5.5 0 9.99-4.5 9.99-10S17.5 2 12.004 2zm5.72 13.9c-.25.68-1.22 1.26-1.84 1.34-.56.07-1.28.1-3.67-.89-3.05-1.27-5.01-4.37-5.16-4.57-.15-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.16 1.02-2.43.27-.27.6-.34.8-.34.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.6.86 2.09.93 2.24.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.41-.45.55-.15.15-.31.32-.13.63.18.3 1.09 1.8 2.68 3.22 1.63 1.45 3.01 1.9 3.44 2.12.43.22.68.2.93-.09.25-.29 1.07-1.24 1.36-1.67.29-.43.58-.36.98-.22.4.14 2.53 1.2 2.97 1.41.44.22.74.33.85.52.1.2.1.99-.15 1.67z" />
        </svg>
      </div>
    </a>
  );
}
