import styled from 'styled-components';


export const ButtonLoad = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 120px;
  background: linear-gradient(#cecece, #1b4992);
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%),
    0 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  &:focus {
    background: linear-gradient(#cecece, #003b99);
  }
`;
