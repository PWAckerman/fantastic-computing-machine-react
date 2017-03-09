import React from 'react';
import TableHeader from './TableHeader';
import Row from './Row';
import ColumnGroup from './ColumnGroup';

const Table = ({tableData}) => {
    var keys = Object.keys(tableData[0]);
    return (
        <div>
            <table>
                <ColumnGroup columns={keys}/>
                <TableHeader columns={keys}/>
                <tbody>{tableData.map((row)=> <Row row={row}/>)}</tbody>
            </table>
        </div>
    )
}

export default Table;
