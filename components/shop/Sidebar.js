'use client'
import { getCategory } from '@/services/services'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'

export const Sidebar = () => {

    const [categories, setCategories] = useState()

     const pathname = usePathname()

    const fetchCategories = async () => {
        try {

            const response = await getCategory()

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }
            setCategories(response.data)
        } catch (error) {
            if (error.response.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (        
        <div className='px-2'>
            <p className='m-0 p-0 pb-1 mt-0 fs-4 fw-medium border-bottom mb-3'>Categories</p>

            {categories?.map((category, index) => {

                const isActive = pathname === `/shop/${category.slug}`

                return (
                    <ListGroup variant="flush" key={index} className='category-list'>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <Link href={"/shop/" + category.slug}  className={`text-decoration-none nav-link ${isActive ? 'active' : ''}`}>{category.name}</Link>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })}
        </div>
    )
}
