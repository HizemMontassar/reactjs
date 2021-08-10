import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem, Label, Button, Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    

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
                <CommentForm/>
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
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            
            
        );
    }

    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);

    class CommentForm extends Component{
        
        constructor(props){

            super(props);

            this.toggleModal = this.toggleModal.bind(this);

            this.state={
                isModalOpen: false
            }
        };

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            alert("rating: "+ values.rating + " author: " + values.author + " comment: " + values.comment);
        }


        render() {
            return(
                <div>
                    <button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span>Submit Comment</button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" rows="6" className="form-control"
                                placeholder="Your Name"
                                validators={{minLength: minLength(3), maxLength: maxLength(15)}} />
                                <Errors
                                className='text-danger'
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
                </div>
            );
        }
    }



export default Dishdetail;