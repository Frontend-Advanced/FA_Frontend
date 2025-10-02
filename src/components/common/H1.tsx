interface H1Props {
  children: React.ReactNode;
  className?: string; 
}

const H1: React.FC<H1Props> = ({ children, className }) => {

  const defaultClasses = 'text-2xl font-bold leading-10 text-[#000000]';

  const combinedClasses = `${defaultClasses} ${className || ''}`.trim();

  return (
    <h1 className={combinedClasses}>
      {children}
    </h1>
  );
};

export default H1;