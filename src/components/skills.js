

function Skills(props){
    const attr = "h-96 max-w-12 mx-8 pt-12 space-x-5 "+props.color;
    return(
        <div className={attr}>
            <h2 className="text-center mb-8 text-2xl">{props.type} Skills</h2>
            <h3 className="mb-8">{props.one}</h3>
            <h3 className="mb-8">{props.two}</h3>
            <h3>{props.three}</h3>
        </div>
    );
}
export default Skills;