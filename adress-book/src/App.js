import AdressBookForm from "./components/AdressBookForm/AdressBookForm";
import Container from "./components/Container/Container";
import { useState } from "react";
import AddressBookList from "./components/AddressBookList/AddressBookList";

function App() {
  const [list, setList] = useState([]);

  const updateList = (value) => {
    const newList = [...list, value];
    setList(newList);
  };

  return (
    <div className="App">
      <Container>
        <AdressBookForm onSubmit={updateList} />
        <AddressBookList list={list} />
      </Container>
    </div>
  );
}

export default App;
