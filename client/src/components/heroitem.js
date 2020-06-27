import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { add, expell } from '../store/action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        myHeroes: state.myAvengers
    }
}

const mapDispatchToProps = { add, expell }

class HeroItem extends Component {

    expell(hero) {
        let array = []
        this.props.myHeroes.forEach( (h) => {
            if (h !== hero ) {
                array.push(h)
            }
        })
        this.props.expell(array)
    }

    render() {
        return (
            <Card>
                <CardImg height="50%" src={this.props.hero.thumbnail.path+'.'+this.props.hero.thumbnail.extension} alt="Card image cap" />
                <CardBody>
                    <CardTitle><strong id="hero">{this.props.hero.name}</strong></CardTitle>
                    <CardText>{this.props.hero.description}</CardText><br/>
                    { (this.props.myHeroes.includes(this.props.hero)) ?
                        (
                            <div>
                                <Link to={`/detail/${this.props.hero.id}`}>
                                    <Button>Detail</Button>
                                </Link>
                                <Button style={{position: 'absolute', left: 15, bottom: 15}} onClick={() => this.expell(this.props.hero)}>Expell</Button> 
                            </div>
                        ) : (
                            <div>
                                <Link to={`/detail/${this.props.hero.id}`}>
                                    <Button>Detail</Button>
                                </Link>
                                <Button style={{position: 'absolute', left: 15, bottom: 15}} onClick={() => this.props.add(this.props.hero)}>Add</Button> 
                            </div>
                        )
                    }
                </CardBody>
            </Card>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroItem)