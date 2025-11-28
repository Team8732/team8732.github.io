import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'
import TeamGrid from '../components/TeamGrid';

function Join() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>Why should you join Trinity Force?</h1>
        </Hero>
        <TextSection>
            <h2>Mentoring Matters</h2>
            <p>
                Mentoring is one of the most impactful acts in life. 
                A great mentor can open up new avenues of opportunity or provide
                information that was not apparent to you
                before. They can help unlock a new level
                of confidence that enables you to reach
                your full potential in any area you
                choose.
            </p>
            <p>
                On Team 8732, our mentors take the
                title to heart and work with students
                to expand their capabilities. Our end
                goal is that students can have career
                success past Trinity Force, and
                mentoring is pivotal to reaching this
                mission.
            </p>
            <p>
                Over 75% of our mentors were in FIRST Robotics as a student, with over 50%
                falling within the 21-35 age range. Although this statistic may be unusual, we
                believe this is something that separates our team from others. Having mentors
                who were once a part of FIRST Robotics and are now thriving in their careers is
                evidence of the program's effectiveness and mentor aptitude to students,
                parents, and supporters. Likewise, an advantage of having mentors fall in this
                age range is that it is easier for students to connect themselves to the idea that
                their career goals are achievable. Being able to see someone not much older
                than you have success and know that their experiences may not be much
                different from yours can be a massive motivator in students. We believe that our
                mentors do wonderful filling this title, and students who pass through the team
                will have access to mentors as long as they want them.
            </p>
            <br></br>
            <h2>Student Engagement</h2>
            <p>
                An inclusive culture is one students will engage in if they are
                interested and having fun learning. Building this space requires
                effort, likewise, since the goals of Trinity Force align with the
                importance of underrepresented or low-resource students in STEM,
                recruiting efforts must be analyzed to identify success. Gaining,
                retaining, and influencing as many students as possible while
                meeting the standards set for our organization is one way we
                succeed.
            </p>
            <br></br>
            <h2>Practice Makes Progress!</h2>
            <p>
                We believe that if you develop a program that is founded on sound
                principles and with good intentions then competitive success will
                follow. Students put in countless hours learning, designing, iterating,
                developing software, and raising funds with mentor assistance by
                their side. Absorbing all of these lessons throughout the season and
                turning them into competitive results is something we all look
                forward to!
            </p>
            <h1>Sustained Impact</h1>
            <p>
                One of the greatest measures of success we hold at Trinity Force is
                the wonderful things that students go on to do once they graduate
                from the team. Our lead mentor believes that one of the best things
                that could come from students' time on the team is that they go on
                the excel throughout college and into their careers. This provides a
                sense that the program is working for the benefit of the student.
                Excellence from our Alumni is a result of their hard work and we
                hope that our attention to upholding our standards above played a
                part.
            </p>
            <p>
                In the team's short time of existence, we have had many success
                stories of students who have graduated from the team. Our Alumni
                have gone on to gain Internships at NASA, Amazon, NSBE, and do
                research at Cornell with the Boyce Thompson Institute. We love to
                highlight our alumni and continue to support them past their time on
                Team 8732. We continue to share their stories and support their
                success, and they continue to grow as individuals.
            </p>
        </TextSection>
        <Footer></Footer>
    </>
  )
}

export default Join