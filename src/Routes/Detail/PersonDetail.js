import React, {useState} from "react";
import { useQuery } from 'react-apollo-hooks';
import { PERSON_DETAIL } from "../../queries";


const PersonDetail = ({
    match: {
        params: { personId }
    }
}) =>{
    const [language, setLanguage] = useState('ko-kr');

    const {data,loading} = useQuery(PERSON_DETAIL,{
        variables:{
            personId:parseInt(personId),
            language
        }
    });
    if(loading){
        return <div>load</div>
    }
    console.log(data);


    return(
        <div>
            person detail
        </div>
    )
}

export default PersonDetail