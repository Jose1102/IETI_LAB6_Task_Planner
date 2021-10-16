import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Table from './Table'
import { tasks } from '../data/task'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme =>({
  
  div : {
    marginTop : theme.spacing(2),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',

  },
  button : {
    marginTop : theme.spacing(5),
    display : 'flex',
    flexDirection : 'row-reverse',
    margin : '0.5%'

  }
}))






function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Consultar una tarea</DialogTitle>
      <List sx={{ pt: 0 }}>
        {tasks.map((tarea) => (
          <ListItem button onClick={() => handleListItemClick(tarea.name)} key={tarea.name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <TaskAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={tarea.name} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add task" />
        </ListItem>
      </List>
    </Dialog>
  );
}



export default function Home() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const valueTemp = tasks[1];
  const {name,description} = tasks[0];
  console.log("entra"+name);

  const [selectedValue, setSelectedValue] = React.useState(name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <div className={classes.div}>
        <Typography component='h1' variant='h5'> Tasks </Typography>
        
        <br />
        
        <Table />
      </div>
      <div className={classes.button}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Select Task
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
      
    </div>
    
  );
}
