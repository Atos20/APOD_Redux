import { render } from '@testing-library/react';
import {React, Component } from 'react';
import { HomeImage } from '../HomeImage/HomeImage';
// import { Counter } from '../../features/counter/Counter';
import { NavBar } from '../NavBar/NavBar'
import './App.css';
import moment from 'moment';
import { getPictureOfTheDay, getPicturesOfTheWeek } from '../../apiCalls/apiCalls';

export class App extends Component {
  constructor() {
    super()

    this.state = {
      today: moment(),
      pictureOfTheDay : {},
      thisWeeksPictures: {},
      lastSevenDays:{}
    }
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
      console.log('data for the week',thisWeeksPictures)
    }catch(error){
      console.log(error)
    }
  }

  getPicturesFromLastSevenDays = async () => {
    const today = moment();
    const startingDate = today.subtract(7, 'days').format('YYYY-MM-DD');
    console.log(startingDate)
    try{
      const lastSevenDays = await getPicturesOfTheWeek(startingDate, this.state.today.format('YYYY-MM-DD'))
      this.setState({ lastSevenDays }) 
    }catch(error){
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.getPictureOfTheDay();
    this.getThisWeeksPictures();
    this.getPicturesFromLastSevenDays();
  }

  render() {
    const { pictureOfTheDay } = this.state
    return (
      <div className="App">
        <NavBar />
        <HomeImage pictureOfTheDay={pictureOfTheDay}/>
      </div>
    );
  }

}


