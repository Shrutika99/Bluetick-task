import img from './image/main.jpg';
import React from 'react';
import './App.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Timeline from './component/Timeline';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Benifits</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
      </ul>
       <button className="btn btn-primary" type="submit">Go to App</button>
      </form>
    </div>
  </div>
</nav>

<div className="main" >
        <div className="row" >
            <div className="col">
              <h1>Interview GPT</h1>
                <h2>Empowering Recruiters with AI-Driven Interviews</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea nostrum natus eos magnam
                    tenetur, sequi vel architecto numquam eius non repellat facilis repudiandae accusantium ratione,
                    nisi quos quo est mollitia nihil obcaecati consequuntur dolorem. Alias reprehenderit maiores eos
                    incidunt praesentium ullam. Voluptatem velit iusto minima alias iste eaque ex.</p>
                    <button className="btn btn-primary">Try now</button>
            </div>
            <div className="col">
              <img src={img} alt=""/>
            </div>
        </div>
    </div>
   
   
  
    <Timeline/>

    <div className='container'>
  
  <MDBFooter className=' text-center text-white row'style={{ backgroundColor: 'rgb(27, 29, 168)' }}>
    <MDBContainer className='p-3 pb-0 col'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3 col' style={{ backgroundColor: 'rgba(66, 84, 245)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  

 
</>
  );
}

export default App;
