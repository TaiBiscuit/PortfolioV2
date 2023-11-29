import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn } from "../../components";


export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProjectData = () => {
        fetch('./assets/projects.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson)
            setProjects(myJson);
            setLoading(false)
        })
    };

    useEffect(()=>{
        getProjectData()
    },[]);

    return (
    <>
    <GoBackBtn label={'home'} />
    {
         projects && projects.length>0 && projects.map((item) =>{
            return(
            <div className={`project-A project-zone-${item.id} `} key={item.key}>
                <p className="project-title">{item.title}</p>
            </div>)
            })
    }
    </>
    )
}