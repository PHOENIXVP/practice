import { primary, secondary } from "../../cnostants/tvar";

export const Button = ({ btnClass, varient, children, ...props }) => {
  let varientClass = [
    `px-3 py-2 text-${primary} hover:text-${secondary}`,
    `px-3 py-2 text-${secondary} hover:text-${primary}`,
  ];
  let classes = varientClass[varient] + btnClass;

  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
};
