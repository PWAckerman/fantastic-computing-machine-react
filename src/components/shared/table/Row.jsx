import React from 'react';
import Cell from './Cell';

const Row = ({row}) => {
    return (
        <tr>{ Object.keys(row).map((key) => <Cell value={row[key]} />) }</tr>
    )
}

export default Row;
