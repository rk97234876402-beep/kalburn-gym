export const heroBgImage = "/src/assets/images/gym_hero_bg_1783144157758.jpg";
export const aboutTrainingImage = "/src/assets/images/gym_about_training_1783144174377.jpg";
export const athleticWorkoutImage = "/src/assets/images/gym_athletic_workout_1783144190717.jpg";

export interface GymDetails {
  name: string;
  phone: string;
  phoneFormatted: string;
  address: string;
  addressShort: string;
  email: string;
  googleMapsEmbed: string;
  googleMapsLink: string;
  whatsappLink: string;
}

export const gymDetails: GymDetails = {
  name: "Kalburn Gym",
  phone: "07007938199",
  phoneFormatted: "+91 70079 38199",
  address: "2nd Floor, Near Jamuna Valley School, Shams Nagar, Azad Nagar, Kareli, Prayagraj, Uttar Pradesh - 211016",
  addressShort: "Kareli, Prayagraj, Uttar Pradesh",
  email: "info@kalburngym.com",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2081702951954!2d81.8159495!3d25.4312675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ffd49a37bd30f%3A0xe54d6824907198bb!2sKalburn%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsLink: "https://maps.app.goo.gl/uRPh9v79h8Yc7u1Q6",
  whatsappLink: "https://wa.me/917007938199?text=Hi%20Kalburn%20Gym%2C%20I%20am%20interested%20in%20joining%20your%20premium%20gym.%20Please%20provide%20me%20with%20membership%20details."
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const motivationQuotes = [
  "Every workout brings you closer to the body you've always wanted.",
  "Stop wishing. Start training.",
  "Thousands dream about fitness. Few actually begin.",
  "Your future self will thank you.",
  "Strong Body. Sharp Mind. Better Life.",
  "Don't wait for Monday. Start Today.",
  "Fitness is not an expense. It's an investment."
];

export const stats = [
  { value: "1-on-1", label: "Personal Coaching Slots" },
  { value: "15+", label: "Certified Expert Coaches" },
  { value: "Custom", label: "Workout & Diet Plans" },
  { value: "Elite", label: "Trainer Guidance" }
];

export const aboutFeatures = [
  { title: "Modern Machines", desc: "Top-of-the-line strength and cardio equipment from world-class manufacturers." },
  { title: "Certified Trainers", desc: "Our elite elite coaches will guide, push, and monitor your physical evolution." },
  { title: "Friendly Environment", desc: "A positive, energetic, and ego-free atmosphere for all fitness levels." },
  { title: "Affordable Plans", desc: "Premium luxury fitness experience offered at competitive pricing structures." },
  { title: "Separate Workout Area", desc: "Spacious dedicated zones for strength, cardio, HIIT, and functional training." },
  { title: "Clean Environment", desc: "Impeccably sanitized training areas, lockers, and washrooms for absolute hygiene." }
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build raw power, density, and muscle mass with our world-class free-weights and Olympic setups.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Highly customized fat-burn programming, cardio circuits, and daily calorie targets to melt weight.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "weight-gain",
    title: "Weight Gain",
    description: "Calculated mass-gaining hyper-trophy programs integrated with clean high-calorie nutrition models.",
    iconName: "Scale",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bodybuilding",
    title: "Body Building",
    description: "Sculpt symmetry, proportions, and muscle aesthetics under the watch of competitive bodybuilders.",
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cardio",
    title: "Cardio",
    description: "Boost endurance, lung capacity, and heart health on top-of-the-line treadmills, spin bikes, and rowers.",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "functional",
    title: "Functional Training",
    description: "Improve daily physical performance, coordination, and core power through dynamic movement design.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "Get undivided individual support, customized routines, bio-feedback, and constant lifestyle coaching.",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "diet-guidance",
    title: "Diet Guidance",
    description: "Detailed calorie and macronutrient breakdowns custom-crafted to accelerate your workout outputs.",
    iconName: "Apple",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "muscle-gain",
    title: "Muscle Gain",
    description: "Targeted localized hypertrophy cycles designed to maximize lean muscle fiber recruitment.",
    iconName: "Crown",
    image: athleticWorkoutImage
  },
  {
    id: "hiit",
    title: "HIIT Workout",
    description: "Short, high-intensity anaerobic bursts designed to keep your metabolism elevated for up to 48 hours.",
    iconName: "Timer",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "womens-fitness",
    title: "Women's Fitness",
    description: "Safe, highly empowering, customized workouts tailored specifically for feminine wellness and muscle tone.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "beginner-programs",
    title: "Beginner Programs",
    description: "A gentle but structured launchpad into physical training covering form, breathing, and consistency habits.",
    iconName: "Target",
    image: aboutTrainingImage
  }
];

export const whyChooseUs = [
  {
    title: "Professional Trainers",
    desc: "Certified, state-level experts dedicated entirely to tracking your progress and perfecting your exercise form.",
    iconName: "ShieldAlert"
  },
  {
    title: "Latest Equipment",
    desc: "State-of-the-art selectorized weight machines, heavy lifting racks, and advanced digital cardio decks.",
    iconName: "Wrench"
  },
  {
    title: "Affordable Membership",
    desc: "Extremely reasonable pricing models without any compromise on the luxurious quality of the facility.",
    iconName: "CreditCard"
  },
  {
    title: "Safe Environment",
    desc: "Rigorous high-frequency sanitation, secure storage lockers, and 24/7 internal CCTV surveillance protocols.",
    iconName: "ShieldCheck"
  },
  {
    title: "Personal Guidance",
    desc: "Individual fitness assessments, progress analytics, custom targets, and dedicated trainer updates.",
    iconName: "ClipboardCheck"
  },
  {
    title: "Flexible Timings",
    desc: "Extensive morning and evening hours fitting effortlessly into busy professional schedules.",
    iconName: "Clock"
  },
  {
    title: "Friendly Community",
    desc: "Surround yourself with passionate, positive lifters and gym-goers who support your journey.",
    iconName: "Users"
  },
  {
    title: "Result Oriented Programs",
    desc: "Time-tested, structured cycles yielding highly visible, scientifically sound body transformations.",
    iconName: "Award"
  }
];

export interface GalleryItem {
  id: string;
  category: "Equipment" | "Workout" | "Members" | "Cardio Area" | "Strength Area" | "Transformation";
  title: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Equipment",
    title: "Elite Dumbbell Setup",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g2",
    category: "Workout",
    title: "Intense Deadlift Session",
    image: athleticWorkoutImage
  },
  {
    id: "g3",
    category: "Members",
    title: "High-Five Workout Buddies",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g4",
    category: "Cardio Area",
    title: "Digital Incline Treadmills",
    image: heroBgImage
  },
  {
    id: "g5",
    category: "Strength Area",
    title: "Squat Racks & Olympic Bars",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g6",
    category: "Transformation",
    title: "12-Week Aesthetic Definition",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g7",
    category: "Equipment",
    title: "Cable Crossover Multi-Station",
    image: aboutTrainingImage
  },
  {
    id: "g8",
    category: "Workout",
    title: "Focus Hypertrophy Curls",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  }
];

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amit Sharma",
    role: "Powerlifter",
    rating: 5,
    comment: "Kalburn Gym has completely changed my training experience. The quality of dumbbells and deadlift platforms is unmatched in Prayagraj. Super clean and elite crowd!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Pooja Patel",
    role: "Cardio Enthusiast",
    rating: 5,
    comment: "Finding a safe, comfortable, and luxury workout environment for women can be difficult. Kalburn Gym provides the best experience ever! The trainers are super polite and professional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rahul Verma",
    role: "Bodybuilder",
    rating: 5,
    comment: "Highly result-oriented gym. The training routines and personalized diet guides they gave me helped me pack 6kgs of solid lean muscle in just 4 months. Unbelievable pricing too!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Zeeshan Khan",
    role: "Tech Professional",
    rating: 5,
    comment: "The morning hours are perfect for my schedule. It’s an investment, and with their flexible timings, it easily fits into my day. Very motivating atmosphere!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  }
];

export const googleRating = {
  score: 4.9,
  totalReviews: 247,
  badgeText: "⭐⭐⭐⭐⭐ Top Rated Gym in Kareli"
};

export interface TimetableDay {
  day: string;
  hours: string;
  eveningHours?: string;
  closed?: boolean;
}

export const weeklySchedule: TimetableDay[] = [
  { day: "Monday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Tuesday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Wednesday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Thursday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Friday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Saturday", hours: "6:30 AM – 12:30 PM", eveningHours: "3:00 PM – 9:30 PM" },
  { day: "Sunday", hours: "Closed", closed: true }
];
