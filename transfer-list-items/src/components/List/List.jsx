import React from 'react';

export default function List({ list }) {

    return list.length ? (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    ) : null;
}