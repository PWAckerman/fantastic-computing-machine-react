import React from 'react';

const ColumnGroup = ({columns}) => {
    return (
        <colgroup>
            {columns.map((column)=> <col className="custom-column"></col>)}
        </colgroup>
    )
}

export default ColumnGroup;
