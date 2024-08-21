import { useEffect, useState } from "react";
import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";
import { fetchAllBook } from "../services/api.service";

const BookPage = () => {
  const [dataBook, setDataBook] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(
    (current, pageSize) => {
      loadBook();
    },
    [current, pageSize]
  );

  const loadBook = async () => {
    const res = await fetchAllBook(current, pageSize);
    if (res.data) {
      setDataBook(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <div className="p-5">
      <BookForm loadBook={loadBook} />

      <BookTable
        dataBook={dataBook}
        setDataBook={setDataBook}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        loadBook={loadBook}
      />
    </div>
  );
};

export default BookPage;
