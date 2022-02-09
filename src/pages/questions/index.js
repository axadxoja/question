import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect } from "react";
import QuestionCads from "./questionCard";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function QuestionsPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/questions")
            .then(function (response) {

                setData(response.data);
            })
            .catch(function (error) {

                console.log(error);
            });
    }, []);
    return (<Layout>
        <div className="max-w-5xl mx-auto my-16">
            <div className="flex justify-end">
            <Link to="/questions/create" className="text-4xl my-6 bg-indigo-600 text-white flex justify-center items-start rounded-full w-12 h-12">+</Link>
            </div>
            <div className="grid grid-cols-3 gap-10">

                {data.length > 0 && data.map((question) => {
                    return <QuestionCads question={question} />;
                })}
            </div>
        </div>
    </Layout>

    )
};

export default QuestionsPage;