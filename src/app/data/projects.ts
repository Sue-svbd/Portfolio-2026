import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";

// Studio 3D Images
import studio1 from "../../assets/Desktop - 74.png";
import studio2 from "../../assets/Scan2026-03-03_102147.png";
import studio3 from "../../assets/Scan2026-03-03_102317.png";
import studio4 from "../../assets/Scan2026-03-03_102434.png";
import studio5 from "../../assets/Screenshot 2026-01-20 at 17.25.45 1.png";
import studio6 from "../../assets/insights.png";
import studio7 from "../../assets/scores.png";
import studio8 from "../../assets/prototype.png";
import studio9 from "../../assets/Studio-structure.png";
import studio10 from "../../assets/studio-structure-2.png";
import studio11 from "../../assets/studio-mockups.png";
import studioMobile1 from "../../assets/survey.png";
import studioMobile2 from "../../assets/video mobile.png";
import studioMobile3 from "../../assets/mobilelogin.png";
import studioMobile4 from "../../assets/Group 384.png";
import studioMobile6 from "../../assets/Group 382.png";
import studioResults from "../../assets/analytics.webp";
import studioResults2 from "../../assets/resutlts.png";

// Mobile Studio 3D Images
import studio2Mobile from "../../assets/mobile-Scan2026-03-03_102147.png";
import studio3Mobile from "../../assets/mobile-Scan2026-03-03_102317.png";
import studio4Mobile from "../../assets/mobile-Scan2026-03-03_102434.png";

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
  id?: string;
  title?: string;
  client?: string;
  year?: string;
  image?: string;
  mobileImage?: string;
  category?: string;
  description?: string;
  approachIntroduction?: string;
  approachText?: string;
  approachImages?: string[];
  mobileApproachImages?: string[];
  extraSections?: Project[];
  isComingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "studio-3d-redesign",
    title: "REDESIGNING A 3D PLATFORM",
    client: "3D PROVIDER",
    year: "2024",
    image: chrome51,
    category: "UI/UX DESIGN",
    description: "A comprehensive redesign of a 3D creation platform",
    approachIntroduction: "A COMPREHENSIVE REDESIGN OF A 3D creation PLATFORM.",
    approachText:
      "Studio 3D's platform was struggling with poor user engagement and confusing navigation. User research revealed that the existing interface was overwhelming, with critical features buried deep in menus and an inconsistent visual hierarchy that made tasks difficult to complete. I didn't want to base my design decisions on guesses, so I needed to see how real people were actually struggling with the current site. I used tools like Hotjar to watch session recordings, which showed me the exact moments users got confused or frustrated. I also looked at heatmaps to understand what caught their eye on the page, and crucially, what they were completely ignoring. Seeing this real-world behavior gave me the insight I needed to fix the right problems.",
    approachImages: [studio5, studio6, studio7],
    mobileApproachImages: [
      studio1,
      studio2Mobile,
      studio3Mobile,
      studio4Mobile,
    ],
    extraSections: [
      {
        title: "THE PROCESS",
        approachImages: [
          studio2,
          studio3,
          studio4,
          studio8,
          studio9,
          studio10,
          studio11,
        ],
        approachText:
          "Before getting starting getting my hands dirty with design, I focused on the information structure of the platform, and I tried reorganising it in a more logic way. I like to start by getting messy ideas out of my head quickly using just pen and paper so that can iterate quickly. Once those rough concepts felt solid, I moved them into Figma to build clickable prototypes. This step was vital because it allowed users to actually interact with the design and test if the flow felt right before spending time on the final polish.",
      },
      {
        approachImages: [
          studioMobile1,
          studioMobile2,
          studioMobile3,
          studioMobile4,
          studioMobile6,
        ],
        approachIntroduction:
          "Turned out that majority of the users were trying to navigate the platform on mobile",
        approachText:
          "Studio 3D was completely lacking of a mobile version, hence, after improving the UX/UI of the landing page for desktops, I focused on designing a mobile experience that would allow users to access their projects. The possibilities to use the 3D editor were limited as the application is developed for desktop and phones cannot sustain 3D creation most of the time.",
      },
      {
        approachImages: [studioResults, studioResults2],
        title: "Final results",
        approachText:
          "The results were pretty obvious by a first glance at the analytics afterthe release of the mobile version: users were not leaving the page anymore and the total number of users landing on Studio grew exponentially.",
      },
    ],
  },
  {
    id: "platform-redesign",
    title: "CREATING A VISUAL IDENTITY",
    client: "3D PROVIDER",
    year: "2025",
    image: cube6,
    category: "UI/UX",
    description:
      "Bringing the company's scattered services into one platform was as much a human challenge as it was a design challenge.",
    approachIntroduction:
      "Creating A Unified Platform for a Fragmented Digital Ecosystem",
    approachText:
      "I get all the teams on the same page first, figuring out exactly what everyone needed. Starting from scratch, I ditch scattered setups and built a flexible, modular system of reusable components. This let me design one seamless platform—including a dedicated management dashboard for the business customers—without building a clunky monolith. Finally, I tied it all together by baking a fresh new branding right into the UI.",
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
        approachText:
          "By implementing a unified design system, we reduced production time by 40% while maintaining visual consistency across all 3D assets.",
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
