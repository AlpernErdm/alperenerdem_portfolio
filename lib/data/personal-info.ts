import { PersonalInfo } from "@/types";

// Social links data without icons (icons will be added in components)
const socialLinksRaw: Omit<PersonalInfo["socialLinks"][0], "icon">[] = [
  {
    platform: "github",
    url: "https://github.com/alpernerdm",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/alpernerdm",
  },
  {
    platform: "website",
    url: "https://alperenerdem-portfolio.vercel.app",
  },
  {
    platform: "email",
    url: "mailto:alpernerdm@gmail.com",
  },
];

export const personalInfoData = {
  name: "Alperen Erdem",
  title: "Full-Stack Developer",
  titles: ["Full-Stack Developer", ".NET Specialist", "Software Engineer"],
  email: "alpernerdm@gmail.com",
  phone: "+90 507 866 37 34",
  location: "Eyüp, İstanbul",
  profileImage: "/images/profile.jpeg",
  bio: `Ahi Evran Üniversitesi Bilgisayar Mühendisliği 2024 mezunuyum. Akademik eğitimim ve geliştirdiğim projeler süresince .NET ekosistemi ve C# üzerinde uzmanlaşmaya odaklandım. Yazılım geliştirme süreçlerinde temiz kod (clean code) prensiplerini ve sektörün en iyi uygulamalarını (best practices) benimseyen bir mühendis olarak; teknik yetkinliklerimi sürekli güncel tutmayı ilke ediniyorum. Kısa vadede .NET teknolojilerindeki uzmanlığımı derinleştirmeyi, uzun vadede ise ölçeklenebilir projelerde sorumluluk alarak yenilikçi ve katma değer sağlayan çözümlere liderlik etmeyi hedefliyorum.`,
  education: {
    university: "Ahi Evran Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    years: "2019-2024",
  },
  goals: `Kısa vadede sektörün en iyi uygulamaları (best practices) ile uzmanlığımı derinleştirmeyi, uzun vadede ise büyük ölçekli projelerde liderlik sorumluluğu alarak yenilikçi çözümler üretmeyi hedefliyorum.`,
};

export const socialLinksData = socialLinksRaw;
