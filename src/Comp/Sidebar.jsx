import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-1/7 bg-l-gr h-screen border-r-1 border-dashed border-gray-300 fixed'>
        <div>
            <img src="/public/logo.png" alt=""/>
            <p className=''>v9.6.2</p>
        </div>
    </aside>
  )
}

export default Sidebar