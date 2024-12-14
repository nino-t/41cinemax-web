import React from 'react'

import { Search } from 'lucide-react'

import Button from '../../atoms/Button'
import Flexbox from '../../atoms/Flexbox'
import { SearchBoxProps } from './SearchBox.interface'
import InputField from '@/components/atoms/InputField'

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  placeholder = 'Search Film...',
  className = ''
}) => {
  const [searchValue, setSearchValue] = React.useState('')

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Flexbox align="center" className={`relative overflow-hidden ${className}`}>
      <InputField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="pr-12 !w-[300px]"
      />
      <div className="absolute right-0">
        <Button
          onClick={handleSearch}
          variant="text"
          className="p-2 rounded-md"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </Flexbox>
  )
}

export default SearchBox
