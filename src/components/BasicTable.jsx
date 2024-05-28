import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

export default function BasicTable({ products }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="pr-10 pl-10">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>product_id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">description</TableCell>
            <TableCell align="center">category</TableCell>
            <TableCell align="center">color</TableCell>
            <TableCell align="center">price</TableCell>
            <TableCell align="center">link</TableCell>
            <TableCell align="center">image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.products
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product) => (
              <TableRow
                key={product.product_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="product">
                  {product.product_id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.color}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  <a
                    className="underline text-blue-500 font-semibold"
                    href={`${product.link}`}>
                    Click
                  </a>
                </TableCell>
                <TableCell align="center">{"falta"}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.products?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
