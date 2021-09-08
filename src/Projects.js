import React from 'react'

function Projects({ myProjects }) {
    
    const projects = myProjects.map((project) => (
        <ul key={project.name}>
         <img src={project.image} alt="Project Image"/><br/>
          Project Name: {project.name}<br/>
          <a href={project.frontend}>Github Frontend</a><br/>
          <a href={project.backend}>Github Backend</a><br/>
          <a href={project.youtube}>Video Walkthrough</a>
        </ul>
      ))

    return (
        <div>
            <h3>Here are some of the projects that I have worked on and continue updating in my spare time.</h3>
            {projects}

        </div>
    )
}


export default Projects 