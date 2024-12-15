import { TabProps } from './Tabs.interface'

const Tabs: React.FC<TabProps> = ({
  activeTab,
  tabs,
  onTabChange,
  className = ''
}) => {
  const handleTabClick = (tab: string) => {
    onTabChange(tab)
  }

  const selectedTab = tabs?.find((tab) => tab.key === activeTab)
  return (
    <>
      <div
        className={`inline-flex rounded-full bg-gray-100 p-1 mb-4 ${className}`}
      >
        {tabs?.map(({ key, label }) => (
          <button
            onClick={() => handleTabClick(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === key
                ? 'bg-yellow-600 text-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {selectedTab?.element}
    </>
  )
}

export default Tabs
