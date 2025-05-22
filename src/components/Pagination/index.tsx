import { Arrow } from "../Icons";
import Button from "./Button";
import styles from "./pagination.module.scss";

export default function Pagination({ totalPages, currentPage, changePage }: { totalPages: number; currentPage: number; changePage: (page: number) => void }) {
  if (totalPages < 2)
    return null;

  return (
    <nav className={styles.pagination}>
      <Button disabled={currentPage === 1} value={currentPage - 1} changePage={changePage}><Arrow style={{ transform: "rotateZ(180deg)" }} /></Button>
      <div className={styles.wrapper}>
        <Button active={currentPage === 1} value={1} changePage={changePage}>1</Button>
        {currentPage > 3 && <span className={styles.dots}>...</span>}
        {totalPages > 2 && (
          <>
            {currentPage > 2 && <Button value={currentPage - 1} changePage={changePage}>{currentPage - 1}</Button>}
            {currentPage > 1 && totalPages - currentPage >= 1 && <Button active value={currentPage} changePage={changePage}>{currentPage}</Button>}
            {totalPages - currentPage > 1 && <Button value={currentPage + 1} changePage={changePage}>{currentPage + 1}</Button>}
          </>
        )}
        {totalPages - currentPage > 2 && <span className={styles.dots}>...</span>}
        <Button active={currentPage === totalPages} value={totalPages} changePage={changePage}>{totalPages}</Button>
      </div>
      <Button disabled={currentPage === totalPages} value={currentPage + 1} changePage={changePage}><Arrow /></Button>
    </nav>
  );
}
