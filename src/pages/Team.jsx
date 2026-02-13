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
import likithImg from '../assets/likith.jpeg';
import darshanRImg from '../assets/darshanr.jpeg';
import roshniImg from '../assets/roshni.jpeg';
import swathiImg from '../assets/Swathi.jpeg';
import ayeshaImg from '../assets/ayesha.jpeg';
import manojImg from '../assets/manoj.jpeg';

const Team = () => {
    // Faculty
    const facultySponsor = {
        name: "Dr B G Premasudha",
        role: "Faculty Sponsor",
        image: premasudhaImg,
        email: "bgpremasudha@sit.ac.in",

        linkedin: "https://www.linkedin.com/in/dr-prema-sudha-b-g-46396581/",
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
            image: likithImg,
            github: "https://github.com/likiths0802-prog",
            linkedin: "https://www.linkedin.com/in/likith-s-394403384",
            email: "likiths0802@gmail.com",
            size: "medium"
        },
        {
            id: 5,
            name: "Darshan R",
            role: "Web Master",
            image: darshanRImg,
            github: "https://github.com/darshanr-codespace",
            linkedin: "https://www.linkedin.com/in/darshan-r-6b58973b0",
            email: "darshan.ramachandraiah10@gmail.com",
            size: "medium"
        },
        {
            id: 6,
            name: "Pushpalatha G M",
            role: "Membership Chair",
            image: pushpaImg,
            github: "https://github.com/bharathskanda",
            linkedin: "https://www.linkedin.com/in/pushpalatha-g-m-11b266346",
            email: "Pushpalatha70180@gmail.com",
            size: "medium"
        },
        {
            id: 7,
            name: "Roshni Begam",
            role: "Project & Research Head",
            image: roshniImg,
            github: "https://github.com/Roshnii2608",
            linkedin: "https://www.linkedin.com/in/roshnibegum2608/",
            email: " roshnii2608@gmail.com",
            size: "medium"
        },
        {
            id: 8,
            name: "Swathi Sharanya K V",
            role: "Project & Research Head",
            image: swathiImg,
            github: "https://github.com/kvsharanya1504",
            linkedin: "https://www.linkedin.com/in/swathi-sharanya-k-v-00583b301",
            email: "kvsharanya1504@gmail.com",
            size: "medium"
        },
        {
            id: 9,
            name: "Ayesha Khan",
            role: "Marketing Head",
            image: ayeshaImg,
            github: "https://github.com/AyeshaKhan18675",
            linkedin: "https://www.linkedin.com/in/ayesha-khan-8a02282b2",
            email: "ayeshakhan71114@gmail.com",
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
            image: manojImg,
            github: "https://github.com/Manoj-Artist",
            linkedin: "https://www.linkedin.com/in/manoj-s-7b788b3b0/",
            email: "manojr7artist@gmail.com",
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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

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
                        <motion.div
                            className="bento-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {teamMembers.map(member => (
                                <TeamMemberCard key={member.id} {...member} variants={itemVariants} />
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </PageTransition>
    );
};

export default Team;
