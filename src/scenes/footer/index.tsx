import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        {/* Logo and About */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <span className="font-extrabold text-4xl tracking-wide text-black font-montserrat" style={{ letterSpacing: "0.15em" }}>
            CORETRIBE
          </span>
          <p className="my-5 max-w-md font-montserrat text-base text-gray-700">
            At Dynamo Fitness, we empower you to achieve your fitness goals with
            world-class training, expert coaches, and community-driven
            motivation. Your transformation journey starts here.
          </p>
          <p className="font-montserrat text-sm text-gray-600">
            © Dynamo Fitness India. All Rights Reserved.
          </p>
        </div>

        {/* Useful Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-5 font-montserrat text-lg font-bold text-primary-500">
            Quick Links
          </h4>
          <ul className="cursor-pointer space-y-3 font-montserrat text-sm text-gray-700">
            <li>About Us</li>
            <li>Membership Plans</li>
            <li>Training Programs</li>
            <li>Our Trainers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-5 font-montserrat text-lg font-bold text-primary-500">
            Contact Us
          </h4>
          <p className="mb-3 font-montserrat text-sm text-gray-700">
            123 Fitness Street, Mumbai, Maharashtra, India
          </p>
          <p className="mb-3 font-montserrat text-sm text-gray-700">
            Phone: +91 98765 43210
          </p>
          <p className="mb-3 font-montserrat text-sm text-gray-700">
            Email: support@dynamofitness.in
          </p>
          <p className="font-montserrat text-sm text-gray-700">
            Mon - Sat: 6:00 AM - 10:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
