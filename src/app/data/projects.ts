import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";
import group13k from "../../assets/Group_13k.svg";
import s56 from "../../assets/s56_1.svg";
import chrome8 from "../../assets/chrome8.svg";

// Studio 3D Images
import studio1 from "../../assets/Studio/Desktop - 74.png";
import studio2 from "../../assets/Studio/platf integr 4 1.png";
import studio3 from "../../assets/Studio/platform - use case 1.png";
import studio4 from "../../assets/Studio/Platform integration 2 1.png";
import studio5 from "../../assets/Studio/Screenshot 2026-01-20 at 17.25.45 1.png";

// Approach images placeholders for other projects
import process1 from "../../assets/1.svg";
import process2 from "../../assets/2.svg";
import process3 from "../../assets/3.svg";
import process4 from "../../assets/4.svg";

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  image: string;
  category: string;
  description: string;
  approachIntroduction: string;
  approachText: string;
  approachImages: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "studio-3d-redesign",
    title: "STUDIO 3D REDESIGN",
    client: "3D PROVIDER",
    year: "2026",
    image: chrome51,
    category: "3D DESIGN",
    description:
      "A comprehensive redesign of a 3D studio platform, focusing on intuitive model management and seamless rendering workflows.",
    approachIntroduction:
      "DECONSTRUCTING COMPLEXITY TO ENHANCE CREATIVE FREEDOM.",
    approachText:
      "My approach was to get all our teams on the same page first, figuring out exactly what everyone needed. Starting from scratch, I ditched our scattered setups and built a flexible, modular system of reusable components. This let me design one seamless platform—including a dedicated management dashboard for our business customers—without building a clunky monolith. Finally, I tied it all together by baking our fresh new branding right into the UI.",
    approachImages: [studio1, studio2, studio3, studio4, studio5],
  },
  {
    id: "platform-redesign",
    title: "BINKIES PLATFORM",
    client: "3D PROVIDER",
    year: "2025",
    image: cube6,
    category: "UI/UX",
    description:
      "Bringing our company's scattered services into one platform was as much a human challenge as it was a design challenge.",
    approachIntroduction:
      "Creating A Unified Platform for a Fragmented Digital Ecosystem",
    approachText:
      "I simplified complex data tables into interactive dashboards. By prioritizing the most critical KPIs, users can now make faster decisions without being overwhelmed by technical noise.",
    approachImages: [process2, process3, process1],
  },
  {
    id: "mobile-app-redesign",
    title: "MOBILE APP REDESIGN",
    client: "FINTECH APP",
    year: "2025",
    image: group134,
    category: "UI/UX",
    description:
      "Reimagining the fintech experience for a younger demographic, focusing on transparency and ease of use.",
    approachIntroduction:
      "BUILDING TRUST THROUGH HUMAN-CENTRIC DESIGN PRINCIPLES.",
    approachText:
      "The core challenge was trust. I used a warm color palette and friendly micro-interactions to make financial management feel less intimidating and more human.",
    approachImages: [process3, process1, process2, process4],
  },
  {
    id: "creative-portfolio",
    title: "CREATIVE PORTFOLIO",
    client: "PHOTOGRAPHER",
    year: "2026",
    image: chrome8,
    category: "WEB DESIGN",
    description:
      "A minimal, high-impact portfolio for a world-class photographer, letting the work speak for itself.",
    approachIntroduction: "EMPHASIZING THE ART BY ELIMINATING THE INTERFACE.",
    approachText:
      "I removed all unnecessary UI elements. The navigation is almost invisible, appearing only when needed, to ensure the full-screen imagery remains the hero of the experience.",
    approachImages: [process1, process2, process3],
  },
  {
    id: "food-delivery-app",
    title: "FOOD DELIVERY APP",
    client: "FOOD STARTUP",
    year: "2025",
    image: s56,
    category: "MOBILE",
    description:
      "Streamlining the food ordering process with a focus on local communities and sustainable delivery.",
    approachIntroduction: "REDEFINING THE PATH FROM HUNGER TO SATISFACTION.",
    approachText:
      "I optimized the user flow to reduce the number of clicks from 'hunger' to 'ordered' by 40%. The result is a highly efficient, delightful ordering experience.",
    approachImages: [process2, process3, process1, process4, process2],
  },
];
