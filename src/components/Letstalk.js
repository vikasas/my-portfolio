const talk = [
    {
      name: "LET'S TALK"
    },
    {
      name: "+++"
    }
  ];
  
  const Letstalk = () => {
    return (
      <div className="w-full h-[40px] flex items-center overflow-hidden bg-hovercol border border-bordercol">
        <div className="flex  w-fit animate-marquee">
          {/* Duplicate content for seamless scrolling */}
          {Array(2)
            .fill(
              Array(40) // Repeat the items multiple times
                .fill(talk)
                .flat()
            )
            .flat()
            .map((tal, index) => (
              <div
                key={index}
                className="flex gap-4 px-4 items-center text-smalltext font-small whitespace-nowrap"
              >
                <p>{tal.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Letstalk;
  