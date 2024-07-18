import React from 'react'
import SweetAlert from '../components/SweetAlert';
import Logo from '../assets/Images/logo.png';
import rec1 from '../assets/Images/rec-1.png';
import books from '../assets/Images/books.png'
import Buttons from '../components/Buttons';
import back from '../assets/Images/backbone.png';
import kid from '../assets/Images/cute-girl.png';
import Cards from '../components/Cards';
import bata from '../assets/Images/imges.png'
import flower from '../assets/Images/flower.png';
import edu from '../assets/Images/edu.png';
import customer from '../assets/Images/custom.png';
import progress from '../assets/Images/progress.png';
import safe from '../assets/Images/safe.png';
import idea from '../assets/Images/idea.png';
import bullseye from '../assets/Images/bulls-eye.png';
import hand from '../assets/Images/hand.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const handlePass = () => {
        SweetAlert.showWarning('Login');
        navigate('/Auth');
    };


    return (
        <>
            <div className='bg-[#6EDBD0] w-full h-[8vh]'></div>
            <img src={Logo} alt="images" className='mx-auto' />
            <div className="bg-no-repeat bg-cover w-full h-[30vh] flex gap-[30vw] px-[15vh]" style={{ backgroundImage: `url(${rec1})` }}>
                <div className='pt-9 flex flex-col items-center gap-9'>
                    <h1 className='text-[2.5rem] font-semibold text-[#165851]'>Interactive Learning Made Fun <br /> for Kindergarten Kids!</h1>
                    <Buttons type="submit" label="Get Started" styleType="primary4" onClick={handlePass}/>
                </div>
                <img src={books} alt="Images" className='h-[80%] mt-[3vh]' />
            </div>
            <div className='w-full h-auto flex'>
                <div className='w-full h-[35vh] px-12 flex'>
                    <img src={kid} alt="imgaes" className='ml-[25vh]' />
                    <div className='w-[50%] text-2xl font-semibold flex items-center justify-end'>
                        <h1 className='text-[1.7rem] text-[#165851]'>Explore. Learn. Grow. Educational Games <br /> and Activities for Young Minds.</h1>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-[2rem] font-semibold'>Key Feature</h1>
                <div className='bg-no-repeat bg-cover w-full h-[170vh] grid grid-cols-3 gap-[5vw] p-[15vh]' style={{ backgroundImage: `url(${back})` }}>
                    <Cards 
                    label="Selection of fun and educational games that help children learn basic skills while having fun." styleType="card" 
                    img={<img src={bata} alt="images" />}
                    Title="Interactive Games"
                    />


                    <Cards 
                    label="Creative activities that encourage self-expression and creativity through drawing and coloring." 
                    styleType="card1" 
                    Title="Arts & Doodles"
                    img={<img src={flower} alt="images" className='bg-white rounded-lg'/>}
                    />


                    <Cards 
                    label="Engaging videos that teach important concepts in a way that young children can understand." 
                    styleType="card2"
                    Title="Educational Videos"
                    img={<img src={edu} alt="images" />}
                    />


                    <Cards 
                    label="Teachers can upload their own educational videos and create customized learning experiences for their students." 
                    styleType="card3"
                    Title="Customizable Content"
                    img={<img src={customer} alt="images" className='bg-white rounded-lg' />} 
                    />


                    <Cards 
                    label=" Parents and teachers can monitor children's progress, allowing them to support their learning journey." 
                    styleType="card4" 
                    Title="Progress Tracking"
                    img={<img src={progress} alt="images" className='bg-white rounded-lg' />}
                    />
                    <Cards 
                    label="The platform is designed with children's safety in mind, providing a secure environment with age-appropriate content." 
                    styleType="card5" 
                    Title="Safe and Secure"
                    img={<img src={safe} alt="images" className="h-[30vh]" />}
                    />
                </div>
            </div>

            <div className="w-full h-[100vh] pb-5">
                <h1 className='text-center font-bold text-[2rem] text-[#0C4D46]'>PILLARS OF STRENGTH <br /> Mission, Vision, and Values</h1>
                <div className='w-full h-[100%] flex items-center justify-center'>
                    <Cards 
                    label="To inspire a love of learning in kindergarten kids through fun, interactive, and educational activities."
                    styleType="card6"
                    Title="Our Vision"
                    img={<img src={idea} alt="images" className='w-[50%] mx-auto'/>}
                    />
                    <Cards 
                    label="To create a safe, engaging, and enjoyable learning 
platform that supports early childhood education, providing interactive content that helps kids learn and grow."
                    styleType="card7"
                    Title="Our Mission"
                    img={<img src={bullseye} alt="images" className='w-[50%] mx-auto' />}
                    />
                    <Cards 
                    label="Our values prioritize fun, basic skills, creativity, especially the safety, and inclusion, collaborating with teachers, parents, and experts to create a secure, kid-friendly platform."
                    styleType="card8"
                    Title="Our Values"
                    img={<img src={hand} alt="images" className='w-[50%] mx-auto' />}
                    />
                </div>
            </div>

            <div className='w-full h-[25vh] bg-[#6EDBD0] flex gap-20 px-20'>
                <div className='w-full py-9 flex flex-col items-center gap-1'>
                    <h1 className='font-semibold text-[1.5rem]'>Our Content</h1>
                    <p>Arts/Doodles</p>
                    <p>Videos</p>
                    <p>Games</p>
                    <p>A-Z Tracing</p>
                    <p>Kuwentong Pambata</p>
                </div>

                <div className='w-full py-9 flex flex-col items-center gap-1'>
                    <h1 className='font-semibold text-[1.5rem]'>About E-Learners Hub</h1>
                    <p>Our Team</p>
                    <p>Terms of Use</p>
                    <p>FAQ's</p>
                </div>

                <div className='w-full py-9 flex flex-col items-center gap-1'>
                    <h1 className='font-semibold text-[1.5rem]'>Contact Us</h1>
                    <p>Email: 123@example.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Address: 123 Main St, City, State, Zip</p>
                    <p className='mt-9'>Copyright©2024 EarlyLearnersHub, All Rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage
