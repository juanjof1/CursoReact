import React from "react";
// import { Calculator } from './Calculator';
import { Counter } from "./components/counter";
// import { Container } from './Container';
// import { HelloClass } from './HelloClass';
import { Hello } from "./components/Hello";
import { Wrapper } from "./components/Wrapper";

export type User = {
  name: string;
  age: number;
  email: string;
  address: string;
};

const App: React.FC = () => {
  const users: User[] = [
    {
      name: "Salvador",
      age: 30,
      email: "salvador@ucreativa.com",
      address: "San Jose"
    },
    {
      name: "Amanda",
      age: 34,
      email: "amanda@ucreativa.com",
      address: "San Jose"
    },
    {
      name: "Lester",
      age: 20,
      email: "lester@ucreativa.com",
      address: "San Jose"
    }
  ];
  const filteredUsers = users.filter((user) => user.age < 30);
  const totalAge = users.reduce(
    (prevUser, currentUser) => prevUser + currentUser.age,
    0
  );
  const ageMessage =
    totalAge <= 20
      ? "Personas muy jovenes"
      : totalAge <= 60
      ? "Persona menores a 40 anos"
      : "Personas";

  const handleUser = (name: string) => console.log("Click en usuario", name);

  return (
    <React.Fragment>
      <h2>Lista de Usuarios</h2>
      {/* {users.map((user) => <Hello key={user.email} name={user.name} age={user.age} email={user.email}/>)} */}
      <p>
        Edad total {totalAge} {ageMessage}
      </p>
      <h3>Lista de Usuarios Menores a 30 años</h3>
      {filteredUsers.map((user) => (
        <Hello
          handleClick={(name: string) => handleUser(name)}
          key={user.email}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}
      {/* <HelloClass name={'Salvador'} age={30} email={'salvador@ucreativa.com'} address={'San Jose'} /> */}
      {/* <Hello name={'Ariel'} age={28} email={'ariel@ucreativa.com'} /> */}
      {/* <Container users={users}/> */}
      {/* <Calculator/> */}

      <Wrapper>
        <Counter />
        <p>Hola! Este es un ejemplo de un elemento children</p>
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
