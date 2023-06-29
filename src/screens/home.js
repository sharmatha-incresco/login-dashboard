import Sidebar from "../components/sidebar";
import Skills from "../components/skills";
import Header from "../components/header";
function Home(){
    return(
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Header/>
                <div className="bg-gradient-to-r border text-center from-yellow-500 rounded-lg to-yellow-400 h-16 w-229 my-10 mx-28">
                    <h1 className="mt-4 text-2xl font-normal">Evaluation</h1>
                </div>
                <div className="grid grid-cols-2">
                    <Skills type ="Hard" one="English Level" two="Leadership" three="Communication" color="bg-softskill"/>
                    <Skills type = "Soft" one="" two="" three="" color="bg-hardskill"/>
                </div>
            </div>
        </div>
    );
}

export default Home;

