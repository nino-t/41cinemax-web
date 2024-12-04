import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
`

export const Title = styled.h1`
  margin-bottom: 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`
