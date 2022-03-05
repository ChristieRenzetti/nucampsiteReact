import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import CampsiteInfo from './components/CampsiteInfoComponent.js';
import { CAMPSITES } from './shared/campsites.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }
    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }
    render() {
    return(
            <div className = "App" >
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteID => this.comCampsiteSelect(campsiteID)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
            </div>
        );
    }
}



export default App;
