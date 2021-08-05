import { Component } from "react";
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            dish: null
        }
    }

    renderComments(comments){
        if(comments != null){
            return(

                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            return(
                                <div key={comment.id}>
                                     <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>              
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>

            );

        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>      
                </div>
                {this.renderComments(this.props.dish.comments)}
            </div>
            
        );
    }

}

export default Dishdetail;