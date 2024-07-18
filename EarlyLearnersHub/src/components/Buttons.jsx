const Buttons = ({ label, onClick, styleType }) => {
  const baseStyle =
    "w-full px-4 py-2 font-semibold text-black rounded-lg focus:outline-none transition ease-in duration-500";
  const styles = {
    primary: `${baseStyle} bg-[#FE0000] hover:bg-transparent border border-red-600 hover:text-black`,
    primary1: `${baseStyle} bg-[#3bc907ea] hover:bg-transparent border border-green-600 hover:text-black`,
    primary2: `${baseStyle} bg-green-200 hover:bg-transparent text-black border border-green-600 hover:text-white`,
    primary3: `${baseStyle} bg-green-500 hover:bg-transparent border border-green-600 hover:text-black`,
    primary4: `${baseStyle} bg-[#FFF492] w-[50%] hover:bg-transparent border border-[#FFF492] border-600 `,
  };

  return (
    <button
      className={`${styles[styleType]} text-center`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Buttons;