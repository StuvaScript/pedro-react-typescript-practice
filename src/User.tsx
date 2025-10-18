interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: CountryType;
}

//* **`` Avoid enums in a node.js environment
// export enum Countries {
//   Brazil = "Brazil",
//   France = "France",
//   India = "India",
//   UnitedStates = "United States",
// }

//* **`` Enums don't compile into Javascript in a node.js environment. Replace them with the following two export statements (export not necessary)

//* **`` The object mimicking an enum
export const Countries = {
  Brazil: "Brazil",
  France: "France",
  India: "India",
  UnitedStates: "United States",
} as const; //* <-- This makes the object "read only" and immutable

//* **`` The assignable type. This turns the above object into a union of the it's own values.
export type CountryType = (typeof Countries)[keyof typeof Countries];

export function User(props: Props) {
  // const { addUser, updateUser, deleteUser } = useContext(UserContext);

  // const [personBio, setPersonBio] = useState<string | null>(null);
  // const [isShowInfo, setShowInfo] = useState<boolean>(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPersonBio(event.target.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person is {props.isMarried ? "married" : "single"}</p>
      <p>Country of origin: {props.country}</p>
    </div>
  );
}
