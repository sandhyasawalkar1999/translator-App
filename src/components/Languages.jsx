import React from 'react'

const languages = ({id,languages,onChange,value}) => {
  return (
    <div>
        <select name={id} id={id} onChange={onChange} value={value} className="input">
            {
                Object.entries(languages).map(([langName,langCode])=>{

                    return (
                        <option key={langCode}  value={langCode}>{langName}</option>
                    )

                })
            }
        </select>
    </div>
  )
}

export default languages