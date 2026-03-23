import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";

// Studio 3D Images
import studio1 from "../../assets/Desktop - 74.png";
import studio2 from "../../assets/Scan2026-03-03_102147.png";
import studio3 from "../../assets/Scan2026-03-03_102317.png";
import studio4 from "../../assets/Scan2026-03-03_102434.png";
import studio5 from "../../assets/Screenshot 2026-01-20 at 17.25.45 1.png";

// Platform Images
import platform1 from "../../assets/Platformintegration2.png";
import platform2 from "../../assets/Platformintegration3.png";
import platform3 from "../../assets/platfintegr4.png";
import platform4 from "../../assets/platforeditor1.png";
import platform5 from "../../assets/platform1.png";
import platform6 from "../../assets/platftorm integration31.png";

// Approach images placeholders for other projects
import process1 from "../../assets/1.svg";
import process2 from "../../assets/2.svg";
import process3 from "../../assets/3.svg";
import process4 from "../../assets/4.svg";

export interface Project {
  id: string;
  title: string;
  client?: string;
  year?: string;
  image?: string;
  category?: string;
  description?: string;
  approachIntroduction?: string;
  approachText?: string;
  approachImages?: string[];
  extraSections?: Project[];
  isComingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "studio-3d-redesign",
    title: "REDESIGN OF Ax 3D PLATFORM",
    client: "3D PROVIDER",
    year: "2024",
    image: chrome51,
    category: "UI/UX DESIGN",
    description: "A comprehensive redesign of a 3D creation platform",
    approachIntroduction: "A COMPREHENSIVE REDESIGN OF A 3D creation PLATFORM.",
    approachText:
      "Studio 3D's platform was struggling with poor user engagement and confusing navigation. User research revealed that the existing interface was overwhelming, with critical features buried deep in menus and an inconsistent visual hierarchy that made tasks difficult to complete.",
    approachImages: [studio1, studio2, studio3, studio4, studio5],
    extraSections: [],
  },
  {
    id: "platform-redesign",
    title: "BINKIES PLATFORM",
    client: "3D PROVIDER",
    year: "2025",
    image: cube6,
    category: "UI/UX",
    description:
      "Bringing the company's scattered services into one platform was as much a human challenge as it was a design challenge.",
    approachIntroduction:
      "Creating A Unified Platform for a Fragmented Digital Ecosystem",
    approachText:
      "I get all the teams on the same page first, figuring out exactly what everyone needed. Starting from scratch, I ditched scattered setups and built a flexible, modular system of reusable components. This let me design one seamless platform—including a dedicated management dashboard for the business customers—without building a clunky monolith. Finally, I tied it all together by baking a fresh new branding right into the UI.",
    approachImages: [
      platform1,
      platform2,
      platform3,
      platform4,
      platform5,
      platform6,
    ],
    extraSections: [
      {
        id: "platform-solution",
        title: "THE SOLUTION",
        approachIntroduction: "STREAMLINING THE CORE WORKFLOW",
        approachText: "By implementing a unified design system, we reduced production time by 40% while maintaining visual consistency across all 3D assets.",
      },
    ],
  },
  {
    id: "personal-portfolio",
    title: "ARTIST PORTFOLIO",
    client: "Visual Artist",
    year: "2026",
    image: group134,
    category: "UI/UX",
    description:
      "Reimagining the fintech experience for a younger demographic, focusing on transparency and ease of use.",
    approachIntroduction:
      "BUILDING TRUST THROUGH HUMAN-CENTRIC DESIGN PRINCIPLES.",
    approachText:
      "The core challenge was trust. I used a warm color palette and friendly micro-interactions to make financial management feel less intimidating and more human.",
    approachImages: [process3, process1, process2, process4],
    extraSections: [],
    isComingSoon: true,
  },
];
