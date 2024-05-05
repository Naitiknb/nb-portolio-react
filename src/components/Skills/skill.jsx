import React from 'react'

import "../experience/exp.css"

const skill = () => {
  return (
<>



<div className='container'>
    
    <h1>Skills<span className='h1' style={{color:"#770df0" ,fontSize:"70px"}}>.</span> </h1>
    <hr></hr>
       <div className='row'>
        <div className='col-md-3'>
<h1 className='h2'>Web design </h1>


<p>UI/UX Design</p>
<p>Responsive Design</p>
<p>User Research</p>
<p>Seo</p>



        </div>



        <div className='col-md-3'>

<h1 className='h2'>  Frontend</h1>
<p>Javascript</p>
<p>Bootstrap-5</p>
<p>React js</p>
<p>Tailwind css</p>

        </div>




<div className='col-md-3'>
<h1 className='h2'>Backend</h1>
<p>Node js</p>
<p>Sql</p>
<p>Express js</p>
<p>Firebase</p>

</div>


<div className='col-md-3'>
<h1 className='h2'>Soft Skills</h1>
<p>Effective communication</p>
<p>Collaboration</p>
<p>Commitment</p>
<p>Leadership</p>

</div>


    </div>
</div>



</>
  )
}

export default skill