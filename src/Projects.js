import React from 'react'

function Projects({ myProjects }) {
    
    const projects = myProjects.map((project) => (
        <ul key={project.name}>
          Project: {project.name}
          <p>Frontend: {project.frontend}</p>
          <p>Backend: {project.backend}</p>
          <p>Video Walkthrough: {project.youtube}</p>
        </ul>
      ))

    return (
        <div>
            <h2>Here are some of the projects that I have worked on and continue updating in my spare time.</h2>
            {projects}

            {/* <h3><a href={"https://github.com/rregalado17/magisterial-messi-frontend"}>Frontend JS</a></h3>
            <h3><a href={"https://github.com/rregalado17/magisterial-messi-backend"}>Backend Rails</a></h3>
            <h3><a href={"https://github.com/rregalado17/litigation-manager-frontend"}>Litigation Manager Frontend React JS</a></h3>
            <h3><a href={"https://github.com/rregalado17/litigation-manager-backend"}>Litigation Manager Rails</a></h3>
            <h3><a href={"https://github.com/rregalado17/plutus-frontend"}>Plutus Frontend JS</a></h3>
            <h3><a href={"https://github.com/rregalado17/plutus"}>Plutus Backend Rails</a></h3> */}

        </div>
    )
}


export default Projects 