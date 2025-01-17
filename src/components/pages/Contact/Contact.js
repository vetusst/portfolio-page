import careeteSvg from '../../../res/img/careeteSvg.svg'
import infoSvg from '../../../res/img/infoSvg.svg'
import divider from '../../../res/img/about_divider.svg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import processForm from '../../../res/js/processForm'
import { FiMenu } from "react-icons/fi";
import NavbarDesktop from '../../NavbarDesktop'



const Contact = (props) => {
    return (
        <section className="contact-wrapper section" data-anchor="contact">
            {window.innerWidth < 450 && <div className='menu-btn' ref={props.toggleNavBtn}><FiMenu size="35" color='#fff'/></div> }
            <div class="section-name"><span className='side-section-name'>contact</span></div>
            <div class="contact__title"><img src={careeteSvg} alt='careete svg'></img> <h1>get in <span>touch.</span></h1></div>
            <div class="contact_formWrapper">
                <div className='form-title'><span >Text me</span><br/></div>
                <form id="form">
                    <input type="text" placeholder='Name' name="name"></input>
                    <input type="text" placeholder='E-mail' name="e-mail"></input>
                    <textarea placeholder='Text' name='text'></textarea>
                </form>
                <a className="contact__button" id="send-btn" onClick={(e) => processForm(e)}>send</a>
            </div>
            <img className="projects__divider" src={divider} alt='divider'></img>
            <div class="contact__detailsWrapper">
                <div className='detailsHeader'><img src={infoSvg} alt='careete svg'></img> <h2>Contact <br/>information</h2></div>
                <div className='detailsContactInfo'>
                    <p>Warsaw, Poland</p>
                    <p>vetusst@hotmail.com</p>
                    <p>Daniil Melnikav</p>
                </div>
                <a className="contact__button cv_button" href="#">grab cv</a>
            </div>
            <div class="contact__copyright">
                <p>
                    Copyright © 2022 Daniil Melnikav<br/>All rights Reserved.
                </p>
            </div>
            <div class="contact__footerLinks">
                <a href='https://github.com/vetusst' target='_blank' rel='noreferrer'><FaGithub size='cssSize'/></a>
                <a href='https://www.linkedin.com/in/daniil-melnikav/' target='_blank' rel='noreferrer'><FaLinkedin size='cssSize'/></a>
                <a href='https://www.facebook.com/whydoyouneedmyfacebook' target='_blank' rel='noreferrer'><FaFacebookSquare size='cssSize'/></a>
            </div>
            {window.innerWidth > 450 && 
                <div class="contact__navbar">
                    <NavbarDesktop page="contact"/>
                </div>}
        </section>
    )
}

export default Contact
