import React from "react";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img src="https://img.freepik.com/free-vector/woman-personal-profile-employer-holding-job-candidate-cv-employee-resume-isolated-flat-design-element-medical-clinic-hospital-patient-card-concept-illustration_335657-1660.jpg?t=st=1712046332~exp=1712049932~hmac=31ac716e2755316d4b0583bc2c5f96ed25756e8ee85b958bd424651f73065a64&w=826" />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
          </div>
          <form action="">
            <div className="contact-form">
              <label htmlFor=" " className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="contact-form">
              <label htmlFor=" " className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" />
            </div>

            <div className="contact-form">
              <label htmlFor=" " className="form-label">
                Job Type:
              </label>
              <select name="" id=" " className="custom-select-tag">
                <option value="" autoFocus>
                  -------------
                </option>
                <option value="">Full-time</option>
                <option value="">Part-time</option>
                <option value="">Period-time</option>
                <option value="">Internship</option>
              </select>
            </div>
            <div className="contact-form">
              <label htmlFor=" " className="form-label">
                Message:
              </label>
              <textarea rows={5} className="form-control"></textarea>
            </div>

            <div className="button-submit">
              <p>
                Send <PiTelegramLogoDuotone size={25} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
