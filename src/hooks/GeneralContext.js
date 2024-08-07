import { createContext } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const jobs = [
    {
      name: "Access to Justice",
      description:
        "Provide comprehensive free legal aid services to individuals who lack access to fair legal representation. This includes legal representation, counseling, and support to ensure fair treatment and justice for all. Engage in public interest litigation to address systemic injustices and uphold human rights.",
      image:"access"
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
      image:"environment"
    },
    {
      name: "Networking and Collaboration",
      description:
        "Build partnerships with local, national, and international organizations to enhance our impact and drive systemic change. Engage in collaborative projects to amplify our efforts and share best practices.",
      image:"network"
    },
  ];

  return (
    <GeneralContext.Provider value={{ jobs }}>
      {children}
    </GeneralContext.Provider>
  );
}
