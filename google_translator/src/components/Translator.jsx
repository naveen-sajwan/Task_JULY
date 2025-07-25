import { useState } from "react";
import axios from "axios";

const LANGUAGES = [
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "hi", name: "Hindi" },
  { code: "de", name: "German" },
  { code: "ja", name: "Japanese" },
  { code: "zh", name: "Chinese" },
];

export default function Translator() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("hi");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {

      const options = {
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

      const response = await axios.request(options);
      console.log(response.data)
      setTranslated(response.data.translation);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslated("Failed to translate.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Text Translator</h1>

      <textarea
        rows="2"
        placeholder="Enter English text here..."
        className="w-full border rounded-lg p-3 text-sm mb-6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex items-center gap-4 mb-4">
        <select
          className="border rounded-lg p-2"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleTranslate}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      {translated && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <strong>Translated:</strong>
          <p className="mt-1">{translated}</p>
        </div>
      )}
    </div>
  );
}
