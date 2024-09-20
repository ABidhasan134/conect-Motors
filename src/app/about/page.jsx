"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    // {cache:'no-store'}
    fetch('http://localhost:3000/time',{revalidate: 5})
      .then((response) => response.json())
      .then((data) => {
        setDate(data.currentTime);
      })
      .catch((error) => {
        console.error("Error fetching time:", error);
      });
  }, []);

  return (
    <div className='grid'>
      <p>About page is here</p>
      <p>Current Time: {date ? date : "Loading..."}</p>
      <Link href="/about/history">History</Link>
      <Link href="/about/misson">Mission</Link>
    </div>
  );
};

export default AboutPage;
