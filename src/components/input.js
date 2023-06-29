function Input(props){
    const placeholder = "Enter your "+props.name;
    return(
        <div className="px-3">
            <h3 className="text-gray-400">{props.name}</h3>
            <input  className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type={props.type} placeholder={placeholder}></input>
        </div>
    );
}

export default Input;



                       {/* <Input name = "Name" type = "text"/> 
                        <Input name = "Email" type = "text"/> 
                        <Input name = "Phone" type = "number"/> 
                        <Input name = "Enroll Number" type = "number"/> 
                        <Input name = "Date of Admission" type = "date"/>   */}