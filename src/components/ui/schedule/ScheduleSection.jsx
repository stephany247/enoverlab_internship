function ScheduleSection({ title, items }) {
  const bgColors = ["bg-light-blue-card", "bg-task-green", "bg-task-red"];
  const iconColors = ["bg-icon-blue", "bg-icon-green", "bg-icon-red"];

  return (
    <div className="space-y-2 capitalize">
      <h2 className="font-medium">{title}</h2>
      {items.map((item, index) => {
        const bgColor = bgColors[index % bgColors.length];
        const iconColor = iconColors[index % iconColors.length];
        const Icon = item.icon; // ✅ assign the component

        return (
          <div
            key={item.id}
            className={`grid grid-cols-3 items-center ${bgColor} p-2 rounded-lg font-medium`}
          >
            <div className="flex gap-x-4">
              <div className={`text-blue text-2xl md:text-3xl ${iconColor} p-2 rounded-lg`}>
                <Icon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-nowrap">{item.name}</h4>
                <p className="text-xs text-dark-gray">{item.details}</p>
              </div>
            </div>
            <p className="self-end text-xs text-dark-gray text-center lowercase">{item.time}</p>
            <form className="flex gap-2 items-center justify-end text-sm text-darker-gray font-medium">
              {["Missed", "Done"].map((label) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 md:gap-2 items-center"
                >
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    id={`${label}-${item.id}`}
                    className="accent-blue cursor-pointer"
                  />
                  <label htmlFor={`${label}-${item.id}`}>{label}</label>
                </div>
              ))}
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default ScheduleSection;
