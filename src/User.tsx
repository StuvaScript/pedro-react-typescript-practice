export function User(props: Props) {
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
    </div>
  );
}
