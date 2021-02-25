import Link from 'next/link'

import Tooltip from "@bit/mui-org.material-ui.tooltip"

const Reduced = ({ title, body, href, selected = false }) => {
  return (
    <Link
      href={href}
    >
      <div>
        <Tooltip
          title={(
            <div>{body}</div>
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