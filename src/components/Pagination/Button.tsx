import clsx from "clsx";
import styles from "./pagination.module.scss";

export default function Button({ value, active = false, children, changePage, ...rest }: { value: number; active?: boolean; changePage: (page: number) => void } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(styles.button, active && styles.active)} disabled={active} onClick={() => changePage(value)} type="button" {...rest}>{children || value}</button>
  );
}
