const Options: React.FC = () => {
  const options = [
    { label: "User Agreement", link: "#" },
    { label: "Privacy Policy", link: "#" },
    { label: "Content Policy", link: "#" },
    { label: "Moderator Code of Conduct", link: "#" },
  ];

  return (
    <div className="relative mt-6 w-full grid grid-cols-2 gap-2">
      {options.map((option, index) => (
        <a key={index} href={option.link} className="text-xs text-neutral-500">
          {option.label}
        </a>
      ))}
    </div>
  );
};

export default Options;
