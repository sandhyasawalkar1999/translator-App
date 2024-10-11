import React from "react";
import "./translator.css";
import { useState } from "react";
import Languages from "./Languages";
import { selectOptions } from "./code";
import axios from "axios";

const Translator = () => {

  const [sourceLang , setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const[sourceText,setSourceTxt] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate= async() =>{

   
    

    // const url = "https://text-translator2.p.rapidapi.com/translate";
    // const apiKey = '1afec91c3dmshb956f0173b6059bp1e9352jsnbc88fae80cb2';
    // const header ={
    //      'x-rapidapi-key':apiKey,
    //      'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
    // };

    //  const data ={
    //   source_language :sourceLang,
    //   target_language : targetLang,
    //   text : sourceText,
    // };

    // try {
    //   const response = await axios.post(url,data,{header});
    //   const result = response.data;
    //   if(result.status === "success"){

    //     let translatedText = result.data.translatedText;
    //     setTranslatedText(translatedText);
    //   }
    
    // } catch (error) {
    //   console.error(error);
    //   alert("error occurred while tranlation ",error)
    // }


    const url = 'https://text-translator2.p.rapidapi.com/translate';
const data = new FormData();
data.append('source_language', sourceLang);
data.append('target_language', targetLang);
data.append('text', sourceText);

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '1afec91c3dmshb956f0173b6059bp1e9352jsnbc88fae80cb2',
		'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
   setTranslatedText(result.data.translatedText);
} catch (error) {
	console.error(error);
}
  };


  return (
    <>
    <div>
    </div>
      <div className="head">
        <div className="main">
          <h1>Translator App</h1>
          <div className="input">
            <div>
              {/* <select className="input">
                <option vallue="English">English</option>
                <option vallue="Hindi">Hindi</option>
                <option vallue="Marathi">Marathi</option>
              </select> */}
                      <Languages id="source" languages={selectOptions} onChange={(e) => setSourceLang(e.target.value)} value={sourceLang} />

                {/* <input
                  type="text"
                  className="input input-text"
                  placeholder="Enter text here"
                /> */}
                <textarea  className="input input-text" value ={sourceText} onChange={(e) => setSourceTxt(e.target.value)}placeholder="Enter your Text" />
            </div>
            <div>
              {/* <select className="input">
                <option vallue="English">English</option>
                <option vallue="Hindi">Hindi</option>
                <option vallue="Marathi">Marathi</option>
              </select> */}
              <Languages id="target" languages={selectOptions} onChange={(e) => setTargetLang(e.target.value)} value={targetLang} />

                {/* <input
                  type="text"
                  className="input input-text"
                  placeholder="Enter text here"
                /> */}
               
                <textarea className="input input-text" value={translatedText}   />
                
            </div>
        
          </div>
          <button className="translate-btn" onClick={handleTranslate}>Translate</button>
        </div>
      </div>
    </>
  );
};

export default Translator;
