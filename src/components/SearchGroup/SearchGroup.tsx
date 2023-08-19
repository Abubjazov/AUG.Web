import { FC } from 'react'

// import DateSwitcher from 'uikit/DateSwitcher'
import SearchInput from 'uikit/SearchInput'
import SelectSwitcher from 'uikit/SelectSwitcher'
import { combineClasses as cc } from 'utils/combineClasses'

import styles from './SearchGroup.module.css'

interface SearchGroupProps {
  userStyles?: string
}

const SearchGroup: FC<SearchGroupProps> = ({ userStyles = '' }) => {
  return (
    <div className={cc([styles.root, userStyles])}>
      <SearchInput placeholder={'Search'} />

      {/* <DateSwitcher userStyles={styles['margin']} /> */}

      <SelectSwitcher userStyles={styles['margin']} />
    </div>
  )
}

export default SearchGroup