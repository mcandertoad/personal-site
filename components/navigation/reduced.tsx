import Link from 'next/link'

import styles from "./styles.module.css"
import Tooltip from "@bit/mui-org.material-ui.tooltip"

const Reduced = ({ title, body, href, selected = false }) => {
  return (
    <Link
      href={href}
    >
      <div className={selected ? styles.reducedSelected : styles.reduced}>
        <Tooltip
          title={(
            <div
              className={styles.tooltipBody}
            >{body}</div>
          )}
        >
          <span>
            {title}
          </span>
        </Tooltip>
      </div>
    </Link>
  )
}

export default Reduced