import axios from 'axios'

const baseURL = 'https://gateway.marvel.com:443/v1/public/characters'
const queryToken = 'b7471368b558138c16d390f808afd7d5'

function fetchHeroes() {
    return (dispatch) => {

        let promises = []

        for (var i=0; i<14; i++) {
          let promise = new Promise( (resolve, reject) => {
            axios.get(`${baseURL}?apikey=${queryToken}&limit=100&offset=${i*100}`)
            .then( ({data}) => {
              resolve(data.data.results)
            })
            .catch( (err) => {
              reject(err)
            })
          })
          promises.push(promise)
        }
    
        Promise.all(promises)
        .then( (allHeroes) => {
          var merged = [].concat.apply([], allHeroes);
          let promise = new Promise( (resolve, reject) => {
            merged.forEach( (hero) => {
              if (!hero.description) {
                hero.description = 'No description'
              }
            })
            resolve(merged)
          })
    
          promise.then( (heroes) => {
            console.log(heroes)
            dispatch({
                type: 'FETCH_HEROES',
                payload: heroes
            })
          })
        })
        .catch( (err) => {
          console.log(err)
        })
    }
}

function fetchHero(id) {
  return (dispatch) => {
    axios({
        method: 'get',
        url: `${baseURL}/${id}?apikey=${queryToken}`
    })
    .then( ({data}) => {
        let promise = new Promise( (resolve, reject) => {
            if (data.data.results[0].description === '') {
                resolve({
                    ...data.data.results[0], 
                    description: 'No description'
                })
            } else {
                resolve(data.data.results[0])
            }
        })
        promise.then( (data) => {
          dispatch({
            type: 'FETCH_HERO',
            payload: data
          })
        })
    })
    .catch( (err) => {
        console.log(err)
    })
  }
}

function filter(data) {
  return (dispatch) => {
    console.log(data, 'masuk action')
    dispatch({
      type: 'FILTER_HEROES',
      payload: data
    })
  }
}

function add(data) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_HERO',
      payload: data
    })
  }
}

function expell(data) {
  return (dispatch) => {
    dispatch({
      type: 'EXPELL_HERO',
      payload: data
    })
  }
}

export {
    fetchHero,
    fetchHeroes,
    filter,
    add,
    expell
}