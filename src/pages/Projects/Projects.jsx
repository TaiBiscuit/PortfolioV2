import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn, ProjectBtn } from "../../components";


export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProjectData = () => {
        fetch('./assets/projects.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setProjects(myJson);
            setLoading(false)
        })
    };



    function handleShowProject (here) {
        const selectedProject = here.target.innerText
        const result = projects.find(({ title }) => title == selectedProject);
        setSelected(result)
    }

    useEffect(()=>{
        getProjectData()
    },[]);

    return (
    <>
    <GoBackBtn label={'home'} />
    {
        Object.keys(selected).length > 0 ? 
        <>
        <div className="selected-project">
            <h1>{selected.title}</h1>
            <div className="img-container">
               <img src={selected.image} alt="" className="slected-project-img"/>
            </div>
            <a href={selected.link} target="_blank"><button>Go to Project</button></a>
        </div>
        </>
        :
        <>
        <div className="selected-project">

        </div>
        </>
    }
    {
         projects && projects.length>0 && projects.map((item) =>{
            return(
            <div className={`project-A project-zone-${item.id} `} key={item.key} onClick={(e) => {handleShowProject(e)}}>
                <ProjectBtn label={item.title} />
            </div>)
            })
    }

    </>
    )
}