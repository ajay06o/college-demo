import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import address_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {






    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93eab73e-b554-491a-98d0-cf715026a430");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target[0].reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <ul>
            <li><img src={email_icon} alt="Email Icon" />Email: sasi@gmai.com</li>
            <li><img src={phone_icon} alt="Phone Icon" />Phone: +1 (555) 123-4567</li>
            <li><img src={address_icon} alt="Address Icon" />Address: Sasi College Rd, near Aerodrome, Tadepalligudem, Andhra Pradesh 534101</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Your Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>Write Your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="White Arrow" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
