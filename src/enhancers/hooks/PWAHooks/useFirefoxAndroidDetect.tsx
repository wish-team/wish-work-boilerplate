import useShouldShowPrompt from './useShouldShowPrompt'

const IsItFirefoxOnAndroid = 'FirefoxOnAndroid'

const isItFirefoxAndroid = () => {
  // Firefox on Android supports PWA Installation BUT does not have a BeforeInstallPromptEvent
  // so I'm resorting to using userAgent
  if (typeof navigator !== 'undefined' && /Android.+Firefox\//.test(navigator.userAgent)) {
    return true
  }

  return false
}

const useFirefoxAndroidDetect = (): [boolean, () => void] => {
  const [notifyUserAboutPWA, handleUserSeeingNotifcation] =
    useShouldShowPrompt(IsItFirefoxOnAndroid)

  return [isItFirefoxAndroid() && notifyUserAboutPWA, handleUserSeeingNotifcation]
}
export default useFirefoxAndroidDetect
