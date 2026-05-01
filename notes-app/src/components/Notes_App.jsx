import { useState } from "react";

const Notes_App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copy = [...task];
    copy.splice(idx, 1);
    setTask(copy);
  };

  return (
    <div className="app-container">

  {/* LEFT */}
  <div className="left-panel">
    <form onSubmit={submitHandler}>
      <h1>Add Notes</h1>

      <input
        type="text"
        placeholder="Enter Notes Heading"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write details..."
        className="form-control"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <button className="btn">Add Note</button>
    </form>
  </div>

  <div className="divider"></div>

  {/* RIGHT */}
  <div className="right-panel">
    <h2 className="notes-header">Recent Notes</h2>

    <div className="notes-grid">
      {task.map((elem, idx) => (
        <div key={idx} className="note-card">
          <h3>{elem.title}</h3>
          <p>{elem.details}</p>

          <button onClick={() => deleteNote(idx)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>

</div>
  );
};

export default Notes_App;