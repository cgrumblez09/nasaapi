document.querySelector('button').addEventListener('click', getRandomBike)
  // document.querySelector('input').addEventListener('click', getVideo)

document.addEventListener('DOMContentLoaded', function todaysPic(){

  const today = new Date().toLocaleDateString()
  const alsoToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  console.log(alsoToday)
  // console.log(today);
  const url = `https://api.nasa.gov/planetary/apod?api_key=bxIThw5r1wEualZSVMzMlyro2B1kB0q70ltQX1Px`
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(today)
        const dates = document.querySelector('#date')
        document.querySelector('#nasaDate').valueAsDate = new Date()
      if(data.media_type === 'image'){
        document.querySelector('#nasaPic').style.display = 'block'
        document.querySelector('#nasaPic').src = data.hdurl
        document.querySelector('iframe').style.display = 'none'
        document.querySelector('#title').innerText = data.title
        dates.innerText = 'Todays date:   ' + today
        dates.style.borderBottom = '2px solid red';
        // dates.style.borderBottomWidth = '5px';
      }
      else if(data.media_type === 'video'){
        document.querySelector('#nasaPic').style.display = 'none'
        document.querySelector('iframe').style.display = 'block'
        document.querySelector('iframe').src = data.url
        document.querySelector('#title').innerText = data.title
        document.querySelector('#date').innerText = 'Todays date:' + today;
        document.querySelector('#date').style.borderBottom = '2px solid red'
      }
      document.querySelector('h3').innerText = data.explanation
      
      document.querySelector('#next').innerHTML = ''

    })
    .catch((err) => {
      console.error(err);
    });
  
}
);


function getRandomBike(){
  // let date = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});
  // console.log(date);
const dateChoice = document.querySelector('#nasaDate').value;  
// console.log(dateChoice)
const url = `https://api.nasa.gov/planetary/apod?api_key=1jgnS7TN1clks9IlkcDch2r3WsyP4WshKGHv0BCD&date=${dateChoice}` 
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      
      if(data.media_type === 'image'){
      document.querySelector('#nasaPic').style.display = 'block'
      document.querySelector('#nasaPic').src = data.hdurl
      document.querySelector('iframe').style.display = 'none'
      document.querySelector('#title').innerText = data.title
      document.querySelector('#date').innerText = data.date
      }
      else if(data.media_type === 'video'){
        document.querySelector('#nasaPic').style.display = 'none'
        document.querySelector('iframe').style.display = 'block'
        document.querySelector('iframe').src = data.url
        document.querySelector('#title').innerText = data.title
        document.querySelector('#date').innerText = data.date
      }
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('#next').innerHTML = ''
    })
    .catch((err) => {
      console.error(err);
    });
  
}