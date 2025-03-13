import { Project, Translations, Skill } from './types';

export const skills: Skill[] = [
  { name: 'Laravel', icon: '🔧', level: 90 },
  { name: 'React.js', icon: '⚛️', level: 85 },
  { name: 'Tailwind CSS', icon: '🎨', level: 95 },
  { name: 'HTML', icon: '📄', level: 100 },
  { name: 'CSS', icon: '🎯', level: 75 },
  { name: 'Firebase', icon: '🔥', level: 80 },
  { name: 'MySQL', icon: '📊', level: 85 },
  { name: 'Express.js', icon: '', level: 90 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "E-commerce Platform",
      fr: "Plateforme de commerce électronique",
      es: "منصة للتجارة الإلكترونية",
    },
    description: {
      en: "A full-featured e-commerce platform built with Firebase and React.js+Vite.",
      fr: "Une plateforme de commerce électronique complète construite avec Firebase et React.js+Vite.",
      es: "منصة تجارة إلكترونية كاملة مبنية باستخدام Firebase و React.js+Vite.",
    },
    longDescription: {
      en: "This e-commerce platform offers a seamless shopping experience with features like user authentication, product catalog, shopping cart, checkout process, and order management. The backend is powered by Firebase, providing robust API endpoints, while the frontend is built with React for a responsive and interactive user interface.",
      fr: "Cette plateforme de commerce électronique offre une expérience d'achat fluide avec des fonctionnalités telles que l'authentification des utilisateurs, le catalogue de produits, le panier d'achat, le processus de paiement et la gestion des commandes. Le backend est alimenté par Firebase, fournissant des points de terminaison API robustes, tandis que le frontend est construit avec React pour une interface utilisateur réactive et interactive.",
      es: "توفر هذه المنصة للتجارة الإلكترونية تجربة تسوق سلسة مع ميزات مثل المصادقة على المستخدم، كتالوج المنتجات، عربة التسوق، عملية الدفع، وإدارة الطلبات. يعتمد الجزء الخلفي على Firebase لتوفير نقاط نهاية API قوية، بينما يتم بناء الواجهة الأمامية باستخدام React لتوفير واجهة مستخدم تفاعلية وسريعة الاستجابة.",
    },
    image: "https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png",
    github: "https://github.com/maminoufz/ZakiShop",
    live: "https://webapp-ce0ce.web.app/Shope",
    technologies: ["Firebase", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: {
      en: "Consumer Protection App",
      fr: "Application de protection des consommateurs",
      es: "تطبيق لحماية المستهلك",
    },
    description: {
      en: "A Flutter app to scan barcodes, analyze product nutrition, and provide health recommendations.",
      fr: "Une application Flutter pour scanner les codes-barres, analyser la nutrition des produits et fournir des recommandations santé.",
      es: "تطبيق Flutter لمسح الرموز الشريطية، تحليل القيمة الغذائية للمنتجات، وتقديم توصيات صحية.",
    },
    longDescription: {
      en: "This Flutter-based app allows users to scan barcodes of products to retrieve detailed nutritional information. It integrates with an API to analyze whether the product is healthy or not based on its ingredients. The app also includes an OCR package to scan product ingredients and send them to an AI-powered API (e.g., ChatGPT) for further analysis. Users receive health recommendations and can request results for products available in Algeria. The app aims to promote consumer awareness and healthy choices.",
      fr: "Cette application basée sur Flutter permet aux utilisateurs de scanner les codes-barres des produits pour obtenir des informations nutritionnelles détaillées. Elle s'intègre à une API pour analyser si le produit est sain ou non en fonction de ses ingrédients. L'application inclut également un package OCR pour scanner les ingrédients des produits et les envoyer à une API alimentée par l'IA (par exemple, ChatGPT) pour une analyse plus approfondie. Les utilisateurs reçoivent des recommandations santé et peuvent demander des résultats pour les produits disponibles en Algérie. L'application vise à promouvoir la sensibilisation des consommateurs et des choix sains.",
      es: "يتيح هذا التطبيق المبنى على Flutter للمستخدمين مسح الرموز الشريطية للمنتجات لاسترداد معلومات غذائية مفصلة. يتم دمجها مع واجهة برمجة تطبيقات (API) لتحليل ما إذا كان المنتج صحيًا أم لا بناءً على مكوناته. يتضمن التطبيق أيضًا حزمة OCR لمسح مكونات المنتج وإرسالها إلى واجهة برمجة تطبيقات مدعومة بالذكاء الاصطناعي (مثل ChatGPT) لمزيد من التحليل. يتلقى المستخدمون توصيات صحية ويمكنهم طلب نتائج للمنتجات المتوفرة في الجزائر. يهدف التطبيق إلى تعزيز وعي المستهلك واختيارات صحية.",
    },
    image: "https://haltemis.fr/wp-content/uploads/2022/01/healthy-lifestyle.png",
    github: "https://github.com/maminoufz/customer-protection",
    live: "",
    technologies: ["Flutter", "AI Integration", "OCR", "API Integration", "Nutrition Analysis"],
  },
  {
    id: 3,
    title: {
      en: "Agricultural Auction Platform",
      fr: "Plateforme d'enchères pour produits agricoles",
      es: "منصة مزاد للمنتجات الزراعية",
    },
    description: {
      en: "A web app to help sell agricultural products with two interfaces: one with React.js and the other with HTML/CSS.",
      fr: "Une application web pour aider à vendre des produits agricoles avec deux interfaces : une avec React.js et l'autre avec HTML/CSS.",
      es: "تطبيق ويب لمساعدة بيع المنتجات الزراعية بواجهتين: واحدة باستخدام React.js والأخرى باستخدام HTML/CSS.",
    },
    longDescription: {
      en: "This platform allows farmers to auction their agricultural products online. It features two interfaces: one built with React.js for a modern user experience and another with HTML/CSS for simplicity. The backend is powered by Laravel and MySQL.",
      fr: "Cette plateforme permet aux agriculteurs de mettre aux enchères leurs produits agricoles en ligne. Elle comprend deux interfaces : une construite avec React.js pour une expérience utilisateur moderne et une autre avec HTML/CSS pour la simplicité. Le backend est alimenté par Laravel et MySQL.",
      es: "تتيح هذه المنصة للمزارعين بيع منتجاتهم الزراعية عبر المزادات عبر الإنترنت. تتميز بواجهتين: واحدة مبنية باستخدام React.js لتجربة مستخدم حديثة، والأخرى باستخدام HTML/CSS للبساطة. يعتمد الجزء الخلفي على Laravel و MySQL.",
    },
    image: "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/energies-vertes-eoliennes-tracteur.jpg",
    github: "",
    live: "",
    technologies: ["React.js", "MySQL", "Laravel", "HTML/CSS"],
  },
  {
    id: 4,
    title: {
      en: "Internship Finder",
      fr: "Trouver un stage",
      es: "البحث عن التدريب",
    },
    description: {
      en: "A web app to help students find internships based on their skills and preferences.",
      fr: "Une application web pour aider les étudiants à trouver des stages en fonction de leurs compétences et préférences.",
      es: "تطبيق ويب لمساعدة الطلاب في العثور على تدريبات بناءً على مهاراتهم وتفضيلاتهم.",
    },
    longDescription: {
      en: "This web app helps students find internships by matching their skills and preferences with available opportunities. It features a user-friendly interface, advanced search filters, and a recommendation system. Built whith php , Node.js, it also includes a real-time chat feature and notifications for new internship offers. Students receive notifications when a new offer matching their specialization is added.",
      fr: "Cette application web aide les étudiants à trouver des stages en faisant correspondre leurs compétences et préférences avec les opportunités disponibles. Elle comprend une interface conviviale, des filtres de recherche avancés et un système de recommandation. Construite avec et Node.js, elle inclut également une fonction de chat en temps réel et des notifications pour les nouvelles offres de stage. Les étudiants reçoivent des notifications lorsqu'une nouvelle offre correspondant à leur spécialisation est ajoutée.",
      es: "يساعد هذا التطبيق الطلاب في العثور على تدريبات من خلال مطابقة مهاراتهم وتفضيلاتهم مع الفرص المتاحة. يتميز بواجهة سهلة الاستخدام، فلاتر بحث متقدمة، ونظام توصيات. تم بناؤه باستخدام  و Node.js، ويشمل أيضًا ميزة محادثة في الوقت الحقيقي وإشعارات للعروض الجديدة للتدريب. يتلقى الطلاب إشعارات عند إضافة عرض جديد يتوافق مع تخصصهم.",
    },
    image: "https://www.debt.org/wp-content/uploads/2020/06/shutterstock_682454728-1.jpg",
    github: "https://github.com/MohammedBetkaoui/projet_stage",
    live: "",
    technologies: ["Node.js", "Mysql", "Express.js", "Socket.io", "php", "html", "css",],
  },
];

export const translations: Translations = {
  title: {
    en: 'Portfolio',
    fr: 'Portfolio',
    ar: 'معرض الأعمال',
  },
  subtitle: {
    en: 'Web Developer Student - Mohamed Bachir Ibrahimi University',
    fr: 'Étudiant Développeur Web - Université Mohamed Bachir Ibrahimi',
    ar: 'طالب تطوير الويب - جامعة محمد البشير الإبراهيمي',
  },
  viewDetails: {
    en: 'View Details',
    fr: 'Voir les détails',
    ar: 'عرض التفاصيل',
  },
  technologies: {
    en: 'Technologies',
    fr: 'Technologies',
    ar: 'التقنيات',
  },
  skills: {
    en: 'Skills',
    fr: 'Compétences',
    ar: 'المهارات',
  },
  contact: {
    en: 'Contact',
    fr: 'Contact',
    ar: 'اتصل بي',
  },
  sendMessage: {
    en: 'Send Message',
    fr: 'Envoyer le message',
    ar: 'إرسال الرسالة',
  },
};