import React from "react";
import "./Skills.css";
const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
          <div>
            <h3 className="skills__name">Node Js</h3>
            <span className="skills__level">Basic</span>
          </div></div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
          

          <div>
            <h3 className="skills__name">Mysql</h3>
            <span className="skills__level">Basic</span>
          </div></div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
          

          <div>
            <h3 className="skills__name">Firebase</h3>
            <span className="skills__level">Basic</span>
          </div></div>
        </div>

{/* Skill group 2 */}

        {/* <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
         

          <div>
            <h3 className="skills__name">Node Js</h3>
            <span className="skills__level">Basic</span>
          </div> </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
          

          <div>
            <h3 className="skills__name">Mysql</h3>
            <span className="skills__level">Basic</span>
          </div></div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
          

          <div>
            <h3 className="skills__name">Firebase</h3>
            <span className="skills__level">Basic</span>
          </div></div>
        </div> */}

      </div>
    </div>
  );
};

export default Backend;