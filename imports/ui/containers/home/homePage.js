import React, { Component } from 'react';
import NoteListContainer from '../notes/notesList'
import Filters from '../filters/filters'

class Home extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            filterType: null,
            filters: null,
            upVotes: false
        };
        this.findFilters = this.findFilters.bind(this)
        this.upVotes = this.upVotes.bind(this)
    }

    findFilters(classyName) {
        if(classyName === "student-select") this.setState({filterType: "student"})
        if(classyName === "topic-left") this.setState({filterType: "topic"})
        if(classyName === "week-left") this.setState({filterType: "week"})
        let filter = document.querySelector(`.${classyName}`).value
        if(filter === "student" || filter === "topic" || filter === "week") filter === null
        this.setState({filters: filter})
    }

    upVotes(bool) {
        this.setState({
            upVotes: bool
        })
    }
    
    render(){
        return (
            <div className="app-content" >
                <Filters upVotes={this.upVotes} findFilters={this.findFilters} />
                <NoteListContainer filters={this.state} />
            </div>
        )
    }
}

export default Home