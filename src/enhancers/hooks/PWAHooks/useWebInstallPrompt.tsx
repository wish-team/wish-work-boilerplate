import { useState, useEffect } from 'react'
import useShouldShowPrompt from './useShouldShowPrompt'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>

  prompt(): Promise<void>
}

const webInstallPromptedAt = 'webInstallPromptedAt'

const useWebInstallPrompt = (): [BeforeInstallPromptEvent | null, () => void, () => void] => {
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(
    null
  )
  const [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt] =
    useShouldShowPrompt(webInstallPromptedAt)

  useEffect(() => {
    const beforeInstallPromptHandler = (event: BeforeInstallPromptEvent) => {
      event.preventDefault()

      // check if user has already been asked
      if (userShouldBePromptedToInstall) {
        // store the event for later use
        setInstallPromptEvent(event)
      }
    }
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler as any)

    return () =>
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler as any)
  }, [userShouldBePromptedToInstall])

  const handleInstallDeclined = () => {
    handleUserSeeingInstallPrompt()
    setInstallPromptEvent(null)
  }

  const handleInstallAccepted = () => {
    // show native prompt
    installPromptEvent?.prompt()

    // decide what to do after the user chooses
    installPromptEvent?.userChoice.then((choice) => {
      // if the user declined, we don't want to show the prompt again
      if (choice.outcome !== 'accepted') {
        handleUserSeeingInstallPrompt()
      }
      setInstallPromptEvent(null)
    })
  }
  return [installPromptEvent, handleInstallDeclined, handleInstallAccepted]
}
export default useWebInstallPrompt
