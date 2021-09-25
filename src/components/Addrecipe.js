import { useState } from "react";
import { addRecipe } from "../Services/user.service.js";
// import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const initialState = {
    name: "",
    ingredients: [],
    procedure: [],
    src: "",
}

export function Addrecipe() {
    const [userData, setUserData] = useState(initialState);

    let history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        addRecipe(userData)
            .then((res) => {
                history.push("/");
                console.log("Saved Successfully");
                setUserData({
                    name: "",
                    ingredients: [],
                    procedure: [],
                    src: "",
                })
            })
            .catch(err => {
                // toast.error("some error");
                console.log(err);
            })
    }

    const handleBack = (e) => {
        // e.preventDefault();
        history.push("/");
    }

    return (
        <main className="Apple contentbg">
            <Container classname="navigatebar" style={{backgroundColor: "brown"}}>
                <Form >
                    <br />
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <h3>
                            ADD your Recipe
                        </h3>
                        <br />
                        <br />
                        <hr />
                        <br />

                        <Col sm={4}>
                        <Form.Label  className="text-white" column sm="2">Name</Form.Label>
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="text" value={userData.name} name="name" placeholder="Enter Recipe Name" onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicIngredients">
                        <Col sm={4}>
                        <Form.Label className="text-white" column sm="2">Ingredients</Form.Label>
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="textarea" value={userData.ingredients} name="ingredients" placeholder="Enter Recipe Ingredients" onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicProcedure">
                        <Col sm={4}>
                        <Form.Label className="text-white" column sm="2">Procedure</Form.Label>
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="textarea" value={userData.procedure} name="procedure" placeholder="Enter Recipe Procedure" onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicSrc">
                        <Col sm={4}>
                        <Form.Label className="text-white" column sm="2">Recipe PIC URL</Form.Label>
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="url" value={userData.src} name="src" placeholder="Enter Recipe picture URL" onChange={handleChange} />
                        </Col>
                        </Form.Group>

                    <br />

                    <Row>
                        <Col xs lg={4}></Col>
                        <Col xs lg={1}>
                            <Button variant="danger" type="submit" onClick={handleBack}>
                                Back
                            </Button>
                        </Col>
                        <Col xs lg={2}>
                            <Button variant="danger" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                    <br />
                </Form>
            </Container>
        </main>
    )
}