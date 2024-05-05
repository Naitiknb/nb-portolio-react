import React from 'react'
import "../experience/exp.css"
import Ace360 from "../../assets/ace360.svg";
import Kotak from "../../assets/kotak.png"

const exp = () => {
  return (
    <>

      <div className='container my-5'>

        <h1>Experience<span className='h1' style={{ color: "#770df0", fontSize: "70px" }}>.</span> </h1>
        <hr></hr>














        <div className='row my-5'>
          <div className='col-md-12 ' >

<div className='d-md-block d-none'>
            <div className='d-flex justify-content-around   '>
              <div className='d-flex'>
                <img src={Ace360} className='mt-1 mx-2' style={{ height: "20px" }} alt="logo" />
                <p>Ace-360</p>
              </div>
              <h5>  Front-end-developer</h5>
              <p>Feb 2024 - March-2024</p>
            </div>
            </div>

            <div className='  d-md-none d-block my-5 text-center'>
              <div className='d-flex justify-content-center'>
                <img src={Ace360} className='mt-1 mx-2' style={{ height: "20px" }} alt="logo" />
                <h2>Ace-360</h2>
              </div>
              <h2>  Front-end-developer</h2>
              <h2>Feb 2024 - March-2024</h2>
            </div>


            <ul>
              <li className='my-1'>"As a front-end developer at Ace360, I implement user interfaces that meet client needs and business objectives using HTML, CSS, JavaScript, Bootstrap, jQuery, and WordPress."</li>
              <li className='my-1'>"I prioritize creating engaging, user-friendly web experiences with a focus on responsive design and cross-browser compatibility while collaborating with clients and teams for top-quality solutions."</li>
            </ul>


          </div>
        </div>


        <div className='row '>
          <div className='col-md-12 ' >

<div className='d-md-block d-none'>
            <div className='d-flex justify-content-around  '>
              <div className='d-flex'>
                <img src={Kotak} className='mx-1' style={{ height: "30px" }} alt="logo" />
                <p>Kotak Mahindra Bank</p>
              </div>
              <h5>  Sales executive</h5>
              <p>Feb 2021 - Aug-2021</p>
            </div>
            </div>


            <div className='d-md-none d-block my-5 text-center ' >
              <div className='d-flex justify-content-center ' >
                <img src={Kotak} className='mx-1 my-2' style={{ height: "10px" }} alt="logo" />
                <h2>Kotak Mahindra Bank</h2>
              </div>
              <h2>  Sales executive</h2>
              <h2>Feb 2021 - Aug-2021</h2>
            </div>




            <ul>
              <li className='my-1'>"As a Sales Executive at Kotak Mahindra, I generated sales by interacting with customers and understanding their financial needs."</li>
              <li className='my-1'>"I built strong relationships with clients, providing personalized solutions and ensuring exceptional customer service to drive business growth."</li>
            </ul>


          </div>



        </div>



      </div>

    </>
  )
}

export default exp