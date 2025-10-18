import "./App.css";
import { User } from "./User";

// let name: string = "Stu";
// let age: number = 34;
// let isMarried: boolean = true;
// let ages: number[] = [1, 2, 3, 4, 5];
// let person: any = 3;

function App() {
  const fetchUser = () => ({ name: "Stu", age: 39, isMarried: false });
  const userFetched = fetchUser();

  return (
    <>
      <User
        name={userFetched.name}
        age={userFetched.age}
        isMarried={userFetched.isMarried}
      />

      <User name={"Katie"} age={32} isMarried={true} />
    </>
  );
}

export default App;
