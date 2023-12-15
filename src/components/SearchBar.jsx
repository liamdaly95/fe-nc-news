import {dropdown} from "../../css/SearchBar.module.css"

const SearchBar = ({ sort, setSort, order, setOrder, setSearchParams }) => {
    
    const sortRef = {created_at: "Date", comment_count: "Comments", votes: "Votes"}
  const orderRef = {
    created_at: { ASC: "Old - New", DESC: "New - Old" },
    comment_count: { ASC: "Low - High", DESC: "High - Low" },
    votes: { ASC: "Low - High", DESC: "High - Low" },
  };
  const handleSortChange = (event) => {
    setSort(event.target.value);
    setOrder("DESC")
    const sortParam = sortRef[event.target.value]
    setSearchParams({sort : sortParam , order: "DESC"})
  };
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
    const orderParam = event.target.value
    setSearchParams({sort: sortRef[sort] , order : orderParam})
  };

  return (
    <>
    <label>Sort
      <select className={dropdown} value={sort} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      </label>
      <label>by
      <select className={dropdown} value={order} onChange={handleOrderChange}>
        <option value="DESC">{orderRef[sort].DESC}</option>
        <option value="ASC">{orderRef[sort].ASC}</option>
      </select>
      </label>
    </>
  );
};

export default SearchBar;
