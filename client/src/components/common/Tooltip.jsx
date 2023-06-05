import AntTooltip from "antd/lib/tooltip";

const Tooltip = ({
  children,
  title = "tooltip",
  className,
  color = "#172b4d",
  arrow = false,
}) => {
  return (
    <AntTooltip
      className={className}
      style={{ fontSize: "6px" }}
      color={color}
      arrow={arrow}
      title={title}
    >
      {children}
    </AntTooltip>
  );
};

export default Tooltip;
