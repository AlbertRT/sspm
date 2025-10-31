import Footer from "@/components/footer";
import HeroImmersive from "@/components/hero";
import Services from "@/components/services";
import VisiMisi from "@/components/visi-misi";
import WelcomeMessage from "@/components/welcome_message";
import WhyUS from "@/components/why_us";

export default function Home() {

	return (
		<main className="flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
			<HeroImmersive />

			{/* ===== WELCOME MESSAGE ===== */}
			<WelcomeMessage />
			{/* ===== VISION & MISSION ===== */}
			<VisiMisi />

			{/* ===== WHY US ===== */}
            <WhyUS />

			{/* ===== SERVICES (RINGKAS) ===== */}
			<Services />

			{/* ===== CONTACT ===== */}
			<Footer />
		</main>
	);
}
