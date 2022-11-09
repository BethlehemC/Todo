import useFetch from "./useFetch";

const About = () => {
const {data}=useFetch(' http://localhost:3001/users');

    return (  
<div>
<p>hey</p>
{
data.map((da)=>console.log(da.username)
)}


</div>





    );
}
 
export default About;