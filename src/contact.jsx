//contact.jsx, VRAJ GOSWAMI, 301402875, 02/02/2024
import '../src/contact.css'
import {useNavigate} from 'react-router-dom';
export default function Contact() {
     let navigate = useNavigate();
     const routeChange = (event) => {
          event.preventDefault();
          alert("Thank you for contacting us. We will get back to you as soon as possible.");
          let path = '/';
          navigate(path);
     }
     return (
     <>
     <p>Contact</p>
     <form id="ffp" onSubmit={routeChange}>
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>+1(437)-264-6167</strong></i></p>
               <a style={{ color: 'var(--bs-body-color)', fontWeight: '400', display: 'flex', justifyContent: 'center' }} href="mailto:goswami007vj@gmail.com">email:<strong>goswami007vj@gmail.com</strong></a>
     </>
     );
     }
    