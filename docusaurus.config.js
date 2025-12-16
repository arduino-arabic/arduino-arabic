// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// 1️⃣ استدعاء مكتبة الثيمات بالطريقة الصحيحة (لتجنب أخطاء التثبيت)
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  // =======================================================
  // 💡 إعدادات الموقع الأساسية
  // =======================================================
  title: 'منصة أردوينو بالعربي',
  tagline: 'تعلم الإلكترونيات والبرمجة من الصفر وحتى الاحتراف',
  url: 'https://arduino-arabic.github.io', // رابط موقعك (عدله عند الرفع)
  baseUrl: '/arduino-arabic/',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // إعدادات النشر على GitHub Pages
  organizationName: 'arduino-arabic', 
  projectName: 'arduino-arabic', 
  deploymentBranch: 'gh-pages',

  // =======================================================
  // 💡 إعدادات اللغة (تعريب الموقع)
  // =======================================================
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        label: 'العربية',
        direction: 'rtl', // اتجاه المحتوى العام (يمين-يسار)
        htmlLang: 'ar-EG',
      },
    },
  },

  // استدعاء الخط العربي (Tajawal) من Google Fonts
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap',
      },
    },
  ],

  // =======================================================
  // 💡 الإعدادات المسبقة (Presets)
  // =======================================================
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // رابط تعديل الصفحات (يمكنك تغييره لرابط المستودع الخاص بك)
          editUrl: 'https://github.com/arduino-arabic/arduino-arabic/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/arduino-arabic/arduino-arabic/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // استدعاء ملف CSS المعدل
        },
      }),
    ],
  ],

  // =======================================================
  // 💡 إعدادات المظهر (Theme Config)
  // =======================================================
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // صورة المعاينة عند مشاركة الرابط على السوشيال ميديا
      image: 'img/docusaurus-social-card.jpg',
      
      navbar: {
        title: 'أردوينو بالعربي',
        logo: {
          alt: 'Arduino Logo',
          src: 'img/logo.svg', // تأكد من وجود الشعار في مجلد static/img
        },
        // العناصر في الشريط العلوي
        // ملاحظة: الـ CSS يجبر الشريط على اتجاه LTR (شعار يسار)
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left', // سيظهر بجانب الشعار (في اليسار)
            label: '📚 الدروس',
          },
          {
            to: '/blog', 
            label: '📰 المدونة', 
            position: 'left' // سيظهر بجانب الدروس
          },
          {
            href: 'https://github.com/arduino-arabic/arduino-arabic',
            label: 'GitHub',
            position: 'right', // سيظهر في أقصى اليمين
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'المحتوى',
            items: [
              {
                label: 'ابدأ التعلم',
                to: '/docs/intro',
              },
              {
                label: 'المدونة',
                to: '/blog',
              },
            ],
          },
          {
            title: 'المجتمع',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://facebook.com',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
            ],
          },
          {
            title: 'المزيد',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/arduino-arabic/arduino-arabic',
              },
            ],
          },
        ],
        copyright: `حقوق النشر © ${new Date().getFullYear()} منصة أردوينو بالعربي. تم البناء بواسطة Docusaurus.`,
      },
      
      prism: {
        // الثيمات التي قمنا باستيرادها في الأعلى
        theme: lightCodeTheme, // ثيم GitHub الفاتح
        darkTheme: darkCodeTheme, // ثيم Dracula الداكن
        
        // اللغات الإضافية التي نحتاج تلوينها في الأكواد
        additionalLanguages: ['cpp', 'arduino'], 
      },
    }),
};

module.exports = config;