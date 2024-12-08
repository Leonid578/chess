import React from 'react'
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell:cell}) => {
    return (
        <div className='cell'>
           
        </div>
    )
}

export default CellComponent