import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class NoteCard extends Component {
    constructor(props){
        super(props)
        content = `${this.props.item.content}`
        title = `${this.props.item.title}`
    }

    componentDidMount() {
        document.querySelector(`.ct-${title.replace(/\s/g , '-')}`).innerHTML = content
    }
    
    render() {
        return (
        <Card>
            <CardTitle
                title={title}
                subtitle={this.props.item.topic}
            />
            <CardText className={`ct-${title.replace(/\s/g , '-')}`} >
            </CardText>
        </Card>
    )
}}

export default NoteCard