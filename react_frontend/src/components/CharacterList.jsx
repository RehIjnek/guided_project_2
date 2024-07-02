import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CharacterList = (props) => {
    const [data, setData] = useState([]);
    let navigate = useNavigate();

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
                console.error('Error fetching characters:', error);
            }
        };

        fetchData();
    });

    return (
        <>
            <section id="charactersList">
                {
                    data.map((character) => (
                        <div key={character.id} onClick={() => navigate(`/characters/${character.id}`)}>
                           {character.name}
                        </div>
                    ))
                }
            </section >
=======

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