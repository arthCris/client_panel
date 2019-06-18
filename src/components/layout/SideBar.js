import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <Link to="client/add">
                <button>ADD NEW</button>
            </Link>
        </div>
    )
}

export default SideBar
