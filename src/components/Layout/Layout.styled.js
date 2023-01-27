import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Container = styled.div`
  padding: 16px;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #020930;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: #f74f07;
  }

  :hover {
    text-decoration: underline;
    color: #f74f07;
  }
`;