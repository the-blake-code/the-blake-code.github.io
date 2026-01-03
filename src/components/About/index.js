import React from 'react';
import PersonCard from './PersonCard';
import museumChairpersonImg from '../../images/breeze.jpg';
import presidentImg from '../../images/mark.jpg';
import vicePresidentImg from '../../images/jimmy.jpg';
import eventCoordinatorImg from '../../images/mindy.jpg';
import treasurerImg from '../../images/viviana.jpg';
import secretaryImg from '../../images/amy.jpg';
import socialMediaImg from '../../images/matt.jpg';
import membershipChairImg from '../../images/bridgett.jpg';
import educationChairImg from '../../images/prescott.jpg';

function AboutUs() {
  const [expandedId, setExpandedId] = React.useState(null);
  const containerRef = React.useRef(null);

  const onClick = (id) => {
    setExpandedId(id);
  };

  // close expanded card when clicking outside the cards-container
  React.useEffect(() => {
    function handleDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setExpandedId(null);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

//   const handleMouseLeave = () => {
//     setExpandedId(null);
//   };

  const boardMembersData = [
  {
    id: 1,
    name: 'Mark Allan',
    role: 'President',
    imageUrl: presidentImg,
    description:
      "A VW owner since 15 and enthusiast since the womb. Mark's goals are to continue to Lead and keep the momentum going strong. A lover of all things Volkswagen",
    altText: 'Profile Image of Mark Allan',
  },
  {
    id: 2,
    name: 'Jimmy Hirsch',
    role: 'Vice President',
    imageUrl: vicePresidentImg,
    description:
      'A strong force of nature and nurture Jimmy will guide the Board into keeping its commitments to the Volkswagen Community in the Midwest. He supports our "collecting" and enjoys being the Club\'s BBQ Pitmaster.',
    altText: 'Profile Image of Jimmy Hirsch',
  },
  {
    id: 3,
    name: 'Viviana Romero',
    role: 'Treasurer',
    imageUrl: treasurerImg,
    description:
      'Viviana applies her Business and NonProfit knowledge to help our Club stay on target. She is Bilingual and is looking forward to helping arrange our International Travels.',
    altText: 'Profile Image of Viviana Romero',
  },
  {
    id: 4,
    name: 'Amy Venski',
    role: 'Secretary',
    imageUrl: secretaryImg,
    description:
      "The go-to for all things organized. She is the printshop for all Vinyl Decals for the Club. Amy's passion for helping the community allows us to give back and provide aid to direct resources.",
    altText: 'Profile Image of Amy Venski',
  },
  {
    id: 5,
    name: 'Breeze Michael',
    role: 'Museum Chair',
    imageUrl: museumChairpersonImg,
    description:
      'In this position he will be heading up Fundraising efforts, VW Community outreach and working to accomplish our NonProfit Workspace/Museum Goals. Breeze stated, "I will guide us to the Building of our Club\'s dreams, even if I have to build it myself."',
    altText: 'Profile Image of Breeze Michael',
  },
  {
    id: 6,
    name: 'Mindy Baumgartner',
    role: 'Events Chair',
    imageUrl: eventCoordinatorImg,
    description:
      'She will continue to ensure Events are easy to find and are as updated as can be. Mindy will be maintaining the VW Collective of Milwaukee TikTok. She will also be assisting with Marketing Materials, Shirts and Collective Merch. "I have listened to the people, I\'m hoping to bring you new and exciting VW outtings this 2026 Car Show Season!"',
    altText: 'Profile Image of Mindy Baumgartner',
  },

    {
    id: 7,
    name: 'Bridgett Brzezinski',
    role: 'Membership Chair',
    imageUrl: membershipChairImg,
    description:
      "Bridgett has owned many Volks over the years. From Beetles to Squarebacks to Vanagons to her current 2007 Rabbit (Thumper) and 1981 Vanagon Westfalia (Wall-e). As a new member to the board, she's so excited to put her background in communication, community engagement and volunteer work to good use!",
    altText: 'Profile Image of Bridgett Brzezinski',
  },
   {
    id: 8,
    name: 'Prescott Phillips',
    role: 'Education Chair',
    subtitle: 'VW Guru',
    imageUrl: educationChairImg,
    description:
      "Prescott plans to share his decades of useful and useless VW mechanical knowledge with the group. He will head up workshops and organize the clubs extensive library of books and manuals to share with members.",
    altText: 'Profile Image of Prescott Phillips',
  },
  {
    id: 9,
    name: 'Matt Blake',
    role: 'Social Media',
    imageUrl: socialMediaImg,
    description:
      "Matt will be working to develop and maintain a Website for the Club along with ensuring our Social Media footprint stays intact. Matt's goals are to add equipment to better capture our presence and engage the Volkswagen Community.",
    altText: 'Profile Image of Matt Blake',
  },
];

  return (
    <div className='about'>
            <h2 className='title font-weight-light'>Our Club's Mission</h2>
        <p className='mission-social-text'>
          Empowering Volkswagen enthusiasts and collectors through community
          engagement, education, and preservation our 501(c)(3) nonprofit is
          dedicated to fostering a passion for vintage, classic and modern
          Volkswagens while promoting sustainability, inclusivity, and the
          cultural significance of these iconic vehicles.
        </p>
      <h1 className='title font-weight-light'>Meet Our Board!</h1>
    <div className="cards-container" ref={containerRef}>
      {boardMembersData.map(person => (
        <PersonCard
          key={person.id}
          person={person}
          isExpanded={expandedId === person.id}
          onClick={onClick}
        />
      ))}
    
    </div>
    </div>
  );
}

export default AboutUs