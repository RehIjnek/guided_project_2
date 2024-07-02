import React from "react";
import { useEffect, useState } from "react";

const CharacterList = (props) => {
    const [data, setData] = useState([]);

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
                        <div key={character.id} onClick={() => this.props.history.push(`/characters/${character.id}`)}>
                            {character.name}
                        </div>
                    ))
                }
            </section >
        </>
    )
};

export default CharacterList;