import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { expell } from '../store/action'
import HeroItem from './heroitem'
import { CardColumns } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        myHeroes: state.myAvengers
    }
}

const mapDispatchToProps = {}

class MyAvengers extends Component {   

    render() {
        if (this.props.myHeroes.length === 0) {
            return (
                <div className="row" id="loading">
                    {/* <img alt="Loading. . ." id="loadingImage" className="App-logo" src="loading.gif"></img> */}
                    <h1 style={{position: 'absolute', top: 200}}>No hero in your Avengers List</h1>
                </div>
            )
        } else {
            return (
                <div className="row" id="notloading">
                    <CardColumns>
                        {this.props.myHeroes.map( (hero) => {
                            return (
                                <HeroItem key={hero.id} hero={hero}/>
                            )
                        })}
                    </CardColumns>
                </div>
            )
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAvengers)