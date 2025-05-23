import type { PaintingExtended } from "@/types";
import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import styles from "./grid.module.scss";

export default function Grid({ data, isLoading, isError, query }: { data: PaintingExtended[]; isLoading: boolean; isError: boolean; query: string }) {
  if (isError) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Something went wrong :(
        </h3>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.grid}>{[...Array.from({ length: 6 })].map((_el, i) => <Skeleton key={i} />)}</div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          No matches for&nbsp;
          <span className={styles.query}>{query}</span>
        </h3>
        <p className={styles.description}>Please try again with a different spelling or keywords.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {data.map(el => (
          <Card key={el.id} year={el.created} location={el.location} author={el.author} title={el.name} image={`${import.meta.env.VITE_API_URL}/${el.imageUrl}`} />
        ))}
      </div>
    </div>
  );
}
