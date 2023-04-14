import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Styled components</h1>
        <Button>Test</Button>
      </div>
    </>
  );
}

export default App;
