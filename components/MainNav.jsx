import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearch] = useState("Search");

  function navigate(e) {
    e.preventDefault();
    console.log(searchField);
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Keith Cao</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex justify-content-end">
              <input
                placeholder={searchField}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" onClick={navigate}>
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
