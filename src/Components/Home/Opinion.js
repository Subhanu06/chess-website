import React from "react";
import "./Opinion.css";
function Opinion() {
  return (
    <section className="container">
      <div className="text-center opinionBox">
        <h1 className="text-white">
          Our HOD's Opinions <span className="text_primary"> About CHESS</span>
        </h1>
        <hr className="hr" />
        <p className="lead py-3 opinonText">
          Chemical Engineering Students' society is working with a motivation of
          developing professional and personal skills of students, which
          facilitate them to perform magnificently as an eminent engineer in the
          society. This society is aimed to provide a platform to showcase and
          sharpen student's talents through a variety of events and activities
          planned throughout four years, for overall development of students
          personalities. We continue our effort to prepare and guide the
          students for the various competitive exams and interviews so that they
          perform better and make their carrier in the selected fields.Real
          world problems will be blended in the curriculum and these are to be
          taught by experts from industry, in addition through guest lectures.
          Our focus is to effectively train our students as chemical engineers
          who can serve the society competently, collaboratively and ethically
          as planners, designers and operators of the environment.
        </p>
      </div>
    </section>
  );
}

export default Opinion;
