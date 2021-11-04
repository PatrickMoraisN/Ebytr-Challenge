import { createGlobalStyle } from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --green: #33cc95;
  --text-title: #141414;
  --text-body: #141414;
  --white: #fff;
  --purple: #6633cc;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--background);
  -webkit-font-smoothing: antialiased; // fonte mais "limpa"
  font-family: Poppins;
}
body, input, textarea, button {
  font-family: Poppins;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
  font-family: Poppins;
  font-weight: 600;
}
`;
