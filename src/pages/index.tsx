import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  const heroImage = useBaseUrl('/img/android-learning.png');

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.eyebrow}>学习路线</p>
        <Heading as="h1" className={styles.heroTitle}>
          全栈学习笔记
        </Heading>
        <p className={styles.heroSubtitle}>
          像查教程一样学习编程基础、语言专题和应用开发。Java、Kotlin、Android、Compose 和 Flutter 各自独立成章。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            开始学习
          </Link>
          <Link className="button button--outline button--lg" to="/docs/flutter/overview">
            进入 Flutter
          </Link>
        </div>
      </div>
      <img className={styles.heroImage} src={heroImage} alt="Android 学习路线插图" />
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="全栈学习笔记"
      description="用于学习 Java、Kotlin、Android、Compose、Flutter 和全栈开发的中文静态文档站">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <p className={styles.sectionLabel}>学习顺序</p>
          <Heading as="h2">按专题学习，按项目串联。</Heading>
          <div className={styles.pathGrid}>
            <div>
              <span>01</span>
              <Heading as="h3">准备环境</Heading>
              <p>安装 Android Studio，确认 SDK、模拟器、Gradle 和 Flutter SDK 能稳定工作。</p>
            </div>
            <div>
              <span>02</span>
              <Heading as="h3">学习语言</Heading>
              <p>Java 和 Kotlin 分开成章，分别记录语法、面向对象、空安全和常用写法。</p>
            </div>
            <div>
              <span>03</span>
              <Heading as="h3">学习 Android</Heading>
              <p>理解 Activity、资源、生命周期、Compose 和 Flutter，用项目把语言能力落到应用里。</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <p className={styles.sectionLabel}>第一版内容</p>
          <Heading as="h2">每一节都保持可继续扩展。</Heading>
          <p className={styles.sectionText}>
            现在先放入学习骨架和示例文档。后续可以按章节追加代码片段、截图、练习题和踩坑记录。
          </p>
          <Link className="button button--secondary" to="/docs/compose/getting-started">
            进入 Compose
          </Link>
        </section>
      </main>
    </Layout>
  );
}
