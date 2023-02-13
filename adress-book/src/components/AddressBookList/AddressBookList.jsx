import AdressCard from "../AdressCard/AdressCard";
import AdressGrid from "../AdressGrid/AdresssGrid";

const AddressBookList = (props) => {
  return (
    <AdressGrid>
      <AdressCard list={props.list} />
    </AdressGrid>
  );
};

export default AddressBookList;
