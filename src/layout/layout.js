import React from 'react'
import styles from './layout.module.css';
import Table from '../component/log-table/table/table'
import State from '../component/process-state/slayout/slayout'

function layout(){
    return(
        <div className={styles.all_layout}>

            <div className={styles.state_layout}>
                <State/>
            </div>

            <div className={styles.table_layout}>
                <Table/>
            </div>
            
        </div>
    );
}

export default layout;