import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import TechnologyCardBtn from '../sub-component/TechnologyCardBtn';

import { technology } from '../../data/dataProvider';

const TechnologyCard = () => {
  const { count } = useContext(countContext);
  return (
    <>
      <div>
        <h3>03 SPACE LAUNCH 101</h3>
      </div>
      <div>
        <div>
          <TechnologyCardBtn />
        </div>
        <div>
          <p>THE TERMINOLOGY...</p>
          {count == 0 && technology ? (
            <p>{technology[0].name}</p>
          ) : count == 1 && technology ? (
            <p>{technology[1].name}</p>
          ) : count == 2 && technology ? (
            <p>{technology[2].name}</p>
          ) : null}
          {count == 0 && technology ? (
            <p>{technology[0].description}</p>
          ) : count == 1 && technology ? (
            <p>{technology[1].description}</p>
          ) : count == 2 && technology ? (
            <p>{technology[2].description}</p>
          ) : null}
        </div>
        <div>
          {count == 0 && technology ? (
            <img src='' alt='' />
          ) : count == 1 && technology ? (
            <img src='' alt='' />
          ) : count == 0 && technology ? (
            <img src='' alt='' />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;
