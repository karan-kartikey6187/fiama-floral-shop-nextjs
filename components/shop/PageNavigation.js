import { Image } from 'react-bootstrap'

export const PageNavigation = ({ currentPage,totalPages,onPageChange}) => {

    if (totalPages <= 1) {
        return null
    }

    const pageNumbers = []

    if (totalPages <= 5) {
        for (let page = 1; page <= totalPages; page++) {
            pageNumbers.push(page)
        }
    } else {

        pageNumbers.push(1)

        if (currentPage > 3) {
            pageNumbers.push("...")
        }

        if (currentPage <= 2) {
            pageNumbers.push(2)
            pageNumbers.push(3)
        } else if (currentPage >= totalPages - 1) {
            pageNumbers.push(totalPages - 2)
            pageNumbers.push(totalPages - 1)
        } else {
            pageNumbers.push(currentPage - 1)
            pageNumbers.push(currentPage)
            pageNumbers.push(currentPage + 1)
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push("...")
        }

        pageNumbers.push(totalPages)
    }

    return (
        <section className="page-navigation mt-6 mb-6 mb-lg-7">
            <div className="container d-flex justify-content-center gap-2 align-items-center flex-wrap">
                <div
                    className={`icon--50px-icon rounded rounded-circle bg-light-grey d-flex justify-content-center align-items-center ${
                        currentPage === 1 ? "opacity-50" : ""
                    }`}
                    onClick={() => {
                        if (currentPage > 1) {
                            onPageChange(currentPage - 1)
                        }
                    }}
                >
                    <Image
                        src='/icons/angle-left-solid-full.svg'
                        alt="Previous"
                        className="icon--20px"
                    />
                </div>

                {pageNumbers.map((page, index) => {

                    if (page === "...") {
                        return (
                            <div
                                key={`dots-${index}`}
                                className="icon--50px-icon rounded rounded-circle d-flex justify-content-center align-items-center text-light-grey bg-light-grey"
                            >
                                ...
                            </div>
                        )
                    }

                    return (
                        <div
                            key={page}
                            className={`icon--50px-icon rounded rounded-circle d-flex justify-content-center align-items-center ${
                                currentPage === page
                                    ? "bg-primary text-white"
                                    : "text-light-grey bg-light-grey"
                            }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </div>
                    )
                })}

                <div
                    className={`icon--50px-icon rounded rounded-circle bg-light-grey d-flex justify-content-center align-items-center ${
                        currentPage === totalPages ? "opacity-50" : ""
                    }`}
                    onClick={() => {
                        if (currentPage < totalPages) {
                            onPageChange(currentPage + 1)
                        }
                    }}
                >
                    <Image
                        src='/icons/angle-right-solid-full.svg'
                        alt="Next"
                        className="icon--20px"
                    />
                </div>
            </div>
        </section>
    )
}