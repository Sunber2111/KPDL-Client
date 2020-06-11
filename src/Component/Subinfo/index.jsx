import React from "react";
import "./style.css";
import { Label } from "semantic-ui-react";

const colors = ["red", "yellow", "green", "teal", "twitter"];

const Subinfo = ({ context, color }) => {
  const gennerateContext = () => {
    let str = [];
    if (context) {
      str.push(<h5>{context[0]}</h5>);
      for (let i = 1; i <= context.length - 1; i++) {
        str.push(
          <p key={i} className="mb-1">
            {[
              <Label color={colors[i - 1]}>{context[i].split("%", 1)}%</Label>,
              context[i].slice(3, context[i].length),
            ]}
          </p>
        );
      }
    }
    return str;
  };

  return (
    <div
      className="subinfo pl-3 pr-0 py-1"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      {gennerateContext()}
    </div>
  );
};

export default Subinfo;
