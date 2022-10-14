import React, { useState } from 'react'

const Contact = () => {

  const [cname, setCname] = useState('');
  const [cemail, setCemail] = useState('');
  const [cdes, setCdes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();//stop the form from repeating
    setCname('');
    setCemail('');
    setCdes('');
    alert('Thank you for contacting us, we will get back to you as soon as possible');
    //   try {
    //     const body = { cname, cemail, cdes  };
    //     const response = fetch('http://localhost:NEED A ROUTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(body)
    //     });
    // } catch (error) {
    //     console.error(err.message);
    // }
  };

  const handleChangeName = (e) => {
    setCname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setCemail(e.target.value);
  };

  const handleChangeDes = (e) => {
    setCdes(e.target.value);
  };

  return (
    <div className='contactPage'>

      <main className='ContainMain'> 
      {/* main tag specifies  main context of a document */}

        <h1 className='contactTitle'></h1>

        <section className='contactInfo'>
          <ul className='contactInfoTitle'>Contact Info</ul>
          <div>Phone Number: +1 (888) 888-8888</div>
          <div>Email: customerservice@dreamscomebrew.net</div>
          <div>Address: 789 Dream Street, Brewtown, California 98765</div>
        </section>

        <article className='contactForm'>
          <form>
            <input
              className='contactInputBox'
              type='text'
              placeholder='Full Name'
              value={cname}
              onChange={handleChangeName}/>
            <input
              className='contactInputBox'
              type='email'
              placeholder='Email'
              value={cemail}
              onChange={handleChangeEmail} />
            <input
              className='contactInputBoxDes'
              type='text'
              placeholder='Description'
              value={cdes}
              onChange={handleChangeDes} />
            <button
              type="button"
              className="contactSubmitBtn"
              onClick={handleSubmit}
            >Submit
            </button>
          </form>
        </article>
      </main>
      <section className='contactFooter'>
        <span className='contactFooterBold'>Order Online 24/7</span>
        <footer>Contact Hours</footer>
        <footer>Monday-Friday 9am to 7pm</footer>
        <footer>Saturday-Sunday 9am to 1pm</footer>
      </section>


    </div>
  )
};

export default Contact