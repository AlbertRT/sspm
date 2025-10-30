import { Button } from '@heroui/button';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
		<div className="w-full h-20 flex items-center px-[156px] sticky top-0 bg-white shadow-md z-50">
			<Link href={"/"}>
				<h1 className="text-2xl font-bold">SSPM</h1>
			</Link>
			<div className="ml-10 flex-9/12">
				<ul className="flex items-center">
					<li>
						<Link
							href="/#wecome-message"
							className="relative mx-4 text-sm font-medium text-gray-800 hover:text-blue-900 transition-colors 
               before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 
               hover:before:w-full"
						>
							Welcome Message
						</Link>
					</li>
					<li>
						<Link
							href="/#vission-mission"
							className="relative mx-4 text-sm font-medium text-gray-800 hover:text-blue-900 transition-colors 
               before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 
               hover:before:w-full"
						>
							Visi & Misi
						</Link>
					</li>
					<li>
						<Link
							href="/#why-us"
							className="relative mx-4 text-sm font-medium text-gray-800 hover:text-blue-900 transition-colors 
               before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 
               hover:before:w-full"
						>
							Mengapa Kita
						</Link>
					</li>
					<li>
						<Link
							href="/#services"
							className="relative mx-4 text-sm font-medium text-gray-800 hover:text-blue-900 transition-colors 
               before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 
               hover:before:w-full"
						>
							Layanan Kami
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<Button
					variant="bordered"
					color="primary"
					radius="sm"
					size="md"
					as={Link}
					href="https://wa.me/+62085921111881"
					target="_blank"
					rel="noopener noreferrer"
				>
					Konsultasi Sekarang
				</Button>
			</div>
		</div>
  );
}
