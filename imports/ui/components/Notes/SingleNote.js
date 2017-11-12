import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class NoteCard extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        document.querySelector(`.ct-${this.props.item.title.replace(/\s/g , '-')}`).innerHTML = this.props.item.content
    }
    
    render() {
        title = `${'render', this.props.item.title}`
        return (
        <Card className="card">
            <CardTitle
                title={title}
                subtitle={this.props.item.topic}
            />
            <CardText className={`ct-${title.replace(/\s/g , '-')} card-text`} >
            </CardText>
        </Card>
    )
}}

export default NoteCard