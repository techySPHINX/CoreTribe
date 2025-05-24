import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-white bg-opacity-80 backdrop-blur-sm"
    : "bg-white shadow-md";

  return (
    <nav className="fixed top-0 z-40 w-full">
      <div
        className={`${navbarBackground} flex items-center justify-between px-6 py-4`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          {/* LEFT - Logo */}
          <div>
            <h1
              className="text-3xl font-bold tracking-wider text-primary-500"
              style={{
                fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              CoreTribe
            </h1>
          </div>

          {/* RIGHT - Navigation & Actions */}
          {isAboveMediumScreens ? (
            <div className="flex items-center gap-12">
              <div className="text-md flex gap-8 font-medium text-gray-700">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center gap-6">
                <button className="text-sm font-medium text-gray-600 transition duration-200 hover:text-primary-500">
                  Sign In
                </button>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="hover:bg-primary-600 rounded-lg bg-primary-500 p-2 transition duration-200"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col justify-between bg-white shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-xl font-bold text-primary-500">Menu</h2>
              <button onClick={() => setIsMenuToggled(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-6 px-6 pt-6 text-lg text-gray-700">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
          <div className="border-t px-6 py-6">
            <button className="mb-3 w-full text-sm font-medium text-gray-600 transition duration-200 hover:text-primary-500">
              Sign In
            </button>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
