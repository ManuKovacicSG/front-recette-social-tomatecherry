import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
        
            <main>
                <Container className="d-flex flex-column">
                <Row><h1>Insertar aqui la NAVBAR </h1></Row>
                <Row><Outlet/></Row>
                </Container>
            </main>
        </>
    )
}
export default Layout