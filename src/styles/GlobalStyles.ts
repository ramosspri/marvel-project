import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

a {
  color: inherit;
  text-decoration: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
  
button {
  cursor: pointer;
}

html, body, #root {
    background-color: var(--gray1);
    font-family: 'Marvel', 'Syne', 'Darker Grotesque';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
:root {
    --red-marvel: #ED1D24;
    --red: #BF0615;
    --black1: #0D0D0D;
    --black2: #080808;
    --gray1: #201D1E;
    --gray2: #262626;
    --gray3: #BFBFBF;
    --white1: #F0F0F0;
    --white2: #FFFFFF;

  }
/* .HomeGradient {
  background-image: -webkit-linear-gradient(210deg, var(--gray1) 65%, var(--red) 35%);
} */
  @font-face {
    font-family: "Marvel";
    src: local("Marvel"),
     url("../../public/Marvel Regular.ttf") format("truetype");
    font-weight: bold;
    }

`;
