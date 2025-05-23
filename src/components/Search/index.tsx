import { Close, Search as SearchIcon } from "@/components/Icons";
import styles from "./search.module.scss";

export default function Search({ value, setValue, ...rest }: { setValue: (value: string) => void } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchIcon className={styles.icon_prepend} />
        <input value={value} onChange={e => setValue(e.target.value)} type="search" placeholder="Painting Title" className={styles.input} {...rest} />
        {value && <button onClick={() => setValue("")} type="button" className={styles.icon_append}><Close /></button>}
      </div>
    </div>
  );
}
