import "./App.css";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Main from "./Components/Main/Middle";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Div className="App">
      <Header />
      <Main />
      <Footer />
    </Div>
  );
}

export default App;
const Div = styled.div``;
