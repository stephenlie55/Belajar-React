import React, {Component} from 'react'
import HeroItem from './heroitem.js'
import { CardColumns } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchHeroes } from '../store/action'

const mapStateToProps = (state) => {
  return {
    heroes: state.filteredHeroes
  }
}

const mapDispatchToProps = { fetchHeroes }

class HeroList extends Component {
    
      componentDidMount() {
        this.props.fetchHeroes()
      }

    loading(herolist) {
        console.log(herolist)
        if (herolist.length === 0) {
            return (
                <div className="row" id="loading">
                    <img alt="Loading. . ." id="loadingImage" className="App-logo" src="loading.gif"></img>
                </div>
            )
        } else {
            return (
                <div className="row" id="notloading">
                    <CardColumns>
                        {herolist.map( (hero) => {
                            return (
                                <HeroItem key={hero.id} hero={hero}/>
                            )
                        })}
                    </CardColumns>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                {this.loading(this.props.heroes)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList)