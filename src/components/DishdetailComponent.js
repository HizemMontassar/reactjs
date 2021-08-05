import React from "react";
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';



    

    function RenderDish({dish}){
             if(dish != null){
                 return (
    
                    
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>      
                    </div>
                 );
             }
             else{
                 return(
                     <div></div>
                 );
             }
         }


    function RenderComments({comments}){
        if(comments != null){
            return(

                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {
                        comments.comments.map((comment) => {
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

    const Dishdetail = (props ) => {
        return(
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish} />
            </div>
            
        );
    }



export default Dishdetail;