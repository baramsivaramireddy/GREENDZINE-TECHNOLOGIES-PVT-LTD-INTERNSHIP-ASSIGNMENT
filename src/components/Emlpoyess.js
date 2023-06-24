import React,{useState , useEffect} from 'react';
import axios from "axios"
import EmployeCard from './employeCard';
const Emlpoyess = () => {

   const  [employeeData , setEmployeeData] = useState(null)

   const [query ,setquery ] = useState('')

    const fetchData = () => {

        axios.get("https://reqres.in/api/users?page=2").then((res) =>{

            setEmployeeData(res.data.data)
            console.log(typeof employeeData)
            console.log(res.data.data)
        })

    }


    
    useEffect(fetchData,[])

   if (employeeData == null ){

    // loading

    return (
        <>

        <div className='flex items-center justify-center h-screen'>
        loading
        </div>
        </>
    )
   }

   return (
    <>


            <div>

            <div className='flex items-center justify-center text-2xl text-green-500'>
                        GREENDZINE TECHNOLOGIES PVT LTD
                </div>  
                
                 <div className='flex items-center justify-center '>
                 INTERNSHIP ASSIGNMENT
                </div>

                

            </div>

      

        {/* serch box */}

        <div>
            <center>

            <input type='text' placeholder='enter first name' className='p-1 m-2 w-2/4  border-white focus:outline-none' value={query} onChange={ (event) => setquery(event.target.value)}>
            
            </input>
            </center>
            
        </div>
        {
            employeeData
            
            .filter((employee)  => {
                
                return (employee.first_name.toLowerCase() .includes(query.toLowerCase().trim()) )
                
            })


            
            .map((employee) => {
                return (<EmployeCard employee= {employee}  key={employee._id} />)
            })

        }
    </>
   )
};

export default Emlpoyess;