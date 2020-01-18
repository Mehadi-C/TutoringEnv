import React from 'react';

const CTX = React.createContext();

/*
    {
        from: 'user'
        msg: 'hi'
        topic: 'general'
    }

    state{
        general:{
            {msg, msg, msg, newMsg}
        }
        topic2:{
            {msg, msg, msg}
        }
    }
*/

const initState= {
    general:[
        {from: 'Me', msg: 'hello'},
        {from: 'Me Again', msg: 'hello'},
        {from: 'Me a Third Time', msg: 'hello'}
    ],
    topic2:[
        {from: 'Still Me', msg: 'hello'},
        {from: 'Again, Still Me', msg: 'hello'},
        {from: 'Seriously, its Me', msg: 'hello'}
    ]
}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE MESSAGE': 
        return{
            ...state,
            [action.payload.topic]:[
                ...state[action.payload.topic],
                {
                    from: action.payload.from,
                    msg: action.payload.msg
                }
            ]
        }
        default:
            return state
    }
}

export default function store(props){

    const reducerHook= React.useReducer(reducer, initState);

    return(
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )
}