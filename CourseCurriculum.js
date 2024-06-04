import React from 'react';
import './CourseCurriculum.css';
function CourseCurriculum(){
    return(
        <div id="outer">
            <div id="heading"><p id="H">DATASCIENCE COURSE LEARNING PATH</p></div>
            <div id="sub"><h1><span id="a">Data Science</span> <span id="b">Course Curriculum</span></h1></div>
            <div id="items">
                <ul id="list">
                    <div class="view"><li><b>C++</b><br></br>Learn C++ for strong programming fundamentals.<div class="b1"><button class="show">View Curriculum</button></div></li></div>
                    <div class="view"><li><b>MERN Stack</b><br></br>Master the MERN stack for high-demand projects.<div class="b1"><button class="show">View Curriculum</button></div></li></div>
                    <div class="view"><li><b>Data Structures & Algorithms</b><br></br>Excel in Data Structures and Algorithms for interview success.<div class="b2"><button class="show">View Curriculum</button></div></li></div>
                    <li><b>Competitive Programming</b><br></br>Excel in Data Structures and Algorithms for interview success.<div class="b2"><button class="show">View Curriculum</button></div></li>
                </ul>
            </div>
        </div>
    );
}
export default CourseCurriculum;