// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arduino Arabic',
  tagline: 'تعلم الأردوينو بالعربي من الصفر حتى الاحتراف',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production URL
url: 'https://arduino-arabic.github.io',
baseUrl: '/arduino-arabic/',

  // GitHub deployment
  organizationName: 'arduino-arabic',
  projectName: 'arduino-arabic',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 🌍 Arabic + RTL (REAL RTL)
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
        htmlLang: 'ar',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          editUrl:
            'https://github.com/arduino-arabic/arduino-arabic/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: 'مدونة Arduino Arabic',
          blogDescription: 'مقالات ونصائح حول الأردوينو والإلكترونيات',
          showReadingTime: true,
          editUrl:
            'https://github.com/arduino-arabic/arduino-arabic/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    // 🌗 Dark / Light mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // 🧭 Navbar (Arabic RTL)
    navbar: {
      hideOnScroll: true,
      title: 'Arduino Arabic',
      logo: {
        alt: 'Arduino Arabic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'الدروس',
        },
        {
          to: '/blog',
          label: 'المدونة',
          position: 'right',
        },
        {
          href: 'https://github.com/arduino-arabic/arduino-arabic',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },

    // 🦶 Footer (Arabic)
    footer: {
      style: 'dark',
      links: [
        {
          title: 'المحتوى',
          items: [
            {
              label: 'الدروس',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'المجتمع',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arduino-arabic',
            },
          ],
        },
        {
          title: 'المزيد',
          items: [
            {
              label: 'المدونة',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Arduino Arabic`,
    },

    // 🔦 Code Highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp', 'c'],
    },

    // 🔍 SEO
    metadata: [
      {
        name: 'keywords',
        content:
          'arduino, تعليم, برمجة, الكترونيات, عربي, arduino arabic, embedded',
      },
    ],
  },
};

export default config;
