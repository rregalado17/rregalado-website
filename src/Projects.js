import React from 'react'

function Projects({github, videos}) {
    
    const project = github.map(link => (
        <ul key={link}><a href={link}>Github</a></ul>
    )
    ) 
    const video = videos.map(link => (
        <ul key={link}><a href={link}>Youtube Walkthrough</a></ul>
    ))

    return (
        <div>
            <h2>Here are some of the projects that I have worked on and continue updating in my spare time.</h2>
            {project}
            {video}
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