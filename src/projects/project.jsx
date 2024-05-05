import React from 'react'
import Nav from "../components/nav/nav.jsx"
import Matm from "../../src/assets/m-atm.png"
import Mos from "../../src/assets/mos.png" 
import Equidha from "../../src/assets/equidha.png"
import Weather from "../../src/assets/weather-1.png"
import Footer from "../../src/components/footer/footer.jsx"

const project = () => {
  return (
 <>
<Nav/>

<div className='conatiner'>
  
</div>




<div className='container my-5'>
<h1>My <span id='ban'> Best</span> Creations</h1>

<h4>Designing and Developing Robust and Stylish Web Applications for a Decade and Counting</h4>


<div className='row'>

<div className=' my-5'>
  <img src={Matm} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center'>Micro Atm landing Page</h2>
</div>


<div className=' my-5'>
  <img src={Mos} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center'>Irctc Landing Page</h2>
</div>


<div className=' my-5'>
  <img src={Equidha} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center'>Equidha Landing Page</h2>
</div>



<div className=' my-5'>
  <img src={Weather} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center'>Weather app </h2>
</div>
</div>



<h1 className='text-center'>More Coming Soon...</h1>

</div>


<Footer/>
 </>
  )
}

export default project