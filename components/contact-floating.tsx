import React from 'react'
import { Phone } from 'lucide-react'

export default function ContactFloating() {
  return (
		<a
			href="https://wa.me/6285921111881"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white text-[#25D366] border border-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer z-50"
			aria-label="Hubungi via WhatsApp"
		>
			<Phone className="w-6 h-6 md:w-7 md:h-7" />
		</a>
  );
}