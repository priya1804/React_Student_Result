import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && marks) {
      const newResult = { name, marks };
      setResults([...results, newResult]);
      setName('');
      setMarks('');
    }
  };

  return (
    <div className="container">
      <h1>Student Result Management</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit">Add Result</button>
      </form>

      <h2>Results</h2>
      <ul className="results">
        {results.map((result, index) => (
          <li key={index}>
            {result.name} - {result.marks} Marks
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
