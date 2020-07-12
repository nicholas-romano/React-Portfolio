import React from 'react';

const Contact = () => {

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <main>
      <section className="content_section">
        <section className="column">
            <div className="column-content">
                  <div className="contact_form">
                    <h1>Get In Touch!</h1>
                    <p>If you have questions about my skills and would like to learn more about
                        what I can do, please don’t hesitate to ask here. I am more than happy
                        to answer questions you have.</p>
                    <p className="required"> * Indicates a required field.</p>
                    <form id="contact_form" className="form-horizontal" onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label htmlFor="Name" className="col-sm-1 control-label"><span className="required">*</span>Name</label>
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" maxLength="60" />
                          <div className="name_error">Name is a required field.</div>
                          <div className="name_valid_error">Name field is invalid.</div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Company" className="col-sm-1 control-label">Company</label>
                        <div className="col-sm-12">
                          <input type="text" className="form-control" id="company" name="company" placeholder="Company name" maxLength="60" />
                          <div className="company_valid_error">Company field is invalid.</div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="col-sm-1 control-label"><span className="required">*</span>Email</label>
                        <div className="col-sm-12">
                          <input type="email" className="form-control" id="email" name="email" placeholder="Email" maxLength="60" />
                          <div className="email_error">Email is a required field.</div>
                          <div className="email_valid_error">Email field is invalid.</div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Phone" className="col-sm-1 col-xs-12 control-label">Phone</label>
                              <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                                <div className="col">
                                  <input type="text" className="form-control" id="phone1" name="phone1" size="3" maxLength="3" />
                                </div>
                                <div className="col">
                                  <input type="text" className="form-control" id="phone2" name="phone2" size="3" maxLength="3" />
                                </div>
                                <div className="col">
                                  <input type="text" className="form-control" id="phone3" name="phone3" size="4" maxLength="4" />
                                </div>
                                <div className="phone_valid_error">Phone field is invalid.</div>
                              </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Message" className="col-sm-1 control-label"><span className="required">*</span>Message</label>
                        <div className="col-sm-12">
                            <textarea className="form-control" id="message" name="message" rows="3" maxLength="1000"></textarea>
                            <div className="message_error">Message is a required field.</div>
                            <div className="message_valid_error">Message field is invalid.</div>
                        </div>
                      </div>
                  
                      <div className="form-group">
                        <div className="col-sm-offset-1 col-sm-2">
                          <button id="send" name="submit" type="submit" className="btn btn-primary">Send</button>
                        </div>
                      </div>
                    </form>
                </div>
  
            </div>
  
          </section>

      </section>
      
    </main>
  );
}

export default Contact;