import React, { useState } from 'react';
import List from '../List/List';

function TransferLists() {

    const initialList = [
        {
            id: 1,
            title: `Task 1`
        },
        {
            id: 2,
            title: `Task 2`
        },
        {
            id: 3,
            title: `Task 3`
        },
        {
            id: 4,
            title: `Task 4`
        }
    ];

    const [list1, setList1] = useState(initialList);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);

    const handleTransfer = (listFrom, setListFrom, listTo, setListTo) => {
        setListTo([listFrom[0], ...listTo]);
        setListFrom(listFrom.slice(1));
    };

    const handleRemove = (listRemove, setListRemove) => {
        setListRemove(listRemove.slice(0, -1));
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <List list={list1} />
                        <button
                            disabled={list1.length === 0}
                            onClick={() => handleTransfer(list1, setList1, list2, setList2)}>
                            Transfer first to right
                        </button>
                    </td>
                    <td>
                        <List list={list2} />
                        <button
                            disabled={list2.length === 0}
                            onClick={() => handleTransfer(list2, setList2, list1, setList1)}>
                            Transfer first to left
                        </button>
                        <button
                            disabled={list2.length === 0}
                            onClick={() => handleTransfer(list2, setList2, list3, setList3)}>
                            Transfer first to right
                        </button>
                    </td>
                    <td>
                        <List list={list3} />
                        <button
                            disabled={list3.length === 0}
                            onClick={() => handleRemove(list3, setList3)}>
                            Remove last item
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TransferLists;