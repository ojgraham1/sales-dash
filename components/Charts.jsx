import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, date, name, amount) {
  return { id, date, name, amount };
}

const rows = [
  createData('01e4dsa', 'johnny', '2021-09-01', 43.95),
  createData('0315dsaa', 'jackdower', '2022-04-01', 133.45),
  createData('01e4dsa', 'aberdohnny', '2021-09-01', 43.95),
  createData('51034szv', 'goodmanave', '2022-11-05', 200.95),
  createData('0a123sb', 'stevebower', '2022-11-02', 13.55),
  createData('01e4dsa', 'aberdohnny', '2021-09-01', 43.95),
  createData('120s51a', 'wootzifer', '2019-04-15', 24.20),
  createData('0315dsaa', 'jackdower', '2022-04-01', 133.45),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350'}}>
        <Table size="large">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}
