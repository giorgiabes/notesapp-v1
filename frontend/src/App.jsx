const App = (props) => {
  const { notes } = props;
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold underline mb-4">Notes</h1>
      <ul className="pl-5 list-none">
        <li className="mb-5">{notes[0].content}</li>
        <li className="mb-5">{notes[1].content}</li>
        <li className="mb-5">{notes[2].content}</li>
      </ul>
    </div>
  );
};

export default App;