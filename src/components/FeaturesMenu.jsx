const FeaturesMenu = () => {
  const content = [
    {
      id: 1,
      title: "Todo",
      icon: "src/assets/images/icon-todo.svg",
    },
    {
      id: 2,
      title: "Calendar",
      icon: "src/assets/images/icon-calendar.svg",
    },
    {
      id: 3,
      title: "Reminders",
      icon: "src/assets/images/icon-reminders.svg",
    },
    {
      id: 4,
      title: "Planning",
      icon: "src/assets/images/icon-planning.svg",
    },
  ];

  return (
    <ul className="w-full p-3 rounded-lg shadow-lg rounded-box">
      {content.map((c) => {
        return (
          <li key={c.id} className="flex items-center gap-2 p-2">
            <img src={`${c.icon}`} alt="icon" />
            <a>{c.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturesMenu;
