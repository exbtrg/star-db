export default class SwapiService {

  _apiBase = 'https://swapi.dev/api'
  _assetBase = 'https://starwars-visualguide.com/assets/img'

  _retrievedId = (url) => {
    const regExp = /\/([0-9]*)\/$/
    const id = url.match(regExp)[1]
    return id
  }

  _transformList = (arr) => {
    return arr.map(item => ({
      id: this._retrievedId(item.url),
      ...item,
      name: item.name ? item.name : item.title
    }))
  }


  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        'location': `${this._apiBase}${url}`
      }
    })
    if (!res.ok) {
      throw new Error(`Could no fetch ${url}, status ${res.status}`)
    }
    const body = await res.json()
    return body
  }

  getAllFilms = async () => {
    const res = await this.getResource('/films/')
    return this._transformList(res.results)
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people/')
    return this._transformList(res.results)
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/')
    return this._transformList(res.results)
      .filter((item, index) => (index > 3))
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/')
    return this._transformList(res.results)
  }

  getFilm = async (id) => {
    const res = await this.getResource(`/films/${id}`)
    return this._transformFilm(res)
  }

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}`)
    return this._transformPerson(res)
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(res)
  }

  getStarship = async (id) => {
    const res = await this.getResource(`/starships/${id}`)
    return this._transformStarship(res)
  }

  getFilmsImage = (id) => {
    const imgUrl = `${this._assetBase}/films/${id}.jpg`
    return imgUrl
  }

  getPersonImage = (id) => {
    const imgUrl = `${this._assetBase}/characters/${id}.jpg`
    return imgUrl
  }

  getPlanetImage = (id) => {
    const imgUrl = `${this._assetBase}/planets/${id}.jpg`
    return imgUrl
  }

  getStarshipImage = (id) => {
    const imgUrl = `${this._assetBase}/starships/${id}.jpg`
    return imgUrl
  }

  _transformFilm = (film) => {
    const id = this._retrievedId(film.url)

    return ({
      id,
      name: film.title,
      features: [
        { key: 'Director', value: film.director },
        { key: 'Episode', value: film.episode_id },
        { key: 'Producer', value: film.producer },
        { key: 'Release date', value: film.release_date }
      ]
    })
  }

  _transformPerson = (person) => {
    const id = this._retrievedId(person.url)

    return ({
      id,
      name: person.name,
      features: [
        { key: 'Gender', value: person.gender },
        { key: 'Height', value: person.height },
        { key: 'Hair color', value: person.hair_color },
        { key: 'Eye color', value: person.eye_color }
      ]
    })
  }

  _transformPlanet = (planet) => {
    const id = this._retrievedId(planet.url)

    return ({
      id,
      ...planet,
      name: planet.name,
      features: [
        { key: 'Climate', value: planet.climate },
        { key: 'Diameter', value: planet.diameter },
        { key: 'Population', value: planet.population },
        { key: 'Orbital Period', value: planet.orbital_period }
      ]
    })
  }

  _transformStarship = (starship) => {
    const id = this._retrievedId(starship.url)

    return ({
      id,
      name: starship.name,
      features: [
        { key: 'Model', value: starship.model },
        { key: 'Passengers', value: starship.passengers },
        { key: 'Class', value: starship.starship_class }
      ]
    })
  }
}