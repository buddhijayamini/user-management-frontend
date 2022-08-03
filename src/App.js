import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditCompany from "./components/company/edit.component";
import CompanyList from "./components/company/list.component";
import CreateCompany from "./components/company/create.component";
import Login from "./components/login";

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          User Management Web
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/company/create" element={<CreateCompany />} />
            <Route path="/company/edit/:id" element={<EditCompany />} />
            <Route exact path='/company' element={<CompanyList />} />
            <Route exact path='/' element={<Login />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;