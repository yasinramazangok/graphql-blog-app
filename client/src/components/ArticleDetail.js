import React from "react";
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams} from "react-router-dom";

const GET_ARTICLE = gql`
    query getArticle($id: ID!) {
        getArticle(id: $id) {
            id,
            title,
            content
        }}
`;

const DELETE_ARTICLE = gql`
    mutation deleteArticle($id: ID!) {
        deleteArticle(id: $id)
    }
`;

export default function ArticleDetail(props) {

    // let id = props.match.params.id;
    const { id } = useParams();

    const { data, loading, error } = useQuery(GET_ARTICLE, {
        variables: { id }
    });

    const [deleteArticle] = useMutation(DELETE_ARTICLE);

    const onClick=() => {
        deleteArticle({ variables: { id } });
        window.location = '/';
    };

    return (
        <div>
            {
                data && (
                    <div className="detail content">
                        <h2>{data.getArticle.title}</h2>
                        <div className="content">
                            {data.getArticle.content}
                        </div>
                        <a className="delete" onClick={onClick}>Makaleyi Sil</a>
                    </div>
                )
            }
        </div>
    );
}