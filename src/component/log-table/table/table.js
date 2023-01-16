import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "../post/post";
import Dummy from '../data/data.json';
import Pagination from '../pagination/pagination'
import styles from './table.module.css';

function Table(){

    const [data, setDatas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 => 1 페이지
    const [postPerPage, setPostsPerPage] = useState(7); // 페이지당 포스트 개수 => 5개의 데이터만 보여줌

    var log_data = Dummy.logs;
    log_data = log_data.sort((a,b) => b.ID-a.ID);
    // json 데이터 내림차순 정렬

    useEffect(() => {
        setDatas(log_data)
    },[]);

    const indexOfLast = currentPage * postPerPage; // 마지막 인덱스 => 1 * 5 해서 5번까지
    const indexOfFirst = indexOfLast - postPerPage; // 첫번째 인덱스 => 마지막 인덱스에서 페이지당 포스트 개수를 뺌
    const currentPosts = (data) => {
    let currentPosts = 0;
    currentPosts = data.slice(indexOfFirst, indexOfLast);
    // 현재 페이지의 데이터는
    // slice : 배열의 0번째부터 마지막 인덱스 - 1 까지 새로 만들어 줌
    return currentPosts;
  };

    return(
        <div>
            <div>
                <label className={styles.lb_title}>Process Log</label>
            </div>
            
            <Post props={currentPosts(data)}/>
            {/*현재 페이지의 데이터만 보여줌*/}
            <div className={styles.footer}>
                <Pagination
                    postsPerPage={postPerPage}
                    curpage={currentPage}
                    totalPosts={data.length}
                    paginate={setCurrentPage}>
                    {/*한 페이지에 얼마나 많은 데이터를 보여줄지*/}
                    {/*현재 페이지가 몇 페이지 인지*/}
                    {/*전체 페이지는 몇 페이지 인지*/}
                    {/*현재 페이지를 어떻게 설정할 것인지*/}
                </Pagination>
            </div>
        </div>
    );

}

export default Table;