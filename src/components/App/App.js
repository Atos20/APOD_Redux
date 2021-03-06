import {React, Component } from 'react';
import { HomeImage } from '../HomeImage/HomeImage';
import { NavBar } from '../NavBar/NavBar'
import  PicturesContainer from '../PicturesContainer/PicturesContainer';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { fetchPictureOfTheDay, fetchPreviousPictures } from '../../actions/getDataAction'
import { updateInput, toggleForm  } from '../../actions';
import moment from 'moment';
import './App.css';

export class App extends Component {

  componentDidMount = async() => {
    await this.props.fetchPictureOfTheDay()
    await this.props.fetchPreviousPictures();
  }

  render() {
    return (

        <div className="App">

          <NavBar
            toggleForm={this.props.toggleForm}
          />

          <Form 
            isFormVisible={this.props.isFormVisible}
            today={moment()}

          />
          <HomeImage 
              pictureOfTheDay={this.props.pictureOfTheDay}
          />

          <PicturesContainer 
              previousDays={this.props.previousPictures}
          />

        </div>
    );
  }
}

const mapStateToProps =  state => ({
  pictureOfTheDay: state.data.pictureOfTheDay,
  previousPictures: state.data.previousPictures,
  isFormVisible: state.isFormVisible
})

export default connect(mapStateToProps, 
  { 
    fetchPictureOfTheDay, 
    fetchPreviousPictures,
    toggleForm
  }
  )(App)
