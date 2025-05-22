import clsx from "clsx";
import styles from "./button.module.scss";

export default function Button({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={clsx(styles.button, className)} {...rest}>{children}</button>;
}
