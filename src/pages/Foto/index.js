import Layout from "../../components/Layout";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";


function UserFoto() {

    const [date, setDate] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/questions")
            .then(function (response) {

                setDate(response.data);
            })
            .catch(function (error) {

                console.log(error);
            });
    }, []);

    return (
        <Layout>
            {/* <div className="w-55 h-20  flex justify-between m-6"> */}
            <div className="grid grid-cols-3 gap-10">
                <img src="https://i.pinimg.com/236x/27/3a/9b/273a9b30d14eeb2e76d3c9ecfcbfea3c--stunning-eyes-beautiful-gorgeous.jpg" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
        </Layout>
    )
};

export default UserFoto;