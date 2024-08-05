import './App.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
function Application({image,Title,text="all is well"}) {
  return (
    <MDBCard>
    <MDBCardImage src={image} position='top' alt='...'/>
    <MDBCardBody>
    <MDBCardTitle>{Title}</MDBCardTitle>
    <MDBCardText>
        {text}
    </MDBCardText>
    <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
    </MDBCard>
  );
}

export default Application;
