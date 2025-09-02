interface AboutCardProps {
  title: string;
  description: string;
  image: string;
}

interface CapabilityProps {
  title: string;
  description: string;
  image: string;
}

interface ProcessProps {
  title: string;
  description: string;
  icon: string;
}


export const dataAbout: AboutCardProps[] = [
  {
    title: "Strategy",
    description:
      "From integrated advertising campaigns to service design, we approach our projects with strategic and creative thinking.",
    image: "/icon/about-1.png",
  },
  {
    title: "Design",
    description:
      "From prototyping trough front & back end engineering to quality testing, we use latets technologies",
    image: "/icon/about-2.png",
  },
  {
    title: "Technology",
    description:
      "From prototyping trough front & back end engineering to quality testing, we use latets technologies",
    image: "/icon/about-3.png",
  },
];

export const dataCapabilities: CapabilityProps[] = [
  {
    title: "E Commerce",
    description:
      "We have implemented hundreds of projects that are generating over US$6.5 billion in digital sales for our customers",
    image: "/icon/capability-1.png",
  },
  {
    title: "UX Design ",
    description:
      "User experience or UX design is dedicated to giving you the best possible experience when using websites or software services",
    image: "/icon/capability-2.png",
  },
  {
    title: "Social Media",
    description:
      "We can assess your needs, outline opportunities and prescribe specific actions for long-term social media success.",
    image: "/icon/capability-3.png",
  },
  {
    title: "Brand Strategy",
    description:
      "ing from research to a brand idea, we can support you with specialized services, such as brand architecture and strategies.",
    image: "/icon/capability-4.png",
  },
  {
    title: "Product Design",
    description:
      "We are offering a comprehensive array of value-added product design and engineering design services costumized",
    image: "/icon/capability-5.png",
  },
];

export const steps: ProcessProps[] = [
  {
    icon: '/icon/process-1.png',
    title: 'Planning',
    description:
      "During the exploration stage, we dive into our clients’ business requirements and competitive landscape.",
  },
  {
    icon: '/icon/process-2.png',
    title: 'Development',
    description:
      "Once we have a clear strategy and we know what we want to achieve, it’s time for our designers to roll up their sleeves.",
  },
  {
    icon: '/icon/process-3.png',
    title: 'Launch',
    description:
      "Following through quality assurance involving you and our technical team the project is finally ready to be released",
  },
];