const Cards = ({ Title ,label, styleType, img }) => {
    const baseStyle = "w-full h-[60vh] text-black rounded-lg focus:outline-none transition ease-in duration-500 p-9";
    const baseStyle1 = "w-[20vw] h-[60vh] text-black border-white rounded-[90px] focus:outline-none transition ease-in duration-500 p-9";
    const styles = {
        card: `${baseStyle} bg-[#FDB2B2]`,
        card1: `${baseStyle} bg-[#3398D0]`,
        card2: `${baseStyle} bg-[#6EDBD0]`,
        card3: `${baseStyle} bg-[#94F097]`,
        card4: `${baseStyle} bg-[#B59BD7]`,
        card5: `${baseStyle} bg-[#FFF492]`,

        
        card6: `${baseStyle1} bg-[#FFF492]`,
        card7: `${baseStyle1} bg-[#94F097] mt-[-15vh]`,
        card8: `${baseStyle1} bg-[#FDB2B2]`,
    };

    return (
        <div className={`${styles[styleType]} text-center flex flex-col gap-[2vh]`}>
        {img}
        <div className="mt-4 text-[1.5rem] font-bold">{Title}</div>
        <div className="mt-2 px-9">{label}</div>
      </div>
    );
};

export default Cards;