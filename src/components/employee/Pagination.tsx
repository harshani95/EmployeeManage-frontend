

// //Pagination
// const[currentPage, setCurrentPage] = useState(1);
// const recordsPerPage = 5;

// // const lastIndex = currentPage * recordsPerPage;
// // const firstIndex = lastIndex - recordsPerPage; 
// // const records = employees.slice(firstIndex, lastIndex);
//  const nPages = Math.ceil(employees.length / recordsPerPage);
//  //const numbers = [...Array(npage + 1).keys()].slice(1);
//  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

//  const goToNextPage = () => {
//     if(currentPage !== nPages) 
//         setCurrentPage(currentPage + 1)
// }

// const goToPrevPage = () => {
// if(currentPage !== 1) 
//     setCurrentPage(currentPage - 1)
// }


// <nav aria-label="...">
//                 <ul className="pagination">
//                      <li className="page-item">
//                          <a className="page-link" onClick={goToPrevPage}>Previous</a>
//                     </li>

//                     {pageNumbers.map(pgNumber => (
//                         <li key={pgNumber} className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >
//                              <a onClick={() => setCurrentPage(pgNumber)}  className='page-link' href='#'>{pgNumber}</a>
//                         </li>
//                     ))}
            
//                     <li className="page-item"><a className="page-link" href="#" onClick={goToNextPage}>Next</a></li>
//                 </ul>
//             </nav>