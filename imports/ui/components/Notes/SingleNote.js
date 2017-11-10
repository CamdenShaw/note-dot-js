import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const NoteCard = (note) => {
   
    return (
    <Card>
        <CardTitle
            title={note.item.title}
            subtitle={note.item.topic}
        />
        <CardText>
            {note.item.content}
        </CardText>
    </Card>
)}

export default NoteCard