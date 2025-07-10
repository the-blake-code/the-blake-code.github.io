import React from 'react';
import museumChairpersonImg from '../images/breeze.jpg';
import presidentImg from '../images/mark.jpg';
import vicePresidentImg from '../images/jimmy.jpg';
import eventCoordinatorImg from '../images/mindy.jpg';
import treasurerImg from '../images/viviana.jpg';
import secretaryImg from '../images/amy.jpg';
import headOfMembershipImg from '../images/oscar.jpg';
import socialMediaImg from '../images/matt.jpg';

const boardMembersData = {
  president: {
    name: 'Mark Allan',
    role: 'President',
    image: presidentImg,
    altText: 'Profile Image of Mark Allan',
  },
  vicePresident: {
    name: 'Jimmy Hirsch',
    role: 'Vice President',
    image: vicePresidentImg,
    altText: 'Profile Image of Jimmy Hirsch',
  },
  treasurer: {
    name: 'Viviana Romero',
    role: 'Treasurer',
    image: treasurerImg,
    altText: 'Profile Image of Viviana Romero',
  },
  secretary: {
    name: 'Amy Venski',
    role: 'Secretary',
    image: secretaryImg,
    altText: 'Profile Image of Amy Venski',
  },
  museumChairperson: {
    name: 'Breeze Michael',
    role: 'Museum Chairperson',
    image: museumChairpersonImg,
    altText: 'Profile Image of Breeze Michael',
  },
  eventCoordinator: {
    name: 'Mindy Baumgartner',
    role: 'Event Coordinator',
    image: eventCoordinatorImg,
    altText: 'Profile Image of Mindy Baumgartner',
  },
  headOfMembership: {
    name: 'Oscar Perez',
    role: 'Head of Membership',
    image: headOfMembershipImg,
    altText: 'Profile Image of Oscar Perez',
  },
  socialMedia: {
    name: 'Matt Blake',
    role: 'Social Media',
    image: socialMediaImg,
    altText: 'Profile Image of Matt Blake',
  },
};

function About() {
  return (
    <div className='about app-container'>
      {/* <div class='col-lg-7'>
          <img
            class='img-fluid rounded mb-4 mb-lg-0'
            src='http://placehold.it/900x400'
            alt=''
          />
        </div> */}

      {/* <div class='col-lg-5'> */}
      <h1 class='font-weight-light'>About</h1>
      <div className='profile-page'>
        {/* President Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.president.image}
            alt={boardMembersData.president.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>{boardMembersData.president.role}</h3>
          <p className='profile-description'>
            A VW owner since 15 and enthusiast since the womb. Mark's goals are
            to continue to Lead and keep the momentum going strong. A lover of
            all things Volkswagen, we can only hope his VW Guitar comes out for
            a performance in 2025.
          </p>
        </div>
        {/* Vice President Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.vicePresident.image}
            alt={boardMembersData.vicePresident.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>
            {boardMembersData.vicePresident.role}
          </h3>
          <p className='profile-description'>
            {' '}
            A strong force of nature and nurture Jimmy will guide the Board into
            keeping its commitments to the Volkswagen Community in the Midwest.
            He supports our "collecting" and enjoys being the Club's BBQ
            Pitmaster.
          </p>
        </div>
        {/* Treasurer Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.treasurer.image}
            alt={boardMembersData.treasurer.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>{boardMembersData.treasurer.role}</h3>
          <p className='profile-description'>
            Viviana applies her Business and NonProfit knowledge to help our
            Club stay on target. She is Bilingual and is looking forward to
            helping arrange our International Travels for 2025/2026.
          </p>
        </div>
        {/* Secretary Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.secretary.image}
            alt={boardMembersData.secretary.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>{boardMembersData.secretary.role}</h3>
          <p className='profile-description'>
            The go-to for all things organized. She is the printshop for all
            Vinyl Decals for the Club. Amy's passion for helping the community
            allows us to give back and provide aid to direct resources.
          </p>
        </div>
        {/*  Museum Chairperson Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.museumChairperson.image}
            alt={boardMembersData.museumChairperson.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>
            {boardMembersData.museumChairperson.role}
          </h3>
          <p className='profile-description'>
            In this position he will be heading up Fundraising efforts, VW
            Community outreach and working to accomplish our NonProfit
            Workspace/Museum Goals. Breeze stated, "I will guide us to the
            Building of our Club's dreams, even if I have to build it myself."
          </p>
        </div>
        {/* Event Coordinator Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.eventCoordinator.image}
            alt={boardMembersData.eventCoordinator.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>
            {boardMembersData.eventCoordinator.role}
          </h3>
          <p className='profile-description'>
            She will continue to ensure Events are easy to find and are as
            updated as can be. Mindy will be maintaining the VW Collective of
            Milwaukee TikTok. She will also be assisting with Marketing
            Materials, Shirts and Collective Merch. "I have listened to the
            people, I'm hoping to bring you new and exciting VW outtings this
            2025 Car Show Season!"
          </p>
        </div>
        {/* Head of Membership Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.headOfMembership.image}
            alt={boardMembersData.headOfMembership.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>
            {boardMembersData.headOfMembership.role}
          </h3>
          <p className='profile-description'>
            He plans to continue our inclusive and diverse Membership by
            reaching out to communities and raising awareness of our Club. He is
            Bilingual. Oscar's ability to keep a positive outlook is a great
            asset to our Board.
          </p>
        </div>
        {/* Social Media Info */}
        <div className='profile-container'>
          <img
            src={boardMembersData.socialMedia.image}
            alt={boardMembersData.socialMedia.alt}
            className='profile-image'
          />
          <h3 className='profile-name'>{boardMembersData.socialMedia.role}</h3>
          <p className='profile-description'>
            He will be working to develop and maintain a Website for the Club
            along with ensuring our Social Media footprint stays intact. Matt's
            goals are to add equipment to better capture our presence and engage
            the Volkswagen Community.
          </p>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default About;
