import React from "react";

interface HelloProps {
  name: string;
  age: number;
  address?: string;
  email: string;
  handleClick: (name: string) => void;
}

export const Hello: React.FC<HelloProps> = ({
  name,
  age,
  address = "no address",
  email,
  handleClick
}) => {
  return (
    <div>
      <ul onClick={() => handleClick(name)}>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Address: {address}</li>
        <li> Email: {email}</li>
      </ul>
    </div>
  );
};
