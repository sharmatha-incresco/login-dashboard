import Input from "../components/input";

function Add(){
    return(
        <div className="bg-white px-8 mx-80 w-fit h-96 p-5 rounded-lg">
            <Input name = "Name" type = "text"/> 
            <Input name = "Email" type = "text"/> 
            <Input name = "Phone" type = "number"/> 
            <Input name = "Enroll Number" type = "number"/> 
            <Input name = "Date of Admission" type = "date"/>
            <button className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500" type="submit"> Add Student</button> 
        </div>
    );
}

export default Add;