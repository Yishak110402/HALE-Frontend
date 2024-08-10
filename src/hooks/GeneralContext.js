import { createContext } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const jobs = [
    {
      name: "Access to Justice",
      description:
        "Provide comprehensive free legal aid services to individuals who lack access to fair legal representation. This includes legal representation, counseling, and support to ensure fair treatment and justice for all. Engage in public interest litigation to address systemic injustices and uphold human rights.",
      image: "access",
    },
    {
      name: "Advocacy and Awareness",
      description:
        "Conduct advocacy campaigns to promote gender equality, child rights, labor rights, disability inclusion, and cultural rights. Raise awareness about sexual and reproductive health and rights (SRHR) and environmental justice. Promote democracy and good governance through education and civic engagement initiatives.",
      image: "advocacy",
    },
    {
      name: "Legal Aid Services",
      description:
        "We provide comprehensive legal aid to individuals who lack access to justice. This includes legal representation, counseling, and support to ensure fair treatment and justice for all.",
      image: "legal-aid",
    },
    {
      name: "Education and Empowerment",
      description:
        "Implement educational programs to empower individuals with knowledge about their rights and how to assert them. Organize workshops, seminars, and community meetings to foster a culture of inclusion and respect for human rights.",
      image: "education",
    },
    {
      name: "Community Support",
      description:
        "Provide support services to marginalized communities, including assistance with accessing education, healthcare, and other essential services. Collaborate with local organizations to develop and implement community-driven solutions.",
      image: "community-support",
    },
    {
      name: "Research and Analysis",
      description:
        "Conduct research activities to identify and address human rights issues, informing our advocacy and legal strategies. Publish reports and studies to highlight the challenges faced by marginalized communities and recommend policy changes.",
      image: "research",
    },
    {
      name: "Public Interest Litigation",
      description:
        "We engage in strategic litigation to challenge injustices and protect the rights of vulnerable groups, and to ensure environmental justice and protect environmental rights and fundamental freedoms in Ethiopia.",
      image: "public-interest",
    },
    {
      name: "Democracy Promotion",
      description:
        "We encourage active participation in democratic processes, conduct election monitoring, and promote transparency and fairness in electoral systems. Our initiatives aim to strengthen democratic governance and ensure the representation of all voices.",
      image: "democracy",
    },
    {
      name: "Civic Engagement",
      description:
        "Facilitate civic engagement activities to encourage participation in democratic processes and community decision-making. Support initiatives that promote transparency, accountability, and good governance.",
      image: "civic-engagement",
    },
    {
      name: "Environmental Sustainability",
      description:
        "Advocate for environmental justice and work to address the impact of environmental degradation on vulnerable communities. Promote sustainable practices and support initiatives aimed at protecting the environment.",
      image: "environment",
    },
    {
      name: "Networking and Collaboration",
      description:
        "Build partnerships with local, national, and international organizations to enhance our impact and drive systemic change. Engage in collaborative projects to amplify our efforts and share best practices.",
      image: "network",
    },
    {
      name: "Peace Building",
      description:
        "Promoting conflict resolution and fostering harmonious coexistence.",
      image: "peace",
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
      numOfImages:4,
      name: "🌍 Planting the Seeds of Change: H-HRIN's Tree Planting Initiative in Hawassa, Ethiopia 🌱",
      description:{
        p1:{
          content:"Today, our team at HALE: Human Rights and Inclusion Network (H-HRIN) took a significant step towards environmental protection and climate justice by organizing a tree-planting event in Tabor Mountain, Hawassa, Ethiopia. This initiative is part of one of our ongoing commitment to creating a sustainable future for our communities and the planet."
        },
        p2:{
          content:"In the heart of Hawassa ,Tabor mountain , we gathered with passionate volunteers, local community members, and environmental advocates to plant trees that will grow into powerful symbols of resilience and hope. By planting these trees, we are not only contributing to the restoration of our environment but also taking concrete action to combat climate change, which disproportionately affects vulnerable populations."
        },
        p3:{
          heading:"Why Trees Matter",
          content:"Trees play a crucial role in our fight against climate change. They absorb carbon dioxide, one of the leading contributors to global warming, and provide oxygen that we all need to survive. But beyond their environmental benefits, trees are also a source of livelihood, food, and shelter for many communities in Ethiopia."
        },
        p4:{
          heading:"Our Commitment to Climate Justice",
          content:"At H-HRIN, we believe that environmental protection and human rights are deeply interconnected. Climate change is not just an environmental issue; it is a social justice issue. Those who are least responsible for climate change often suffer the most from its impacts. That's why we are dedicated to promoting climate justice through initiatives like this tree-planting event. We aim to raise awareness about the importance of environmental stewardship and empower communities to take action."
        },
        p5:{
          heading:"A Community Effort",
          content:"This tree-planting event was a collaborative effort, made possible by the support and participation of local residents, volunteers, and our dedicated team members. Together, we planted 500 trees across Tabor sub-city Tabor mountain in Hawassa, helping to green our city and contribute to global reforestation efforts."
        },
        p6:{
          heading:"Looking Ahead",
          content:"This is just the beginning. We are committed to continuing our work in environmental protection and climate justice. We will keep engaging with communities, advocating for sustainable policies, and implementing projects that make a tangible difference."
        },
        p7:{
          heading:"Join Us in one of Our Mission",
          content:"We invite everyone to join us in one of our mission to protect our environment and promote climate justice. Whether it's by planting trees, reducing carbon footprints, or advocating for change, every action counts. Together, we can create a greener, fairer, and more just world for all."
        }
      }
    }
  ]

  return (
    <GeneralContext.Provider value={{ jobs, programs, events }}>
      {children}
    </GeneralContext.Provider>
  );
}
