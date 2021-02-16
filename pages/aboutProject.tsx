import Link from 'next/link'

import Layout from "../components/layout"
import Navigation from "../components/navigation"

import styles from "../styles/aboutProject.module.css"

export default function AboutProject() {
  return (
    <Layout>
      <Navigation />
      <article>
        <h2>Technology</h2>
        <ul
          className={styles.aboutList}
        >
          <li>This project was created using <a target="_blank" href="https://nextjs.org/"><code>NextJS</code></a>.</li>
          <li>The source code is located in <a target="_blank" href="https://github.com/mcandertoad/personal-site"><code>GitHub</code></a>.</li>
          <li>I am using <a target="_blank" href="https://bit.dev/mui-org/material-ui/tooltip"><code>@bit/mui-org.material-ui.tooltip</code></a> as a tooltip component.</li>
          <li>The <Link href="/experience"><a><code>experience</code></a></Link> section is generated statically at build-time with the help of <a target="_blank" href="https://github.com/remarkjs/remark/tree/main/packages/remark"><code>remark</code></a> and <a target="_blank" href="https://github.com/jonschlinkert/gray-matter"><code>gray-matter</code></a></li>
        </ul>
        <h3>
          Why NextJS?
        </h3>
      </article>
    </Layout>
  )
}