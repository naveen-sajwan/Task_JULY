import React,{ useState,useEffect,useCallback } from 'react'

const StringGenerator = () => {

	const [randomString, setRandomString] = useState("");

	// Generate Random String
	const GenerateString = useCallback(()=>{
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
		let result = "";

		for(let i = 0; i < 20; i++){
			const randomIndex = Math.floor(Math.random()*characters.length);
			result += characters[randomIndex];
		}
		setRandomString(result);
	})

	useEffect(() => {
		GenerateString();
	}, [])

	return (
		<div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
			<div className="bg-white w-full max-w-md rounded-lg p-6">
				<h1 className="font-bold text-2xl text-center mb-4">Random String Generator</h1>
				<div className="bg-sky-100 rounded-md p-4 text-center mb-4">
					{randomString}
				</div>
				<div className="flex justify-center">
					<button 
						className="bg-black font-bold text-white rounded-md px-5 py-2"
						onClick={GenerateString}
					>
						Random-String
					</button>
				</div>
			</div>			
		</div>
	)
}

export default StringGenerator