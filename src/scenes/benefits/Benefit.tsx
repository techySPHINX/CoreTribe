import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-8 rounded-lg border-2 border-gray-100 bg-white px-6 py-14 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="mb-6 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-5 text-4xl text-primary-500">
          {icon}
        </div>
      </div>

      <h4 className="mb-3 font-montserrat text-xl font-semibold text-primary-500">
        {title}
      </h4>
      <p className="mx-auto max-w-xs font-montserrat text-sm leading-relaxed text-gray-700">
        {description}
      </p>

      <AnchorLink
        aria-label={`Learn more about ${title}`}
        className="mt-6 inline-block cursor-pointer rounded-full bg-primary-500 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
