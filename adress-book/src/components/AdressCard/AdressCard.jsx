import "./AdressCard.css";

const AdressCard = ({ list }) => {
  const contact = list.map((person, index) => {
    return (
      <div key={person.phone + index} className="adress-card">
        <p>First name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
        <p>Phone: {person.phone}</p>
      </div>
    );
  });

  return <>{contact}</>;
};

export default AdressCard;
