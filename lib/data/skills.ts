import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "C#", level: 5 },
      { name: ".NET Core", level: 5 },
      { name: "ASP.NET MVC", level: 4 },
      { name: "Java", level: 4 },
      { name: "Spring Boot", level: 4 },
      { name: "Spring Security", level: 4 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TailwindCSS", level: 5 },
      { name: "HTML/CSS", level: 5 },
    ],
  },
  {
    name: "Veritabanı",
    skills: [
      { name: "SQL (MSSQL)", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 3 },
      { name: "Elasticsearch", level: 3 },
      { name: "Entity Framework Core", level: 5 },
    ],
  },
  {
    name: "DevOps & Araçlar",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "Postman", level: 5 },
      { name: "Jira", level: 4 },
      { name: "Slack", level: 4 },
    ],
  },
  {
    name: "Mimari & Prensipler",
    skills: [
      { name: "SOLID Prensipleri", level: 4 },
      { name: "OOP", level: 5 },
      { name: "Clean Architecture", level: 4 },
      { name: "Microservices", level: 3 },
      { name: "Design Patterns", level: 4 },
      { name: "RESTful API", level: 5 },
    ],
  },
];
