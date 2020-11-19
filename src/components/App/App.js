import { render } from '@testing-library/react';
import {React, Component } from 'react';
import { HomeImage } from '../HomeImage/HomeImage';
// import { Counter } from '../../features/counter/Counter';
import { NavBar } from '../NavBar/NavBar'
import './App.css';
import moment from 'moment';
import { getPictureOfTheDay, getPicturesOfTheWeek } from '../../apiCalls/apiCalls';
import { PicturesContainer } from '../PicturesContainer/PicturesContainer';
import { Form } from '../Form/Form'
export class App extends Component {
  constructor() {
    super()

    this.state = {
      isFormVisible: false,
      isLoading: true,
      today: moment(),
      pictureOfTheDay : {},
      thisWeeksPictures: {},
      previousDays:[]
    }
  }

  displayForm = () => {
    console.log('find button')
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible
    }));
  }
  
  updateMainImage = () => {
    console.log('selected')
  }

  getPictureOfTheDay = async() => {
    const { today } = this.state
    try{
      const  pictureOfTheDay = await getPictureOfTheDay(today.format('YYYY-MM-DD'))
      this.setState({ pictureOfTheDay })
    } catch(error) {
      console.log(error)
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
    this.getPictureOfTheDay();
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


