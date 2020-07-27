import styled from "styled-components";

export const BreadcrumbStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 1.6rem auto;
  align-items: center;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: var(--gray);
  margin: 0 2rem;
  ${({ bold }) =>
    bold && {
      fontWeight: "bold",
    }}

  &:hover {
    cursor: pointer;
  }
`;
export const Step = styled.div`
  /* This should be a SVG */
  font-size: 1.4rem;
  color: var(--gray);
`;
