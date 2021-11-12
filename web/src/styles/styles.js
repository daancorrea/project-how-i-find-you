import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  ::-webkit-scrollbar{
    width: 5px;        
  }
  ::-webkit-scrollbar-thumb{
    background: rgba(0,0,0,0.3);
    
  }
  ::-webkit-scrollbar-track{
    background: transparent;
  }
  @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */  
}
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
}
`;
