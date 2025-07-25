import React,{useState} from 'react';
import axios from "axios";

const Languages = [
	{code:"en",name:"English"},
	{code:"hi",name:"Hindi"},
	{code:"es",name:"Spanish"},
	{code:"ja",name:"Japanese"},
	{code:"zh",name:"Chinese"},
	{code:"fr",name:"French"},
	{code:"de",name:"German"},
	{code:"bho",name:"Bhojpuri"},
];

const TranslateNew = () => {
	const [text,setText] = useState("");
	const [lang, setLang] = useState("hi");
	const [loading, setLoading]= useState(false);
	const [translate, setTranslate] = useState("")
	

	const handleTanslate = async(e)=>{
		e.preventDefault()
		setLoading(true)
		try{
			const config = {
				method: 'POST',
        		url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
        		params: {
          			from: "auto",
          			to: lang,
          			query: text
        		},
        		headers: {
          			'x-rapidapi-key': '10170fa55amsh0e6b116ca771e2bp16eb21jsn0867595e7bdc',
          			'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
          			'Content-Type': 'application/json'
        		}
			};
			const response = await axios.request(config);
			console.log(response.data)
			setTranslate(response.data.translation)
		}catch(error){
			console.error("Translation Error:", error);
      		setTranslate("Failed to translate.");
		}finally{
			setText("");
			setLoading(false);
		}
	}


	return (
		<div className="bg-white shadow-xl w-full p-6 rounded-lg max-w-xl">
		<h1 className="text-3xl font-bold mb-4">Text Translator</h1>
			<form className="mb-4">
				<textarea
				 	rows="5"
					className="border rounded-lg w-full p-3 mb-6"
					name="textarea"
					placeholder="please enter your text..."
					value={text}
					onChange={(e)=> setText(e.target.value)}
				/>
				<div className="flex items-center gap-4 mb-4">
					<select
					    className="border rounded-lg p-2"
						value={lang}
						onChange={(e)=> setLang(e.target.value)}
					>
						{Languages.map((bhasha)=>(
							<option key={bhasha.code} value={bhasha.code}>
								{bhasha.name}
							</option>
							))}
					</select>
					<button className="bg-red-600 px-5 py-2 text-center text-white hover:bg-blue-500 transition ease-in-out duration-700 rounded-md  " onClick={handleTanslate}>
					{loading?<div className="flex items-center gap-4">
						<span className="loader"></span> Translating...
					</div>:"Translate"
				}
					</button>	
				</div>
			</form>

			{translate && <div className="bg-sky-100 p-4 rounded-md">
				<strong>Translated Text :</strong>
				<p>{translate}</p>	
			</div>
			}

							
		</div>
	)
}

export default TranslateNew