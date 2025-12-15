import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {
  BookOpen,
  Cpu,
  Activity,
  Rocket,
} from 'lucide-react';

export default function Home() {
  return (
    <Layout
      title="تعلم الأردوينو بالعربي"
      description="منصة عربية لتعلم الأردوينو من الصفر حتى الاحتراف"
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>تعلم الأردوينو بالعربي</h1>
            <p>
              منصة تعليمية عربية لتعلم الإلكترونيات والبرمجة باستخدام
              الأردوينو خطوة بخطوة مع أمثلة ومشاريع عملية.
            </p>

            <div className={styles.buttons}>
              <a className={styles.primaryBtn} href="/docs/intro">
                ابدأ التعلم
              </a>
              <a className={styles.secondaryBtn} href="/docs">
                تصفح المحتوى
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/img/arduino.png"
              alt="Arduino Board"
              className={styles.heroImg}
            />
          </div>
        </section>

        {/* Cards */}
        <section className={styles.cards}>
          <a href="/docs/intro" className={styles.card}>
            <BookOpen size={34} />
            <h3>ابدأ هنا</h3>
            <p>تعرف على الأردوينو والأدوات الأساسية.</p>
            <span>⏱️ 10 دقائق</span>
          </a>

          <a href="/docs" className={styles.card}>
            <Cpu size={34} />
            <h3>المداخل والمخارج</h3>
            <p>تعلم Digital و Analog و PWM.</p>
            <span>⏱️ 20 دقيقة</span>
          </a>

          <a href="/docs" className={styles.card}>
            <Activity size={34} />
            <h3>الحساسات</h3>
            <p>الحرارة، الحركة، والموجات فوق الصوتية.</p>
            <span>⏱️ 15 دقيقة</span>
          </a>

          <a href="/docs" className={styles.card}>
            <Rocket size={34} />
            <h3>المشاريع</h3>
            <p>طبّق ما تعلمته في مشاريع حقيقية.</p>
            <span>⏱️ 30 دقيقة</span>
          </a>
        </section>
      </main>
    </Layout>
  );
}
