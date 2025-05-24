import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State-of-the-Art Facilities",
    description:
      "Experience world-class equipment and thoughtfully designed workout spaces that cater to all fitness levels.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description:
      "From yoga to HIIT, our wide range of classes keeps your routine fresh and engaging with expert instructors guiding you.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Certified Expert Trainers",
    description:
      "Our passionate and certified trainers provide personalized coaching to help you reach your fitness goals safely and effectively.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            MORE THAN JUST A <span className="text-primary-500">GYM</span>
          </HText>
          <p className="my-5 text-sm text-gray-700">
            We bring world-class fitness equipment, expert trainers, and a
            variety of classes to help you achieve your ultimate fitness goals
            with dedicated care for every member.
          </p>
        </motion.div>

        {/* BENEFITS LIST */}
        <motion.div
          className="mt-10 flex flex-col gap-8 md:flex-row md:justify-between md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 flex flex-col items-center gap-16 md:mt-28 md:flex-row md:items-start md:gap-20">
          {/* GRAPHIC */}
          <img
            className="mx-auto max-w-full md:max-w-md"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            loading="lazy"
          />

          {/* DESCRIPTION */}
          <div className="max-w-xl">
            {/* TITLE */}
            <div className="relative mb-6">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    JOIN MILLIONS WHO ARE{" "}
                    <span className="text-primary-500">GETTING FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mb-5 leading-relaxed text-gray-700">
                At our gym, you’ll find a supportive community, personalized
                training programs, and the motivation to push beyond limits.
                Every aspect of our facility and services is designed to foster
                your fitness journey.
              </p>
              <p className="mb-5 leading-relaxed text-gray-700">
                Whether you’re starting out or a seasoned athlete, our expert
                team ensures you receive the guidance and tools to transform
                your health and lifestyle.
              </p>
            </motion.div>

            {/* CTA BUTTON */}
            <div className="relative mt-10">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
