
export default function card({cardObj}) {
    return (
        <div className="bg-pink-100  bg-opacity-50 mx-6 my-6 flex justify-around py-3 rounded-2xl items-center">
            <div >
                <h1>{cardObj.title}</h1>
                <p>{cardObj.text}</p>
            </div>
            <box-icon name='phone-outgoing' type='solid'></box-icon>
        </div>
    );
}