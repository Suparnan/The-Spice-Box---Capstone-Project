import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { useHistory } from 'react-router';
import { removeRecipe } from '../Services/user.service.js';

export function Content(props) {
    const { searchRecipe } = props

    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState("")
    const [recName, setRecName] = useState("");
    const [ingds, setIngds] = useState([]);
    const [procs, setProc] = useState([]);
    // const [searchRecipe, setSearch] = useState("");

    useEffect(() => {
        fetch("https://spice-box-heroku.herokuapp.com/auth/getrecipe", {
            method: "GET",
        })
            .then((rec) => rec.json())
            // .then((rec) => console.log("inside useEffect",rec))
            .then((rec) => setRecipes(rec));
            
    }, []);

    console.log("After useEffect", recipes);
    //Modals
    const [fullscreen, setFullscreen] = useState(false);
    const [show, setShow] = useState(false);
    const open = (id, name, ingredients, procedure) => {
        // setShow("flex");
        console.log("Name, Ingds & Proc",name, ingredients, procedure)
        setId(id);
        setRecName(name);
        setIngds(ingredients);
        setProc(procedure);
        handleShow()
    };

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    let history = useHistory();

    const handleRemove = (e) => {
        // e.preventDefault();
        console.log("Name: ",e);
        removeRecipe(e)
            .then((res) => {
                history.push("/");
                console.log("Removed Successfully",res);
            })
            .catch(err => {
                console.log(err);
            })
        // setRecipes(recipes.filter((x) => x._id !== id))
        // console.log("This is Remove function", recipes);
    }

    const cont = [...ingds];
    const mont = [...procs];

    return(
        <div className="contentbg py-3">
            <Container >
                <Row>
                    <div className="wrap">
                    {recipes
                    .filter((rec) => {
                        if (searchRecipe === "") {
                            return "Sorry Recipe not Found";
                        } else if (
                            rec.name.toUpperCase().includes(searchRecipe.toUpperCase())
                            ) {
                            return rec;
                        }
                        // return rec;
                            
                    })
                    .map((ele,index) => {
                        const { _id, name, src, ingredients, procedure } = ele;
                        return (
                            <div key={index} style={{marginTop: "35px", marginLeft: "35px"}}>
                            {/* { index === 4 || index === 8 ? <div><p><br></br></p></div> : ""} */}
                            <Col>
                            <Card style={{width: '15rem', height:'22rem'}} onClick={() => open(_id, name, ingredients, procedure)}>
                                        <Card.Img className="card-img" variant="top" src={src} />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                
                                            </Card.Text>

                                      
                                        <Button className="me-2" onClick={() => open(_id, name, ingredients, procedure)} variant="outline-danger">
                                            View Ingredients 
                                        
                                        </Button>
                                     
                                        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                          <Modal.Header className="navigatebar" 
                                        //   closeButton
                                        >
                                            <Modal.Title >{recName}</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                          <div className="container">
                                            <div className="row">
                                              <div className="col">
                                                  <h3>Ingredients</h3>
                                                  <hr />
                                                  <ul>
                                                      {cont.map((el, indx) => {
                                                          return <li key={indx}>{el}</li>
                                                      })}
                                                  </ul>
                                              </div>
                                              {/* <hr /> */}
                                              <div className="col">
                                                  <h3>Procedure</h3>
                                                  <hr />
                                                  <ul>
                                                      {mont.map((elem, indux) => {
                                                          return <li key={indux}>{elem}</li>
                                                      })}
                                                  </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="butn">
                                            <Button variant="danger" type="submit" onClick={() => handleRemove(recName)}>
                                                Delete
                                            </Button>
                                          </div>
                                          </Modal.Body>
                                        </Modal>
                                        
                                        {/* <Button  variant="outline-dark">Add to cart</Button> */}
                                            
                                        </Card.Body>        
                                        </Card>
                            </Col>
                            </div>
                        )
                    })}
                    </div>
                   
                </Row>
                <br />
                
            </Container>

                    <br />

            <Container>
                <div className="d-grid">
                    <Button variant="danger" size="lg" href="/addrecipe" >
                        Add Recipe
                    </Button>
                </div>
            </Container>

            <br />

            

        </div>
    )
}