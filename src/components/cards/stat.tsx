import React from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import "./stat.scss";

interface StatCardProps {
  value: number | string;
  text: string;
  logo: JSX.Element;
  color: string;
}

function StatCard({ value, text, logo, color }: StatCardProps) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="stat"
    >
      <div className="stat__left">
        <h3>{value}</h3>
        <p>{text}</p>
      </div>
      <div className="stat__right">{logo}</div>
    </div>
  );
}

export default StatCard;
