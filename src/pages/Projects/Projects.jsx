import React, { useEffect, useState, useContext } from "react";
import { GoBackBtn, ProjectBtn, Loader } from "../../components";
import { BsGithub } from "react-icons/bs"; 
import { TextContext } from "../../context/TextContext";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentBtn, setCurrentBtn] = useState([]);
    const {text} = useContext(TextContext);
    const currentUrl = location.pathname.includes('/projects');
    const currentUrlEsp = location.pathname.includes('/proyectos');

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
        setSelected([]);
        setTimeout(() => {
            const selectedProject = here.target.innerText
            const result = projects.find(({ title }) => title == selectedProject);
            setSelected(result)
          }, "500");
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

    setTimeout(() => {
        const sections = document.querySelectorAll('.main-section')
        sections.forEach(element => {
            element.classList.remove('hide')
        });
      }, "500");
 
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
    <div id="Proyectos" className=""></div>
    <div className="hide main-section animate__animated animate__fadeIn " id="Projects">
    <h1 className="section-sub">{text[4].txt} </h1>
        {
             text && text.length>0 ? 
             <>
                {
                currentUrl ?
                <>
                <GoBackBtn label={text[12].txt} />
                </>
                :
                <>
                </>
                }
                {
                currentUrlEsp ?
                <>
                <GoBackBtn label={text[12].txt} />
                </>
                :
                <>
                </>
                }
                <div className="project-section">
                {
                    Object.keys(selected).length > 0 ? 
                    <>
                    <div className="selected-project animate__animated animate__fadeIn">
                        <h1>{selected.title}</h1>
                        <div className="img-container">
                        <img src={selected.image} alt="" className="slected-project-img"/>
                        </div>
                        <div className="prj-tech-img">
                            <img src={selected.tech1} alt="" className="selected-tech" />
                            {
                                selected.tech2 ?
                                <>
                                    <img src={selected.tech2} alt="" className="selected-tech" />
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className="go-prj-btns">
                        <a href={selected.link} target="_blank"><button className="go-project-btn custom-btn-2">{text[11].txt}</button></a>
                        <a href={selected.git} target="_blank"><button className="go-project-btn custom-btn-2"><BsGithub size={50} className="project-git-icon"/> </button></a>
                        </div>

                    </div>
                    </>
                    :
                    <>
                    <div className="selected-project">

                    </div>
                    </>
                }
                    <div className="project-list animate__animated animate__fadeIn">
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
             :
             <>
             </>
        }

        
    </div>

    </>
    )
}