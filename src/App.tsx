import "./App.css";
import { Countries, User } from "./User";
import { UserProvider } from "./UserContextProvider";

// let name: string = "Stu";
// let age: number = 34;
// let isMarried: boolean = true;
// let ages: number[] = [1, 2, 3, 4, 5];
// let person: any = 3;

function App() {
  const fetchUser = () => ({ name: "Stu", age: 39, isMarried: false });
  const userFetched = fetchUser();

  return (
    <UserProvider>
      <User
        name={userFetched.name}
        age={userFetched.age}
        isMarried={userFetched.isMarried}
        country={Countries.Brazil}
      />

      <User
        name={"Katie"}
        age={32}
        isMarried={true}
        country={Countries.UnitedStates}
      />
    </UserProvider>
  );
}

export default App;
