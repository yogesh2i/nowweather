import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Header({func}) {
  let expand = "lg";
 
  let url =
    "https://api.weatherapi.com/v1/search.json?key=f07a9c924a204b2cba1113545232801&q=auto:ip";
 
  const [data, setData] = useState("");
  async function fetchPlace(url) {
    try {
      let response = await fetch(url);
      let res = await response.json();
      setData(res);
    
    } catch (error) {
      console.log(error);
    }
  }
  function handleClick(i) {
   
    document
    .getElementById("offcanvasNavbarLabel-expand-lg")
    .nextSibling.click();
    func(data[i].url)
  
  }

  useEffect(() => {
    fetchPlace(url);
  }, [url]);
  return (
    <>
      <Navbar
        key={expand}
      
        expand={expand}
        // className="mb-3"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">WeatherToday</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className=" text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                WeatherToday
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 ml-2">
                <Nav.Link href="/home">Home</Nav.Link>

                <NavDropdown
                  title="NearBy Places"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  {data !== "" &&
                    data.map((e, i) => {
                      return (
                        <span key={i}>
                          
                         <Link  to="/home" onClick={() => handleClick(i)} className="nearby__places">
                        
                            {e.name}
                         
                          </Link>
                          
                          <NavDropdown.Divider />
                        </span>
                      );
                    })}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container> 
      </Navbar>
      

    </>
  );
}

export default Header;
