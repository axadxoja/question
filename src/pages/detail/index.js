import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailPage() {
    const [data, setData] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        axios
        .get("http://localhost:3000/questions/${id}")
            .then(function (response) {
                // handle success
                // setData(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
    });
    }, [])

    return(<Layout>
         <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10 my-16">
             {data && <h1>{data.question}</h1>}
         </div>
    </Layout>)
}

export default DetailPage;