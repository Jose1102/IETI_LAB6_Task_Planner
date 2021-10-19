import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Paper, Button, TextField } from '@material-ui/core'
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
      value: 'CLS',
      label: 'Close',
    },
    {
      value: 'OPN',
      label: 'Open',
    },
    
  ];


const useStyles = makeStyles(theme =>({
    root : {
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      width : '80vh',
      height: '150vh',
      display : 'center',
      justifyContent : 'center',
    
      
      
  
    },
    container : {
      opacity : '1',
      height : '60%',
      marginTop : theme.spacing(4),
      display: 'flex',
      justifyContent : 'center'
      
    },
    div : {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'center'
      
  
    },
  
    form : {
      width : '100%',
      marginTop : theme.spacing(2),
      alignItems: 'center'
  
    },
    button : {
      margin : theme.spacing(3, 0, 2)
  
    }
  }))


export const tasks = [
    {
        name: "Hacer el laboratorio de spti",
        description: "El laboratorio de seguridad",
        dueDate: "20/10/2021",
        assignedTo:  "Jose Castro",
        statusTask: "Open" 

    },
    {
        name: "Terminar el laboratorio de IETI",
        description: "Usar react, se aconseja utilizar material mui",
        dueDate: "20/10/2021",
        assignedTo:  "Jose Castro",
        statusTask: "Close" 
    }
  

];


const  AddTask = ({valor}) => {
    const [currency, setCurrency] = React.useState('CLS');

    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

    const [value, setValue] = React.useState(null);

    const classes = useStyles()

    const onSubmit = (event) => {
   
        
      } 
    return (
    <Grid container component='main' className={classes.root}>
      <Container component={Paper} elevation={10} maxWidth='xs' className={classes.container}>
        <div className={classes.div}>
            <Typography component='h1' variant='h5'> Add Task </Typography>
            
            <br />

            <form className={classes.form}>
                <TextField
                required
                id="outlined-required"
                label="Name"
                name='name'
                />

                <br />
                <br />
                <TextField
                required
                id="outlined-required"
                label="Description"
                name='description'
                />

                <br />
                <br />
                <TextField
                required
                id="outlined-required"
                label="Date"
                name='date'
                />
                <br />
                <br />
                <TextField
                required
                id="outlined-required"
                label="Assigned to"
                name='assignedTo'
                />
                <br />
                <br />
                <TextField
                id="filled-select-currency"
                select
                label="Status"
                value={currency}
                onChange={handleChange}
                helperText="Please select status"
                name='status'
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                
               
                <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                    onClick={onSubmit}
                    
                > Add </Button>
               
            
            </form>
                
            

        </div>



        

        </Container>

    </Grid>
        
      
    
    )
}

export default AddTask
