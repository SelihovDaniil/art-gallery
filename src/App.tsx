import { useState } from "react";
import Container from "@/components/Container";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { usePaintings } from "@/hooks/paintings";

export default function App() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, totalPages } = usePaintings(page, 6, name);

  return (
    <Container>
      <Header />
      <Search
        value={name}
        setValue={(val) => {
          setName(val);
          setPage(1);
        }}
      />
      <Grid data={data} isError={isError} isLoading={isLoading} query={name} />
      <Pagination totalPages={totalPages} currentPage={page} changePage={setPage} />
    </Container>
  );
}
