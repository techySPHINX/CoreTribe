import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and endurance with expert-led weight training sessions tailored to all fitness levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Enhance your flexibility and mental clarity through a variety of traditional and modern yoga practices.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Focus on core strengthening exercises that improve posture, balance, and overall fitness.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Explore exciting outdoor activities and fitness challenges designed to boost your stamina and spirit.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Dynamic group workouts combining cardio, strength, and flexibility to keep you energized and fit.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Personalized training programs to help you meet specific health and fitness goals with guidance from professionals.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 leading-relaxed text-gray-700">
              Discover a diverse range of classes designed to suit every fitness
              level and interest. Our expert instructors will guide you every
              step of the way, helping you unlock your full potential.
            </p>
          </div>
        </motion.div>

        {/* SWIPER SLIDER */}
        <div className="mx-auto mt-10 w-full max-w-[1200px]">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {classes.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <Class
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
