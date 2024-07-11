import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/tours');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data.data); // Assuming data is structured with a 'data' key containing an array of user objects
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Photo</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{user.title}</td>
              <td className="px-4 py-2">{user.address}</td>
              <td className="px-4 py-2">
                <img src={user.photo} alt={user.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-4 py-2">{user.desc}</td>
              <td className="px-4 py-2">{user.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
