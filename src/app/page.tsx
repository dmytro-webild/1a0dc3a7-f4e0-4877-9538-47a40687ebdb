"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, Car, CheckCircle, Phone, Sparkles, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumLarge"
      background="floatingGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Zénith Auto"
          navItems={[
            { name: "Véhicules", id: "vehicles" },
            { name: "Pourquoi nous", id: "why-us" },
            { name: "Avis clients", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "📞 Appeler maintenant", href: "tel:0782205551" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Votre prochaine voiture vous attend chez Zénith Auto"
          description="Véhicules sélectionnés avec soin, transparence totale et accompagnement personnalisé. Retrouvez notre sélection de voitures fiables à des prix compétitifs."
          tag="Bienvenue chez Zénith Auto"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "📞 Appeler maintenant", href: "tel:0782205551" },
            { text: "🚗 Voir les véhicules", href: "#vehicles" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-making-desicion-buy-car_1303-13873.jpg?_wi=1", imageAlt: "Showroom Zénith Auto moderne et accueillant" }
          ]}
          mediaAnimation="opacity"
          background={{ variant: "animated-grid" }}
          ariaLabel="Zénith Auto hero section - Voitures fiables Seine-et-Marne"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardSix
          title="⭐ 4.6/5 sur Google - 37 avis clients"
          description="Nos clients nous font confiance pour la qualité de nos véhicules et notre service professionnel."
          tag="Recommandé par nos clients"
          tagIcon={Award}
          tagAnimation="slide-up"
          testimonials={[
            { id: "1", name: "Sarah Johnson", handle: "Client vérifié", testimonial: "Accueil professionnel, équipe à l'écoute et de bon conseil du début à la fin. J'ai trouvé ma voiture de rêve!", imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3797.jpg", imageAlt: "Sarah Johnson" },
            { id: "2", name: "Michel Chen", handle: "Client vérifié", testimonial: "Véhicule conforme à la description, état irréprochable et bon prix. Recommande vivement!", imageSrc: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg", imageAlt: "Michel Chen" },
            { id: "3", name: "Emily Rodriguez", handle: "Client vérifié", testimonial: "Processus transparent et sans pression. L'équipe prend vraiment le temps de comprendre vos besoins.", imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-posing-with-crossed-arms_176420-1149.jpg", imageAlt: "Emily Rodriguez" },
            { id: "4", name: "David Kim", handle: "Client vérifié", testimonial: "Excellente expérience d'achat. Service après-vente impeccable et équipe très réactive.", imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6777.jpg", imageAlt: "David Kim" },
            { id: "5", name: "Marc Dupont", handle: "Client vérifié", testimonial: "Sélection de véhicules de qualité. Vraiment satisfait de mon achat. À recommander!", imageSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-9483.jpg", imageAlt: "Marc Dupont" },
            { id: "6", name: "Julie Martin", handle: "Client vérifié", testimonial: "Très bon accueil, équipe compétente et honnête. J'y retournerai pour mon prochain achat.", imageSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg", imageAlt: "Julie Martin" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Avis clients Zénith Auto - Témoignages Google"
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardOne
          title="🚗 Nos véhicules sélectionnés"
          description="Découvrez notre sélection de voitures fiables, vérifiées et proposées aux meilleurs prix."
          tag="Véhicules disponibles"
          tagIcon={Car}
          tagAnimation="slide-up"
          buttons={[
            { text: "📞 Demander des infos", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          products={[
            { id: "audi-a3-001", name: "Audi A3", price: "18 500 €", imageSrc: "http://img.b2bpic.net/free-photo/grey-coupe-rainy-highway-motion-focus_169016-69693.jpg", imageAlt: "Audi A3 - Véhicule occasion premium" },
            { id: "golf-8-001", name: "Volkswagen Golf 8", price: "22 000 €", imageSrc: "http://img.b2bpic.net/free-photo/blue-suv-driving-wet-road-rain-modern-car-rainy-highway_169016-70041.jpg", imageAlt: "Volkswagen Golf 8 - Véhicule moderne" },
            { id: "golf-gte-001", name: "Volkswagen Golf 8 GTE", price: "28 500 €", imageSrc: "http://img.b2bpic.net/free-photo/picture-cheerful-young-woman-wearing-sunglasses-raised-hands-sunroof-luxury-car_231208-6907.jpg", imageAlt: "Volkswagen Golf 8 GTE - Hybrid premium" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          ariaLabel="Catalogue de véhicules Zénith Auto"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardTwentyOne
          title="Pourquoi choisir Zénith Auto?"
          description="Nous mettons la confiance et la transparence au cœur de notre service pour garantir votre satisfaction."
          tag="Notre différence"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "📝 Demander une visite", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          accordionItems={[
            { id: "1", title: "✔ Véhicules sélectionnés avec soin", content: "Chaque véhicule est inspecté rigoureusement pour garantir qualité et fiabilité. Nous vous proposons uniquement des voitures en excellent état mécanique et esthétique." },
            { id: "2", title: "✔ Prix compétitifs", content: "Nos prix sont transparents et justes. Pas de frais cachés. Vous savez exactement ce que vous payez et pourquoi." },
            { id: "3", title: "✔ Accompagnement avant et après achat", content: "Notre équipe vous conseille avant l'achat et reste disponible après. Service client réactif et professionnel." },
            { id: "4", title: "✔ Processus simple et transparent", content: "De la visite à la livraison, chaque étape est claire et sans surprise. Vous êtes impliqué dans chaque décision." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/woman-making-desicion-buy-car_1303-13873.jpg?_wi=2"
          imageAlt="Zénith Auto - Équipe professionnelle et accueillante"
          mediaAnimation="opacity"
          useInvertedBackground={true}
          mediaPosition="right"
          ariaLabel="Avantages Zénith Auto - Qualité et transparence"
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardTen
          title="Notre processus d'achat"
          description="Trois étapes simples pour trouver votre prochaine voiture."
          tag="Processus rapide"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "📞 Commencer maintenant", href: "tel:0782205551" }
          ]}
          buttonAnimation="slide-up"
          metrics={[
            { id: "step-1", title: "Parcourez notre sélection", subtitle: "Découvrez nos véhicules disponibles", category: "Étape 1", value: "30+ véhicules" },
            { id: "step-2", title: "Contactez-nous pour une visite", subtitle: "Prenez rendez-vous ou visitez sans engagement", category: "Étape 2", value: "Visite libre" },
            { id: "step-3", title: "Repartez avec votre voiture", subtitle: "Processus simple et documentation complète", category: "Étape 3", value: "Rapide" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          ariaLabel="Processus d'achat Zénith Auto - 3 étapes"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Un véhicule vous intéresse?"
          ctaDescription="Contactez-nous maintenant pour une visite gratuite, un test drive ou pour demander des informations spécifiques."
          ctaButton={{ text: "📞 Appeler: 07 82 20 55 51", href: "tel:0782205551" }}
          ctaIcon={Phone}
          animationType="slide-up"
          useInvertedBackground={true}
          faqs={[
            { id: "1", title: "Comment puis-je visiter le showroom?", content: "Vous pouvez nous appeler au 07 82 20 55 51 pour prendre rendez-vous ou simplement passer à notre adresse: 37 Ter Rue de la Picardie, 77580 Villiers-sur-Morin. Nous vous accueillerons chaleureusement!" },
            { id: "2", title: "Faites-vous reprendre les véhicules d'occasion?", content: "Oui! Nous reprenons les véhicules d'occasion dans le cadre d'un échange ou d'une vente. N'hésitez pas à nous contacter pour discuter de votre véhicule." },
            { id: "3", title: "Proposez-vous des facilités de paiement?", content: "Oui, nous travaillons avec des partenaires de financement pour vous proposer les meilleures conditions. Contactez-nous pour discuter de vos options." },
            { id: "4", title: "Quelle est votre garantie?", content: "Tous nos véhicules sont vendus en bon état mécanique. Nous proposons des garanties selon les conditions de chaque véhicule. Demandez les détails lors de votre visite." }
          ]}
          accordionAnimationType="smooth"
          showCard={true}
          ariaLabel="Contact et FAQ Zénith Auto"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="Zénith Auto"
          imageSrc="http://img.b2bpic.net/free-photo/woman-making-desicion-buy-car_1303-13873.jpg?_wi=3"
          imageAlt="Zénith Auto - Concessionnaire automobile professionnel"
          columns={[
            {
              title: "Contact",              items: [
                { label: "📞 Téléphone: 07 82 20 55 51", href: "tel:0782205551" },
                { label: "📍 Adresse: 37 Ter Rue de la Picardie, 77580 Villiers-sur-Morin", href: "#" },
                { label: "🌐 Seine-et-Marne", href: "#" }
              ]
            },
            {
              title: "Navigation",              items: [
                { label: "Nos véhicules", href: "#vehicles" },
                { label: "Avis clients", href: "#reviews" },
                { label: "Pourquoi nous", href: "#why-us" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Légal",              items: [
                { label: "Mentions légales", href: "#" },
                { label: "Politique de confidentialité", href: "#" },
                { label: "Conditions générales", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Zénith Auto | Concessionnaire automobile - Villiers-sur-Morin (77)"
          ariaLabel="Pied de page Zénith Auto"
        />
      </div>
    </ThemeProvider>
  );
}
