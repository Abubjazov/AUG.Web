import { FC } from 'react'

import MyTags from 'components/TagsGroup'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setDappletSettingsState } from 'store/slices/layoutSlice'
import CreateInput from 'uikit/CreateInput'
import { SmartTagMode } from 'uikit/SmartTag/SmartTag'
import SvgIcon from 'uikit/SvgIcon'
import WorkingOn from 'uikit/WorkingOn'
import { combineClasses as cc } from 'utils/combineClasses'
import { useResize } from 'utils/hooks/useResize'

import styles from './DappletSettings.module.css'

interface DappletSettingsProps {
  windowInner?: boolean
}

const DappletSettings: FC<DappletSettingsProps> = ({ windowInner }) => {
  const windowInnerWidth = useResize()

  const { dappletSettingsOpened } = useAppSelector(state => state.layout)
  const myTags = useAppSelector(state => state.myTags.tags)
  const communityTags = useAppSelector(state => state.communityTags.tags)

  const dispatch = useAppDispatch()

  const arrowButtonClickHandler = () => {
    dispatch(setDappletSettingsState(!dappletSettingsOpened))
  }

  return (
    <div className={cc([styles.root])}>
      {!windowInner && (
        <div
          className={cc([
            styles['arrow-button'],
            dappletSettingsOpened ? '' : styles['ds-closed'],
          ])}
          onClick={arrowButtonClickHandler}
        >
          <SvgIcon icon={'arrowLeft'} />
        </div>
      )}

      {windowInnerWidth > 880 && (
        <>
          <span
            className={cc([
              styles.title,
              dappletSettingsOpened ? '' : styles['title-ds-closed'],
            ])}
          >
            Dapplet Settings
          </span>

          <CreateInput
            userStyles={styles['margin-top-30']}
            title={'Create new list'}
            placeholder={'List Name'}
            menuOpened={dappletSettingsOpened}
          />
        </>
      )}

      <CreateInput
        userStyles={styles['margin-top-60']}
        title={'New tag'}
        placeholder={'Tag Name'}
        menuOpened={dappletSettingsOpened}
      />

      <MyTags
        userStyles={styles['margin-top-60']}
        menuOpened={dappletSettingsOpened}
        tags={myTags}
        title={'My tags'}
        tagMode={SmartTagMode.MY_TAG}
        titleUppercase
      />

      <MyTags
        userStyles={styles['margin-top-60']}
        menuOpened={dappletSettingsOpened}
        tags={communityTags}
        title={'Community tags'}
        tagMode={SmartTagMode.COMMUNITY_TAG}
        titleUppercase
      />

      {windowInnerWidth > 880 && (
        <WorkingOn
          dsOpened={dappletSettingsOpened}
          userStyles={styles['margin-top-60']}
        />
      )}
    </div>
  )
}

export default DappletSettings