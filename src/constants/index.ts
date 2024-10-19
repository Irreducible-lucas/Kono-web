import {
  NewsImage1,
  NewsImage2,
  NewsImage3,
  NewsImage4,
  NewsImage5,
  NewsImage6,
  NewsImage7,
  NewsImage8,
  NewsImage9,
  NewsImage10,
  NewsImage11,
  Rebecca,
  Ramatu,
  ClimateImage,
  GenderEqualityImage,
  HealthImage,
  SustainableGrowthImage,
  EducationImage,
  NewsImage12,
} from "../assets";
import {
  Link,
  ProgramCardProps,
  Review,
  FeaturedsDevelopment,
  FeaturedTypes,
  News,
  SupportedProgram,
  YouthDevelopment,
  EducationalPolicy,
} from "../types";
import { CareLogo } from "../assets/logos";

export const links: Link[] = [
  {
    id: 1,
    text: "Home",
    url: "/home",
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
    child: [
      {
        id: 1,
        text: "History of Kono",
        url: "/aboutus/history",
      },
      { id: 2, text: "Council Structure", url: "/aboutus/council-structure" },
      { id: 3, text: "Vision and Mission", url: "/aboutus/vision&mission" },
      { id: 4, text: "Profiles and Pictures", url: "/aboutus/profiles" },
      { id: 5, text: "Officials and Chiefdoms", url: "/aboutus/officials" },
    ],
  },

  {
    id: 3,
    text: "Council Services",
    url: "/council-services",
    child: [
      {
        id: 1,
        text: "Healthcare",
        url: "/council-services/healthcare",
      },
      { id: 2, text: "Education", url: "/council-services/education" },
      {
        id: 3,
        text: "Agriculture and Livelihood",
        url: "/council-services/agriculture",
      },
      {
        id: 4,
        text: "Infrastructure",
        url: "/council-services/infrastructure",
      },
      {
        id: 5,
        text: "Environmental Services",
        url: "/council-services/environmental",
      },
    ],
  },
  {
    id: 4,
    text: "Development Projects",
    url: "/development-projects",
    child: [
      {
        id: 1,
        text: "Ongoing-Projects",
        url: "/development-projects/ongoing-project",
      },
      {
        id: 2,
        text: "Completed Projects",
        url: "/development-projects/completed-project",
      },
      {
        id: 3,
        text: "Upcoming Project",
        url: "/development-projects/upcoming-project",
      },
    ],
  },
  {
    id: 5,
    text: "Reports and Financials",
    url: "/reports-financials",
    child: [
      {
        id: 1,
        text: "Annual Budget",
        url: "/reports-financials/annual-budget",
      },
      {
        id: 2,
        text: "Projects Reports and Update",
        url: "/reports-financials/projects-report",
      },
      {
        id: 3,
        text: "Project Funding",
        url: "/reports-financials/project-funding",
      },
      {
        id: 4,
        text: "Public Expenditure Report",
        url: "/reports-financials/public-expenditure",
      },
    ],
  },
  {
    id: 6,
    text: "Governance and policies",
    url: "/governance-policies",
    child: [
      {
        id: 1,
        text: "Council Policies",
        url: "/governance-policies/council-policies",
      },
      {
        id: 2,
        text: "Bylaws and Ordiances",
        url: "/governance-policies/bylaws-ordiances",
      },
    ],
  },
  {
    id: 7,
    text: "Contact Information",
    url: "/contact",
    child: null,
  },
];
export const reviews: Review[] = [
  {
    image: Rebecca,
    name: "Noheem Ayomikun",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    image: Ramatu,
    name: "Victoria Tosin",
    rating: 4.5,
    feedback:
      "Outstanding laptop performance and exceptional service  highly recommend!",
  },

  {
    image: Ramatu,
    name: "Kabir Olakunle",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
];

export const ProgramCards: ProgramCardProps[] = [
  {
    id: 1,
    image: SustainableGrowthImage,
    link_url: "/program-areas/sustainable-growth",
  },
  {
    id: 2,
    image: HealthImage,
    link_url: "/program-areas/health",
  },
  {
    id: 3,
    image: EducationImage,
    link_url: "/program-areas/education",
  },
  {
    id: 4,
    image: GenderEqualityImage,
    link_url: "/program-areas/gender-equality",
  },
  {
    id: 5,
    image: ClimateImage,
    link_url: "/program-areas/climate",
  },
  {
    id: 6,
    image: ClimateImage,
    link_url: "/program-areas/climate",
  },
];

export const New: News[] = [
  {
    id: 1,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Healthcare Facility Improvements",
    image: NewsImage1,
    url: "https://sendsierraleone.com/documents/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    date: 10,
    month: "October",
    desc: ".....Governor of Lagos State.....",
    title: "Infrastructure Upgrades",
    image: NewsImage2,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: NewsImage3,
    url: "https://sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: NewsImage4,
    url: "https://sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: NewsImage5,
    url: "https://sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    date: 10,
    month: "October",
    desc: "....Governor of Lagos State.....",
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/myths.pdf",
  },
  {
    id: 7,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: NewsImage7,
    url: "https://sendsierraleone.com/documents/corona.pdf",
  },
  {
    id: 8,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: NewsImage8,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: NewsImage9,
    url: "https://sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: NewsImage10,
    url: "https://sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: NewsImage11,
    url: "https://sendsierraleone.com/documents/news%20letter%202019.pdf",
  },
  {
    id: 12,
    date: 10,
    month: "October",
    desc: "Governor of Lagos State, Mr. Babajide Sanwo-Olu, flanked by Deputy Governor of Ogun State, Engr. (Mrs) Noimot Salako-Oyedele (right) and the Vice Chancellor,",
    title: "Mid-year Newsletter 2024",
    image: NewsImage12,
    url: "https://sendsierraleone.com/documents/Mid-Year%20Newsletter%2024.pdf",
  },
];
export const FeaturedDevelopments: FeaturedsDevelopment[] = [
  {
    id: 1,
    title: "NEWSLETTER 2022-IMPACTING TODAY FOR A BETTER TOMORROW",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/2022NEWSLETTER.pdf",
  },
  {
    id: 2,
    title: "Nyapui Senior Secondary School of Excellence Brochure",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 3,
    title: "Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf",
  },
  {
    id: 4,
    title: "Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf",
  },
  {
    id: 5,
    title: "First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf",
  },
  {
    id: 6,
    title:
      "April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.",
    image: NewsImage6,
    url: "https://sendsierraleone.com/documents/myths.pdf",
  },
  {
    id: 7,
    title: "April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic",
    image: NewsImage7,
    url: "https://sendsierraleone.com/documents/corona.pdf",
  },
  {
    id: 8,
    title:
      "April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC",
    image: NewsImage8,
    url: "https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf",
  },
  {
    id: 9,
    title:
      "March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO",
    image: NewsImage9,
    url: "https://sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf",
  },
  {
    id: 10,
    title:
      "September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!",
    image: NewsImage10,
    url: "https://sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf",
  },
  {
    id: 11,
    title: "2019 Newsletters, Strengthening SEND and safeguarding staff",
    image: NewsImage11,
    url: "https://sendsierraleone.com/documents/news%20letter%202019.pdf",
  },
  {
    id: 12,
    title: "Mid-year Newsletter 2024",
    image: NewsImage12,
    url: "https://sendsierraleone.com/documents/Mid-Year%20Newsletter%2024.pdf",
  },
];

export const FeaturedType: FeaturedTypes[] = [
  {
    id: 1,
    title: "All",
    url: "#",
  },
  {
    id: 2,
    title: "Aviation",
    url: "#",
  },
  {
    id: 3,
    title: "Education",
    url: "#",
  },
  {
    id: 4,
    title: "Health",
    url: "#",
  },
  {
    id: 5,
    title: "Empowerment",
    url: "#",
  },
  {
    id: 6,
    title: "Road",
    url: "#",
  },
  {
    id: 7,
    title: "Security",
    url: "#",
  },
];

export const SupportedPrograms: SupportedProgram[] = [
  {
    id: 1,
    image: SustainableGrowthImage,
    title: "Supported Program",
  },
  {
    id: 2,
    image: HealthImage,
    title: "Supported Program",
  },
  {
    id: 3,
    image: SustainableGrowthImage,
    title: "Supported Program",
  },
  {
    id: 4,
    image: GenderEqualityImage,
    title: "Supported Program",
  },
  {
    id: 5,
    image: ClimateImage,
    title: "Supported Program",
  },
  {
    id: 6,
    image: ClimateImage,
    title: "Supported Program",
  },
];
export const YouthDevelopments: YouthDevelopment[] = [
  {
    id: 1,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 2,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 3,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 4,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 5,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 6,
    title: "youth development",
    image: NewsImage6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
];

export const Education: EducationalPolicy[] = [
  {
    id: 1,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 2,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 3,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
  {
    id: 4,
    title: "Educational Policies",
    image: CareLogo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias, earum maxime suscipit atque dicta? Quod id quisquam ex, quaerat, sit non praesentium voluptatem nobis quam similique, soluta distinctio magnam.",
    url: "#",
  },
];
