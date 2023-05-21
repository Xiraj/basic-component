import React from 'react'
import mask from '../assets/Logo.png'
import products from '../assets/Products.png'
import users from '../assets/Users.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside class="w-64" aria-label="Sidebar">
    <div class="px-3 py-[400.4px] overflow-y bg-gray-50 dark:bg-darkBlue">
            <img src={mask} class="relative bottom-[380px] w-[32px] h-[32px] left-[10px]" alt="Admin" />
            <div>
                <h2 class="relative bottom-[350px] left-[10px] self-center text-[20px] font-semibold whitespace-nowrap dark:text-white">PAGES</h2>
            </div>
        <ul class="space-y-2 absolute top-[120px]">
            <li>
                <Link to="/Products" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-hoverBlue">
                    <img src={products} class="w-[24px] h-[24px]" />
                    <span class="ml-3">Products</span>
                </Link>
            </li>
        </ul>
        <ul class="space-y-2 absolute top-[180px]">
            <li>
                <Link to="/Users" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-hoverBlue">
                    <img src={users} class="w-[24px] h-[24px]" />
                    <span class="ml-3">Users</span>
                </Link>
            </li>
        </ul>
    </div>
</aside>
  )
}

export default SideBar