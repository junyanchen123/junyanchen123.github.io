import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = ()=>{
  const [letterClass] = useState('text-animate')
  const nameArray = ['J', 'u', 'n','y', 'a', 'n']
  // const jobArray = [
  //   'S',
  //   'o',
  //   'p',
  //   'h',
  //   'o',
  //   'm',
  //   'o',
  //   'r',
  //   'e',
  //   ' ',
  //   'C',
  //   'o',
  //   'm',
  //   'p',
  //   'u',
  //   't',
  //   'e',
  //   'r',
  //   ' ',
  //   'S',
  //   'c',
  //   'i',
  //   'e',
  //   'n',
  //   'c',
  //   'e',
  //   ' ',
  //   'S',
  //   't',
  //   'u',
  //   'd',
  //   'e',
  //   'n',
  //   't',
  //   '.',
  // ]
  
  return(
    <>
      <div className='container home-page'>
          <div className='text-zone'>
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}> </span>
                {/* <img src={LogoTitle} alt='developer' /> */}
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                {/* <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={1}
                /> */}
              </h1>
              <Link to='/contact' className='flat-button'>Contact Me</Link>
          </div>
          {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home