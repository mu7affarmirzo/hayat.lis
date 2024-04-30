import styled from 'styled-components'

export const CustomLink = styled.a<{ $active?: boolean }>`
  /* Adapt the colors based on active prop */
  background: ${(props) => (props.$active ? '#64B6F7' : 'white')};
  color: ${(props) => (props.$active ? 'white' : '#00000061')};
  padding: 15px 20px;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: 0.1px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`
