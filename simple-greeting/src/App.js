import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Page from "./components/Page/Page";
import ImageSection from "./components/ImageSection/ImageSection";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleText = (text) => setText(text);

  return (
    <div className="App">
      <Container>
        <Header />
        <Page>
          <ImageSection />
          <Button onClick={handleText} />
          <Paragraph text={text} />
        </Page>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
