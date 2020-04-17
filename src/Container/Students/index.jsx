import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";

const columns = [
  { id: "id", label: "MSSV", maxWidth: 10, align:"center" },
  { id: "name", label: "Họ Tên", maxWidth: 140 , align:"left"},
  {
    id: "tk",
    label: "Thường Kì",
    minWidth: 30,
    align:"center"
  },
  {
    id: "gk",
    label: "Giữa Kì",
    minWidth: 30,
    align: "center"
  },
  {
    id: "ck",
    label: "Cuối Kì",
    minWidth: 30,
    align: "center"
  },
  
  {
    id: "th",
    label: "Thực Hành",
    minWidth: 30,
    align: "center"
  },
];


const useStyles = makeStyles({
  root: {
    marginLeft: "20px !important",
    padding:"2px !important"
  },
  container: {
    maxHeight: 440,
  },
  header: {
    backgroundColor: "#818181 !important",
    color: "white",
    width: "30px !important",
  },
});

const Students = () => {

  const { data } = useSelector(state=>state.student);
  let rows = [];

  if(data.length > 0)
  {  
      for(let x in data)
      {
        data[x].data.forEach(val=>{
          rows.push({
            id:val.student.id,
            name:val.student.name,
            tk:val.student.point.tk,
            gk:val.student.point.gk,
            ck:val.student.point.ck,
            th:val.student.point.th,
          })
        })
      }
  }
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Segment className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.header}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Segment>
  );
};

export default Students;
