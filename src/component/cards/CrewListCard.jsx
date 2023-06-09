import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import CrewCardBtn from '../sub-component/CrewCardBtn';

import { crew } from '../../data/dataProvider';

import anousheh from '../../assets/crew/image-anousheh-ansari.png';
import douglas from '../../assets/crew/image-douglas-hurley.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';

const CrewListCard = () => {
  const { count } = useContext(countContext);
  return (
    <div className='crew-card-cnt'>
      <div className='crew-details-cnt'>
        <h3 className='crew-heading'>02 MEET YOUR CREW</h3>
        <div className='crew-info-cnt'>
          <div className='crew-role-name-cnt'>
            {' '}
            {count == 0 && crew ? (
              <p className='crew-roles'>{crew[0].role}</p>
            ) : count == 1 && crew ? (
              <p className='crew-roles'>{crew[1].role}</p>
            ) : count == 2 && crew ? (
              <p className='crew-roles'>{crew[2].role}</p>
            ) : count == 3 && crew ? (
              <p className='crew-roles'>{crew[3].role}</p>
            ) : null}
            {count == 0 && crew ? (
              <p className='crew-names'>{crew[0].name}</p>
            ) : count == 1 && crew ? (
              <p className='crew-names'>{crew[1].name}</p>
            ) : count == 2 && crew ? (
              <p className='crew-names'>{crew[2].name}</p>
            ) : count == 3 && crew ? (
              <p className='crew-names'>{crew[3].name}</p>
            ) : null}
          </div>
          <div className='crew-bio-cnt'>
            {count == 0 && crew ? (
              <p className='crew-bio'>{crew[0].bio}</p>
            ) : count == 1 && crew ? (
              <p className='crew-bio'>{crew[1].bio}</p>
            ) : count == 2 && crew ? (
              <p className='crew-bio'>{crew[2].bio}</p>
            ) : count == 3 && crew ? (
              <p className='crew-bio'>{crew[3].bio}</p>
            ) : null}
          </div>
          <div className='crewCardBtn-cnt'>
            <CrewCardBtn />
          </div>
        </div>
      </div>
      <div className='crewCard-img-cnt'>
        {count == 0 && crew ? (
          <img className='crewCard-img' src={douglas} alt='douglas' />
        ) : count == 1 && crew ? (
          <img className='crewCard-img' src={mark} alt='mark' />
        ) : count == 2 && crew ? (
          <img className='crewCard-img' src={victor} alt='victor' />
        ) : count == 3 && crew ? (
          <img className='crewCard-img' src={anousheh} alt='anousheh' />
        ) : null}
      </div>
    </div>
  );
};

export default CrewListCard;
