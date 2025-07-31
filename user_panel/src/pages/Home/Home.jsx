import React, { useState, useEffect } from "react";
import "./ICEDepartment.css";
import { assets } from "../../assets/assets"; // coverImages only

const ICEDepartmentPage = () => {
  const coverImages = assets.coverImages;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coverImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ice-department-page-container">
      {/* Only full-width banner image like Facebook cover */}
      <header className="site-header">
        <div className="image-slider">
          <img
            src={coverImages[currentImage]}
            alt={`Cover ${currentImage + 1}`}
          />
        </div>
      </header>

      <hr className="section-divider" />

      {/* Example: Introduction */}
      <section className="department-section introduction">
        
        <p>
          The Information and Communication Engineering (ICE) Department,
          nestled within the Faculty of Engineering at Pabna University of
          Science and Technology (PUST), is dedicated to cultivating highly
          skilled professionals in the dynamic field of modern information and
          communication technology. Our core mission is to empower students to
          confidently tackle global technological challenges and drive
          innovation through an education that is both contemporary and globally
          recognized.
        </p>
        <p>
          We offer a well-balanced curriculum that seamlessly integrates
          theoretical knowledge with practical expertise, meticulously preparing
          our students for the technological advancements of tomorrow.
        </p>
      </section>

      <hr className="section-divider" />

      {/* 2. Vision & Mission */}
      <section className="department-section vision-mission">
        <h2 className="section-heading">Vision & Mission</h2>
        <div className="content-block">
          <h3 className="sub-heading">Vision</h3>
          <p className="vision-text">
            To emerge as a pioneering hub in the realm of information and
            communication engineering, making significant contributions at both
            national and international levels through innovative research,
            modern pedagogical approaches, and a strong alignment with industry
            demands.
          </p>

          <h3 className="sub-heading">Mission</h3>
          <ul className="mission-list">
            <li>
              To provide students with profound theoretical and practical
              knowledge.
            </li>
            <li>
              To conduct cutting-edge research across various specialized areas
              of information and communication engineering.
            </li>
            <li>
              To establish robust collaborations with industry and society,
              fostering technological progress.
            </li>
            <li>
              To prepare students as responsible professionals, instilled with
              strong ethics, leadership qualities, and a sense of social
              accountability.
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* 3. Curriculum & Degrees */}
      <section className="department-section curriculum">
        <h2 className="section-heading">Curriculum & Degrees</h2>
        <p>
          The ICE Department primarily offers a B.Sc. (Engg.) in Information and
          Communication Engineering degree.
        </p>

        <div className="content-block">
          <h3 className="sub-heading">B.Sc. (Engg.) Program</h3>
          <ul className="detail-list">
            <li>
              <span className="list-item-label">Duration:</span> This is a
              comprehensive 4-year (8-semester) undergraduate program, with each
              semester spanning approximately 26 weeks.
            </li>
            <li>
              <span className="list-item-label">Credit Hours:</span> A minimum
              of 160.0 credit hours must be successfully completed for degree
              conferment.
            </li>
            <li>
              <span className="list-item-label">Curriculum Structure:</span> Our
              curriculum is thoughtfully designed to equip students with both
              foundational and specialized knowledge in Communication
              Engineering and IT/Software Engineering. Alongside core subjects,
              a range of elective courses allows students to tailor their
              studies to their specific interests and career aspirations.
            </li>
            <li>
              <span className="list-item-label">Key Course Areas Include:</span>
              <ul className="nested-detail-list">
                <li>
                  Computer Science & Programming: Programming languages (e.g.,
                  C++, Java, Python), Data Structures, Algorithms, Operating
                  Systems, Database Management Systems.
                </li>
                <li>
                  Communication Engineering: Signal Processing, Digital
                  Communication, Wireless Communication, Microwave Engineering,
                  Optical Fiber Communication, Computer Networking.
                </li>
                <li>
                  Electronics & Hardware: Digital Logic Design, Electronic
                  Circuits, Microprocessors & Interfacing, VLSI Design.
                </li>
                <li>
                  Software Engineering: Software Development Methodologies,
                  Software Quality Assurance, Web Programming, Mobile
                  Application Development, Game Development.
                </li>
                <li>
                  Advanced Technologies: Artificial Intelligence (AI), Machine
                  Learning, Deep Learning, Computer Vision, Cloud Computing,
                  Network Security, Cryptography, Internet of Things (IoT).
                </li>
              </ul>
            </li>
            <li>
              <span className="list-item-label">Grading System:</span> Student
              performance is rigorously assessed through continuous evaluation,
              encompassing class attendance, class tests, quizzes, assignments,
              mid-term examinations, and a comprehensive semester final exam. A
              minimum of a 'D' grade is required in each course, and an overall
              cumulative CGPA of 2.20 must be achieved. An 'F' grade in any
              course necessitates retaking that specific course.
            </li>
            <li>
              <span className="list-item-label">Class Attendance:</span> A
              minimum of 70% class attendance in each course is mandatory for
              eligibility to sit for the semester final examination.
            </li>
          </ul>
        </div>

        <div className="content-block">
          <h3 className="sub-heading">
            Postgraduate Programs (M.Sc. Engineering / M. Engineering,
            M.Phil., Ph.D.)
          </h3>
          <p>
            The ICE Department also provides avenues for advanced studies
            through postgraduate (M.Sc. Engg. / M. Engg.) and Ph.D. degree
            programs. M.Sc. Engg. or M. Engg. programs are typically two years
            in duration and require a relevant undergraduate degree. M.Phil. and
            Ph.D. degrees are research-intensive programs designed for deeper
            academic and scientific inquiry.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* 4. Admission Process */}
      <section className="department-section admission-process">
        <h2 className="section-heading">Admission Process</h2>

        <div className="content-block">
          <h3 className="sub-heading">B.Sc. (Engg.) Admission</h3>
          <ul className="detail-list">
            <li>
              <span className="list-item-label">
                Educational Qualifications:
              </span>
              <ul className="nested-detail-list">
                <li>
                  Typically, candidates must have a minimum GPA of 2.50 (or
                  equivalent) in both SSC (Science group) and HSC (Science
                  group) examinations.
                </li>
                <li>
                  The combined GPA from both examinations must not be less than
                  6.00.
                </li>
                <li>Mathematics is a compulsory subject.</li>
                <li>
                  For English medium students, a minimum of 5 subjects in
                  O-Level (including Mathematics) and at least 2 subjects in
                  A-Level (from the Science group) are required. Specifically, a
                  minimum of 'B' grade in at least 4 O-Level subjects and 'C'
                  grade in at least 2 A-Level subjects is necessary.
                </li>
                <li>
                  For candidates applying under the Freedom Fighter quota, a
                  combined GPA of 5.00 in SSC and HSC is required.
                </li>
              </ul>
            </li>
            <li>
              <span className="list-item-label">Admission Test:</span>{" "}
              Prospective students must participate in and successfully pass the
              PUST Cluster Admission Test. Achieving a minimum score in English
              in this test is essential.
            </li>
            <li>
              <span className="list-item-label">Schedule:</span> The admission
              circular is generally published annually following the Higher
              Secondary Examination results. As PUST is part of the integrated
              cluster admission system, all rules and regulations of this system
              are strictly followed.
            </li>
          </ul>
        </div>

        <div className="content-block">
          <h3 className="sub-heading">
          Postgraduate (M.Sc. Engineering / M. Engineering) Admission
          </h3>
          <ul className="detail-list">
            <li>
              <span className="list-item-label">
                Educational Qualifications:
              </span>{" "}
              A B.Sc. Engineering or an equivalent degree in a relevant
              discipline (e.g., ICE, CSE, EEE) is required, with a minimum CGPA
              of 2.50 (or equivalent) out of 4.00.
            </li>
            <li>
              <span className="list-item-label">
                Admission Test / Interview:
              </span>{" "}
              Admission typically involves either a written admission test or a
              viva-voce (oral interview).
            </li>
            <li>
              <span className="list-item-label">For Employed Candidates:</span>{" "}
              Professionals who are currently employed may apply for admission
              as part-time students, provided they secure the necessary consent
              from their employing authority.
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* 5. Faculty Members */}
      <section className="department-section faculty-members">
        <h2 className="section-heading">Faculty Members</h2>
        <p>
          The cornerstone of the Information and Communication Engineering (ICE)
          Department's success at Pabna University of Science and Technology
          (PUST) is its team of exceptionally qualified and profoundly dedicated
          faculty members. These educators transcend the traditional role of
          teaching, actively engaging in cutting-edge research and serving as
          invaluable mentors to our students.
        </p>
        <ul className="detail-list">
          <li>
            <span className="list-item-label">
              Qualifications & Experience:
            </span>{" "}
            Our faculty members hold advanced degrees (such as M.Sc. and Ph.D.)
            from prestigious national and international universities. Their
            collective expertise and practical experience in their respective
            fields significantly enrich the learning environment, providing
            students with a comprehensive and pragmatic education.
          </li>
          <li>
            <span className="list-item-label">
              Active Involvement in Research:
            </span>{" "}
            ICE Department faculty are deeply committed to various modern and
            applied research endeavors. Their diverse research interests span
            crucial areas including Artificial Intelligence (AI), Machine
            Learning (ML), Deep Learning, Computer Vision, Speech Processing,
            Wireless Communication, Network Security, Cryptography, Data
            Analytics, and the Internet of Things (IoT).
            <ul className="nested-detail-list">
              <li>
                They consistently publish their research findings in leading
                international journals and conferences, thereby elevating the
                department's research standing.
              </li>
              <li>
                Students are afforded unique opportunities to participate in
                various research projects under their direct supervision, an
                experience invaluable for enhancing their research proficiency.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-item-label">Teaching Methodology:</span> Our
            esteemed faculty members employ modern and effective teaching
            methodologies. Their approaches include engaging lectures, hands-on
            practical classes, stimulating group discussions, real-world case
            studies, and compelling student presentations. They foster a
            learning culture that encourages critical thinking and robust
            problem-solving skills.
          </li>
          <li>
            <span className="list-item-label">
              Student-Faculty Relationship:
            </span>{" "}
            Our educators maintain a friendly, supportive, and approachable
            demeanor with students. They are dedicated to providing essential
            guidance and assistance in both academic pursuits and personal
            development, playing a pivotal role in guiding students toward
            successful careers.
          </li>
          <li>
            <span className="list-item-label">Specialization & Expertise:</span>{" "}
            Each faculty member brings a distinct area of specialization to the
            department, allowing students to explore various subjects in
            profound depth. For instance, while one faculty member might be an
            expert in Data Science, another could specialize in Wireless
            Communication. This diverse expertise ensures that students receive
            a multifaceted education across various technological domains.
          </li>
        </ul>
        <p>
          For detailed insights into each faculty member's profile, including
          their educational qualifications, research interests, and
          publications, please visit the official PUST website under the
          "Faculty Members" or "Academic Staff" section. This resource is highly
          beneficial for students seeking an ideal mentor or research
          supervisor.
        </p>
      </section>

      <hr className="section-divider" />

      {/* 6. Research Areas & Lab Facilities */}
      <section className="department-section research-labs">
        <h2 className="section-heading">Research Areas & Lab Facilities</h2>
        <p>
          ICE Department faculty and students are actively engaged in various
          modern technological research activities. Detailed information about
          faculty research interests and published papers can be found on the
          PUST website.
        </p>

        <div className="content-block">
          <h3 className="sub-heading">Notable Research Areas:</h3>
          <ul className="detail-list">
            <li>
              Artificial Intelligence (AI) & Machine Learning (ML): Deep
              Learning, Neural Networks, Natural Language Processing (NLP), Data
              Analytics, Pattern Recognition.
            </li>
            <li>
              Computer Vision & Image Processing: Image Analysis, Object
              Classification, Image Captioning, Biometrics.
            </li>
            <li>
              Signal Processing (Speech & Biomedical): Speech Enhancement,
              Speech Emotion Recognition (e.g., bone-conducted speech),
              Biomedical Signal Processing (ECG, EEG).
            </li>
            <li>
              Wireless Communication & Networking: 5G/6G Communication, MIMO
              Systems, Satellite Communication, Computer Network Design,
              Wireless Sensor Networks.
            </li>
            <li>
              Network Security & Cryptography: Data Privacy, Cybersecurity,
              Encryption Algorithms.
            </li>
            <li>
              Internet of Things (IoT): Smart Device & System Design, Smart
              Home, Smart Agriculture.
            </li>
            <li>
              Software Engineering: Software Testing, Software Architecture.
            </li>
          </ul>
        </div>

        <div className="content-block">
          <h3 className="sub-heading">Lab Facilities:</h3>
          <p>
            The ICE Department boasts several well-equipped laboratories
            designed to provide students with essential practical knowledge.
            These include:
          </p>
          <ul className="detail-list">
            <li>Computer Lab (featuring modern PCs and essential software).</li>
            <li>Electronics Lab.</li>
            <li>Digital Logic Design Lab.</li>
            <li>Communication Lab.</li>
            <li>Microprocessor Lab.</li>
            <li>Networking Lab.</li>
            <li>Software Development Lab.</li>
            <li>Dedicated Research Labs (for specific research projects).</li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* 7. Department & University Infrastructure */}
      <section className="department-section infrastructure">
        <h2 className="section-heading">
          Department & University Infrastructure
        </h2>
        <p>
          PUST's modern infrastructure, which includes spacious classrooms,
          well-equipped seminar rooms, a comprehensive central library, and
          various other amenities, collectively ensures a highly conducive
          academic environment for our students. Our state-of-the-art
          laboratories are designed to facilitate the practical application of
          theoretical knowledge, thereby significantly strengthening our
          students' preparation as competent engineers.
        </p>
      </section>

      <hr className="section-divider" />

      {/* 8. Career Opportunities */}
      <section className="department-section career-opportunities">
        <h2 className="section-heading">Career Opportunities</h2>
        <p>
          Graduates from the ICE Department are exceptionally well-positioned to
          pursue vibrant career opportunities in diverse technological sectors,
          both within Bangladesh and internationally. Given the rapid and
          continuous expansion of information and communication technology, the
          demand for our highly qualified graduates remains consistently strong.
        </p>

        <div className="content-block">
          <h3 className="sub-heading">Some Potential Career Paths:</h3>
          <ul className="detail-list">
            <li>
              Software & IT Industry: Software Engineer, Web Developer, Mobile
              App Developer, Game Developer, Database Administrator, Systems
              Analyst.
            </li>
            <li>
              Telecommunication Sector: Network Engineer, RF Engineer, Optical
              Fiber Engineer.
            </li>
            <li>
              Data Science & AI: Data Scientist, Machine Learning Engineer, AI
              Researcher.
            </li>
            <li>
              Cybersecurity: Cybersecurity Analyst, Network Security Specialist.
            </li>
            <li>
              Electronics & Hardware Design: Embedded System Engineer, IoT
              Developer.
            </li>
            <li>
              Research & Development (R&D): Scientist or Researcher in various
              research institutions.
            </li>
            <li>
              Educational Institutions: Teaching and research roles at
              universities or colleges.
            </li>
            <li>
              Government & Private Sectors: IT/Communication Specialist in
              banking, defense, healthcare, and other industries.
            </li>
            <li>
              Entrepreneurship: Establishing one's own innovative software or
              hardware startup.
            </li>
          </ul>
        </div>
        <p>
          It's common for many ICE graduates to secure positions at leading
          global technology companies such as Google, Microsoft, Amazon, Intel,
          Huawei, Ericsson, or to pursue advanced higher education opportunities
          abroad.
        </p>
      </section>

      <hr className="section-divider" />

      {/* 9. Other Facilities */}
      <section className="department-section other-facilities">
        <h2 className="section-heading">Other Facilities</h2>
        <ul className="detail-list">
          <li>
            Student Organizations: The ICE Department actively supports its own
            student clubs and societies. These groups regularly organize a
            variety of co-curricular activities including programming
            competitions, seminars, workshops, vibrant cultural events, and
            sports.
          </li>
          <li>
            Training & Workshops: To enhance practical skills, the department
            frequently arranges specialized training sessions and workshops
            conducted by industry experts.
          </li>
          <li>
            Internships: Many students seize valuable opportunities to undertake
            internships at both local and international companies, which is
            crucial for gaining professional experience.
          </li>
          <li>
            Co-curricular Activities: PUST provides extensive opportunities for
            students to participate in a wide range of co-curricular activities,
            such as debates, sports, cultural events, and more. These activities
            are vital for their holistic personality development.
          </li>
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Summary */}
      <section className="summary-section">
        <p className="summary-text">
          In essence, the ICE Department at PUST is committed to delivering a
          comprehensive and forward-thinking education. This equips our students
          to build successful careers in the rapidly evolving landscape of
          information and communication engineering, while also significantly
          contributing to technological progress and societal needs.
        </p>
      </section>
    </div>
  );
};

export default ICEDepartmentPage;
