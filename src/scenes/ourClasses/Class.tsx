type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `absolute inset-0 z-30 flex
   flex-col items-center justify-center
   bg-primary-500 text-center text-white
   opacity-0 transition-opacity duration-500 hover:opacity-90
   p-5
   `;

  return (
    <li className="relative inline-block h-[380px] w-[450px] overflow-hidden rounded-lg shadow-lg">
      <div className={overlayStyles}>
        <p className="text-2xl font-semibold">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="h-full w-full object-cover" alt={name} src={image} />
    </li>
  );
};

export default Class;
