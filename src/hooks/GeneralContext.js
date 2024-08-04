import { createContext } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const jobs = [
    {
      name: "Advocacy and Lobbying",
      description:
        "We work to influence policy and legislative changes to safeguard human rights and promote equality across all sectors of society. Our advocacy efforts are aimed at bringing about lasting legal and social reforms.",
      image: "advocacy",
    },
    {
      name: "Legal Aid Services",
      description:
        "We provide comprehensive legal aid to individuals who lack access to justice. This includes legal representation, counseling, and support to ensure fair treatment and justice for all.",
      image: "legal-aid",
    },
    {
      name: "Education and Training",
      description:
        "We conduct workshops, seminars, and training programs to raise awareness about human rights issues and build capacity within communities. Our educational initiatives aim to empower individuals with the knowledge and tools they need to advocate for their rights.",
      image: "education",
    },
    {
      name: "Community Support",
      description:
        "Our support services offer resources and assistance to marginalized groups, including women, children, people with disabilities, and those facing discrimination. We work to build strong community networks that provide ongoing support and empowerment.",
      image: "community-support",
    },
    {
      name: "Research and Documentation",
      description:
        "We carry out thorough research to inform our advocacy efforts and document human rights abuses. Our research helps us to understand the challenges faced by marginalized communities and develop effective strategies to address them.",
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
        image:"democracy"
    },
    {
      name: "Civic Engagement",
      description:
        "We mobilize communities to participate in social and political activities that promote justice and equality. Our civic engagement efforts are aimed at fostering active and informed citizenry.",
        image:"civic-engagement"
    },
  ];

  return (
    <GeneralContext.Provider value={{ jobs }}>
      {children}
    </GeneralContext.Provider>
  );
}
