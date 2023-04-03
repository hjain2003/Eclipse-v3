import React, { Suspense, useState } from 'react';
import './events.css';
import background from '../../assets/images/eventsBackground.png';
import Menu from '../../components/Menu/Menu.jsx';
import Hacklipse from '../../assets/images/bottomText.svg';
import Enigma from '../../assets/images/enigma.svg';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Events = () => {
  const [meshSelected, setMeshSelected] = useState(2);
  return (
    <Suspense>
        <div className='events-container'>
            <div className="center-header-1"></div>
            <img className='background' src={background} alt="" />
            <div className="heading">EVENTS</div>
            <div className="menu">
                <Menu meshSelected={meshSelected} setMeshSelected={setMeshSelected} />
            </div>
            <div className="event-name">
                {
                  meshSelected === 1 ? (<img className='event-name-img' src={Enigma} alt="" />)
                  :
                  meshSelected === 2 ? (<img className='event-name-img' src={Hacklipse} alt="" />)
                  :
                  <img className='event-name-img' src={Enigma} alt="" />
                }
            </div>
        </div>
    </Suspense>
  )
}

export default Events