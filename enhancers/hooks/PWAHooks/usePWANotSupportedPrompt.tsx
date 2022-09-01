import useShouldShowPrompt from './useShouldShowPrompt'

const PWANotSupported = 'PWANotSupported'

const isPWASupported = () => {
  if (typeof window !== 'undefined' && !('BeforeInstallPromptEvent' in window)) {
    // User is on a device that does not support PWA Installation
    return false
  }

  return true
}

const usePWANotSupportedPrompt = (): [boolean, () => void] => {
  const [notifyUserAboutPWA, handleUserSeeingNotifcation] = useShouldShowPrompt(PWANotSupported)

  return [!isPWASupported() && notifyUserAboutPWA, handleUserSeeingNotifcation]
}
export default usePWANotSupportedPrompt
