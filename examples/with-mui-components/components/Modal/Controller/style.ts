import styled from '@emotion/styled';

export const Root = styled.div`
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background-color: '#38a2f3',
    border: '2px solid #000',
    box-shadow: 24,
    padding: ${p => p.theme.spacing(2)};
`
