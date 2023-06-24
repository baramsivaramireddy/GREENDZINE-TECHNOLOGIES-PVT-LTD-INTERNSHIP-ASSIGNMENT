import React from 'react';

const EmployeCard = (props) => {
    return (

        <div className='flex items-center justify-center  '>


                <div className='border-2  m-1 md:w-1/4  md:h-1/4  flex flex-col items-center justify-center rounded-lg border-black-600 shadow p-3 relative '>
                    
                  <div className='  absolute  rounded-full w-5 h-5 top-0 left-0  bg-black text-white '>
                  <center>
                  {props.employee.id}
                  </center>
                
                    </div>   
                    
                   
                    <img  className=' rounded-lg border-black-300 shadow border-2  h-36  w-full ' src={props.employee.avatar} /> 

                   <div className="font-bold">   {props.employee.first_name}    </div>
                </div>
        </div>
       
    );
};

export default EmployeCard;