//quote.js
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchAuthor } from './quoteSlice';
import { getAPI } from './quoteAPI';
import Tweet from '../components/Tweet';
import { useEffect } from 'react';
import Button from '../components/Button'

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

    return(
        <div className='d-flex justify-content-center' id="quote-box">
            <div className="card text-center" style={{width: "18rem"}}>
                <div className="card-body">
                    <p className="card-text blockquote" id="text">{quoteValue}</p>
                    <p className="card-text blockquote-footer" id="author">{authorValue}</p>
                    <Button onclick={handleOnClick} label="New Quote" />
                    <Tweet />
                </div>
            </div>
        </div>
    )
}

export default Quote;