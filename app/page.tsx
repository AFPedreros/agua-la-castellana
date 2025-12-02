"use client";

import { MessageCircle } from "lucide-react";

export default function ComingSoon() {
	const whatsappNumber = "3116099843";
	const whatsappMessage =
		"Hola! Tengo una consulta sobre los productos y servicios de Agua La Castellana.";

	return (
		<div className="h-screen overflow-hidden">
			<div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20">
				{/* Header with logo area */}
				<div className="text-center mb-8 animate-fade-in">
					<h1 className="text-5xl md:text-6xl text-[#145491] font-bold mb-3 tracking-tight">
						Agua La Castellana
					</h1>
				</div>

				{/* Main content */}
				<div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Estamos en construcción
					</h2>
					<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
						Estamos trabajando duro para traerte la mejor experiencia. Pronto
						podrás descubrir nuestros productos.
					</p>

					{/* Progress indicator */}
					<div className="mb-12">
						<div className="inline-flex items-center gap-8">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 rounded-full bg-[#145491] text-primary-foreground flex items-center justify-center font-bold mb-2">
									✓
								</div>
								<p className="text-sm font-medium text-muted-foreground">
									Diseño
								</p>
							</div>
							<div className="hidden sm:block w-12 h-0.5 bg-linear-to-r from-primary to-accent" />
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 rounded-full bg-[#145491]/50 text-primary-foreground flex items-center justify-center font-bold mb-2 animate-pulse">
									⚙
								</div>
								<p className="text-sm font-medium text-muted-foreground">
									Desarrollo
								</p>
							</div>
							<div className="hidden sm:block w-12 h-0.5 bg-linear-to-r from-primary/50 to-accent/50" />
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-2">
									🚀
								</div>
								<p className="text-sm font-medium text-muted-foreground">
									Lanzamiento
								</p>
							</div>
						</div>
					</div>

					<a
						href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
							whatsappMessage
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
					>
						<MessageCircle className="w-5 h-5" />
						Contáctanos por WhatsApp
					</a>
				</div>

				{/* Social links */}
				<div className="mt-16 flex gap-4">
					<a
						href="https://www.instagram.com/agualacastellanaco"
						className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-[#145491] transition-colors"
						aria-label="Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
					</a>
				</div>
				{/* Footer */}
				<div className="text-center absolute left-0 bottom-0 w-full text-muted-foreground text-sm">
					<p>&copy; 2025 Agua La Castellana. Todos los derechos reservados.</p>
				</div>
			</div>

			{/* Animation styles */}
			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fadeIn 0.6s ease-out;
				}

				.animate-fade-in-up {
					animation: fadeInUp 0.6s ease-out 0.2s both;
				}
			`}</style>
		</div>
	);
}
