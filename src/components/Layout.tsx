import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
        
            <main>
                <Container className="d-flex flex-column">
                <Row><Navbar/></Row>
                <Row><Outlet/></Row>
                </Container>
            </main>
        </>
    )
}
export default Layout