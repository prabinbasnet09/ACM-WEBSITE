import React, { useEffect } from 'react'
import { leaderboardData } from './leaderboardData'
import AcademicDescription from '../layout/academicDescription'
import { useState } from 'react'

//changed class based component into functional component
export default function Stuff(){

  const [coders, setCoders] = useState([]);

  useEffect(() => {
      fetch("")
        .then(response => response.json())
        .then(data => setCoders(data));

  }, [])
  
  return (
    <>
      <div className = "academics--title">Top coder of the month</div>
      <div className = "leaderboard">
        <p className = "leaderboard--title">Leaderboard🏆</p>

        <div className = "leaderboard--interval">
          <button className = "button"> Refresh </button>
        </div>

        {coders.length != 0 && coders.map((coder) => {
          return(
            <div className = "users"> 
              <div className = "users--panel">

                <p className = "users--position">{coder.userID}</p>

                <img src = {coder.userImage} alt = "User profile pic" className='users--image' />
                
                <div className = "users--info">
                  <p className = "users--info--name">{coder.userName}</p>
                  <p className = 'users--info--location'>{coder.userLocation}</p>
                </div>
              
              </div>

              <div className = "usersScore">
                {coder.userPoints}
              </div>
            </div>
            )
        })}

        {coders.length === 0 &&
          <div className='sorry-message'>
            <p>😟 Sorry! There are no on-going challenges at the moment. Please check our event calendar to see the next upcoming event.</p>
          </div>
        }
      </div>

      <AcademicDescription />
    </>
  ) 
}


