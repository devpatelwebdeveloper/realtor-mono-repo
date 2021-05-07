import React from 'react'
import styles from "./SingleUsers.module.scss"

export default function SingleUser({name,value,changeInput}) {
    function camelize(str) {
        return str.replace(/\W+(.)/g, function(match, chr)
         {
              return chr.toUpperCase();
          });
      }
    const labelName=name.toLowerCase().replace(/ /g,"-")
    const inputName=camelize(name)
    return (
        <div>
            <label htmlFor={labelName} className={styles.label}>{name}</label>
                <input
                className={styles.input}
                  type="text"
                  name={inputName}
                  value={value}
                  onChange={changeInput}
                />  
        </div>
    )
}
