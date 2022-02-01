const Card = ({ repo, loading }) => {
    if (loading) {
        return <h2>Loading....</h2>;
    }
    return (
        <div className="card">
            <a href={repo.html_url}>
                <h6>{repo.name}</h6>
            </a>
            <p>{repo.description}</p>
        </div>
    );
};

export default Card;
