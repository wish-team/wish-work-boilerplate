import useShouldShowPrompt from './useShouldShowPrompt'

const iosInstallPromptedAt = 'iosInstallPromptedAt'

const isIOS = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // navigator.standalone is Available on Apple's iOS Safari only, hence all the comments
  if (typeof window !== 'undefined' && navigator.standalone === true) {
    // user has already installed the app and accessing the website from the PWA
    return false
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof window !== 'undefined' && navigator.standalone === false) {
    // user opened the website in the browser and is using it there
    return true
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof window !== 'undefined' && typeof navigator.standalone === 'undefined') {
    // the user is not on an iPadOS or iOS device
    return false
  }

  return false
}

const useIosInstallPrompt = (): [boolean, () => void] => {
  const [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt] =
    useShouldShowPrompt(iosInstallPromptedAt)

  return [isIOS() && userShouldBePromptedToInstall, handleUserSeeingInstallPrompt]
}
export default useIosInstallPrompt
