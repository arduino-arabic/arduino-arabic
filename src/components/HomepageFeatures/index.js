import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// 1. استيراد الأيقونات من مكتبة Lucide-React
import { BookOpen, CircuitBoard, Users } from 'lucide-react'; 

const FeatureList = [
  {
    // 2. تحديث العنوان والوصف باللغة العربية
    title: 'تعلم الأردوينو بالعربي',
    // 3. استبدال Svg بمكون Icon
    Icon: BookOpen, 
    description: (
      <>
        نوفر شروحات كاملة ومبسطة باللغة العربية الفصحى، بدءاً من الأساسيات في البرمجة والإلكترونيات وصولاً إلى الاحتراف.
      </>
    ),
  },
  {
    title: 'مشاريع عملية متقدمة',
    Icon: CircuitBoard, 
    description: (
      <>
        ركز على التطبيق العملي. كل درس مصحوب بمشاريع حقيقية يمكنك تنفيذها لتثبيت المعلومة واكتساب الخبرة العملية.
      </>
    ),
  },
  {
    title: 'مجتمع نشط وداعم',
    Icon: Users, 
    description: (
      <>
        انضم لمجتمعنا لمشاركة الأسئلة، طلب الدعم التقني، وتبادل الخبرات مع مبرمجين ومهندسين عرب مهتمين بمجال المتحكمات الدقيقة.
      </>
    ),
  },
];

// 4. تعديل دالة Feature لتقبل Icon بدلاً من Svg
function Feature({Icon, title, description}) { 
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* 5. استخدام مكون الأيقونة المُستورد */}
        <Icon className={styles.featureSvg} role="img" size={64} /> 
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}