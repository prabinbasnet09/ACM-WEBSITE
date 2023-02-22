import React from 'react'


//changed class based component into functional component
export default function Alumni(){
  return (
    
    <>  {/* using '<>' because we need to wrap the whole html inside a parent element. 
            we can also name it as <div> element*/}
      <h2>Alumni of ULM</h2>

    {/* "float-container1" is the div for the left side of boxes*/}
      <div class="float-container1">

        {/* first box on the left side*/}
        <a href='https://discord.com/'>    
            <div class="float-child1">
              <div class="green">Discord 1</div>
          </div>
        </a>

        {/* second box on the left side*/}
        <a href='https://discord.com/'>   
          <div class="float-child2">
              <div class="blue">Discord 2</div>
          </div>
        </a>

      </div>    {/* end of the the div*/}


    {/* "float-container2" is the div for the right side of boxes*/}
      <div class="float-container2">

        {/* first box on the right side*/}
        <a href='https://discord.com/'>
        <div class="float-child3" >
            <div class="green">Discord 3</div>
        </div>
        </a>

        {/* second box on the right side*/}
        <a href='https://discord.com/'>
        <div class="float-child4">
            <div class="blue">Discord 4</div>
        </div>
        </a>

      </div> {/* end of the div */}

      </>


  )
}

