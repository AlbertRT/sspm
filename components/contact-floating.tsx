import React from 'react'
import { Phone } from 'lucide-react'

export default function ContactFloating() {
  return (
		<div className="fixed right-20 bottom-20 bg-white text-[#25D366] border border-[#25D366] hover:bg-[#25D366] hover:text-white p-4 rounded-full shadow-lg cursor-pointer transition-colors">
			<Phone />
		</div>
  );
}