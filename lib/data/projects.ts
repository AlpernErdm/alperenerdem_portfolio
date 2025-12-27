import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "3",
    title: "MindSpace - Modern Blog Platform",
    description:
      "React 18, Next.js 14 ve TypeScript kullanarak tam kapsamlı, SEO uyumlu bir blog platformu",
    longDescription:
      "React 18, Next.js 14 ve TypeScript kullanarak tam kapsamlı, SEO uyumlu bir blog platformu geliştirdim. TailwindCSS ve Shadcn/ui ile modern, responsive bir arayüz tasarladım. SignalR aracılığıyla gerçek zamanlı bildirimleri sisteme entegre ettim. Durum yönetimi için özel hook'lar ve PWA özellikleri içeren bileşen tabanlı bir mimari uyguladım.",
    technologies: [
      "React 18",
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "SignalR",
      "PWA",
    ],
    githubUrl: "https://github.com/AlpernErdm/MindSpace.FrontEnd",
    liveUrl: "https://mindspace-demo.vercel.app",
    featured: true,
  },
  {
    id: "4",
    title: "MindSpace - RESTful API Backend",
    description: ".NET 9 ve Clean Architecture prensipleriyle kurumsal düzeyde API",
    longDescription:
      ".NET 9 ve Clean Architecture prensiplerini kullanarak, ölçeklenebilir ve sürdürülebilir nitelikte, kurumsal düzeyde bir API geliştirdim. CQRS ve Repository tasarım desenleri ile birlikte Dependency Injection uyguladım. RabbitMQ, Elasticsearch ve SignalR entegrasyonlarını gerçekleştirdim.",
    technologies: [
      ".NET 9",
      "Clean Architecture",
      "CQRS",
      "Repository Pattern",
      "RabbitMQ",
      "Elasticsearch",
      "SignalR",
      "EF Core",
      "JWT",
    ],
    githubUrl: "https://github.com/AlpernErdm/MindSpace.Backend",
    featured: true,
  },
  {
    id: "1",
    title: "AI Tabanlı Fiş & Abonelik Yönetim Platformu",
    description:
      "Google Gemini AI entegrasyonu ile fiş görsellerinden otomatik veri çıkarma",
    longDescription:
      ".NET 9 ve CQRS (MediatR) mimarisi ile geliştirilen, abonelik ve harcama yönetimini sağlayan yüksek performanslı Backend API. Google Gemini AI entegrasyonu ile fiş görsellerinden otomatik veri çıkarma, analiz etme ve kategorize etme işlemleri gerçekleştirildi. Iyzico ödeme altyapısı entegre edilerek güvenli ödeme, tekrarlayan abonelik yönetimi kurgulandı.",
    technologies: [
      ".NET 9",
      "MediatR",
      "CQRS",
      "Google Gemini AI",
      "PostgreSQL",
      "Iyzico",
      "Docker",
    ],
    githubUrl: "https://github.com/AlpernErdm/SmartReceipt-Backend-API",
    featured: true,
  },
  {
    id: "3",
    title: "StokTakip - Modern Stok Takip Sistemi",
    description:
      ".NET 8, Elasticsearch ve RabbitMQ ile modüler stok yönetim sistemi",
    longDescription:
      ".NET 8 ve Clean Architecture prensipleriyle müşteri, tedarikçi ve stok hareketlerini yöneten modüler sistem. Elasticsearch entegrasyonu ile yazım hatalarını tolere edebilen gelişmiş arama altyapısı. RabbitMQ kullanılarak olay güdümlü mesajlaşma mimarisi uygulandı.",
    technologies: [
      ".NET 8",
      "Elasticsearch",
      "RabbitMQ",
      "Clean Architecture",
      "SQL",
      "Swagger",
    ],
    githubUrl: "https://github.com/alpernerdm/stoktakip",
    featured: false,
  },
  {
    id: "5",
    title: "CereAIXDR",
    description: "Açık kaynaklı güvenlik izleme ve saldırı tespit (XDR) çözümü",
    longDescription:
      "Açık kaynaklı güvenlik izleme ve saldırı tespit çözümü olan CereAIXDR projesinde aktif rol aldım. .NET Core kullanarak backend servislerini geliştirdim ve sistem entegrasyon süreçlerini optimize ettim. Kullanıcı dostu arayüz tasarımları ile frontend geliştirmelerine katkıda bulundum.",
    technologies: [".NET Core", "Security", "XDR", "React"],
    featured: false,
  },
  {
    id: "6",
    title: "BKYS (Başvuru Kayıt Yönetim Sistemi)",
    description: "Java Spring Boot ile öğrenci başvuru yönetim platformu",
    longDescription:
      "Öğrencilerin programlara başvurmasını, kurumların ise bu başvuruları verimli bir şekilde yönetmesini sağlayan dijital platform. Kurumlar için kapsamlı raporlama araçları entegre edilerek süreç optimizasyonu sağlandı.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/alpernerdm/bkys",
    featured: false,
  },
  {
    id: "7",
    title: "Online E-Ticaret Otomasyonu",
    description: "ASP.NET MVC ile rol tabanlı e-ticaret sistemi",
    longDescription:
      "Personel, ürün ve müşteri bilgilerinin yönetimini sağlayan web tabanlı işletme otomasyonu. Yönetici ve Müşteri girişleri için Rol Tabanlı Kimlik Doğrulama altyapısı kuruldu.",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Role-Based Auth"],
    githubUrl: "https://github.com/AlpernErdm/E-Commerce-Automation",
    featured: false,
  },
  {
    id: "8",
    title: "Konut Fiyatı Tahmini",
    description: "Python ile makine öğrenmesi tabanlı fiyat tahmin modeli",
    longDescription:
      "Mağaza satış verileri üzerinde Python kütüphaneleri kullanılarak kapsamlı zaman serisi analizleri ve tahmin modelleri geliştirildi. Ridge Regresyon ve XGBoost algoritmaları ile modeller eğitildi.",
    technologies: [
      "Python",
      "Machine Learning",
      "Ridge Regression",
      "XGBoost",
      "Pandas",
      "NumPy",
    ],
    githubUrl: "https://github.com/AlpernErdm/House-Price-Prediction-ML",
    featured: false,
  },
];
