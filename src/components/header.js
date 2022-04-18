export default function Header() {
    return (
        <div>
            <header className="flex h-11 bg-gradient-to-r from-purple-900 to bg-purple-500 text-white justify-between">
                <div className="flex">
                    <img src="/images/face.png" className="h-6 ml-4 mt-auto mb-auto"></img>
                    <p className="ml-1 text-lg mt-auto mb-auto font-bold">Meme Generator</p>
                </div>
                <div className="mt-auto mb-auto mr-9">
                    <p className="text-xs  place place-items-end">React Course-Project 3</p>
                </div>

            </header>
        </div>


    )
}