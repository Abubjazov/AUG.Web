import { FC, useState } from 'react'

import SingInForm from 'components/SingInForm'
import SingUpForm from 'components/SingUpForm'
import BaseButton from 'uikit/BaseButton'
import { BaseButtonMode } from 'uikit/BaseButton/BaseButton'

import styles from './WelcomeModalContent.module.css'

export enum ERenderMode {
  WELCOME = 'welcome',
  LOGIN = 'login',
  REGISTRATION = 'registration',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WelcomeModalContentProps {}

const WelcomeModalContent: FC<WelcomeModalContentProps> = () => {
  const [renderMode, setRenderMode] = useState<ERenderMode>(ERenderMode.WELCOME)

  const setRenderModeToWelcom = () => {
    setRenderMode(ERenderMode.WELCOME)
  }

  const renderWelcome = () => (
    <div className={styles['root']}>
      <span className={styles.title}>Welcome</span>

      <span className={styles.text}>
        We are building an Augmented Web platform consisting of a browser-based
        plugin and decentralized applications (dapplets) based on crypto
        technologies.
      </span>

      <span className={styles.text}>
        Our platform is created on an open-source basis and is available to
        developers from all over the world.
      </span>

      <div className={styles.buttons}>
        <BaseButton
          label={'Sign up'}
          mode={BaseButtonMode.CONTAINED_RED}
          onClick={() => setRenderMode(ERenderMode.REGISTRATION)}
        />

        <BaseButton
          label={'Sign in'}
          onClick={() => setRenderMode(ERenderMode.LOGIN)}
        />
      </div>
    </div>
  )

  return (
    <>
      {renderMode === ERenderMode.WELCOME && renderWelcome()}

      {renderMode === ERenderMode.LOGIN && (
        <SingInForm userFunction={setRenderModeToWelcom} />
      )}

      {renderMode === ERenderMode.REGISTRATION && (
        <SingUpForm userFunction={setRenderModeToWelcom} />
      )}
    </>
  )
}

export default WelcomeModalContent
