import React from 'react'

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
            <label htmlFor={labelName} className="label">{name}</label>
                <input
                className="input"
                  type="text"
                  name={inputName}
                  value={value}
                  onChange={changeInput}
                />  
        </div>
    )
}
