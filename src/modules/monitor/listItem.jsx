import React from 'react';

export default (props)=>{
	const styles = require('./monitor.scss');

	return <div className={styles.listitem}>
	    <div className={styles.left}>
	      <img className={styles.head} src={props.head} onClick={props.toPatientIndex}/>
	    </div>
	    <div className={styles.right}>
	      <h2 className={styles.name} onClick={props.toPatientIndex}>{props.username}</h2>
	      <div className={styles.monarea} onClick={ props.toDetail }>
	        <div className={styles.p}><span className={styles.time}>13:11</span><span className={styles.date}>今天</span><em className={[styles.check,styles.tobecheck].join(' ')}>待阅</em></div>
	        <div className={styles.content}>内容内容内 sdfsdf 容内容sdfsdfsdfsdfsd柘城内容</div>
	      </div>
	    </div>
	  </div>
}