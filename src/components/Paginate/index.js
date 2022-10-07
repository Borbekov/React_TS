import ReactPaginate from 'react-paginate';
import s from './paginate.module.css'

const Paginate = (props) => {

  const handlePageClick = (page) => {
    props.setCurrentPage(page.selected + 1)
  }

  return (
    <ReactPaginate
      className={s.paginate}
      onPageChange={handlePageClick}
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={props.pageCount}
      nextLabel=">"
      previousLabel="<"
    />
  )
}

export default Paginate;