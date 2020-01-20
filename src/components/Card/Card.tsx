import React from "react";
import "./Card.css";
interface CardProps {
  title: string;
  content: string;
}

export default ({ title, content }: CardProps) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};
