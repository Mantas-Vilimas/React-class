import "./Topic.css";

const Topic = ({ title, description, visibility }) => {
  return (
    <div className="topic" hidden={visibility}>
      <h2 className="topic-title">{title}</h2>
      <p className="topic-description">{description}</p>
    </div>
  );
};

export default Topic;
