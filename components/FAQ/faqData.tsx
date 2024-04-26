import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What types of development services do you offer?",
    ans: "We specialize in both front-end and back-end development using JavaScript, Go, and Python. Whether you need a sleek user interface or robust server-side functionality, our team has you covered.",
  },
  {
    id: 2,
    quest: "What is CI/CD, and how do you handle it?",
    ans: "Continuous Integration/Continuous Deployment (CI/CD) is crucial for efficient software delivery. We utilize GitLab, GitHub, and Jenkins to automate the build, test, and deployment processes, ensuring rapid and reliable releases for your projects.",
  },
  {
    id: 3,
    quest: "Do you provide web hosting services?",
    ans: "Yes, we offer web hosting solutions tailored to your needs. Our expertise covers AWS, Google Cloud, Linode, and DigitalOcean, allowing us to deploy and manage your applications with scalability, security, and performance in mind.",
  },
  {
    id: 4,
    quest: "How do I get started with your services?",
    ans: "Getting started is easy! Simply reach out to us through our contact form or give us a call. Our team will schedule a consultation to discuss your project requirements, provide recommendations, and outline the next steps to kickstart your project journey with us.",
  },
];

export default faqData;
