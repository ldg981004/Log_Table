import React from "react";
import styles from './pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, curpage }) => {
    const pageNumbers = [];
    const lastPage = Math.ceil(totalPosts / postsPerPage);
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        // Math.ceil => 소수점 이하를 반올림
      pageNumbers.push(i);
    }
    return (
      <div>
        
        <nav>
          <div className={styles.pageui}>
          <button className={styles.pagebutton} onClick={() => paginate(curpage - 1)} disabled={curpage === 1}>이전</button>
            {pageNumbers.map((number) => (
              <div aria-current={curpage === number ? "page" : null}  key={number} className={styles.pageli} style={{cursor:"pointer"}}>
                <div onClick={() => paginate(number)}  className={styles.pagespan}>
                  {number}
                </div>
              </div>
            ))}
            <button className={styles.pagebutton} onClick={() => paginate(curpage + 1)} disabled={curpage === lastPage}>다음</button>
          </div>
        </nav>
        
      </div>
    );
  };
  
  export default Pagination;