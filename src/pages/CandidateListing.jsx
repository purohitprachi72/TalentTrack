import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CandidateListing = () => {
  const [candidates, setCandidates] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://60d5a2c2943aa60017768b01.mockapi.io/candidate'
        );

        setCandidates(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = 50; // Adjust the item height as needed
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(container.clientHeight / itemHeight),
      candidates.length - 1
    );

    // Render only the visible items
    // You may want to store the rendered items in state to trigger a re-render
    for (let i = startIndex; i <= endIndex; i++) {
      // Render candidate item
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ overflowY: 'auto', height: '400px' }} // Set a fixed height for the container
      onScroll={handleScroll}
    >
      <button>add new</button>
      <h2>CandidateListing</h2>
      {candidates.map((candidate) => (
        <Link key={candidate.id} to={candidate.id} state={{ candidateData: candidate }}>
          <h2>{candidate.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CandidateListing;
