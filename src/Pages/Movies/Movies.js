import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginationContent from '../../Components/PaginationContent/PaginationContent';
import SingleContent from '../../Components/SingleContent/SingleContent';
import './Movies.css';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();


    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
    }, [page]);
    return (
        <section className='page-area'>
            <Container>
                <h1 className='pageTitle'>TRENDING THIS WEEK</h1>
                <div className='allMovies'>
                    {
                        content && content.map((c) => <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="Movie"
                            vote_average={c.vote_average}
                        />)
                    }
                </div>
            </Container>
            {numOfPages > 1 && (
                <PaginationContent setPage={setPage} numOfPages={numOfPages} />
            )}
        </section>
    );
};

export default Movies;