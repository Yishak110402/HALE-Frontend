import { createContext, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const jobs = [
    {
      name: "Access to Justice",
      description:
        "Provide comprehensive free legal aid services to individuals who lack access to fair legal representation. This includes legal representation, counseling, and support to ensure fair treatment and justice for all. Engage in public interest litigation to address systemic injustices and uphold human rights.",
      image: "https://i.postimg.cc/7L548YyJ/access.jpg",
    },
    {
      name: "Advocacy and Awareness",
      description:
        "Conduct advocacy campaigns to promote gender equality, child rights, labor rights, disability inclusion, and cultural rights. Raise awareness about sexual and reproductive health and rights (SRHR) and environmental justice. Promote democracy and good governance through education and civic engagement initiatives.",
      image: "https://i.postimg.cc/Xvqjjk9J/advocacy.jpg",
    },
    {
      name: "Legal Aid Services",
      description:
        "We provide comprehensive legal aid to individuals who lack access to justice. This includes legal representation, counseling, and support to ensure fair treatment and justice for all.",
      image: "https://i.postimg.cc/tC9HRzjj/legal-aid.jpg",
    },
    {
      name: "Education and Empowerment",
      description:
        "Implement educational programs to empower individuals with knowledge about their rights and how to assert them. Organize workshops, seminars, and community meetings to foster a culture of inclusion and respect for human rights.",
      image: "https://i.postimg.cc/0js1wYK7/education.jpg",
    },
    {
      name: "Community Support",
      description:
        "Provide support services to marginalized communities, including assistance with accessing education, healthcare, and other essential services. Collaborate with local organizations to develop and implement community-driven solutions.",
      image: "https://i.postimg.cc/d0gYqPqH/community-support.jpg",
    },
    {
      name: "Research and Analysis",
      description:
        "Conduct research activities to identify and address human rights issues, informing our advocacy and legal strategies. Publish reports and studies to highlight the challenges faced by marginalized communities and recommend policy changes.",
      image: "https://i.postimg.cc/LXjr2JQ5/research.jpg",
    },
    {
      name: "Public Interest Litigation",
      description:
        "We engage in strategic litigation to challenge injustices and protect the rights of vulnerable groups, and to ensure environmental justice and protect environmental rights and fundamental freedoms in Ethiopia.",
      image: "https://i.postimg.cc/7LFpF3Vj/public-interest.jpg",
    },
    {
      name: "Democracy Promotion",
      description:
        "We encourage active participation in democratic processes, conduct election monitoring, and promote transparency and fairness in electoral systems. Our initiatives aim to strengthen democratic governance and ensure the representation of all voices.",
      image: "https://i.postimg.cc/4xSC5khf/democracy.jpg",
    },
    {
      name: "Civic Engagement",
      description:
        "Facilitate civic engagement activities to encourage participation in democratic processes and community decision-making. Support initiatives that promote transparency, accountability, and good governance.",
      image: "https://i.postimg.cc/NMTwFJFg/civic-engagement.jpg",
    },
    {
      name: "Environmental Sustainability",
      description:
        "Advocate for environmental justice and work to address the impact of environmental degradation on vulnerable communities. Promote sustainable practices and support initiatives aimed at protecting the environment.",
      image: "https://i.postimg.cc/tR3jHM8k/environment.jpg",
    },
    {
      name: "Networking and Collaboration",
      description:
        "Build partnerships with local, national, and international organizations to enhance our impact and drive systemic change. Engage in collaborative projects to amplify our efforts and share best practices.",
      image: "https://i.postimg.cc/sgXd7DxH/network.jpg",
    },
    {
      name: "Peace Building",
      description:
        "Promoting conflict resolution and fostering harmonious coexistence.",
      image: "https://i.postimg.cc/nLjySRvv/peace.jpg",
    },
  ];

  const programs = [
    {
      name: "Human Rights Education",
      description: {
        dOne: "Workshops and seminars to educate communities about their rights and how to advocate for them.",
      },
    },
    {
      name: "Access to Justice",
      description: {
        dOne: "Free Legal Aid Services: Providing Comprehensive free legal aid services to ensure fair legal representation and justice",
        dTwo: "Public Interest Litigation: Engaging in strategic level actions to protect the rights of vulnerable groups and to ensure environmental justice and protect environmental rights in Ethiopia",
      },
    },
    {
      name: "Gender Equality",
      description: {
        dOne: "Gender-Based Violence Prevention: Implementing programs to combat violence against women and girls, and advocating for gender equality in all sectors. Gender equality campaigns to promote gender equality and combat violence against women.",
        dTwo: "Women's Empowerment: Promoting women's rights and leadership through education, advocacy, and capacity-building initiatives.",
      },
    },
    {
      name: "Child Rights",
      description: {
        dOne: "Child Protection: Focusing on eliminating child labor, child trafficking, and violence against children, and ensuring access to quality education for all children.",
        dTwo: "Child Advocacy: Raising awareness about children's rights and advocating for policies that protect and promote the well-being of children.",
      },
    },
    {
      name: "Disability Inclusion",
      description: {
        dOne: "Inclusive Education: Advocating for and supporting inclusive education practices that ensure persons with disabilities have access to quality education.",
        dTwo: "Disability Rights Awareness: Promoting awareness about the rights of persons with disabilities and working to eliminate barriers to their full participation in society.",
      },
    },
    {
      name: "Cultural Rights",
      description: {
        dOne: "Cultural Heritage Preservation: Protecting and promoting the rights of individuals to participate in their cultural life and preserving cultural heritage.",
        dTwo: "Cultural Awareness Programs: Conducting programs to celebrate and promote understanding of diverse cultural practices and traditions.",
      },
    },
    {
      name: "Environmetal Justice",
      description: {
        dOne: "Environmental Advocacy: Addressing the impact of environmental degradation on vulnerable communities and advocating for their rights to a healthy environment.",
        dTwo: "Sustainable Practices: Promoting environmental sustainability through community-based initiatives and education programs.",
      },
    },
    {
      name: "Labor Rights",
      description: {
        dOne: "Workers' Rights Protection: Advocating for fair wages, safe working conditions, and the right to organize for workers in various sectors.",
        dTwo: "Labor Education: Educating workers about their rights and supporting efforts to improve labor standards.",
      },
    },
    {
      name: "Sexual and Reproductive Health and Rights (SRHR)",
      description: {
        dOne: "SRHR Advocacy: Promoting awareness and advocacy for sexual and reproductive health and rights, ensuring access to services and education.",
        dTwo: "Health Services: Supporting initiatives that provide comprehensive SRHR services to marginalized communities.",
      },
    },
    {
      name: "Democracy and Good Governance",
      description: {
        dOne: "Democracy Promotion: Engaging in activities that promote democratic values, free and fair elections, and civic participation.",
        dTwo: "Good Governance Initiatives: Advocating for transparency, accountability, and good governance practices at all levels of government.",
      },
    },
    {
      name: "Research and Education",
      description: {
        dOne: "Research Activities: Conducting research to identify human rights issues and inform our advocacy and legal strategies.",
        dTwo: "Educational Programs: Implementing educational initiatives to empower individuals with knowledge about their rights and how to assert them.",
      },
    },
    {
      name: "Civic Engagement",
      description: {
        dOne: "Community Outreach: Facilitating civic engagement activities to encourage community participation in democratic processes and decision-making.",
        dTwo: "Youth Engagement: Supporting youth-led initiatives and empowering young people to become active participants in their communities.",
      },
    },
    {
      name: "Networking and Collaboration",
      description: {
        dOne: "Partnership Building: Building partnerships with local, national, and international organizations to enhance our impact and drive systemic change.",
        dTwo: "Collaborative Projects: Engaging in collaborative projects to amplify our efforts and .share best practices.",
      },
    },
    {
      name: "Peace Building",
      description: {
        dOne: "Promoting conflict resolution, reconciliation, and fostering harmonious coexistence.",
      },
    },
  ];

  const events = [
    {
      numOfImages: 4,
      images: [
        "https://i.postimg.cc/TYP6cSb7/img1.jpg",
        "https://i.postimg.cc/ncwtSkYH/img2.jpg",
        "https://i.postimg.cc/vZgwJV35/img3.jpg",
        "https://i.postimg.cc/g2Cbm2TQ/img4.jpg",
      ],
      name: "🌍 Planting the Seeds of Change: H-HRIN's Tree Planting Initiative in Hawassa, Ethiopia 🌱",
      description: {
        p1: {
          content:
            "Today, our team at HALE: Human Rights and Inclusion Network (H-HRIN) took a significant step towards environmental protection and climate justice by organizing a tree-planting event in Tabor Mountain, Hawassa, Ethiopia. This initiative is part of one of our ongoing commitment to creating a sustainable future for our communities and the planet.",
        },
        p2: {
          content:
            "In the heart of Hawassa ,Tabor mountain , we gathered with passionate volunteers, local community members, and environmental advocates to plant trees that will grow into powerful symbols of resilience and hope. By planting these trees, we are not only contributing to the restoration of our environment but also taking concrete action to combat climate change, which disproportionately affects vulnerable populations.",
        },
        p3: {
          heading: "Why Trees Matter",
          content:
            "Trees play a crucial role in our fight against climate change. They absorb carbon dioxide, one of the leading contributors to global warming, and provide oxygen that we all need to survive. But beyond their environmental benefits, trees are also a source of livelihood, food, and shelter for many communities in Ethiopia.",
        },
        p4: {
          heading: "Our Commitment to Climate Justice",
          content:
            "At H-HRIN, we believe that environmental protection and human rights are deeply interconnected. Climate change is not just an environmental issue; it is a social justice issue. Those who are least responsible for climate change often suffer the most from its impacts. That's why we are dedicated to promoting climate justice through initiatives like this tree-planting event. We aim to raise awareness about the importance of environmental stewardship and empower communities to take action.",
        },
        p5: {
          heading: "A Community Effort",
          content:
            "This tree-planting event was a collaborative effort, made possible by the support and participation of local residents, volunteers, and our dedicated team members. Together, we planted 500 trees across Tabor sub-city Tabor mountain in Hawassa, helping to green our city and contribute to global reforestation efforts.",
        },
        p6: {
          heading: "Looking Ahead",
          content:
            "This is just the beginning. We are committed to continuing our work in environmental protection and climate justice. We will keep engaging with communities, advocating for sustainable policies, and implementing projects that make a tangible difference.",
        },
        p7: {
          heading: "Join Us in one of Our Mission",
          content:
            "We invite everyone to join us in one of our mission to protect our environment and promote climate justice. Whether it's by planting trees, reducing carbon footprints, or advocating for change, every action counts. Together, we can create a greener, fairer, and more just world for all.",
        },
      },
    },
  ];

  const teams = [
    { 
      name:"Tafesse Tekle Sokare",
      position:"Co-Founder, HALE: Human Rights and Inclusion Network",
      image:"https://i.postimg.cc/fbn3nhnC/6U5A7019.jpg",
      description:[
        "Tafesse Tekle Sokare is a seasoned legal expert with a deep commitment to justice, human rights, and social equity. As one of the Co-Founders of HALE: Human Rights and Inclusion Network (H-HRIN), Tafesse has been instrumental in establishing the organization’s foundation and driving its mission to advocate for human rights and promote social inclusion in Ethiopia.",
        "Tafesse holds a Master of Laws (LLM) in Commercial Law from Hawassa University, where he specialized in the intricacies of commercial law and its impact on both local and global economies. He also earned a Degree of Laws (LLB) from the School of Law at Hawassa University, graduating with Distinction, a testament to his academic excellence and profound understanding of the legal field.",
        "Currently, Tafesse serves as a Lawyer at the Commercial Bank of Ethiopia, where he applies his extensive legal knowledge to navigate the complex legal landscape of the banking sector. His role is pivotal in ensuring that the bank operates within the bounds of commercial law while upholding the highest standards of legal compliance and ethical practices.",
        "Tafesse’s career is distinguished by a diverse range of legal experiences. He has served as a General Attorney for the Sidama Region Attorney, where he provided legal counsel on matters of regional and national significance. His role as a Customs and Tax Related Crime Investigator and Prosecutor at the Ethiopia Revenue and Customs Authority involved rigorous investigations and prosecutions aimed at maintaining the integrity of Ethiopia’s revenue collection system.",
        "Moreover, Tafesse’s judicial experience is notable. He has served as a Judge at both the Sidama Zone High Court and the Hawassa Zuria First Instance Court. In these capacities, he was responsible for delivering justice in complex legal cases, demonstrating fairness, impartiality, and a deep commitment to the rule of law."
      ]
    },
    {
      name: "Fenot Mekonen Hailu",
      position:
        "Co-founder of H-HRIN and Gender Issues and Human Rights Advocate",
      image: "https://i.postimg.cc/TPxQVKNr/Team-photo.jpg",
      description: [
        "Fenot Mekonen earned her LL.B. with distinction from Haramaya University College of Law on August 30, 2022. During her studies, she provided free legal aid and held leadership roles, including Vice President of the English Language Improvement Center, Executive Member of the Haramaya University Girls Union, Coordinator for Female Law Students and Legal Professionals Network, and Women's Affairs Head of the Haramaya University Peace Forum.",

        "After graduation, she interned at the Ethiopian Human Rights Commission under the socio-economic department and served as a paralegal for the AAU-UNHRC free legal aid project. She is an alumna of the Aspire Institute and the Online Professional English Network at George Mason University.",

        "Currently, she is pursuing her LLM in Human Rights and Democratization in Africa at the University of Pretoria, South Africa. Fenot interned with the Freedom of Expression, Information, and Digital Rights Unit at the Centre for Human Rights and is now interning with the Disability Unit at the same center. Additionally, she is an intern for the Network of Public Interest Lawyers, based in Kampala, Uganda.",
      ],
    },
    {
      name: "Essey Peteros Firiso",
      position:
        "Co-Founder of Hale: Human Rights and Inclusion Network (H-HRIN)",
      image: "https://i.postimg.cc/s239Bt1m/essey.jpg",
      description: [
        "Essey Peteros Firiso is currently an LLB candidate at Hawassa University, where he is deeply committed to human rights and social justice. He is the Founder of Tesfa Counseling Association, an initiative dedicated to providing support and guidance to individuals in need.",
        "In addition to his advocacy work, Essey serves as the President of the Hawassa University Student Union, leading initiatives to empower students and enhance their educational experiences. He is also the Vice President of the Ethiopian Higher Education Institutions Student Union, where he represents the interests of students across the country at a national level.",
        "Essey’s leadership, commitment to social causes, and dedication to advancing human rights make him an invaluable member of the HALE: Human Rights and Inclusion Network. As Co-Founder of H-HRIN, he plays a crucial role in driving the organization’s mission to create a just and inclusive society.",
      ],
    },
  ];

  const resources = [
    {
      name: "Gender Equality and Social Inclusion in Ethiopia Policy Brief Published",
      path: "./assets/resources/gesi_polciy_brief_published.pdf",
      imgPath: "./assets/resources/gender-equality-social-inclusion.png",
    },
    {
      name: "Handbook on the Rights of Children in Ethiopia",
      path: "./assets/resources/handbook_on_the_rights_of_children_in_Ethiopia.pdf",
      imgPath:
        "./assets/resources/handbook_on_the_rights_of_children_in_Ethiopia.png",
    },
    {
      name: "Inclusion of People with Disabilities in Ethiopia",
      path: "./assets/resources/inclusion-of-people-with-disabilities-in-ethiopia.pdf",
      imgPath:
        "./assets/resources/inclusion-of-people-with-disabilities-in-ethiopia.png",
    },
    {
      name: "Closing the Gender Gap: Women's Right in Ethiopia and Mexico",
      path: "./assets/resources/closing-the-gender-gap-ethiopia-and-mexico.pdf",
      imgPath:
        "./assets/resources/closing-the-gender-gap-ethiopia-and-mexico.png",
    },
    {
      name: "Hanbook on the Rights of the Child in Ethiopia",
      path: "./assets/resources/HandbookontheRightsoftheChildinEthiopia.pdf",
      imgPath: "./assets/resources/HandbookontheRightsoftheChildinEthiopia.png",
    },
    {
      name: "Ethiopian Environmental Policy: Challenges and Prospects on Sustainable Social and Economic Development",
      path: "./assets/resources/ethiopian-environmental-policy-challenges-and-prospects.pdf",
      imgPath:
        "./assets/resources/ethiopian-environmental-policy-challenges-and-prospects.png",
    },
    {
      name: "Ethiopia: Gender Issues Briefing Note",
      path: "./assets/resources/ethiopia-gender-issues-briefing-note.pdf",
      imgPath: "./assets/resources/ethiopia-gender-issues-briefing-note.png",
    },
    {
      name: "Disability Rights are Human Rights: Pushing Ethiopia Towards a rights-based Movement",
      path: "./assets/resources/disability-rights-are-human-rights.pdf",
      imgPath: "./assets/resources/disability-rights-are-human-rights.png",
    },
    {
      name: "Children's Rights in Contemporary Ethiopia",
      path: "./assets/resources/childrens-rights-in-contemporary-ethiopia.pdf",
      imgPath:
        "./assets/resources/childrens-rights-in-contemporary-ethiopia.png",
    },
    {
      name: "Conditions of Human Rights in Ethiopia in the Aftermath of Political Reform",
      path: "./assets/resources/Conditions_of_Human_Rights_in_Ethiopia.pdf",
      imgPath: "./assets/resources/Conditions_of_Human_Rights_in_Ethiopia.png",
    },
    {
      name: "Ethiopian Human Rights System: an overview",
      path: "./assets/resources/ethiopian-human-rights-system.pdf",
      imgPath: "./assets/resources/ethiopian-human-rights-system.png",
    },
    {
      name: "Potential for Democratization in Ethiopia",
      path: "./assets/resources/Potential-for-Democratization-in-Ethiopia.pdf",
      imgPath:
        "./assets/resources/Potential-for-Democratization-in-Ethiopia.png",
    },
    {
      name: "Sexual and Reproductive Health and Rights Infographic Snapshot",
      path: "./assets/resources/sexual-and-reproductive-health-and-rights.pdf",
      imgPath:
        "./assets/resources/sexual-and-reproductive-health-and-rights.png",
    },
    {
      name: "Youth People On Their Successes, Challenges, and Motivations For Youth-Led SRHR Advocacy in Ethiopia",
      path: "./assets/resources/Youth-SRHR-Advocacy-in-Ethiopia.pdf",
      imgPath: "./assets/resources/Youth-SRHR-Advocacy-in-Ethiopia.png",
    },
    {
      name:"Sexual and Reproductive Health and Rights in National Adaptation Plan Processes",
      path: "./assets/resources/SRHR-in-national-adaptation-plan.pdf",
      imgPath: "./assets/resources/SRHR-in-national-adaptation-plan.png",
    },
    {
      name:"Youth Participation in Ethiopia",
      path: "./assets/resources/youth-participation-in-ethiopia.pdf",
      imgPath: "./assets/resources/youth-participation-in-ethiopia.png",
    }
  ];

  return (
    <GeneralContext.Provider
      value={{ jobs, programs, events, teams, resources, navOpen, setNavOpen }}>
      {children}
    </GeneralContext.Provider>
  );
}
