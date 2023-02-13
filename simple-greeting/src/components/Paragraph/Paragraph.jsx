import "./Paragraph.css";

const Paragraph = ({ text }) => {
  return (
    <section>
      <p className="text">{text}</p>;
    </section>
  );
};

export default Paragraph;
