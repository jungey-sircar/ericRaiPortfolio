const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "safari",
    name: "Channel",
    icon: "safari.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
    showOnMobile: false,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
    showOnMobile: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "nerds.games",
    title:
      "A gaming hub for nerds — explore games, reviews, and everything in the gaming world.",
    image: "/images/blog-nerds-games.png",
    link: "https://nerds.games",
  },
  {
    id: 2,
    date: "erai.com.np",
    title:
      "My personal brand and digital presence — projects, services, and stories from Nepal.",
    image: "/images/blog-erai.png",
    link: "https://erai.com.np",
  },
  {
    id: 3,
    date: "Eric Perspectives",
    title:
      "Watch my latest videos on YouTube — tech, perspectives, and stories from Nepal.",
    image: "/images/blog1.png",
    link: "https://www.youtube.com/@ericperspectives",
  },
  {
    id: 4,
    date: "TikTok • @jungey_sircar",
    title: "Short-form takes, behind-the-scenes clips, and creative experiments.",
    image: "/images/blog2.png",
    link: "https://www.tiktok.com/@jungey_sircar",
  },
  {
    id: 5,
    date: "Instagram • @jungey_sircar",
    title: "Snapshots from life, work, and everything in between.",
    image: "/images/blog3.png",
    link: "https://instagram.com/jungey_sircar",
  },
];

const techStack = [
  {
    category: "Full Stack Web",
    items: ["React", "Next.js", "Node.js", "FastAPI"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Flutter"],
  },
  {
    category: "Data Science",
    items: ["Python", "Pandas", "NumPy", "Jupyter"],
  },
  {
    category: "AI / ML",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain"],
  },
  {
    category: "BI & Dashboards",
    items: ["Power BI", "Tableau", "Metabase", "Plotly"],
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "MongoDB", "Docker", "Git"],
  },
];

const socials = [
  {
    id: 1,
    text: "nerds.games",
    icon: "/icons/globe.svg",
    bg: "#7c3aed",
    link: "https://nerds.games",
  },
  {
    id: 2,
    text: "erai.com.np",
    icon: "/icons/globe.svg",
    bg: "#f97316",
    link: "https://erai.com.np",
  },
  {
    id: 3,
    text: "YouTube",
    icon: "/icons/youtube.svg",
    bg: "#ff0033",
    link: "https://www.youtube.com/@ericperspectives",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: "https://www.linkedin.com/in/voidman-eric-1ab90313b/",
  },
  {
    id: 5,
    text: "Upwork",
    icon: "/icons/upwork.svg",
    bg: "#14a800",
    link: "https://www.upwork.com/freelancers/~01d77cf8ad1a56027c",
  },
  {
    id: 6,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#1877f2",
    link: "https://www.facebook.com/sangpang.eric",
  },
  {
    id: 7,
    text: "TikTok",
    icon: "/icons/tiktok.svg",
    bg: "#010101",
    link: "https://www.tiktok.com/@jungey_sircar",
  },
  {
    id: 8,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#e1306c",
    link: "https://instagram.com/jungey_sircar",
  },
  {
    id: 9,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#333333",
    link: "https://github.com/jungey-sircar",
  },
  {
    id: 10,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#f4656b",
    link: "mailto:voidmaneric@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/voidman.jpg",
  },
  {
    id: 2,
    img: "/images/voidman-2.jpg",
  },
  {
    id: 3,
    img: "/images/voidman-3.jpg",
  },
  {
    id: 4,
    img: "/images/eric.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1 — OrderFlow Shop
    {
      id: 5,
      name: "OrderFlow Shop",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-8",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "OrderFlow Shop — a full-stack e-commerce & order management platform built for speed and scale.",
            "Seamless shopping experience with real-time order tracking, inventory management, and analytics dashboards.",
            "Designed and shipped end-to-end: storefront UI, payment integration, admin panel, and fulfillment pipeline.",
            "Live at: orderflow.shop",
          ],
        },
        {
          id: 2,
          name: "live-site.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://orderflow.shop",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-orderflow.png",
        },
      ],
    },

    // Project 2 — Mobile App
    {
      id: 6,
      name: "Mobile App Development",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[22vh] left-8",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Cross-platform mobile apps that feel native on both iOS and Android.",
            "I ship clean, fast React Native & Flutter apps — from MVP to App Store / Play Store release.",
            "Push notifications, offline-first storage, native modules, and smooth 60fps animations included.",
            "Built with: React Native, Expo, Flutter, Firebase, REST APIs.",
          ],
        },
        {
          id: 2,
          name: "case-study.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.upwork.com/freelancers/~01d77cf8ad1a56027c",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // Project 3 — ERAI (AI / ML)
    {
      id: 7,
      name: "ERAI — AI / ML Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[39vh] left-8",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ERAI — an AI/ML dashboard and analytics platform powering intelligent decision-making.",
            "Built with ML pipelines, predictive models, and real-time data visualizations for actionable insights.",
            "From churn prediction to demand forecasting — clean dashboards that turn raw data into growth.",
            "Live at: erai.com.np",
          ],
        },
        {
          id: 2,
          name: "live-site.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://erai.com.np",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-erai.png",
        },
      ],
    },

    // Project 5 — Games
    {
      id: 9,
      name: "Games — nerds.games",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-40",
      windowPosition: "top-[5vh] left-48",
      children: [
        {
          id: 1,
          name: "Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "nerds.games — a gaming hub built for nerds, by a nerd.",
            "Explore games, reviews, leaderboards, and everything in the gaming world.",
            "A community-driven platform for gamers who take their hobby seriously.",
            "Live at: nerds.games",
          ],
        },
        {
          id: 2,
          name: "live-site.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nerds.games",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-games.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "eric.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/eric.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet Eric — Freelancer from Nepal",
      image: "/images/eric.jpg",
      description: [
        "Hey! I'm Eric Rai 👋 — a freelance developer & creator based in Nepal.",
        "I build full-stack web apps, mobile apps, AI/ML dashboards, and Business Intelligence solutions for clients around the world.",
        "When I'm not shipping code, I'm sharing perspectives, ideas, and stories on YouTube, TikTok, and Instagram.",
        "Always up for an interesting project — let's build something that matters.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "old-portfolio.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "draft.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
