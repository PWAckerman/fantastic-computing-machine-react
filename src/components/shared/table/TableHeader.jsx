import React from 'react';
import ColumnHeader from './ColumnHeader';

const TableHeader = ({columns})=>{
    return (
        <thead>
        <tr>{columns.map((column, inx)=> <ColumnHeader key={inx} column={column}/>)}</tr>
        </thead>
    )
}

export default TableHeader;
