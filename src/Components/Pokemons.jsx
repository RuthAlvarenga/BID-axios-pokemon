import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import '../App.css'

export const Pokemons = () => {

    const [pokemonlist, setPokemonlist] = useState([]);
    const buscarDatos = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
            console.log(response);
            setPokemonlist(response.data.results.map((pokemon)=>pokemon.name));
        })
    }
    return (
        <>
            <button className='btn' onClick={buscarDatos}>Obtener Pokémon</button>
            <ul className='ul'>
                {
                    pokemonlist.map((pokemon, indice) => <li key={indice}>{pokemon}</li>)
                }
            </ul>
        </>
    )
}