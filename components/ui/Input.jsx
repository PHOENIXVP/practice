import { primary, secondary } from "../../cnostants/tvar";

export const Input = ({
  className,
  varient = "primary",
  cVarient,
  ...props
}) => {
  let varientClass = {
    primary: `text-${primary} hover:text-${secondary} border-${primary}-400 border hover:border-${primary}-800`,
    secondary: `text-${secondary} hover:text-${primary} border-${secondary}-400 border hover:border-${secondary}-800`,
    ...(cVarient &&
      cVarient?.length === 2 && {
        custom: `text-${cVarient[0]} hover:text-${cVarient[1]} hover:border-${cVarient[0]} border border-${cVarient[1]}`,
      }),
  };

  let classes = `
    ${cVarient ? varientClass.custom : ""}
    ${varient ? varientClass[varient] : ""} ${className ? className : ""}`;

  return <Input className={`px-3 py-2 rounded-lg ${classes}`} {...props} />;
};
