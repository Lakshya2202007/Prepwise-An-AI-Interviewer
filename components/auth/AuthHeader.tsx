interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-primary-100 text-3xl font-bold tracking-wide">PREPWISE</span>
      </div>
      <h3 className="text-center">{title}</h3>
    </>
  );
};

export default AuthHeader;