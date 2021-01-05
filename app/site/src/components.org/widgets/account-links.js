import React from 'react'
import Link from 'next/link'

const AccountLinks = () => {
  const items = [
    {
      url: '/',
      name: 'Today'
    },
    {
      url: '/',
      name: 'This week'
    },
    {
      url: '/',
      name: 'This month'
    },
    {
      url: '/',
      name: 'This year'
    }
  ]

  return (
    <div className="flex flex-col w-full">
      <ul className="list-none">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.url}>
              <a className="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-grey-100 dark:bg-grey-895 dark:hover:bg-grey-890">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccountLinks
