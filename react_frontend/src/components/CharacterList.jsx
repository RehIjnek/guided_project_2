import React from "react";
import { useEffect, useState } from "react";

const CharacterList = () => {
    const [data, setData] = useEffect([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_CHARACTERS_API_URL}`);
            if (!response.ok) {
              throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response);
          } catch (error) {
            console.error('Error fetching socks:', error);
          }
        };
    
        fetchData();
      }, [page]);

    return (
        <>
            {data.map((character) => (
                    <div></div>
                ))}
        </>
    )
};

export default CharacterList;