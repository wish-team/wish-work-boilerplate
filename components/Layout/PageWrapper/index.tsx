import styled from '@emotion/styled'

// Styles
const Root = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const Content = styled.div`
  position: relative;
  margin-top: 8rem;
`

// Components
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Root>
    <Content>{children}</Content>
  </Root>
)

export default PageWrapper
