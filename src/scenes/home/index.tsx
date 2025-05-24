import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="bg-gray-20 py-10 md:h-full">
      {/* MAIN SECTION */}
      <motion.div
        className="mx-auto flex w-5/6 flex-col items-center justify-between gap-16 md:h-5/6 md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* LEFT SIDE */}
        <div className="z-10 mt-20 text-left md:mt-32 md:basis-3/5">
          {/* TEXT */}
          <motion.div
            className="md:-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="font-primary font-extrabold leading-tight tracking-tight text-primary-500 drop-shadow-md">
              <span className="block text-3xl text-secondary-500 sm:text-4xl md:text-5xl">
                BE
              </span>
              <span className="block text-[60px] text-primary-500 sm:text-7xl md:text-8xl lg:text-9xl">
                DYNAMO
              </span>
            </h1>
            <p className="font-primary mt-6 max-w-md text-sm text-gray-700 md:text-base">
              Unrivaled gym. Elite training. World-class fitness classes and
              modern studios. Sculpt the body you dream of. Your transformation
              starts here.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-10 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-semibold text-primary-500 underline underline-offset-4 transition duration-200 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="mt-10 flex justify-center md:mt-0 md:ml-10 md:basis-3/5">
          <img
            alt="home-graphic"
            src={HomePageGraphic}
            className="w-full max-w-[500px] object-contain drop-shadow-xl"
          />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="mt-10 bg-primary-100 py-8">
          <div className="mx-auto flex w-5/6 items-center justify-center gap-16">
            {/* Viva Fitness */}
            <div className="flex flex-col items-center text-center">
              <GiMuscleUp className="text-4xl text-viva-fitness" />
              <span className="text-primary-600 mt-2 font-monoton text-lg">
                Viva Fitness
              </span>
            </div>

            {/* Monster */}
            <div className="flex flex-col items-center text-center">
              <GiWeightLiftingUp className="text-4xl text-monster" />
              <span className="text-primary-600 mt-2 font-monoton text-lg">
                Monster
              </span>
            </div>

            {/* Vixxen */}
            <div className="flex flex-col items-center text-center">
              <FaDumbbell className="text-4xl text-vixxen" />
              <span className="text-primary-600 mt-2 font-monoton text-lg">
                Vixxen
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
