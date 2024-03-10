"use client";
import { useState } from 'react';
import axios from 'axios'; // Make sure to import Axios

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  // Function to handle the input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to send the input text to the API and get the response using Axios
  const handleSubmit = async () => {
    // Define the API endpoint and parameters
    const apiUrl = "https://hekko123.azurewebsites.net/api/http_trigger12";
    const params = {
      code: 'NbklnD4Ct0wrBbMvLHnIh7kjienZD6elihDuPjUK6gNHAzFuZBKq9w==',
      name: inputText
    };

    try {
      // Use Axios to send a GET request
      const response = await axios.get(apiUrl, { params });
      // Assuming the API response's data is what you want to display
      setResponseText(JSON.stringify(response.data)); // Use JSON.stringify if the response data is an object
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setResponseText('Failed to fetch data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Send</button>
      <div>
        <p>Response:</p>
        <p>{responseText}</p>
      </div>
    </div>
  );
}
