import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  width: 100%;
`;
export const SearchBox = styled.input`
  width: 100%;
  height: auto;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.4rem 0 0 0.4rem;
  color: var(--gray);

  &:focus {
    outline: none;
  }
`;
export const SearchIconBox = styled.div`
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: var(--grayLight);

  &:hover {
    cursor: pointer;
  }
`;
export const SearchIcon = styled.img`
  display: flex;
`;
