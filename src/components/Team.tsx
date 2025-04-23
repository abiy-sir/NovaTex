import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abinezer Niguse",
    position: "Founder & CEO",
    image: "https://media.craiyon.com/2025-04-11/gvP6QQeTSqmrphFMuj71bw.webp",
    bio: "With years of marketing experience at the United States of America, Abinezer founded NovaTex to bring world-class digital marketing to Ethiopian businesses.",
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "abinezer@novatex.et"
    }
  },
  {
    id: 2,
    name: "Yodit Luelseged",
    position: "Co-founder and Content Strategist",
    image: "https://media.craiyon.com/2025-04-08/poRX7CwqSNWesz_VfgUXqw.webp",
    bio: "Yodit crafts compelling narratives that bridge cultural contexts, helping our clients connect authentically with diverse audiences.",
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "yodit@novatex.et"
    }
  },
  {
    id: 3,
    name: "Abate Hailu",
    position: "Creative Director and Marketing consultant",
    image: "https://media.craiyon.com/2025-04-14/NfdRWpBZTymrgUS7dqfCRA.webp",
    bio: "Abate leads our creative team with a keen eye for design and storytelling that resonates with Ethiopian and global audiences alike. He has consulted for various brands and brought a significant effects on implimenting strategies that uplift brands.",
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "abate@novatex.et"
    }
  },
  {
    id: 4,
    name: "Dawit Belayne",
    position: "Technical Director",
    image: "https://media.craiyon.com/2025-04-09/GjxJ3udASVWTUWRmYP3ZlA.webp",
    bio: "Dawit brings deep technical expertise in web development, SEO, and analytics to ensure our digital strategies are built on solid foundations.",
    socials: {
      linkedin: "#",
      email: "dawit@novatex.et"
    }
  },
  
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 flex justify-center w-full space-x-4">
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            )}
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            )}
            {member.socials.email && (
              <a 
                href={`mailto:${member.socials.email}`} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-indigo-600 font-medium mb-4">{member.position}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of digital marketing experts combines global experience with deep local knowledge to create strategies that work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-indigo-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who are passionate about digital marketing and technology. 
              Check out our current openings or send us your resume.
            </p>
            <a 
              href="#careers" 
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;