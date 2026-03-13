import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";


// Studio 3D Images
import studio1 from "../../assets/Studio/Desktop - 74.png";
import studio2 from "../../assets/Studio/Scan2026-03-03_102147 1.png";
import studio3 from "../../assets/Studio//Scan2026-03-03_102317 1.png";
import studio4 from "../../assets/Studio/Scan2026-03-03_102434 1.png";
import studio5 from "../../assets/Studio/Screenshot 2026-01-20 at 17.25.45 1.png";

// Platform Images
import platform1 from "../../assets/platform/Platformintegration2.png";
import platform2 from "../../assets/platform/Platformintegration3.png"
import platform3 from "../../assets/platform/platfintegr4.png";
import platform4 from "../../assets/platform/platforeditor1.png";
import platform5 from "../../assets/platform/platform1.png";
import platform6 from "../../assets/platform/platftorm integration31.png";

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
    year: "2024",
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
      "I get all the teams on the same page first, figuring out exactly what everyone needed. Starting from scratch, I ditched scattered setups and built a flexible, modular system of reusable components. This let me design one seamless platform—including a dedicated management dashboard for the business customers—without building a clunky monolith. Finally, I tied it all together by baking a fresh new branding right into the UI.",
    approachImages: [
      platform1,
      platform2,
      platform3,
      platform4,
      platform5,
      platform6,
    ],
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
];
