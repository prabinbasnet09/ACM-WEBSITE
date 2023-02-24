import React, { useCallback } from "react";
import { internsData } from './internsData';
import { developersData } from "./developersData";
import { FaLinkedin } from 'react-icons/fa';
import { SiIndeed, SiGlassdoor, SiHandshake } from 'react-icons/si';
import { IconContext} from "react-icons/lib";
import simply_hired from '../../images/simply_hired.png'
import way_up from '../../images/way_up.png';
import media_bistro from '../../images/media_bistro.png';
import idealist from '../../images/idealist.png';
import SignUp from "./signUpForm";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges
} from "../../utils/roadmap-data";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

export default function AcademicDescription(){
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      []
    );

    const interns = internsData.map((intern) => {
        return{
            name: intern.name,
            classification: intern.classification,
            position: intern.position,
            company: intern.company,
            timeInterval: intern.time,
            linkedin: intern.linkedinLink,
            image: intern.image
        }
    })

    const developers = developersData.map((developer) => {
        return{
            name: developer.name,
            classification: developer.classification,
            github: developer.github,
            linkedin: developer.linkedin,
            image: developer.image
        }
    })

    return(
        <div className = "descriptionContainer">
            <section className = "leetcode_description">
                <p className = "leetcode--title">Why LeetCode and HackerRank?</p>
                <p className = "leetcode--body">
                    HackerRank and LeetCode are two online competitive programming platforms where software engineers sharpen their programming knowledge. 
                    Both offer programmers the opportunity to become problem solvers and practice common algorithmic and data structure problems in preparation 
                    for an interview.
                </p>
            </section>

            <section className="roadmap--container">
                <p className="roadmap--title">General RoadMap for Competitive Programming</p>
                <div className="roadmap--diagram" style = {{margin: '0 auto',width: '100%', height: '700px'}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={onInit}
                        fitView
                        attributionPosition="top-right"
                        preventScrolling={false}
                    >
                        <MiniMap />
                        <Controls />
                        <Background color="#aaa" gap={16} />
                    </ReactFlow>
                </div>
            </section>

            <section className="register">
                <p className="register--title">Sign Up for our upcoming HackerRank challenges and get featured on our linkedin page by making a place into top 5.🔥🚀</p>
                <SignUp />
            </section>

            <section className = "internship_description">
                <p className = "internship--title">Looking for an Internship?🤔</p>
                <p className = "internship--body">
                            For computer science undergrad students, securing an internship is a crucial step towards building a successful career in the field of technology. An internship provides students with valuable hands-on experience, networking opportunities, and exposure to real-world scenarios. It is also an excellent way to apply the theoretical knowledge gained in the classroom to practical projects. However, finding the right internship can be a daunting task, requiring students to research potential companies, tailor their resumes and cover letters, and prepare for interviews. With so many other students competing for the same opportunities, it's important to start the search early and utilize all available resources, including career fairs, job boards, and professional networking sites. A well-planned internship can open doors to future job prospects, so it's essential for computer science students to take this search seriously and invest the time and effort required to secure a valuable internship experience.
                </p>
            </section>


            <section className = "find_internships">
                <p className = "find_internships--title">FIND INTERNSHIPS NOW!!👇</p>
                <div className = "internship_finder">
                    <div className = "finder_1">
                        <a href="https://www.linkedin.com/">
                        <IconContext.Provider value={{color:'#0072B1', size: '50px'}} >
                            <FaLinkedin />
                        </IconContext.Provider>
                        </a>
                    </div>
                    
                        <div className = "finder_2">
                        <a href="https://www.indeed.com/">
                            <IconContext.Provider value={{color:'#2164f4', size: '50px'}} >
                                <SiIndeed />
                            </IconContext.Provider>
                        </a>
                            
                        </div>
                    

                    <div className = "finder_3">
                        <a href="https://www.glassdoor.com/">
                            <IconContext.Provider value={{color:'#0CAA41', size: '50px'}} >
                                <SiGlassdoor />
                            </IconContext.Provider>
                        </a>
                    </div>

                    <div className = "finder_4">
                        <a href="https://joinhandshake.com/">
                            <IconContext.Provider value={{color:'red', size: '50px'}} >
                                <SiHandshake />
                            </IconContext.Provider>
                        </a>
                    </div>

                    <div className = "finder_logo">
                        <a href="https://www.simplyhired.com/">
                            <img src = {simply_hired} alt = "profile picture" className="site_logo" />
                        </a>
                    </div>

                    <div className = "finder_logo">
                        <a href="https://www.wayup.com/">
                            <img src = {way_up} alt = "profile picture" className="site_logo" />
                        </a>
                    </div>

                    <div className = "finder_logo">
                        <a href="https://www.mediabistro.com/">
                            <img src = {media_bistro} alt = "profile picture" className="site_logo" />
                        </a>
                    </div>

                    <div className = "finder_logo">
                        <a href="https://www.idealist.org/en">
                            <img src = {idealist} alt = "profile picture" className="idealist" />
                        </a>
                    </div>
                </div>
            </section>
            
            <section className="internship--programs">
                <p className="internship--programs--title">Open Source Internship Programs😀</p>
                <ul className="internship--programs--list">
                    <a href="https://summerofcode.withgoogle.com/"><li>🎯Google Summer of Code (GSoC)</li></a>
                    <a href="https://lfx.linuxfoundation.org/tools/mentorship/"><li>🎯Linux Foundation Mentorship Program (LFX)</li></a>
                    <a href="https://fellowship.mlh.io/"><li>🎯MLH Fellowship</li></a>
                    <a href="https://developers.google.com/season-of-docs"><li>🎯Google Season of Docs (GSoD)</li></a>
                    <a href="https://www.outreachy.org/"><li>🎯Outreachy</li></a>
                    <a href="https://season.kde.org/"><li>🎯Season of KDE</li></a>
                    <a href="https://gssoc.girlscript.tech/"><li>🎯Girlscript Summer of Code</li></a>
                    <a href="https://www.fsf.org/volunteer/internships"><li>🎯Free Software Foundation (FSF) Internship</li></a>
                    <a href="https://wiki.linuxfoundation.org/lkmp"><li>🎯Linux Kernel Mentorship Program</li></a>
                    <a href="https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program"><li>🎯Linux Foundation Networking (LFN) Mentorship Program</li></a>
                    <a href="https://codeheat.org/"><li>🎯FOSSASIA Codeheat</li></a>
                    <a href="https://fossasia.org/"><li>🎯FOSSASIA Internship Program</li></a>
                    <a href="https://research.redhat.com/red-hat-open-source-contest/"><li>🎯Red Hat Open Source Contest</li></a>
                    <a href="https://segment.com/opensource/"><li>🎯Segment Open Fellowship</li></a>
                    <a href="https://osoc.be/"><li>🎯Open Summer of Code</li></a>
                    <a href="https://www.openmainframeproject.org/all-projects/mentorship-program"><li>🎯Open Mainframe Project Mentorship Program</li></a>
                    <a href="https://github.com/cncf/mentoring"><li>🎯CNCF Mentoring Initiatives</li></a>
                    <a href="https://www.x.org/wiki/XorgEVoC/"><li>🎯Endless Vacation of Code (EVoC)</li></a>
                    <a href="https://wiki.hyperledger.org/display/INTERN"><li>🎯Hyperledger Mentorship Program</li></a>
                    <a href="https://julialang.org/jsoc/"><li>🎯Julia Seasons of Contributions (JSoC)</li></a>
                    <a href="https://summer.haskell.org/"><li>🎯Summer of Haskell</li></a>
                    <a href="https://24pullrequests.com/"><li>🎯24 Pull Requests</li></a>
                    <a href="https://www.summerofbitcoin.org/"><li>🎯Summer of Bitcoin</li></a>
                </ul>
            </section>
        
            <div className = "interns_ulm">
                <p className = "interns--title">ULM CS INTERNS🧑‍💻</p>
                <div className = "interns--container">
                    {interns.map((intern) => {
                        return(
                        <section className = "interns">
                            {/* <div className = "background_cover"></div> */}
                            <p className = "interns--name">{intern.name}</p>
                            <p className = "interns--classification">{intern.classification}</p>
                            <p className = "interns--position">{intern.position}</p>
                            <p className = "interns--company">{intern.company}</p>
                            <p className = "interns--timeInterval">{intern.timeInterval}</p>
                            <a href = {intern.linkedin}>
                                <button className = "interns--linkedin">View Linkedin</button>
                            </a>
                        </section>
                    )})};
                </div>
            </div>
    </div>
    )
}