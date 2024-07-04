interface NavigatorTitleProps {
  children: React.ReactNode;
}

const NavigatorTitle = ({ children }: NavigatorTitleProps) => {
  return (
    <h2 className="text-title-gray-300 font-title text-center text-[10px] font-black leading-[15px]">
      {children}
    </h2>
  );
};

export default NavigatorTitle;
