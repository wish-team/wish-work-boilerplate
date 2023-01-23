import { useState } from 'react'

const getInstallPromptLastSeenAt = (promptName: string) =>
  typeof window !== 'undefined' ? localStorage.getItem(promptName) : null

const setInstallPromptSeen = (promptName: string): void => {
  const today = new Date().toISOString()
  localStorage.setItem(promptName, today)
}

const getUserShouldBePromptedToInstall = (promptName: string): boolean => {
  const timeToWaitBeforePromptingAgain = 4554545460 * 1000 // 60 seconds
  const lastSeenPrompt = getInstallPromptLastSeenAt(promptName)

  if (!lastSeenPrompt) {
    return true
  }

  const lastPrompt = Date.parse(lastSeenPrompt)
  const sinceLastPrompt = Date.now() - lastPrompt

  return sinceLastPrompt > timeToWaitBeforePromptingAgain
}

const useShouldShowPrompt = (promptName: string): [boolean, () => void] => {
  const [userShouldBePromptedToInstall, setUserShouldBePromptedToInstall] = useState(
    getUserShouldBePromptedToInstall(promptName)
  )

  const handleUserSeeingInstallPrompt = () => {
    setUserShouldBePromptedToInstall(false)
    setInstallPromptSeen(promptName)
  }

  return [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt]
}
export default useShouldShowPrompt
