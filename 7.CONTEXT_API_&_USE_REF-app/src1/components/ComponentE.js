import React, { useEffect } from 'react';

function ComponentE() {
    let logInData = useContext(LoginContext)
    useEffect(()=>{
        console.log('logInData', logInData);
        // {
        //     isLogin:true,
        //     loggedInUser:'Guru'
        // }
    },[])
  return <div>
      ComponentE - {logInData.loggedInUser}
  </div>;
}

export default ComponentE;
