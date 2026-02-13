import React, { useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import '../styles/team.css';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import darshanImg from '../assets/darshan.jpg';
import premasudhaImg from '../assets/premasudha.jpg';
import pushpaImg from '../assets/Pushpa.jpeg';
import reshmaImg from '../assets/reshma.jpeg';
import vaishnaviImg from '../assets/vaishnavi.jpeg';
import ShoiabImg from '../assets/Shoiab.jpeg';
import nuthanImg from '../assets/Nuthan.jpeg';
import IqraaImg from '../assets/Iqraa.jpeg';
import SiddaImg from '../assets/Sidda.jpeg';

const Team = () => {
    // Faculty
    const facultySponsor = {
        name: "Dr B G Premasudha",
        role: "Faculty Sponsor",
        image: premasudhaImg,
        email: "[EMAIL_ADDRESS]",
        size: "large"
    };

    // Core Committee
    // Assigning specific sizes for the grid layout
    const teamMembers = [
        {
            id: 1,
            name: "Darshan H D",
            role: "Chairperson",
            image: darshanImg,
            github: "https://github.com/darshanhd04/",
            linkedin: "https://www.linkedin.com/in/darshan-h-d-919277349/",
            email: "darshandharmaraj02@gmail.com",
            size: "medium"
        },
        {
            id: 2,
            name: "Nuthan A M",
            role: "Vice Chairperson",
            image: nuthanImg,
            github: "https://github.com/Nuthan-27",
            linkedin: "https://www.linkedin.com/in/nuthan27/",
            email: "nuthan27.am@gmail.com",
            size: "medium"
        },
        {
            id: 3,
            name: "Mohammad Shoaib",
            role: "Secretary",
            image: ShoiabImg,
            github: "https://github.com/STRA23",
            linkedin: "https://linkedin.com/in/mohammed-shoaib-b49276255",
            email: "shoaibshoaib2812@gmail.com",
            size: "medium"
        },
        {
            id: 4,
            name: "Likith S",
            role: "Treasurer",
            image: "https://ui-avatars.com/api/?name=Likith+S&background=d97706&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "[EMAIL_ADDRESS]",
            size: "medium"
        },
        {
            id: 5,
            name: "Darshan R",
            role: "Web Master",
            image: "https://ui-avatars.com/api/?name=Member+5&background=random&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member@acmsit.in",
            size: "medium"
        },
        {
            id: 6,
            name: "Pushpalatha G M",
            role: "Membership Chair",
            image: pushpaImg,
            github: "https://github.com",
            linkedin: "https://www.linkedin.com/in/pushpalatha-g-m-11b266346",
            email: "Pushpalatha70180@gmail.com",
            size: "medium"
        },
        {
            id: 7,
            name: "Roshni Begam",
            role: "Project & Research Head",
            image: "https://ui-avatars.com/api/?name=Member+7&background=random&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member@acmsit.in",
            size: "medium"
        },
        {
            id: 8,
            name: "Swathi Sharanya K V",
            role: "Project & Research Head",
            image: "https://ui-avatars.com/api/?name=Member+8&background=random&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member@acmsit.in",
            size: "medium"
        },
        {
            id: 9,
            name: "Ayesha Khan",
            role: "Marketing Head",
            image: "https://ui-avatars.com/api/?name=Member+9&background=random&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member@acmsit.in",
            size: "medium"
        },
        {
            id: 10,
            name: "Iqraa Fathima",
            role: "Marketing Head",
            image: IqraaImg,
            github: "https://github.com/IqraaFathima",
            linkedin: "https://www.linkedin.com/in/iqraa-fathima-107aa0380/",
            email: "iqrafathima3002@gmail.com",
            size: "medium"
        },
        {
            id: 11,
            name: "Manoj S",
            role: "Social Media Head",
            image: "https://ui-avatars.com/api/?name=Member+11&background=random&color=fff",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "member@acmsit.in",
            size: "medium"
        },
        {
            id: 12,
            name: "Vaishnavi T",
            role: "Design Head",
            image: vaishnaviImg,
            github: "https://github.com",
            linkedin: "https://www.linkedin.com/in/vaishnavi-t-1ba7a9278/",
            email: "vaishnavit0717@gmail.com",
            size: "medium"
        },
        {
            id: 13,
            name: "Reshma Mesta",
            role: "Member",
            image: reshmaImg,
            github: "https://github.com/Raksha-tm",
            linkedin: "https://www.linkedin.com/in/raksha-mesta-7baa7b322",
            email: "rakshatmesta@gmail.com",
            size: "medium"
        },
        {
            id: 14,
            name: "Siddarama",
            role: "Member",
            image: SiddaImg,
            github: "https://github.com/siddaramsiddhu",
            linkedin: "https://www.linkedin.com/in/siddarama-siddhu-0a8718329",
            email: "Siddaramsiddhu@gmail.com",
            size: "medium"
        }
    ];

    return (
        <PageTransition>
            <div className="page-container">
                <div className="container" style={{ paddingTop: '180px', paddingBottom: '4rem', maxWidth: '1800px' }}>

                    {/* Header Section */}
                    <div className="team-header-section">
                        <motion.h1
                            className="section-title"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Meet The Team
                        </motion.h1>
                        <motion.p
                            className="team-intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            The innovators and leaders driving ACM SIT towards excellence.
                        </motion.p>
                    </div>

                    {/* Faculty Section */}
                    <motion.div
                        className="faculty-section"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="team-category-title">Faculty Sponsor</h2>
                        <div className="faculty-card-wrapper">
                            <TeamMemberCard {...facultySponsor} />
                        </div>
                    </motion.div>

                    {/* Core Team Grid - Bento Layout */}
                    <motion.div className="core-team-section">
                        <h2 className="team-category-title">Core Committee</h2>
                        <div className="bento-grid">
                            {teamMembers.map(member => (
                                <TeamMemberCard key={member.id} {...member} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </PageTransition>
    );
};

export default Team;
