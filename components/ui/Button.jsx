import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  const { children, link } = props;

  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
