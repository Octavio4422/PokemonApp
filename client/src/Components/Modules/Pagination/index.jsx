
export default function Pagination({ cardsPerPage, totalCards, paginate }){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pageNumbers.map((p) => {
            return (
              <button onClick={() => paginate(p)} key={p}>
                {p}
              </button>
            );
          })}
        </ul>
      </nav>
    );
}