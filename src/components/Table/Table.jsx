import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PostsTable = ({ posts }) => {
  const names = [{ name: 'John', id: 1 }, { name: 'Bob', id: 2 }, { name: 'Jack', id: 3 }];
  const bold = { fontWeight: 'bold' };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell style={bold}>Name</TableCell>
            <TableCell style={bold} align="center">Theme</TableCell>
            <TableCell style={bold} align="center">Post Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.userId === names[post.userId - 1].id && names[post.userId - 1].name}
              </TableCell>
              <TableCell align="center">{post.title}</TableCell>
              <TableCell align="center">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
