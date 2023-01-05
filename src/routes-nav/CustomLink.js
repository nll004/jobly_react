import React from "react";
import { JOBLY_FRONTEND_URL } from "../apis/api";

function CustomLink({route, text}){
    return (
        <a href={`${JOBLY_FRONTEND_URL}/${route}`}>
            {text}
        </a>
    )
}

export default CustomLink;
