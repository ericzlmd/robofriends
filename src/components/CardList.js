import React from "react";
import Card from "./Card";

const CardList = ({ robots }) =>
  robots.map((robot) => {
    const { id, name, username, email } = robot;
    return <Card key={id} name={name} username={username} email={email} />;
  });

export default CardList;
