import { useState } from "react";
import { Close, Search as SearchIcon } from "@/components/Icons";
import styles from "./search.module.scss";

export default function Search({ placeholder, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.search}>
      <SearchIcon className={styles.icon_prepend} />
      <input value={value} onChange={e => setValue(e.target.value)} type="search" placeholder={placeholder} className={styles.input} {...rest} />
      {value && <button onClick={() => setValue("")} type="button" className={styles.icon_append}><Close /></button>}
    </div>
  );
}
