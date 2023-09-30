import { FC, useState } from 'react'

import { installDapplet, unInstallDapplet } from 'services/userData/userData'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import SvgIcon from 'uikit/SvgIcon'
import { combineClasses as cc } from 'utils/combineClasses/combineClasses'

import styles from './InstallButton.module.css'

export enum InstallButtonMode {
  INSTALL = 'install',
  INSTALLED = 'installed',
  UNINSTALL = 'uninstall',
}

export interface InstallButtonProps {
  dappletId: string
  loading?: boolean
  disabled?: boolean
  mobile?: boolean
}

const InstallButton: FC<InstallButtonProps> = ({
  dappletId,
  loading = false,
  disabled = false,
  mobile = false,
}) => {
  const [unInstallMode, setUnInstallMode] = useState(false)
  const dispatch = useAppDispatch()

  const myDapplets = useAppSelector(state => state.userData.userDapplets)

  const targetMyDapplets = myDapplets.filter(
    dapplet => dapplet.dappletId === dappletId,
  )[0]

  const mode =
    targetMyDapplets && targetMyDapplets.dappletState
      ? unInstallMode
        ? InstallButtonMode.UNINSTALL
        : InstallButtonMode.INSTALLED
      : InstallButtonMode.INSTALL

  const onClick = () => {
    if (mode === InstallButtonMode.INSTALL)
      void dispatch(installDapplet(dappletId))

    if (mode === InstallButtonMode.UNINSTALL)
      void dispatch(unInstallDapplet(dappletId))
  }

  return loading ? (
    <div
      className={cc([
        styles.root,
        `${mobile ? styles['skeleton-mobile'] : styles['skeleton-desktop']}`,
      ])}
    ></div>
  ) : (
    <button
      type="button"
      data-testid="install-button"
      disabled={disabled}
      className={cc([
        styles.root,
        `${mobile ? styles.mobile : styles.desktop}`,
        styles[mode],
        `${disabled ? styles.disabled : ''}`,
      ])}
      onClick={onClick}
      onMouseEnter={() => setUnInstallMode(true)}
      onMouseLeave={() => setUnInstallMode(false)}
    >
      {mobile ? <SvgIcon icon={mode} /> : mode}
    </button>
  )
}

export default InstallButton
