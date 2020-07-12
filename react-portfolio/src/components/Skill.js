import React from 'react';
import logos from '../assets/images/full-size-logos/html5-full.png';


function Skill() {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="tile">
            <div className="icon">
                <img className="img-fluid" src={logos} alt="HTML5" />
            </div>
            HTML5
        </div>
    </div>
  );
}

export default Skill;