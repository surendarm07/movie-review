import { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/reviews")
      .then(res => setData(res.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Movie</th>
          <th>Rating</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.phone}</td>
            <td>{r.movie}</td>
            <td>{r.rating}</td>
            <td>{r.review}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default AdminPanel;