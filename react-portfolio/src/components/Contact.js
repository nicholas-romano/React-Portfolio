import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const { register, handleSubmit, errors } = useForm();

  const [formValues, setFormVal] = useState({
    name: '',
    company: '',
    email: '',
    phone1: 0,
    phone2: 0,
    phone3: 0,
    message: ''
  });

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
                    <form id="contact" name="contact" method="post" className="form-horizontal">
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="form-group">
                        <label htmlFor="Name" className="col-sm-1 control-label"><span className="required">*</span>Name</label>
                        <div className="col-sm-12">
                            <input type="text" onChange={e => setFormVal({ ...formValues, name: e.target.value})} className="form-control" ref={register({required: true, pattern: /^['-\w]+['-\w\s]+$/})} id="name" name="name" placeholder="Name" maxLength="60" />
                            {errors.name && <p className="error">Name field is invalid</p>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Company" className="col-sm-1 control-label">Company</label>
                        <div className="col-sm-12">
                          <input type="text" onChange={e => setFormVal({ ...formValues, company: e.target.value})} className="form-control" ref={register({pattern: /^['-\w]+['-\w\s]+$/})} id="company" name="company" placeholder="Company name" maxLength="60" />
                          {errors.company && <p className="error">Company field is invalid</p>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="col-sm-1 control-label"><span className="required">*</span>Email</label>
                        <div className="col-sm-12">
                          <input type="email" onChange={e => setFormVal({ ...formValues, email: e.target.value})} className="form-control" ref={register({required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})$/})} id="email" name="email" placeholder="Email" maxLength="60" />
                          {errors.email && <p className="error">Email field is invalid</p>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Phone" className="col-sm-1 col-xs-12 control-label">Phone</label>
                              <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                                <div className="col">
                                  <input type="text" onChange={e => setFormVal({ ...formValues, phone1: e.target.value})} className="form-control" ref={register({pattern: /^\d{3}$/})} id="phone1" name="phone1" size="3" maxLength="3" />
                                  {errors.phone1 && <p className="error">Phone field is invalid</p>}
                                </div>
                                <div className="col">
                                  <input type="text" onChange={e => setFormVal({ ...formValues, phone2: e.target.value})} className="form-control" ref={register({pattern: /^\d{3}$/})} id="phone2" name="phone2" size="3" maxLength="3" />
                                  {errors.phone2 && <p className="error">Phone field is invalid</p>}
                                </div>
                                <div className="col">
                                  <input type="text" onChange={e => setFormVal({ ...formValues, phone3: e.target.value})} className="form-control" ref={register({pattern: /^\d{4}$/})} id="phone3" name="phone3" size="4" maxLength="4" />
                                  {errors.phone3 && <p className="error">Phone field is invalid</p>}
                                </div>
                              </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="Message" className="col-sm-1 control-label"><span className="required">*</span>Message</label>
                        <div className="col-sm-12">
                            <textarea onChange={e => setFormVal({ ...formValues, message: e.target.value})} className="form-control" ref={register({required: true, minLength: 2, pattern: /^['-\w.$!\d,?/@();]+['-\w\s.$!\d,?/@();]+$/})} id="message" name="message" rows="3" maxLength="1000"></textarea>
                            {errors.message && <p className="error">Message field is invalid</p>}
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