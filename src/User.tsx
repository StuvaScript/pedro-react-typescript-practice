interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = "Brazil",
  France = "France",
  India = "India",
  UnitedStates = "United States",
}

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
