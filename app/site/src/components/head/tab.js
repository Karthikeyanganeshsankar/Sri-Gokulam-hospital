import React, {useState} from 'react'
import PropTypes from 'prop-types'
export const UnderlinedTabs = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-wrap flex-col w-full tabs">
      <div className="flex lg:flex-wrap flex-row lg:space-x-2">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={
                openTab === tab.index
                  ? 'tab tab-underline tab-active'
                  : 'tab tab-underline'
              }
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

UnderlinedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}


