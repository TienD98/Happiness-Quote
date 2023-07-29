//quote.js
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchAuthor } from './quoteSlice';
import { getAPI } from './quoteAPI';
import { useEffect } from 'react';

export function Quote() {

    const dispatch = useDispatch();
    const quoteValue = useSelector((state) => state.quote.data);
    const authorValue = useSelector((state) => state.quote.author);
    const handleOnClick = () => {
        getAPI().then((response) => {
            dispatch(fetchData(response.data[0].quote));
            dispatch(fetchAuthor(response.data[0].author));
        });
    }

    useEffect(() => {
        handleOnClick();
    },
        // eslint-disable-next-line 
        []);

    return (
        <div className='custom container d-flex justify justify-content-center align-items-center' style={{ minHeight: "100vh" }} id="quote-box">
            <div className="shadow-lg row card text-center border border-white rounded-5 border-opacity-25" style={{ background: "#DCD6F7" }}>
                <div className="col p-3">
                    <p className="card-text blockquote" id="text" style={{ color: '#424874' }}>{quoteValue}</p>
                    <p className="card-text blockquote-footer" id="author">{authorValue}</p>
                    <button onClick={handleOnClick} type='button' className='btn btn-primary my-2'>New Quote</button>
                    <a href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote">
                        <br />
                        <i className="fa-brands fa-square-twitter fa-2xl"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Quote;