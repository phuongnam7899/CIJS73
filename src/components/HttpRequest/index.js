import { useEffect, useState } from "react"
import axios from 'axios'

const Loading = () => {
    return <div>Loading...</div>
}

export const HttpRequest = () => {
    const [pokes, setPokes] = useState([]);
    const [loading, setLoading] = useState(false);
    const getPokes = () => {
        // const data = fetch('https://pokeapi.co/api/v2/pokemon');
        // console.log(data);

        fetch('https://pokeapi.co/api/v2/pokemon').then((res) => {
            return res.json();
        }).then((data) => {
            setPokes(data.results);
        })
    }
    useEffect(() => {
        getPokes();
    }, [])
    const getPokeAsync = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await res.json();
        setPokes(data.results);
    }
    const getPokeAxios = async () => {
        setLoading(true);
        try {
            const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setLoading(false);
            setPokes(data.data.results);
        } catch (err) {
            console.log(err)
        }
    }
    return <div>
        <button onClick={getPokes}>Get Pokes</button>
        {loading && <Loading/>}
        {
            pokes.map((poke) => {
                return <div>{poke.name}</div>
            })
        }
    </div>
}