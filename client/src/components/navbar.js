import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { filter } from '../store/action'
import { connect } from 'react-redux'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes,
    }
}

const mapDispatchToProps = { filter }

class NavBar extends Component {

    filterHero = async (e) => {
        let array = []
        this.props.heroes.filter( (hero) => {
            if (hero.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                array.push(hero)
            }
        })
        
        this.props.filter( await array )

    }

    render() {
        return (
            <header className="App-header">
                <Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>
                <strong id="marvel">MARVEL</strong><span> Heroes</span>
                </Link>
                <Link to={`/myAvengers`} style={{textDecoration: 'none', color: 'white'}}>
                    <a style={{textDecoration: 'none', color: 'white'}} href="">MyAvengers</a>
                </Link>
                <InputGroup style={{width: 200, marginRight: 10}}>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input onChange={this.filterHero} placeholder="Hero's name" />
                </InputGroup>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)