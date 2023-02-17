import "./HomePage.css";

import { useState } from "react";
import Button from "../../components/Button/Button";
import Topic from "../../components/Topic/Topic";

const HomePage = ({ visibility }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const expandClick = (value) => {
    setIsReadMore(value);
  };

  return (
    <div className={`${visibility} home-page`}>
      <Topic
        title={"Welcome to Art Museum"}
        description={
          "An exceptional opportunity to experience – and meet! – the works of world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein and the others!"
        }
      />
      <Topic
        title={"What is Modern Art Museum?"}
        description={
          "one of the largest private virtual art collections, the museum collection consists of artworks dating from the 1960s to this day. It includes around 6 000 works of modern and contemporary art. In 2011 the collection was officially recognized as being of “national significance."
        }
        visibility={!isReadMore}
      />

      {isReadMore === false && (
        <Button text={"Read more"} onClick={expandClick} buttonInfo={true} />
      )}

      {isReadMore === true && (
        <Button text={"See Less"} onClick={expandClick} buttonInfo={false} />
      )}
    </div>
  );
};

export default HomePage;
