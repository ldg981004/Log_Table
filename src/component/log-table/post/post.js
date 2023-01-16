import React from 'react';
import styles from './post.module.css';

const Post = ({ props }) => {
    const DisplayData = props.map((item) => {
            return(
                <tr className={styles.table_tr_2} key={item.ID}>
                    <td className={styles.table_td}>{item.ID}</td>
                    <td className={styles.table_td}>{item.LOGLEVEL}</td>
                    <td className={styles.table_td}>{item.LOGDATETIME}</td>
                    <td className={styles.table_td}>{item.LOGGER}</td>
                    <td className={styles.table_td}>{item.MESSAGE}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <tr className={styles.table_tr_1}>
                            <th className={styles.table_thead_1}>Index</th>
                            <th className={styles.table_thead_2}>Register Time</th>
                            <th className={styles.table_thead_3}>Run Time</th>
                            <th className={styles.table_thead_4}>End Time</th>
                            <th className={styles.table_thead_5}>State</th>
                        </tr>    
                    </thead>

                    <tbody>

                        {DisplayData}

                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Post;