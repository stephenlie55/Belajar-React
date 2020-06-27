import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Button, Badge } from 'reactstrap'
import { fetchHero } from '../store/action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        hero: state.hero
    }
}

const mapDispatchToProps = {
    fetchHero
}

class Detail extends Component {

    componentDidMount() {
        this.props.fetchHero(this.props.match.params.id)
    }

    loading(hero) {
        if (hero) {
            return (
                <div className="container">
                    <div className="row" id="detailed">
                        <div className="col-3"></div>
                        <div className="col-4">
                            <ListGroup>
                                    <strong>Comics</strong> <Badge pill>{hero.comics.items.length}</Badge>
                            </ListGroup>
                        </div>
                        <div className="col-4">
                            <ListGroup>
                                <strong>Stories</strong> <Badge pill>{hero.stories.items.length}</Badge>
                            </ListGroup>
                        </div>
                    </div>
                    <div className="row" id="detailed">
                        <div className="col-3">
                            <Card>
                                <CardImg maxHeight="50%" src={hero.thumbnail.path+'.'+hero.thumbnail.extension} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><strong id="hero">{hero.name}</strong></CardTitle>
                                    <CardText>{hero.description}</CardText><br/>
                                    <Link to={`/`}>
                                        <Button>Back</Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4">
                            <ListGroup>
                                {hero.comics.items.map( (comic) => {
                                    return (
                                        <ListGroupItem>
                                            {comic.name}
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                        </div>
                        <div className="col-4">
                            <ListGroup>
                                {hero.stories.items.map( (story) => {
                                    return (
                                        <ListGroupItem>
                                            {story.name}
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row" id="loading">
                    <img alt="Loading. . ." id="loadingImage" className="App-logo" src="loading.gif"></img>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                {this.loading(this.props.hero)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)