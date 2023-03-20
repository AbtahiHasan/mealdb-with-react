import { useGlobalContext } from "../context"
export default function Search () {
    const {query, setQuery} = useGlobalContext()
    return (
        <>
            <section className="search">
                <form onSubmit={e => e.preventDefault()}>
                    <input value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Search Here" />
                </form>
            </section>
        </>
    )
}