const Pagination = ({ pages, itemsPerPage, currentPage, onPageChange }) => {
    const pageAmount = Math.ceil(pages / itemsPerPage);

    const nextPage = (pageIdx) => {
        const newPageIdx = pageIdx >= pageAmount ? pageAmount : pageIdx + 1;
        onPageChange(newPageIdx);
    };

    const prevPage = (pageIdx) => {
        const newPageIdx = pageIdx <= 1 ? 1 : pageIdx - 1;
        onPageChange(newPageIdx);
    };

    return null;

    // return (
    //     <div className="btn-group">
    //         <button
    //             className="btn-outline btn-secondary btn enabled:cursor-pointer disabled:bg-[#e9ecef] disabled:text-black/70"
    //             disabled={currentPage <= 1}
    //             onClick={() => prevPage(currentPage)}
    //         >
    //             «
    //         </button>
    //         {[...Array(pageAmount)].map((_, index) => (
    //             <button
    //                 className={`btn-outline btn-secondary btn ${
    //                     index + 1 === currentPage ? "btn-active" : ""
    //                 }`}
    //                 key={index}
    //                 onClick={() => onPageChange(index + 1)}
    //             >
    //                 {index + 1}
    //             </button>
    //         ))}
    //         <button
    //             className="btn-outline btn-secondary btn"
    //             onClick={() => nextPage(currentPage)}
    //         >
    //             »
    //         </button>
    //     </div>
    // );
};

export default Pagination;
