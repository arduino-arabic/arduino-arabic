import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// مكون رأس الصفحة (Hero Header)
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* عنوان الموقع الرئيسي */}
        <h1 className="hero__title" style={{ fontFamily: 'Tajawal, sans-serif' }}>
          {siteConfig.title}
        </h1>
        
        {/* الوصف المختصر */}
        <p className="hero__subtitle" style={{ fontFamily: 'Tajawal, sans-serif' }}>
          {siteConfig.tagline}
        </p>
        
        {/* أزرار الدعوة لاتخاذ إجراء (CTA) */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 ابدأ رحلة التعلم من هنا - مجاناً
          </Link>
        </div>
      </div>
    </header>
  );
}

// المكون الرئيسي للصفحة
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`الرئيسية | ${siteConfig.title}`}
      description="منصة عربية مفتوحة المصدر لتعلم الأردوينو والإلكترونيات <head />">
      <HomepageHeader />
      <main>
        {/* استدعاء ميزات الموقع (الأعمدة الثلاثة) */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}