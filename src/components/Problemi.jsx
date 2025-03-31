import React from 'react'

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]
 

const Problemi = () => {
  return (
        <div class="shadow-lg w-[90%] m-auto rounded-lg overflow-hidden mt-10  ">
            <table class="w-full table-fixed">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Category</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Edit/show</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                        <td class="py-4 px-6 border-b border-gray-200">Category</td>
                        <td class="py-4 px-6 border-b border-gray-200">New</td>
                        <td class="py-4 px-6 border-b border-gray-200"><button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 active:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:active:bg-blue-900">
                        Edit/show
                        </button></td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                        <td class="py-4 px-6 border-b border-gray-200">Category</td>
                        <td class="py-4 px-6 border-b border-gray-200">New</td>
                        <td class="py-4 px-6 border-b border-gray-200"><button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 active:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:active:bg-blue-900">
                        Edit/show
                        </button></td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                        <td class="py-4 px-6 border-b border-gray-200">category</td>
                        <td class="py-4 px-6 border-b border-gray-200">In Progress</td>
                        <td class="py-4 px-6 border-b border-gray-200"><button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 active:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:active:bg-blue-900">
                        Edit/show
                        </button></td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                        <td class="py-4 px-6 border-b border-gray-200">Category</td>
                        <td class="py-4 px-6 border-b border-gray-200">Executed</td>
                        <td class="py-4 px-6 border-b border-gray-200"><button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 active:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:active:bg-blue-900">
                        Edit/show
                        </button></td>  
                    </tr>
                </tbody>
            </table>
        </div>
        
  )
}

export default Problemi
