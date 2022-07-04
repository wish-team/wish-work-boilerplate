import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
// import Footer  from '../Footer';
// import Header from '../Header';
// import Container from 'components/Layout/Container';
// import Button from 'components/Button';

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
const PageWrapper = ({ children }) => (
  <Root>
    <Content>{children}</Content>
  </Root>
)

// Props
PageWrapper.propTypes = {
  children: PropTypes.node,
}

PageWrapper.defaultProps = {
  children: null,
}

export default PageWrapper
