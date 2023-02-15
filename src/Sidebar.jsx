import React from "react";
import { Icon } from "@iconify/react";

const listCategory = [
    {name: 'Action'},
    {name: 'Detectives'},
    {name: 'Fantasy'},
    {name: 'Space'},
    {name: 'Blockbasters'},
    {name: 'Shitty but i love it'},
    {name: 'My Top 100'},
]

const Sidebar = ({ onClick, searchValue, onChange }) => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="mt-2 mx-3">
                <h1 className="font-bold text-red-500 text-2xl">Movielist</h1>
                <div className="h-8 w-full mt-3 mb-3 flex justify-between items-center border rounded-md py-1 px-1 relative">
                    <input type="text" className="w-full h-full outline-none focus:outline-none bg-black px-2" placeholder="Search Movie" value={searchValue} onChange={onChange} />
                    <div className="cursor-pointer" onClick={onClick}>
                        <Icon icon="material-symbols:search" />
                    </div>
                </div>
                <div className="w-full border-b border-t py-3">
                    <div className="w-full flex gap-4 items-center px-2 py-2 rounded-md bg-gray-600 cursor-pointer hover:text-red-500">
                        <Icon icon="heroicons:home" width="20" />
                        <p className="text-sm">Home</p>
                    </div>
                    <div className="w-full flex gap-4 items-center px-2 py-2 cursor-pointer hover:text-red-500">
                    <Icon icon="ic:outline-library-add" width="20" />
                    <p className="text-sm">Library</p>
                    </div>
                    <div className="w-full flex justify-between items-center cursor-pointer">
                        <div className="w-full flex gap-4 items-center px-2 py-2 hover:text-red-500">
                            <Icon icon="icon-park-outline:people" width="20"  />
                            <p className="text-sm">Friend</p>
                        </div>
                        <div className="px-2 py-1 bg-white rounded-full">
                            <p className="text-xs text-black">1</p>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-3">
                <p className="text-gray-400 font-medium text-base uppercase px-3">My Lists</p>
                {
                    listCategory?.length > 0 ? (
                        <div className="my-2">
                            {
                                listCategory.map((item) => {
                                    return (
                                        <div className="w-full flex gap-4 items-center px-2 py-2 cursor-pointer">
                                            <div className="w-6 h-6 bg-gray-500 rounded-md">

                                            </div>
                                            <p className="text-sm hover:text-red-500">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className="w-full flex gap-4 items-center px-2 py-2">
                            <p className="text-sm">No List</p>
                        </div>
                    )
                }
                <button className="w-full h-full bg-red-500 rounded-md py-2 text-black text-sm font-bold hover:bg-white transition duration-300">
                    Create list
                </button>
                </div>
            </div>

            <div className="p-3 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-500">

                    </div>
                    <div className="text-white">
                        <p className="text-sm font-bold">Chan Geme</p>
                        <p className="text-xs">@changeme</p>
                    </div>
                </div>
                <div>
                    <button className="mt-2">
                        <Icon icon="mdi:dots-horizontal" width="20" />
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default Sidebar;