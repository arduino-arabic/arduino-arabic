// @ts-check
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 1. إعدادات الموقع الأساسية
  title: 'منصة أردوينو بالعربي',
  tagline: 'تعلم الإلكترونيات والبرمجة من الصفر',
  url: 'https://arduino-arabic.github.io', 
  baseUrl: '/arduino-arabic/', 
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'arduino-arabic', 
  projectName: 'arduino-arabic', 
  deploymentBranch: 'gh-pages',

  // 2. إعدادات اللغة
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar-EG',
      },
    },
  },

  // استدعاء الخط العربي
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Tajawal:wght@400;500;700&display=swap',
      },
    },
  ],

  // 3. الإعدادات المسبقة (Presets)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // ❌ تم إخفاء زر التعديل
          // editUrl: '...', 
          
          // ❌ تم إخفاء آخر تحديث واسم المؤلف
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false, // ❌ تم تعطيل المدونة بالكامل
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // 4. إعدادات المظهر (Theme Config)
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      
      // إعدادات الشريط العلوي (Navbar)
      navbar: {
        title: 'أردوينو بالعربي',
        logo: {
          alt: 'Arduino Logo',
          src: 'img/logo.svg',
        },
        items: [
          // 👇 الرابط الوحيد المتبقي: الدروس
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 الدروس',
          },
          // تم حذف GitHub و Blog
        ],
      },
      
      // إعدادات ذيل الصفحة (Footer)
      footer: {
        style: 'dark',
        links: [
          {
            title: 'تصفح',
            items: [
              {
                label: 'ابدأ التعلم من هنا',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'تواصل معنا',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://facebook.com',
              },
            ],
          },
        ],
        copyright: `حقوق النشر © ${new Date().getFullYear()} منصة أردوينو بالعربي.`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['cpp', 'arduino'],
      },
    }),
};

module.exports = config;