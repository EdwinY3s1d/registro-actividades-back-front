import React, { useState, useEffect } from "react";
import "./home.css";

function Activity() {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5500/") // replace with your server's address
      .then((response) => response.json())
      .then((data) => setActivities(data.body))
      .then(() => {
        console.log("Success:", activities);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <div class="card-content-home">
      {activities && (
        <table style={{width: '50%'}}>
          <thead>
            <tr>
              <th style={{color: 'white'}}>ID</th>
              <th style={{color: 'white'}}>Email</th>
              <th style={{color: 'white'}}>Activity</th>
              <th style={{color: 'white'}}>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td style={{color: 'white'}}>{activity.id}</td>
                <td style={{color: 'white'}}>{activity.email}</td>
                <td style={{color: 'white'}}>{activity.activity}</td>
                <td style={{color: 'white'}}>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
</div>
  );
}

export default Activity;
