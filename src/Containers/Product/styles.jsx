import styled from "styled-components";

export const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Position = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
`;
export const Picture = styled.div`
  display: flex;
  min-width: 68rem;
  max-width: 68rem;
  max-height: 68rem;
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 0 0 0;
  width: 100%;
  align-items: flex-end;
  text-align: right;
`;
export const Condition = styled.div`
  text-transform: capitalize;
  font-size: 1.4rem;
  margin: 0 0 1.6rem 0;
  color: var(--gray);
`;
export const Name = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
`;
export const Price = styled.div`
  font-size: 4.6rem;
  margin: 3.2rem 0;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  border-radius: 0.4rem;
  background-color: var(--secundary);
  font-size: 1.6rem;
  color: var(--white);
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;
  max-width: 80rem;
`;
export const Title = styled.div`
  font-size: 2.8rem;
`;
export const Description = styled.div`
  font-size: 1.6rem;
  margin: 3.2rem 0;
  color: gray;
`;
