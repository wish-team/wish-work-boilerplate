import { Typography, Box, Button, Modal } from '@mui/material'
import useIosInstallPrompt from 'enhancers/hooks/PWAHooks/useIosInstallPrompt'
import usePWANotSupportedPrompt from 'enhancers/hooks/PWAHooks/usePWANotSupportedPrompt'
import useWebInstallPrompt from 'enhancers/hooks/PWAHooks/useWebInstallPrompt'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const InstallPWA = () => {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt()
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] =
    useWebInstallPrompt()

  const [notifyUserAboutPWANotSupported, handleNotifcationDeclined] = usePWANotSupportedPrompt()

  if (!iosInstallPrompt && !webInstallPrompt && !notifyUserAboutPWANotSupported) return null

  return (
    <Modal open>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Install App
        </Typography>
        {iosInstallPrompt ? (
          <>
            <Typography>Tap Share then &quot;Add to Home Screen&quot;</Typography>
            <div>
              <Button onClick={handleIOSInstallDeclined}>Close</Button>
            </div>
          </>
        ) : webInstallPrompt ? (
          <div>
            <Button onClick={handleWebInstallAccepted}>Install</Button>
            <Button onClick={handleWebInstallDeclined}>Close</Button>
          </div>
        ) : notifyUserAboutPWANotSupported ? (
          <>
            <Typography variant="h4">
              It seems like you are on unsupported device, use safari on ios or chrome on desktop
            </Typography>
            <div>
              <Button onClick={handleNotifcationDeclined}>Close</Button>
            </div>
          </>
        ) : (
          ''
        )}
      </Box>
    </Modal>
  )
}

export default InstallPWA
