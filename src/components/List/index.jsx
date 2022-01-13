import "./index.css"

export default function List({ users, isFirstTime, isLoading, errorMessage }) {

    return (
        <div className="container">
            {
                isFirstTime ? <h2>Enter Name to Search</h2> :
                    isLoading ? <h2>Loading......</h2> :
                    errorMessage !== '' ? <h2>Network Error</h2> :
                            users.map((user) => {
                                return (
                                    <div key={user.id} className="card">
                                        <a rel="noreferrer" href={user.html_url}>
                                            <img alt="head_portrait" src={user.avatar_url} style={{ width: '120px' }} />
                                        </a>
                                        <p className="card-text">{user.login}</p>
                                    </div>
                                )
                            })
            } 
        </div>
    )
}