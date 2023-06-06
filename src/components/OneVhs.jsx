import React, { useState } from 'react'
import VhsModal from './VhsModal';

const OneVhs = (props) => {

    const items = props.moviesFromApi.Search
    const [modalOpen, setOpenModal] = useState(false);
    const [chosen, setChosen] = useState([]);

    const getMovie = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&i=${id}`);
        const movie = await response.json()
        setOpenModal(true);
        setChosen(movie)
    }

    return (
        <div className=''>
            <div className=''> 
                {
                    items?items.map(item => {
                        return(
                            <div key={item.id} className=''>
                                <h2 className=''>{item.Type}</h2>
                                <h2 className=''>{item.Title}</h2>
                                <img src={item.Poster} alt={item.title} className=''></img>
                                <h2 className=''>{item.Year}</h2>
                                <button className="btn" onClick={() => getMovie(item.imdbID)}>MORE</button>

                            </div>
                        )
                    }):""
                }

            </div>

            {modalOpen && <VhsModal setOpenModal={setOpenModal} chosen={chosen} />} 

        </div>


    )
}

export default OneVhs