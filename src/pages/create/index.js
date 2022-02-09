import axios from "axios";
import { useContext, useState } from "react";
import Layout from "../../components/Layout";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../utils/authContext";

function CreartePage() {

const [input, setInput] = useState("");
const history = useNavigate();
const {user} = useContext(AuthContext)

const onInputChange = (e) => {
   
    setInput(e.target.value)
};

const onSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
        
        question: input, 
       
        createAt: new Date().getDay(), 
        user : {
            username: user.username,
            profilePic: user.profilePic,
        },
    };
    axios
      .post('http://localhost:3000/questions', newQuestion)
      .then(function (response) {
        console.log(response);  
        history("/questions")
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
};

    return (
        <Layout>
            <div className="max-w-5xl mx-auto my-16">
                <h1 className="text-4xl font-semibold text-gray-800">Create question</h1>
                <form>
                    <div className="flex flex-col space-y-2 mt-6">
                        <label className="text-xl">Question</label>
                        <textarea value={input} onChange={onInputChange} type="text" className="form-textarea" rows={4} />
                    </div>

                    <div className="flex justify-end my-4">
                        <button onClick={onSubmit} className="px-6 py-2 rounded bg-indigo-500 text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
};

export default CreartePage;