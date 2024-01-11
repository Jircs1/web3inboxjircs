import React from 'react'

import cn from 'classnames'

const WalletConnectIcon: React.FC<{ hoverable: boolean }> = ({ hoverable }) => {
  return (
    <svg
      className={cn(`wc-icon`, hoverable && 'wc-icon-hoverable')}
      fill="none"
      viewBox="0 0 40 28"
    >
      <path
        d="M10.5511 7.83202C15.7696 2.72266 24.2305 2.72266 29.449 7.83202L30.077 8.44694C30.3379 8.70241 30.3379 9.1166 30.077 9.37207L27.9286 11.4756C27.7981 11.6033 27.5866 11.6033 27.4561 11.4756L26.5918 10.6294C22.9513 7.06497 17.0488 7.06497 13.4082 10.6294L12.4826 11.5356C12.3522 11.6633 12.1406 11.6633 12.0102 11.5356L9.86172 9.43208C9.60079 9.17661 9.60079 8.76242 9.86172 8.50695L10.5511 7.83202ZM33.8922 12.1823L35.8043 14.0545C36.0652 14.3099 36.0652 14.7241 35.8043 14.9796L27.1824 23.4213C26.9215 23.6768 26.4984 23.6768 26.2375 23.4213L20.1182 17.43C20.0529 17.3661 19.9472 17.3661 19.8819 17.43L13.7628 23.4213C13.5018 23.6768 13.0788 23.6768 12.8179 23.4213L4.19569 14.9795C3.93477 14.724 3.93477 14.3098 4.19569 14.0543L6.10783 12.1822C6.36875 11.9267 6.7918 11.9267 7.05272 12.1822L13.1721 18.1736C13.2374 18.2375 13.3431 18.2375 13.4084 18.1736L19.5275 12.1822C19.7884 11.9267 20.2114 11.9267 20.4723 12.1822L26.5918 18.1736C26.657 18.2375 26.7628 18.2375 26.828 18.1736L32.9473 12.1823C33.2082 11.9268 33.6313 11.9268 33.8922 12.1823Z"
        fill="url(#paint0_linear_3380_25787)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3380_25787"
          x1="33.5"
          y1="32.5"
          x2="7"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAFBFF" />
          <stop offset="1" stopColor="#2EAFE7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WalletConnectIcon
