import React, { useState } from 'react'
import './HomeInfo.css'
import { Button } from './Button';

function HomeInfo() {
  const [button, setButton] = useState(true);

  return (
    <>
        <section className="info-bar team">
            <div className="text">
                <h2>Our Team</h2>
                <p>
                    We are TRINITY FORCE, a team of passionate teen girls who strive to lead with heart and build with purpose.
                </p>
            </div>
            <div className="image">
                <img src="/images/trinity_logo.png" alt="Trinity Force Logo" />
            </div>
        </section>

        <section className="info-bar org">
            <div className="image">
                <img src="/images/trinity_logo.png" alt="Trinity Force Logo" />
            </div>
            <div className="text">
                <h2>Our Organization</h2>
                <p>
                We’re part of STEMCYCLES, a non-profit organization (2021) that focuses on STEM teaching and training. Our mission is to provide industry-level knowledge to underrepresented students in the STEM field, thus
                allowing them to foster a solid foundation on which we can help build upon from K-12 and beyond. Trinity Force is our initiative to get female underrepresented students more involved in the robotics field.
                Our robotics team competes in different complex challenges every year with teams from around the world.
                Students develop skills such as problem-solving and troubleshooting, all while in a healthy team-building
                environment. Our end mission is that students are equipped with the knowledge and connections to
                achieve whatever their goal is in life.
                </p>
            </div>
        </section>

        <section className="info-bar frc">
            <div className="text">
                <h2>What is FRC?</h2>
                <p>
                    FIRST Robotics Competition is an international high school robotics program that combines engineering, teamwork, and real-world impact. 
                    Each year, teams of high school students, coaches, and mentors work to build robots capable of competing in that year's game.
                </p>

                {button && <Button buttonStyle='btn--outline' link='https://www.firstinspires.org/programs/frc/'>Learn More!</Button>}
            </div>
            

            <div className="image">
                <img src="/images/trinity_logo.png" alt="Trinity Force Logo" />
            </div>
        </section>
        
    </>
  )
}

export default HomeInfo
