import {React, Component } from 'react';
import { HomeImage } from '../HomeImage/HomeImage';
import { NavBar } from '../NavBar/NavBar'
import { getPicturesOfTheWeek } from '../../apiCalls/apiCalls';
import { PicturesContainer } from '../PicturesContainer/PicturesContainer';
import { Form } from '../Form/Form';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchPictureOfTheDay } from '../../actions/getDataAction'
import './App.css';
export class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isLoading: true,
      today: moment(),
      // pictureOfTheDay: {},
      thisWeeksPictures: {},
      previousDays:[]
    }
  }

  getThisWeeksPictures = async () => {
    const today = moment();
    const from_date = today.startOf('week').format('YYYY-MM-DD');
    try{
      const thisWeeksPictures = await getPicturesOfTheWeek(from_date, this.state.today.format('YYYY-MM-DD'))    
    }catch(error){
      console.log(error)
    }
  }

  getPreviousImages = async () => {
    const today = moment();
    const startingDate = today.subtract(8, 'days').format('YYYY-MM-DD');
    try{
      const previousDays = await getPicturesOfTheWeek(startingDate, this.state.today.format('YYYY-MM-DD'));
      this.setState({ previousDays }) 
    }catch(error){
      console.log(error)
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount')
    this.props.fetchPictureOfTheDay()
    this.getThisWeeksPictures();
    this.getPreviousImages();
  }

  render() {
    const { 
      pictureOfTheDay, 
      previousDays, 
      today, 
      isFormVisible 
    } = this.state

    return (

        <div className="App">
          <NavBar 
          displayForm={this.displayForm}/>

          <Form 
          isFormVisible={isFormVisible}
          today={today}/>

          <HomeImage 
              pictureOfTheDay={pictureOfTheDay}
          />

          <PicturesContainer 
              updateMainImage={this.updateMainImage}
              previousDays={previousDays}
          />

        </div>

    );
  }

}

export default connect(null, { fetchPictureOfTheDay })(App)
