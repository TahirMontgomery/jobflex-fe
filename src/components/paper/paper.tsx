import React from "react";
import { Paper as PaperWrapper } from "@material-ui/core";
import "./paper.scss";
interface PaperProps {
  children?: JSX.Element;
  title: String;
}

function Paper({ children, title }: PaperProps) {
  return (
    <PaperWrapper
      style={{
        marginTop: "25px",
      }}
      variant="outlined"
      elevation={0.8}
    >
      <div className="paper__wrapper">
        <h2 className="wrapper__header">{title}</h2>
        {children}
      </div>
    </PaperWrapper>
  );
}

export default Paper;
