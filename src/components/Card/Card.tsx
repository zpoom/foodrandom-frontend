import React from "react";
import "./Card.css";
interface CardProps {
  title: string;
  content: string;
}

export default ({ title, content }: CardProps) => {
  return (
    <div className="card-container">
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
  );
};
