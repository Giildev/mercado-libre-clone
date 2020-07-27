import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  //Color Palette
  --primary: #FFE600; 
  --secundary: #3483FA;
  --black: #333333;
  --grayDark: #666666;
  --gray: #999999;
  --grayLight: #EEEEEE;
  --white: #fff;
}

body {
  min-height: 100vh;
  background-color: var(--grayLight);
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit; 
  text-decoration: inherit;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
