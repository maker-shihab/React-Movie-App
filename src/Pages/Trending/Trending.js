import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaginationContent from '../../Components/PaginationContent/PaginationContent';
import SingleContent from '../../Components/SingleContent/SingleContent';
import './Trending.css';

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        setContent(data.results);
    };
    useEffect(() => {
        fetchTrending();
    }, [page])
    return (
        <section className='page-area'>
            <Container>
                <h1 className='pageTitle'>TRENDING THIS WEEK</h1>
                <div className='trending'>
                    {
                        content && content.map((c) => <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}                           
                        />)
                    }
                </div>
            </Container>
            <PaginationContent setPage={setPage}/>
        </section>
    );
};

export default Trending;