import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/styles/typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width:'70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width:'15%'
    }

}));

export default function dashboard(){
    const classes = useStyles();
    const [textValue, changeTextValue]= React.useState('');//initializing a state to nothing -> then pass an empty string to textValue, and then to update it we will call this function 
    return (
        <div>
            <Paper className= {classes.root}>
                <Typography variant= "h5" component= "h3">
                    Chat App
                </Typography>
                <Typography component= "h5" component= "h5">
                    Hello, basic Chat App
                </Typography>
                <div className= {classes.flex}>
                    <div className= {classes.topicsWindow}>
                        <List>
                            {
                                [].map(topic => (
                                    <ListItem key={topic} button>
                                        <ListItemText primary= {topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className= {classes.chatWindow}>
                            {
                                [{from: 'user', msg= 'hello'}].map((chat, i) => (
                                    <div className= {classes.flex} key={i}>
                                        <Chip label={chat.from} className= {classes.chip} />
                                        <Typography variant= 'p'>{chat.msg}</Typography>
                                    </div>
                                ))
                            }
                    </div>
                    
                </div>
                <div className= {classes.flex}>
                    {/* <div className= {classes.chatBox}></div>
                    <div className= {classes.button}></div> */}
                    <TextField id="standard-basic" label="Send a Message" className= {classes.chatBox} value= {textValue} OnChange= {e => changeTextValue(e.target.value)}/>
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    );
}