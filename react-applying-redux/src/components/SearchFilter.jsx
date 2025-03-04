import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../features/searchSlice';

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Watermelon'];

function SearchFilter() {
    const query = useSelector((state) => state.search.query);
    const dispatch = useDispatch();

    // Proper filtering logic with return
    const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <div>
                Search:
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => dispatch(setQuery(e.target.value))}
                />
            </div>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
