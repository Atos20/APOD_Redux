require('dotenv').config(); 

export const getPictureOfTheDay = async(date) => {
    try{
        let apiRoot = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}&hd=true`
        const response = await fetch(apiRoot)
        return await response.json()
    } catch(error) {
        console.log(error)
        return await error
    }
}

export const getPicturesOfTheWeek = async(startDate, endDate) => {
    try{
        let apiRoot = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`
        const response = await fetch(apiRoot)
        return await response.json()
    } catch(error) {
        console.log(error)
        return error
    }
}



