import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconUsersGroup, //teachers
  IconMoodWink, //fun
  IconAdjustments, //personalized
  IconArrowNarrowRight, //enroll
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
  IconClockHour4,
} from "@tabler/icons-react";
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from "./types";

// import kidsFrontImg from '~/assets/images/camera-front.jpg';
import kidsFrontImg from "~/assets/images/kids-front.jpg";
// import kidsBackImg from '~/assets/images/camera-back.jpg';
import kidsBackImg from "~/assets/images/kids-back.jpg";
// import heroImg from '~/assets/images/hero.jpg';
import heroImg from "~/assets/images/main.jpg";
// import gasImg from '~/assets/images/gas.jpg';
import KidImg from "~/assets/images/colorFullKid.png";
import nextJsLogo from "~/assets/images/nextjs-logo.png";
import reactLogo from "~/assets/images/react-logo.png";
import tailwindCssLogo from "~/assets/images/tailwind-css-logo.png";
import typescriptLogo from "~/assets/images/typescript-logo.png";

// Announcement data
export const announcementData: AnnouncementProps = {
  title: "NEW",
  callToAction: {
    text: "Saturday - Friday 09:00 AM - 09:30 PM",
    href: "/contact",
  },
  callToAction2: {
    text: "Follow @polyglo27 on Twitter",
    href: "https://twitter.com/intent/user?screen_name=onwidget",
  },
};
// Announcement data
export const announcementDataFr: AnnouncementProps = {
  title: "Neauveau",
  callToAction: {
    text: "Samedi - Vendredi 09 : 00 AM - 09 : 30 PM ",
    href: "/contact",
  },
  callToAction2: {
    text: "Suivez @polyglo27 sur Twitter",
    href: "https://twitter.com/intent/user?screen_name=onwidget",
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: "Pages",
      icon: IconChevronDown,
      links: [
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "Terms & Conditions",
          href: "/terms",
        },
        {
          label: "Privacy Policy",
          href: "/privacy",
        },
      ],
    },
    // {
    //   label: 'Blog',
    //   href: '/blog',
    // },
  ],
  actions: [
    {
      label: "request a consultation",
      href: "/contact",
      type: "primary",
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "center",
};

// Données d'en-tête
export const headerDataFr: HeaderProps = {
  links: [
    {
      label: "Pages",
      icon: IconChevronDown,
      links: [
        {
          label: "Tarification",
          href: "/pricing",
        },
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "Termes et conditions",
          href: "/terms",
        },
        {
          label: "Politique de confidentialité",
          href: "/privacy",
        },
      ],
    },
    // {
    //   label: 'Blog',
    //   href: '/blog',
    // },
  ],
  actions: [
    {
      label: "Demander une consultation",
      href: "/contact",
      type: "primary",
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "center",
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Unlock the world <span className="hidden md:inline">of language</span>{" "}
      <span>with</span>{" "}
      <span className="text-yellow-500 dark:text-yellow-400 sm:whitespace-nowrap ">
        PolyGlo
      </span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-yellow-600 decoration-wavy decoration-1 underline-offset-2">
          At PolyGlo,
        </span>{" "}
        we believe that learning a language is a journey that should be both
        <em> fun</em> and <em>enriching</em>
        for children.
      </span>{" "}
    </>
  ),
  callToAction: {
    text: "Enroll your child today",
    href: "/contact",
    icon: IconArrowNarrowRight,
  },
  callToAction2: {
    text: "Explore our language programs",
    href: "#features3",
  },
  image: {
    src: heroImg,
    alt: "Hero PolyGlo",
  },
};

// Données pour la section d'accueil
export const heroDataFr: HeroProps = {
  title: (
    <>
      Débloquez le monde <span className="hidden md:inline">de la langue</span>{" "}
      <span>avec</span>{" "}
      <span className="text-yellow-300 sm:whitespace-nowrap ">PolyGlo</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-yellow-600 decoration-wavy decoration-1 underline-offset-2">
          Chez PolyGlo,
        </span>{" "}
        nous croyons que l'apprentissage d'une langue est un voyage qui devrait
        être à la fois <em>amusant</em> et <em>enrichissant</em> pour les
        enfants.
      </span>{" "}
    </>
  ),
  callToAction: {
    text: "Inscrivez votre enfant aujourd'hui",
    href: "/contact",
    icon: IconArrowNarrowRight,
  },
  callToAction2: {
    text: "Explorez nos programmes linguistiques",
    href: "#features3",
  },
  image: {
    src: heroImg,
    alt: "Hero PolyGlo",
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      src: nextJsLogo,
      alt: "NextJs Logo",
    },
    {
      src: reactLogo,
      alt: "React Logo",
    },
    {
      src: tailwindCssLogo,
      alt: "Tailwind CSS Logo",
    },
    {
      src: typescriptLogo,
      alt: "Typescript Logo",
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: "Frequently Asked Questions",
    subtitle:
      'Got questions about PolyGlo"s language programs? We have got answers!',
    highlight: "FAQS",
  },
  items: [
    {
      title: "What ages do you teach?",
      description: `We offer language programs for children aged 3 to 18 years old.`,
    },
    {
      title: "What languages do you teach?",
      description: ` We offer a variety of language programs, including English, French, Spanish, and Arabic.`,
    },
    {
      title: "What is your teaching approach?",
      description: `Our teaching approach is personalized to meet the needs of each student, incorporating fun and engaging activities to keep them motivated and excited to learn.`,
    },
    {
      title: "What is the class size?",
      description: `Our classes have a maximum of 6 students to ensure personalized attention and effective learning.`,
    },
    {
      title: "How do you track progress?",
      description: `We use regular assessments to track each student's progress and ensure they are on the right track towards achieving their language learning goals.`,
    },
    {
      title: "What is the duration of each class?",
      description: `Our classes are typically 60 minutes long, but we also offer shorter classes for younger children to accommodate their attention spans. We believe that regular, consistent practice is key to language learning success, so we recommend attending classes at least twice a week.`,
    },
  ],
};

//Les données de FAQS
export const faqsDataFr: FAQsProps = {
  header: {
    title: "Foire Aux Questions",
    subtitle:
      "Vous avez des questions sur les programmes de langues de PolyGlo ? Nous avons des réponses !",
    highlight: "FAQS",
  },
  items: [
    {
      title: "Quels sont les âges que vous enseignez ?",
      description: `Nous offrons des programmes de langues pour les enfants de 3 à 18 ans.`,
    },
    {
      title: "Quelles langues enseignez-vous ?",
      description: `Nous proposons une variété de programmes de langues, notamment l'anglais, le français, l'espagnol et l'arabe.`,
    },
    {
      title: "Quelle est votre approche pédagogique ?",
      description: `Notre approche pédagogique est personnalisée pour répondre aux besoins de chaque élève, en intégrant des activités amusantes et stimulantes pour les motiver et les exciter à apprendre.`,
    },
    {
      title: "Quelle est la taille de la classe ?",
      description: `Nos classes ont un maximum de 6 élèves pour assurer une attention personnalisée et un apprentissage efficace.`,
    },
    {
      title: "Comment suivez-vous les progrès ?",
      description: `Nous utilisons des évaluations régulières pour suivre les progrès de chaque élève et nous assurer qu'ils sont sur la bonne voie pour atteindre leurs objectifs d'apprentissage de la langue.`,
    },
    {
      title: "Quelle est la durée de chaque cours ?",
      description: `Nos cours durent généralement 60 minutes, mais nous offrons également des cours plus courts pour les jeunes enfants afin de tenir compte de leur capacité d'attention. Nous croyons que la pratique régulière et constante est la clé du succès de l'apprentissage des langues, nous recommandons donc d'assister aux cours au moins deux fois par semaine.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: "Pricing FAQs",
    subtitle: "Do you have other questions?",
    // highlight: 'FAQS',
    position: "left",
  },
  items: [
    {
      title: "Which plan is best for me?",
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: "What are my payment options?",
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "How do I change my plan to a different one?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What happen at the end of my free trial?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: "Can I import data from other tools?",
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: "Can I cancel my plan at any time?",
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  link: {
    label: "Contact us",
    href: "/contact",
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: "Frequently Asked Questions",
    subtitle:
      "Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.",
    highlight: "FAQS",
    position: "center",
  },
  tabs: [
    {
      link: {
        label: "General",
        href: "/tab1",
      },
      items: [
        {
          title: "What do I need to start?",
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: "How to install the NextJS + Tailwind CSS template?",
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: "What is something that you would really like to try again?",
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title:
            "If you could only ask one question to each person you meet, what would that question be?",
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: "Plans, prices and payments",
        href: "/tab2",
      },
      items: [
        {
          title: "Which plan is best for me?",
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: "What are my payment options?",
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "How do I change my plan to a different one?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What happen at the end of my free trial?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: "Can I import data from other tools?",
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: "Can I cancel my plan at any time?",
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: "Others",
        href: "/tab3",
      },
      items: [
        {
          title: "How do I download the template?",
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: "How do I customize the template?",
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: "Does the template come with any tutorials or instructions?",
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title:
            "Are there any additional fees or charges for using the template?",
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: "Join Us Today",
  subtitle: ' Start your child"s language learning journey with PolyGlo today.',
  callToAction: {
    text: "Enroll Now",
    href: "https://github.com/onwidget/tailnext",
    icon: IconDownload,
  },
  items: [
    {
      title: "Enroll Now",
      description:
        "Sign up for our language classes today and help your child build the language skills they need to succeed in an increasingly global world.",
      href: "https://github.com/onwidget/tailnext",
    },
    {
      title: "Schedule a Trial Class",
      description:
        " Not sure if our language classes are right for your child? Schedule a trial class today and see for yourself how our experienced teachers can help your child achieve language learning success.",
      href: "/",
    },
    {
      title: "Subscribe",
      description: "Morbi orci nunc, euismod ac dui id, convallis.",
      form: {
        icon: IconMail,
        input: {
          type: "email",
          name: "email",
          placeholder: "Enter your email address",
        },
        btn: {
          title: "Subscribe",
          type: "submit",
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: "Still have questions?",
  subtitle:
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.",
  callToAction: {
    text: "Contact us",
    href: "/contact",
  },
};

// CallToAction2 data - ver FR
export const callToActionData2fr: CallToActionProps = {
  title: "Vous avez encore des questions?",
  subtitle:
    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.",
  callToAction: {
    text: "Contactez-nous",
    href: "/contact",
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">PolyGlo</span>
      </>
    ),
    subtitle: "Why someone should consider enrolling their child in PolyGlo?",
    highlight: "Features",
  },
  items: [
    {
      title: "Experienced and qualified teachers",
      description:
        "Our school has a team of experienced and qualified language teachers who are passionate about teaching children and helping them to achieve their language goals.",
      icon: IconUsersGroup,
      link: {
        label: "Discover now",
        href: "/#team",
      },
    },
    {
      title: "Fun and engaging classes",
      description:
        "We believe that learning should be fun and engaging, which is why we use a variety of interactive teaching methods to keep our students motivated and interested in the language.",
      icon: IconMoodWink,
      link: {
        label: "Discover now",
        href: "#steps",
      },
    },
    {
      title: "Personalized approach",
      description:
        "We understand that every child is unique, which is why we tailor our language teaching approach to meet the individual needs of each student.",
      icon: IconAdjustments,
      link: {
        label: "Discover now",
        href: "#steps",
      },
    },
    // {
    //   title: 'Excellent Page Speed',
    //   description:
    //     'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
    //   icon: IconRocket,
    //   link: {
    //     label: 'Discover now',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Search Engine Optimization (SEO)',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    //   icon: IconArrowsRightLeft,
    //   link: {
    //     label: 'Discover now',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Open to new ideas and contributions',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    //   icon: IconBulb,
    //   link: {
    //     label: 'Discover now',
    //     href: '/',
    //   },
    // },
  ],
};

// featuresData in fr
export const featuresDataFr: FeaturesProps = {
  header: {
    title: (
      <>
        Ce que vous obtenez avec{" "}
        <span className="whitespace-nowrap">PolyGlo</span>
      </>
    ),
    subtitle:
      "Pourquoi quelqu'un devrait envisager d'inscrire son enfant chez PolyGlo?",
    highlight: "Fonctionnalités",
  },
  items: [
    {
      title: "Enseignants expérimentés et qualifiés",
      description:
        "Notre école dispose d'une équipe d'enseignants de langues expérimentés et qualifiés qui sont passionnés par l'enseignement aux enfants et les aident à atteindre leurs objectifs linguistiques.",
      icon: IconUsersGroup,
      link: {
        label: "Découvrir maintenant",
        href: "/#team",
      },
    },
    {
      title: "Cours amusants et captivants",
      description:
        "Nous croyons que l'apprentissage doit être amusant et captivant, c'est pourquoi nous utilisons une variété de méthodes d'enseignement interactives pour garder nos élèves motivés et intéressés par la langue.",
      icon: IconMoodWink,
      link: {
        label: "Découvrir maintenant",
        href: "#steps",
      },
    },
    {
      title: "Approche personnalisée",
      description:
        "Nous comprenons que chaque enfant est unique, c'est pourquoi nous adaptons notre approche d'enseignement de la langue aux besoins individuels de chaque étudiant.",
      icon: IconAdjustments,
      link: {
        label: "Découvrir maintenant",
        href: "#steps",
      },
    },
    // {
    //   title: 'Excellent Page Speed',
    //   description:
    //     'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
    //   icon: IconRocket,
    //   link: {
    //     label: 'Discover now',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Search Engine Optimization (SEO)',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    //   icon: IconArrowsRightLeft,
    //   link: {
    //     label: 'Discover now',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Ouverture aux nouvelles idées et contributions',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
    //   icon: IconBulb,
    //   link: {
    //     label: 'Découvrir maintenant',
    //     href: '/',
    //   },
    // },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: "Support Center",
    subtitle: "Looking for something in particular?",
  },
  items: [
    {
      title: "Have a question?",
      description: "See our frequently asked questions",
      icon: IconHelp,
      link: {
        href: "/faqs",
      },
    },
    {
      title: "Chat with us",
      description: "Live chat with our support team",
      icon: IconMessages,
      link: {
        href: "/",
      },
    },
    {
      title: "Get help",
      description: "Speak to our team today",
      icon: IconHeadset,
      link: {
        href: "/",
      },
    },
  ],
};

// Feature2 data in fr
export const featuresData2Fr: FeaturesProps = {
  header: {
    title: "Centre de support",
    subtitle: "Vous cherchez quelque chose en particulier?",
  },
  items: [
    {
      title: "Vous avez une question ?",
      description: "Consultez notre liste de questions fréquentes",
      icon: IconHelp,
      link: {
        href: "/faqs",
      },
    },
    {
      title: "Discutez avec nous",
      description: "Chattez en direct avec notre équipe de support",
      icon: IconMessages,
      link: {
        href: "/",
      },
    },
    {
      title: "Obtenez de l'aide",
      description: "Parlez à notre équipe dès maintenant",
      icon: IconHeadset,
      link: {
        href: "/",
      },
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: "Our Language Programs",
    subtitle: " Tailored language programs for all ages",
    highlight: "Content",
  },
  content:
    "At PolyGlo, we offer a range of language programs for children of all ages. From beginner to advanced levels, our programs are designed to help students achieve their language goals while having fun along the way.",
  items: [
    {
      title: "Personalized Language Teaching",
      description:
        "Our experienced teachers use a personalized approach to language teaching, tailoring each lesson to meet the individual needs of each student.",
    },
    {
      title: "Interactive Learning",
      description:
        "We use a variety of interactive teaching methods to keep our students motivated and engaged in the language.",
    },
    {
      title: "Language Immersion",
      description:
        "Our multilingual environment provides opportunities for students to learn from native speakers and practice their language skills with other students from different cultural backgrounds.",
    },
  ],
  image: {
    src: kidsFrontImg,
    alt: "Colorful Image",
  },
  isReversed: false,
  isAfterContent: false,
};

// Content Data fr
export const contentDataFr: ContentProps = {
  header: {
    title: "Nos Programmes de Langues",
    subtitle: "Programmes de langues personnalisés pour tous les âges",
    highlight: "Contenu",
  },
  content:
    "Chez PolyGlo, nous offrons une gamme de programmes de langues pour les enfants de tous les âges. Du niveau débutant au niveau avancé, nos programmes sont conçus pour aider les étudiants à atteindre leurs objectifs linguistiques tout en s'amusant.",
  items: [
    {
      title: "Enseignement de Langues Personnalisé",
      description:
        "Nos enseignants expérimentés utilisent une approche personnalisée de l'enseignement des langues, adaptant chaque leçon aux besoins individuels de chaque élève.",
    },
    {
      title: "Apprentissage Interactif",
      description:
        "Nous utilisons une variété de méthodes d'enseignement interactives pour maintenir nos élèves motivés et engagés dans la langue.",
    },
    {
      title: "Immersion Linguistique",
      description:
        "Notre environnement multilingue offre des opportunités aux étudiants d'apprendre auprès de locuteurs natifs et de pratiquer leurs compétences linguistiques avec d'autres étudiants de différents horizons culturels.",
    },
  ],
  image: {
    src: kidsFrontImg,
    alt: "Image Colorée",
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    " By enrolling your child in our language programs, you are investing in their future and providing them with life-long benefits that will serve them well throughout their lives.",
  items: [
    {
      title: "Life-Long Benefits",
    },
    {
      title: "Give your child the gift of language",
    },
    {
      title: "Learning a new language boosts cognitive skills",
    },
    {
      title: "Language skills = future opportunities",
    },
    {
      title: "Language learning = cultural awareness",
    },
    {
      title: "Fun classes = confident learners",
    },
  ],
  image: {
    src: kidsBackImg,
    alt: "Colorful Image",
  },
  isReversed: true,
  isAfterContent: true,
};

// Content2 Data Fr
// Données de contenu 2
export const content2DataFr: ContentProps = {
  content:
    "En inscrivant votre enfant à nos programmes de langues, vous investissez dans son avenir et vous lui offrez des avantages durables qui lui serviront tout au long de sa vie.",
  items: [
    {
      title: "Avantages durables",
    },
    {
      title: "Offrez à votre enfant le cadeau de la langue",
    },
    {
      title: "Apprendre une nouvelle langue renforce les compétences cognitives",
    },
    {
      title: "Compétences linguistiques = opportunités futures",
    },
    {
      title: "L'apprentissage des langues = sensibilisation culturelle",
    },
    {
      title: "Des cours amusants = des apprenants confiants",
    },
  ],
  image: {
    src: kidsBackImg,
    alt: "Image colorée",
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: "Our Three-Step Language Learning Process",
  items: [
    {
      title: "Step 1",
      description:
        "To determine the appropriate language level for your child, we will administer a placement test that evaluates their proficiency in reading, writing, listening, and speaking.",
      icon: IconArrowDown,
    },
    {
      title: "Step 2",
      description:
        'Based on the results of the placement test, we will develop a personalized curriculum that is tailored to your child"s language level, interests, and learning style.',
      icon: IconArrowDown,
    },
    {
      title: "Step 3",
      description:
        'We conduct regular progress assessments to monitor your child"s learning and make any necessary adjustments to their curriculum. Our goal is to ensure that your child achieves their language learning goals and feels confident using the language.',
      icon: IconArrowDown,
    },
    {
      title: "Ready!",
      icon: IconCheck,
    },
  ],
  image: {
    src: KidImg,
    alt: "Steps image",
  },
};

// Steps Data fr
export const stepsDataFr: StepsProps = {
  title: "Notre processus d'apprentissage linguistique en trois étapes",
  items: [
    {
      title: "Étape 1",
      description:
        "Pour déterminer le niveau de langue approprié pour votre enfant, nous administrerons un test de placement qui évalue sa compétence en lecture, en écriture, en écoute et en expression orale.",
      icon: IconArrowDown,
    },
    {
      title: "Étape 2",
      description:
        'Sur la base des résultats du test de placement, nous élaborons un programme personnalisé adapté au niveau de langue, aux intérêts et au style d"apprentissage de votre enfant.',
      icon: IconArrowDown,
    },
    {
      title: "Étape 3",
      description:
        'Nous effectuons des évaluations régulières des progrès pour surveiller l"apprentissage de votre enfant et apporter les ajustements nécessaires à son programme. Notre objectif est de veiller à ce que votre enfant atteigne ses objectifs d"apprentissage linguistique et se sente en confiance lorsqu"il utilise la langue.',
      icon: IconArrowDown,
    },
    {
      title: "Prêt !",
      icon: IconCheck,
    },
  ],
  image: {
    src: KidImg,
    alt: "Image des étapes",
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: "Meet our teachers",
    subtitle:
      "Our experienced and dedicated teachers are passionate about helping your child achieve language learning success.",
    // highlight: 'Team',
  },
  teams: [
    {
      name: "Fairouze ",
      occupation: "Head Teacher",
      image: {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        alt: "Cindy Belcher",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Ahmed Ali",
      occupation: "Language Instructor",
      image: {
        src: "https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Toby Foster",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Fatima Hassan",
      occupation: "Language Tutor",
      image: {
        src: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Clark Bourne",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Bella Chase",
      occupation: "College Language Instructor",
      image: {
        src: "https://images.unsplash.com/photo-1586682643135-060f061868b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80",
        alt: "Bella Chase",
      },
      items: [
        {
          title: "Know more on Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "Know more on Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contact by email",
          icon: IconMail,
          href: "#",
        },
      ],
    },
  ],
};

// Données d'équipe
export const teamDataFr: TeamProps = {
  header: {
    title: "Rencontrez nos enseignants",
    subtitle:
      "Nos enseignants expérimentés et dévoués sont passionnés par l'aide à la réussite de l'apprentissage des langues de votre enfant.",
    // highlight: 'Équipe',
  },
  teams: [
    {
      name: "Fairouze ",
      occupation: "Enseignante en chef",
      image: {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        alt: "Cindy Belcher",
      },
      items: [
        {
          title: "En savoir plus sur Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "En savoir plus sur Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contacter par e-mail",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Ahmed Ali",
      occupation: "Instructeur de langue",
      image: {
        src: "https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Toby Foster",
      },
      items: [
        {
          title: "En savoir plus sur Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "En savoir plus sur Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contacter par e-mail",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Fatima Hassan",
      occupation: "Tuteur en langue",
      image: {
        src: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Clark Bourne",
      },
      items: [
        {
          title: "En savoir plus sur Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "En savoir plus sur Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contacter par e-mail",
          icon: IconMail,
          href: "#",
        },
      ],
    },
    {
      name: "Bella Chase",
      occupation: "Enseignante en langues universitaires",
      image: {
        src: "https://images.unsplash.com/photo-1586682643135-060f061868b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80",
        alt: "Bella Chase",
      },
      items: [
        {
          title: "En savoir plus sur Twitter",
          icon: IconBrandTwitter,
          href: "#",
        },
        {
          title: "En savoir plus sur Linkedin",
          icon: IconBrandLinkedin,
          href: "#",
        },
        {
          title: "Contact par email",
          icon: IconMail,
          href: "#",
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: "Hear What Our Happy Parents Have to Say",
    subtitle:
      'Don"t just take our word for it - see what our satisfied parents have to say about PolyGlo"s language programs.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: "Sarah",
      occupation: "Parent",
      comment:
        'PolyGlo"s personalized attention and fun classes helped my child progress quickly in language skills. I recommend them to any parent.',
      image: {
        src: "https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
    {
      name: "Ahmed",
      occupation: "Parent",
      comment:
        'The progress assessments and patient teachers at PolyGlo ensured my child was on the right track. I am grateful for their impact on my child"s learning.',
      image: {
        src: "https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
    {
      name: "Fatima",
      occupation: "Parent",
      comment:
        'PolyGlo"s unique approach to language learning builds cultural awareness and a love of learning in children. I highly recommend them to any parent',
      image: {
        src: "https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
  ],
};

// Testimonial data fr
export const testimonialDataFr: TestimonialProps = {
  header: {
    title: "Écoutez ce que nos parents satisfaits ont à dire",
    subtitle:
      "Ne vous fiez pas seulement à notre parole - voyez ce que nos parents satisfaits ont à dire des programmes de langues de PolyGlo.",
  },
  testimonials: [
    {
      name: "Sarah",
      occupation: "Parent",
      comment:
        'L"attention personnalisée et les cours amusants de PolyGlo ont aidé mon enfant à progresser rapidement dans les compétences linguistiques. Je les recommande à tous les parents.',
      image: {
        src: "https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
    {
      name: "Ahmed",
      occupation: "Parent",
      comment:
        'Les évaluations de progression et les enseignants patients de PolyGlo ont assuré que mon enfant était sur la bonne voie. Je suis reconnaissant pour leur impact sur l"apprentissage de mon enfant.',
      image: {
        src: "https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
    {
      name: "Fatima",
      occupation: "Parent",
      comment:
        'L"approche unique de PolyGlo pour l"apprentissage des langues développe la conscience culturelle et l"amour de l"apprentissage chez les enfants. Je les recommande vivement à tous les parents.',
      image: {
        src: "https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        alt: "",
      },
      icon: IconBrandTwitter,
      href: "#",
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: "Our Pricing Plans",
    subtitle:
      'We offer flexible pricing plans to suit your child"s language learning needs.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: "basic",
      value: 1900,
      period: "per month",
      texts: [
        // 'Our Basic Plan includes ',
        "2 classes per week",
        "Personalized attention from experienced teachers",
        "Access to our online learning resources.",
      ],
      link: {
        label: "Free 7-day trial",
        href: "#",
      },
      hasRibbon: false,
    },
    {
      title: "standard",
      value: 2900,
      period: "per month",
      texts: [
        "3 classes per week",
        "Personalized attention from our most experienced teachers",
        "Access to our online learning resources",
        "Regular progress assessments",
      ],
      link: {
        label: "Free 15-day trial",
        href: "#",
      },
      hasRibbon: true,
      ribbonTitle: "Popular",
    },
    {
      title: "premium",
      value: 4900,
      period: "per month",
      texts: [
        "4 classes per week",
        "Personalized attention from our top-tier teachers",
        "Access to our online learning resources",
        "Regular progress assessments",
        'Dedicated language learning plan tailored to your child"s goals',
      ],
      link: {
        label: "Free 30-day trial",
        href: "#",
      },
      hasRibbon: false,
    },
  ],
};

// Pricing data Fr
export const pricingDataFr: PricingProps = {
  header: {
    title: "Nos plans de tarification",
    subtitle:
      "Nous offrons des plans de tarification flexibles pour répondre aux besoins d'apprentissage linguistique de votre enfant.",
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: "basique",
      value: 1900,
      period: "par mois",
      texts: [
        // 'Notre plan de base comprend ',
        "2 cours par semaine",
        "Attention personnalisée de la part de nos enseignants expérimentés",
        "Accès à nos ressources d'apprentissage en ligne.",
      ],
      link: {
        label: "Essai gratuit de 7 jours",
        href: "#",
      },
      hasRibbon: false,
    },
    {
      title: "standard",
      value: 2900,
      period: "par mois",
      texts: [
        "3 cours par semaine",
        "Attention personnalisée de la part de nos enseignants les plus expérimentés",
        "Accès à nos ressources d'apprentissage en ligne",
        "Évaluations régulières des progrès",
      ],
      link: {
        label: "Essai gratuit de 15 jours",
        href: "#",
      },
      hasRibbon: true,
      ribbonTitle: "Populaire",
    },
    {
      title: "premium",
      value: 4900,
      period: "par mois",
      texts: [
        "4 cours par semaine",
        "Attention personnalisée de la part de nos enseignants haut de gamme",
        "Accès à nos ressources d'apprentissage en ligne",
        "Évaluations régulières des progrès",
        "Plan d'apprentissage linguistique dédié adapté aux objectifs de votre enfant",
      ],
      link: {
        label: "Essai gratuit de 30 jours",
        href: "#",
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      "Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.",
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: "compare plans",
      items: [
        {
          title: "In vitae finibus",
        },
        {
          title: "Cras sollicitudin",
        },
        {
          title: "Suspendisse",
        },
        {
          title: "Vestibulum ornare",
        },
        {
          title: "In hendrerit",
        },
        {
          title: "Ut pharetra",
        },
      ],
    },
    {
      title: "basic",
      items: [
        {
          title: "Free 7-day trial",
        },
        {
          title: "Limited",
        },
        {
          title: "$29",
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Get started",
        href: "#",
      },
    },
    {
      title: "standard",
      items: [
        {
          title: "Free 15-day trial",
        },
        {
          title: "Unlimited",
        },
        {
          title: "$69",
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Get started",
        href: "#",
      },
    },
    {
      title: "premium",
      items: [
        {
          title: "Free 30-day trial",
        },
        {
          title: "Unlimited",
        },
        {
          title: "$199",
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Get started",
        href: "#",
      },
    },
  ],
};

// Comparison data Fr
export const comparisonDataFr: ComparisonProps = {
  header: {
    title: "Qu'est-ce qui est disponible pour chaque plan?",
    subtitle:
      "Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.",
  },
  columns: [
    {
      title: "Comparer les plans",
      items: [
        {
          title: "Dans vitae finibus",
        },
        {
          title: "Cras sollicitudin",
        },
        {
          title: "Suspendisse",
        },
        {
          title: "Vestibulum ornare",
        },
        {
          title: "Dans hendrerit",
        },
        {
          title: "Ut pharetra",
        },
      ],
    },
    {
      title: "Basique",
      items: [
        {
          title: "Essai gratuit de 7 jours",
        },
        {
          title: "Limité",
        },
        {
          title: "$29",
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Commencer",
        href: "#",
      },
    },
    {
      title: "Standard",
      items: [
        {
          title: "Essai gratuit de 15 jours",
        },
        {
          title: "Illimité",
        },
        {
          title: "$69",
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Commencer",
        href: "#",
      },
    },
    {
      title: "Premium",
      items: [
        {
          title: "Essai gratuit de 30 jours",
        },
        {
          title: "Illimité",
        },
        {
          title: "$199",
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: "Commencer",
        href: "#",
      },
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: "Get in Touch",
    subtitle: "We are here to help answer any questions you have ",
    highlight: "Contact",
  },
  content:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.",
  items: [
    {
      title: "Our Address",
      description: ["6 avenue Mohammed Khemisti, 2éme étage ", "Mostaganem"],
      icon: IconMapPin,
    },
    {
      title: "Contact",
      description: ["Mobile: +213 4541-6098", "Mail: polyglo27@gmail.com"],
      icon: IconPhoneCall,
    },
    {
      title: "Working hours",
      description: [
        "Monday - Thursday: 08:00 - 17:00",
        "Friday & saturday: 08:00 - 12:00",
      ],
      icon: IconClock,
    },
  ],
  form: {
    title: "Ready to Get Started?",
    inputs: [
      {
        type: "text",
        name: "name",
        placeholder: "Your name",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Your email address",
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: "textarea",
      placeholder: "Write your message...",
    },
    btn: {
      title: "Send Message",
      type: "submit",
    },
  },
};

// Contact data Fr
export const contactDataFr: ContactProps = {
  header: {
    title: "Contactez-nous",
    subtitle: "Nous sommes là pour répondre à toutes vos questions",
    highlight: "Contact",
  },
  content:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.",
  items: [
    {
      title: "Notre adresse",
      description: ["6 avenue Mohammed Khemisti, 2ème étage", "Mostaganem"],
      icon: IconMapPin,
    },
    {
      title: "Contact",
      description: [
        "Téléphone : +213 4541-6098",
        "E-mail : polyglo27@gmail.com",
      ],
      icon: IconPhoneCall,
    },
    {
      title: "Horaires de travail",
      description: [
        "Lundi - jeudi : 08:00 - 17:00",
        "Vendredi et samedi : 08:00 - 12:00",
      ],
      icon: IconClock,
    },
  ],
  form: {
    title: "Prêt à commencer ?",
    inputs: [
      {
        type: "text",
        name: "name",
        placeholder: "Votre nom",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Votre adresse e-mail",
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: "textarea",
      placeholder: "Écrivez votre message...",
    },
    btn: {
      title: "Envoyer le message",
      type: "submit",
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: "Get in Touch",
    subtitle: "In hac habitasse platea dictumst",
    highlight: "Contact",
  },
  content:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.",
  items: [
    {
      title: "Our Address",
      description: ["1230 Maecenas Street Donec Road", "New York, EEUU"],
      icon: IconMapPin,
    },
    {
      title: "Contact",
      description: ["Mobile: +1 (123) 456-7890", "Mail: tailnext@gmail.com"],
      icon: IconPhoneCall,
    },
    {
      title: "Working hours",
      description: [
        "Monday - Friday: 08:00 - 17:00",
        "Saturday & Sunday: 08:00 - 12:00",
      ],
      icon: IconClock,
    },
  ],
  form: {
    title: "Ready to Get Started?",
    description:
      "Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.",
    inputs: [
      {
        type: "text",
        label: "First name",
        name: "name",
        placeholder: "First name",
      },
      {
        type: "text",
        label: "Last name",
        name: "lastName",
        placeholder: "Last name",
      },
      {
        type: "email",
        label: "Email address",
        name: "email",
        placeholder: "Email address",
      },
    ],
    radioBtns: {
      label: "What is the reason for your contact?",
      radios: [
        {
          label: "General inquiries",
        },
        {
          label: "Technical help",
        },
        {
          label: "Claims",
        },
        {
          label: "Others",
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: "How can we help you?",
      name: "textarea",
      placeholder: "Write your message...",
    },
    checkboxes: [
      {
        label: "Have you read our privacy policy?",
        value: "",
      },
      {
        label: "Do you want to receive monthly updates by email?",
        value: "",
      },
    ],
    btn: {
      title: "Send Message",
      type: "submit",
    },
  },
};

// Contact2 data Fr
export const contact2DataFr: ContactProps = {
  header: {
    title: "Nous Contacter",
    subtitle: "In hac habitasse platea dictumst",
    highlight: "Contact",
  },
  content:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.",
  items: [
    {
      title: "Notre adresse",
      description: ["1230 rue Maecenas Donec", "New York, EEUU"],
      icon: IconMapPin,
    },
    {
      title: "Contact",
      description: ["Mobile: +1 (123) 456-7890", "Mail: tailnext@gmail.com"],
      icon: IconPhoneCall,
    },
    {
      title: "Horaires d'ouverture",
      description: [
        "Lundi - Vendredi: 08:00 - 17:00",
        "Samedi & Dimanche: 08:00 - 12:00",
      ],
      icon: IconClock,
    },
  ],
  form: {
    title: "Prêt à commencer?",
    description:
      "Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.",
    inputs: [
      {
        type: "text",
        label: "Prénom",
        name: "name",
        placeholder: "Prénom",
      },
      {
        type: "text",
        label: "Nom",
        name: "lastName",
        placeholder: "Nom",
      },
      {
        type: "email",
        label: "Adresse email",
        name: "email",
        placeholder: "Adresse email",
      },
    ],
    radioBtns: {
      label: "Quelle est la raison de votre contact?",
      radios: [
        {
          label: "Demande générale",
        },
        {
          label: "Assistance technique",
        },
        {
          label: "Réclamation",
        },
        {
          label: "Autre",
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: "Comment pouvons-nous vous aider?",
      name: "textarea",
      placeholder: "Écrivez votre message...",
    },
    checkboxes: [
      {
        label: "Avez-vous lu notre politique de confidentialité?",
        value: "",
      },
      {
        label: "Voulez-vous recevoir des mises à jour mensuelles par e-mail?",
        value: "",
      },
    ],
    btn: {
      title: "Envoyer",
      type: "submit",
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: "PolyGlo",
  links: [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  columns: [
    {
      title: "Product",
      links: [
        {
          label: "Features",
          href: "/",
        },
        {
          label: "Security",
          href: "/",
        },
        {
          label: "Team",
          href: "/",
        },
        {
          label: "Enterprise",
          href: "/",
        },
        {
          label: "Customer stories",
          href: "/",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Resources",
          href: "/",
        },
      ],
    },
    {
      title: "Platform",
      links: [
        {
          label: "Developer API",
          href: "/",
        },
        {
          label: "Partners",
          href: "/",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Docs",
          href: "/",
        },
        {
          label: "Community Forum",
          href: "/",
        },
        {
          label: "Professional Services",
          href: "/",
        },
        {
          label: "Skills",
          href: "/",
        },
        {
          label: "Status",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About",
          href: "/",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Careers",
          href: "/",
        },
        {
          label: "Press",
          href: "/",
        },
        {
          label: "Inclusion",
          href: "/",
        },
        {
          label: "Social Impact",
          href: "/",
        },
        {
          label: "Shop",
          href: "/",
        },
      ],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
    { label: "RSS", icon: IconRss, href: "#" },
    {
      label: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/onwidget/tailnext",
    },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{" "}
      <a
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="mailto:th.dev.design@gmail.com"
      >
        {" "}
        DevDz
      </a>{" "}
      · All rights reserved.
    </div>
  ),
};

// Footer data Fr
export const footerDataFr: FooterProps = {
  title: "PolyGlo",
  links: [
    {
      label: "Conditions générales",
      href: "/terms",
    },
    {
      label: "Politique de confidentialité",
      href: "/privacy",
    },
  ],
  columns: [
    {
      title: "Produit",
      links: [
        {
          label: "Fonctionnalités",
          href: "/",
        },
        {
          label: "Sécurité",
          href: "/",
        },
        {
          label: "Équipe",
          href: "/",
        },
        {
          label: "Entreprise",
          href: "/",
        },
        {
          label: "Témoignages de clients",
          href: "/",
        },
        {
          label: "Tarification",
          href: "/pricing",
        },
        {
          label: "Ressources",
          href: "/",
        },
      ],
    },
    {
      title: "Plateforme",
      links: [
        {
          label: "API développeur",
          href: "/",
        },
        {
          label: "Partenaires",
          href: "/",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Docs",
          href: "/",
        },
        {
          label: "Forum communautaire",
          href: "/",
        },
        {
          label: "Services professionnels",
          href: "/",
        },
        {
          label: "Compétences",
          href: "/",
        },
        {
          label: "État",
          href: "/",
        },
      ],
    },
    {
      title: "Société",
      links: [
        {
          label: "À propos",
          href: "/",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Carrières",
          href: "/",
        },
        {
          label: "Presse",
          href: "/",
        },
        {
          label: "Inclusion",
          href: "/",
        },
        {
          label: "Impact social",
          href: "/",
        },
        {
          label: "Boutique",
          href: "/",
        },
      ],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
    { label: "RSS", icon: IconRss, href: "#" },
    {
      label: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/onwidget/tailnext",
    },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Fabriqué par{" "}
      <a
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="mailto:th.dev.design@gmail.com"
      >
        {" "}
        DevDz
      </a>{" "}
      · Tous droits réservés.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  columns: [
    {
      title: "Address",
      texts: ["6 avenue Mohammed Khemisti", "2éme étage, Mostaganem"],
    },
    {
      title: "Phone",
      texts: ["Reception: +213 4541 6098", "Office: +213 4541 6098"],
    },
    {
      title: "Email",
      texts: ["Office: polyglo27@gmail.com", "Site: https://example.com"],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
    { label: "RSS", icon: IconRss, href: "#" },
    {
      label: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/Dev-Dz27",
    },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span
      //  className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"
      ></span>
      Made by{" "}
      <a
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="mailto:th.dev.design@gmail.com"
      >
        {" "}
        DevDz
      </a>{" "}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data Fr
export const footerData2Fr: FooterProps = {
  links: [
    {
      label: "Conditions d'utilisation",
      href: "/conditions",
    },
    {
      label: "Politique de confidentialité",
      href: "/confidentialite",
    },
  ],
  columns: [
    {
      title: "Adresse",
      texts: ["6 avenue Mohammed Khemisti", "2ème étage, Mostaganem"],
    },
    {
      title: "Téléphone",
      texts: ["Accueil: +213 4541 6098", "Bureau: +213 4541 6098"],
    },
    {
      title: "Email",
      texts: ["Bureau: polyglo27@gmail.com", "Site web: https://example.com"],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    {
      label: "Instagram",
      icon: IconBrandInstagram,
      href: "https://www.instagram.com/polyglo27",
    },
    {
      label: "Facebook",
      icon: IconBrandFacebook,
      href: "https://www.facebook.com/polyglo27/",
    },
    { label: "RSS", icon: IconRss, href: "#" },
    {
      label: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/Dev-Dz27",
    },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span
      //  className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"
      ></span>
      Réalisé par{" "}
      <a
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="mailto:th.dev.design@gmail.com"
      >
        {" "}
        DevDz
      </a>{" "}
      · Tous droits réservés.
    </div>
  ),
};
