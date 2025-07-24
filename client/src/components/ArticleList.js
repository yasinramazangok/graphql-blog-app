import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_ARTICLES = gql`
{
    getArticles {
        id
        title
        content
    }
}
`

export default function ArticleList(){

    const { data, loading, error } = useQuery(GET_ARTICLES);
    console.log(data);

    let articleTemp;

    if (loading) {
        articleTemp = <p>Makaleler yükleniyor...</p>
    }else if (data) {
        articleTemp = data.getArticles.map(article => {
            return (
                <div className="articles" key={article.id}> 
                    <Link to={`/article/${article.id}`}>
                    <h3>{article.title}</h3>
                    </Link>
                </div>
            )
        })
    }

    console.log(data);
    return(
        <div>
            {articleTemp}
        </div>
    )
}