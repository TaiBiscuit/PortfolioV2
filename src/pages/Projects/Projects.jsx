import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn, ProjectBtn, Loader } from "../../components";


export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentBtn, setCurrentBtn] = useState([]);

    const getProjectData = () => {
        fetch('./assets/projects.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setProjects(myJson)
            setLoading(false)
        })
    };



    function handleShowProject (here) {
        const selectedProject = here.target.innerText
        const result = projects.find(({ title }) => title == selectedProject);
        setSelected(result)
    }

    function changeCss (thisOne) {
        let newBtn = thisOne.target.innerHTML;
        setCurrentBtn(newBtn);
    }

    function changeBtn() {
        let btns = document.querySelectorAll('.custom-btn');
        btns.forEach(btn => {
            if(btn.innerHTML == currentBtn){
                btn.classList.remove('home-btn') 
                btn.classList.add('return-btn')  
            } else {
                btn.classList.remove('return-btn') 
                btn.classList.add('home-btn')  
            }

        });
    }

    useEffect(()=>{
        try {
            changeBtn()
           } catch (error) {
            setLoading(false);
        }
    },[currentBtn]);

    useEffect(()=>{
        try {
            setLoading(true);
            getProjectData()
            .finally(() => {
                setLoading(false)
            })
           } catch (error) {
            setLoading(false);
        }
    },[]);


    return loading ? (
        <Loader />
    ) : 
    (
    <>
    <GoBackBtn label={'Home'} />
    <div className="project-section">
    {
        Object.keys(selected).length > 0 ? 
        <>
        <div className="selected-project">
            <h1>{selected.title}</h1>
            <div className="img-container">
               <img src={selected.image} alt="" className="slected-project-img"/>
            </div>
            <a href={selected.link} target="_blank"><button className="go-project-btn custom-btn-2">Go to Project</button></a>
        </div>
        </>
        :
        <>
        <div className="selected-project">

        </div>
        </>
    }
    <div className="project-list">
    {
         projects && projects.length>0 && projects.map((item) =>{
            return(
            <div className={`project-A project-zone-${item.id} `} key={item.key} onClick={(e) => {handleShowProject(e); changeCss(e)}}>
                <ProjectBtn label={item.title} />
            </div>)
            })
    }
    </div>
    </div>

    </>
    )
}