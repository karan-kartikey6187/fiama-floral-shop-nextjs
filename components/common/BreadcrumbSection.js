import { Container, Nav } from 'react-bootstrap'
import { toTitleCase } from '../../helper/utils'
import Link from 'next/link'

export const BreadcrumbSection = ({ currentPage, hide = false, slug, showSlug = false }) => {
    return (
        <section className={`breadcrumb-section bg-light-grey ${hide ? "d-none" : "d-block"}`}>
            <Container className="py-6 d-flex justify-content-start align-items-center flex-column">
                <h1 className="fs-32 fw-bolder lh-sm text-black dark-mode-text">{currentPage}</h1>
                <Nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item d-flex justify-content-center align-items-start"><Link href="/" className="p-0 text-decoration-none nav-link fs-14 fw-medium text-dark dark-mode-text">Home</Link></li>
                        {showSlug ? 
                        <Link href='/shop' className="breadcrumb-item active fs-14 fw-medium text-dark dark-mode-text text-decoration-none" aria-current="page">{currentPage}</Link>
                        :
                        <li className="breadcrumb-item active fs-14 fw-medium text-dark dark-mode-text" aria-current="page">{currentPage}</li>
                        }
                        {showSlug && Array.isArray(slug)
                            ? slug.map((item, index) => (
                            index === slug.length - 1 ?
                                ( <li 
                                key={index} 
                                className="breadcrumb-item active fs-14 fw-medium text-dark dark-mode-text" 
                                aria-current="page" > {toTitleCase(item)} </li> )
                                : 
                                ( 
                                <Link 
                                    href={`/shop/${item}`} 
                                    key={index} 
                                    className="breadcrumb-item active fs-14 fw-medium text-dark dark-mode-text text-decoration-none" 
                                    aria-current="page" > 
                                    {toTitleCase(item)}
                                </Link>)
                            ))
                            :
                            showSlug ?
                                <li 
                                className="breadcrumb-item active fs-14 fw-medium text-dark dark-mode-text"
                                aria-current="page"
                                >{slug ? toTitleCase(slug) : "Beauty"}
                                </li> : " "
                        }
                    </ol>
                </Nav>
            </Container>
        </section>
    )
}
