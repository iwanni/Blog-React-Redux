import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
        delectus praesentium vel laudantium suscipit iure asperiores quaerat
        consequuntur illum, fugit sequi porro veritatis odio at eligendi commodi
        atque rerum. Architecto.
      </p>
    </div>
  );
};

export default Rainbow(About);
