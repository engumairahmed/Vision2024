import React, { useEffect, useState } from "react";
import axios from "axios";

export const ContactSubmissions=()=> {
  const viteURL = import.meta.env.VITE_URL;
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch the contact submissions when the component is mounted
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`${viteURL}/contactus-submissions`);
        setSubmissions(response.data); // Set the submissions data from the API response
      } catch (error) {
        console.error("Error fetching contact submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Submissions</h1>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Message</th>
            <th className="py-2 px-4 border-b">User Type</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {submissions.length === 0 ? (
            <tr>
              <td colSpan="7" className="py-4 text-center text-gray-500">
                No submissions found.
              </td>
            </tr>
          ) : (
            submissions.map((submission) => (
              <tr key={submission._id}>
                <td className="py-2 px-4 border-b">{submission.name}</td>
                <td className="py-2 px-4 border-b">{submission.email}</td>
                <td className="py-2 px-4 border-b">{submission.phone}</td>
                <td className="py-2 px-4 border-b">{submission.subject}</td>
                <td className="py-2 px-4 border-b">{submission.message}</td>
                <td className="py-2 px-4 border-b">{submission.userType}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(submission.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}


