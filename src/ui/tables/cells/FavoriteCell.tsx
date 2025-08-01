'use client'
import TableCell from '@mui/material/TableCell';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export const FavoriteCell: React.FC<{id: string}> = ({
  id,
}) => {
  return (
    <TableCell>
      <button
        className="cursor-pointer"
        onClick={() => {console.log(id)}}
      >
        <StarBorderOutlinedIcon/>
      </button>
    </TableCell>
  )
}