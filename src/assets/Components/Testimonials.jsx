import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row max-w-2xl">
                <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
                    <p> Esther creates truly beautiful components,
                        you should definitely work with her. The end
                        results are always worth it. A great find!
                    </p>
                    <div className='mt-5 flex items-center'>
                        <img src='https://picsum.photos/60/60' className='rounded-full'/>
                        <div className="ml-3">
                            <h3 className="font-semibold"> Lana Del Rey </h3>
                            <p className="text-gray-500"> Singer/songwriter </p>
                            <div className="flex text-yellow-400 mt-1">
                                ★ ★ ★ ★ ★
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
                    <p> Esther creates truly beautiful components,
                        you should definitely work with her. The end
                        results are always worth it. A great find!
                    </p>
                    <div className='mt-5 flex items-center'>
                        <img src='https://picsum.photos/60/60' className='rounded-full'/>
                        <div className="ml-3">
                            <h3 className="font-semibold"> Ariel </h3>
                            <p className="text-gray-500"> Mermaid @ Disney </p>
                            <div className="flex text-yellow-400 mt-1">
                                ★ ★ ★ ★ ☆
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Testimonials
