import Question1 from "./component/question1";
import Button from "react-bootstrap/Button";
import Question2 from "./component/question2";
import Question3 from "./component/question3";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
function App() {
  const [question1, setquestion1_] = useState(false);
  const [question2, setquestion2_] = useState(false);
  const [question3, setquestion3_] = useState(false);
  function OnClickQuestion1() {
    setquestion1_(!question1)
    setquestion2_(false)
    setquestion3_(false)
  }
  function OnClickQuestion2() {
    setquestion2_(!question2)
    setquestion1_(false)
    setquestion3_(false)
  }
  function OnClickQuestion3() {
    setquestion3_(!question3)
    setquestion1_(false)
    setquestion2_(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col xs={6} md={4}>
            <Button onClick={OnClickQuestion1}>Soru 1</Button>
            </Col>
            <Col xs={6} md={4}>
            <Button onClick={OnClickQuestion2}>Soru 2</Button>
            </Col>
            <Col xs={6} md={4}>
            <Button onClick={OnClickQuestion3}>Soru 3</Button>
            </Col>
          </Row>
        </Container>
       
        {question1 && <Question1/>}
        {question2 && <Question2/>}
        {question3 && <Question3/>}
      </header>
    </div>
  );
}

export default App;
