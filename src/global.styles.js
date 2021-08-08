import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.App {
    text-align: center;
  }
  
  body{

    font-family: 'Noto Sans JP', sans-serif;
  
    @media screen and (max-width:800px){
        padding:10px;
    }
  }
  
  
   .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } 
  
`