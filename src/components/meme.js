import memesData from "./memesData";

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].tourist_profilepicture
        console.log(url);
    }
    return (
        <div>

            <div className=" pt-20 flex justify-center mx-11">
                <input type="text" className="text-sm rounded-md border-2 border-gray-400 p-1 w-1/2" placeholder="shut up" ></input>
                <input type="text" className="text-sm rounded-md border-2 border-gray-400 ml-6 p-1 w-1/2" placeholder="and take my money"></input>
            </div>
            <div className=" mt-6 flex justify-center" >
                <button onClick={getMemeImage} className="text-sm cursor-pointer rounded-md bg-gradient-to-r from-purple-900 to bg-purple-500 p-3 w-full text-center mx-11"><img src="/images/icon.png" alt="meme" className="mr-auto ml-auto h-5" /> </button>
            </div>
            <div className="mt-11">
                <img src="/images/meme.png" alt="jam" className=" px-11"></img>
            </div>

        </div>
    )
}

