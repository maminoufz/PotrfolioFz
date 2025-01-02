export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  procedure: string;
  duration: string;
  challenge: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description: "Complete dental transformation including veneers and whitening",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    procedure: "Porcelain Veneers & Teeth Whitening",
    duration: "3 weeks",
    challenge: "Patient had severe discoloration and misaligned teeth affecting their confidence.",
    solution: "Custom-designed porcelain veneers combined with professional whitening treatment.",
    result: "Achieved natural-looking, perfectly aligned bright smile with improved confidence."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Full mouth rehabilitation with dental implants",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    procedure: "Full Mouth Dental Implants",
    duration: "6 months",
    challenge: "Multiple missing teeth affecting eating ability and facial structure.",
    solution: "Strategic placement of dental implants with custom-made crowns.",
    result: "Restored full functionality and natural appearance of teeth."
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Invisible braces treatment for perfect alignment",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    procedure: "Clear Aligners Treatment",
    duration: "18 months",
    challenge: "Severe crowding and bite misalignment affecting smile aesthetics.",
    solution: "Custom clear aligners with regular adjustments and monitoring.",
    result: "Perfectly aligned teeth with improved bite function."
  }
];