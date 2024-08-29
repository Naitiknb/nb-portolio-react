import React from 'react'
import Nav from "../components/nav/nav.jsx"
import Matm from "../../src/assets/m-atm.png"
import Mos from "../../src/assets/mos.png" 
import Equidha from "../../src/assets/equidha.png"
import Weather from "../../src/assets/weather-1.png"
import Footer from "../../src/components/footer/footer.jsx"
import Rentkaro from "../assets/Rent-karo.png"

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
  <h2 className='text-center my-2'>Micro Atm landing Page <a href='https://mos-world.com/services/micro-atm'><button className='btn btn' >Click to view</button></a> </h2>
</div>


<div className=' my-5'>
  <img src={Mos} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center my-2'>Irctc Landing Page <a href='https://mos-world.com/services/irctc'><button className='btn btn' >Click to view</button></a> </h2>
</div>


<div className=' my-5'>
  <img src={Equidha} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center my-2'>Equidha Landing Page <a href='https://www.equidha.com/stock-market'><button className='btn btn' >Click to view</button></a> </h2>
</div>



<div className=' my-5'>
  <img src={Weather} alt='matm' className='h-100 w-100 rounded'/>
  <h2 className='text-center my-2'>Weather app   <a href='https://weather-app-naitiknb6.netlify.app/'><button className='btn btn' >Click to view</button></a> </h2>

</div>


<div className='my-5'>
  <img src={Rentkaro} alt='rent-karo' className='h-100 w-100 rounded '/>
  
  <h2 className='text-center my-2'>Rent-karo  <a href='https://rent-karo.netlify.app/'><button className='btn btn' >Click to view</button></a></h2>
 
</div>



</div>


<div className='my-5'>
<h1 className='text-center'>More Coming Soon...</h1>
</div>

</div>


<Footer/>
 </>
  )
}

export default project