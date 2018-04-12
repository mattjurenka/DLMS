import axios from 'axios';
import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import { APP_URLS, get_url } from './url.js';

import Typography from 'material-ui/Typography';
class TagCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentView: 'addTag',
            name: '',
            description: ''
        };
        this.handleTextFieldUpdate = this.handleTextFieldUpdate.bind(this);
        this.saveTag = this.saveTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this); 
    }

    handleTextFieldUpdate(stateProperty, evt) {
        this.setState({
            [stateProperty]: evt.target.value
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: '',
            description: ''
            
        });
    }

    setCurrentView(viewName, selectedPanel){
        this.setState({
          currentView: viewName,
          currentpanelState: selectedPanel})
    }

    saveTag(evt) {
        var targetUrl = this.props.listUrl;
        const payload = {name: this.state.name, description: this.state.description};
        const currentInstance = this;
             {
            // Create a new Tag.
            axios.post(targetUrl, payload, {
                responseType: 'json'
            }).then(function(response) {
                currentInstance.saveCallback(response.data, true);
            }).catch(function(error) {
                console.error("Error in creating a new Tag", error);
            })
        }
    }

    deleteTag(evt) {
        const targetUrl = get_url(APP_URLS.TAG_LIST, {name:this.state.name});
        const currentInstance = this;
        axios.delete(targetUrl, {
            responseType: 'json'
        }).then(function(response) {
            currentInstance.deleteCallback(currentInstance.state.name);
        }).catch(function(error) {
            console.error("Error in deleting the Tag", error);
        })
    }
 

    render() {
    return(
        <Grid container spacing={0} style={{paddingLeft: '20px'}}>
        <Grid item xs={8}>
        <Button variant="raised" color="primary" onClick={e => {this.props.onCancel()}}>
            Cancel
            </Button>
        <Button variant="raised" color="secondary" onClick={evt =>this.saveTag(evt)}>    
            Save
            </Button>
            </Grid>
           <Grid item xs={8}>
           <Typography gutterBottom align="center" variant="headline" component="h2">
           {this.props.title}
                    </Typography>
          </Grid>
        <Grid item xs={8}>
           
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              onChange={evt => this.handleTextFieldUpdate('name', evt)}
              fullWidth
              margin="normal"
            />
            <TextField
              id="desc"
              label="Description"
              value={this.state.desc}
              onChange={evt => this.handleTextFieldUpdate('description', evt)}
              fullWidth
              margin="normal"
            />
            </Grid> 
        </Grid>
    );
           
        
        
    }
}

module.exports = TagCreation;