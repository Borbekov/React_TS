import ReactPaginate from 'react-paginate';
import s from './paginate.module.css'

type PropsType = {
  pageRangeDisplayed: number,
  pageCount: number | null,
  setCurrentPage: (page: number) => void
}

type PageType = {
  selected: number
}

const Paginate: React.FC<PropsType> = (props) => {
// const Paginate = (props) => {

  const handlePageClick = (page: PageType) => {
    props.setCurrentPage(page.selected + 1)
  }

  return (
    <ReactPaginate
      className={s.paginate}
      onPageChange={handlePageClick}
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={props.pageCount as number}
      nextLabel=">"
      previousLabel="<"
    />
  )
}

export default Paginate;