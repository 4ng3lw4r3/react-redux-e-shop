import { useState } from 'react';
import SearchVhs from '../components/SearchVhs';
import OneVhs from '../components/OneVhs';

const Vhs = () => {
    const [moviesFromApi, setMoviesFromApi] = useState([]);

    const setResults = (movies) => {
        setMoviesFromApi(movies);
    }

    return (
        <div className='Main'>
            <SearchVhs setResults={setResults}/>
            <OneVhs moviesFromApi={moviesFromApi} />
        </div>
    );
}

export default Vhs
