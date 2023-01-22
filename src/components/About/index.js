import { useEffect, useState } from 'react'
import {
  faVuejs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About=()=>{
    const[letterClass,setLetterClass]=useState('text-animate')
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    My name is Junyan Chen, and I am a sophomore student studying Computer Science. I have a strong passion for programming and technology, and I am constantly seeking to learn new skills and expand my knowledge.
                    </p>
                    <p align="LEFT">
                    Throughout my studies, I have gained experience in both front-end and back-end development, and I am particularly proficient in technologies such as Node.js, MongoDB, and React. Additionally, I have a keen interest in machine learning, and I have been working on several projects to develop my skills in this area.
                    </p>
                    <p>
                    I am excited about the opportunities that technology offers, and I am always looking for new challenges to take on. I am eager to put my skills to work on real-world projects, and I am confident that I will be able to make valuable contributions to any team I work with. I believe that my ability to learn quickly and my willingness to take on new challenges will help me to excel in any project.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faVuejs} color="#228B22" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About