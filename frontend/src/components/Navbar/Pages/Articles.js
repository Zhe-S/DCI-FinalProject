import CreateArticle from "../../Articles/CreateArticle/CreateArticle";
import Article from "../../Articles/Article/Article";
import AllArticles from "../../Articles/AllArticles/AllArticles";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useJwt } from "react-jwt";
import Loading from "../../Loading/Loading";

const token = localStorage.getItem("food-token")

const Articles = () => {
    const { decodedToken} = useJwt(token);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticlesData();
    }, [])

    useEffect(() => {
       


    }, [articles])

    const doesUserHaveArticle = async (articleId) => {
        const getUrl = `http://localhost:3369/articles/userhasarticle/${articleId}`;
        const data = await fetch(getUrl, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("food-token") || ""
            }
        });
        const res = await data.text();
        // Wenn Article zu user gehört kommt "authorized"
        if (res !== "authorized") {
            return false;
        } else {
            return true;
        }
    }

    const getArticlesData = async () => {
        const data = await fetch("http://localhost:3369/articles");
        const res = await data.json();


        const updatedArray = await Promise.all(res.map(async article => {
            const canEdit = await doesUserHaveArticle(article._id);
            return { ...article, canEdit: canEdit }
        }))
        
        setArticles(updatedArray.reverse());
        setLoading(false);

    }
    /*   setTimeout(function () {
          setLoading(false);
      }, 2800); */


    const addNewArticle = async (newArticle) => {
       
        newArticle.userId = decodedToken.id;
        setLoading(true)
        const res = await fetch('http://localhost:3369/articles', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newArticle)
        });
        // TODO IF YOUR REALLY WANN RELOAD location.reload();

       
        const newArticleApi = await res.json();
        
        const upditArticle = [{ ...newArticleApi, canEdit: true }, ...articles]
        setArticles(upditArticle)

        setLoading(false);


    }

    const deleteArticle = async (id) => {
        const confirm = prompt("Please confirm the delete of the article with YES");
        if (confirm === "YES" || confirm === "yes") {
            const deleteUrl = `http://localhost:3369/articles/${id}`;
            const res = await fetch(deleteUrl, {
                method: 'DELETE',
                headers: {
                    'Authorization': localStorage.getItem("food-token") || ""
                }

            });
            if (res.status === 200) {
                alert("Article was deleted!")
            } else {
                alert("Some Error happened")
            }
        } else {
            alert("Please confirm correctly")
        }


        /*     const result = await res.json();
            if (result.err) {
                alert('This Article is not for you');
            }  */
        const articlesDeleteUpate = articles.filter(article => article._id !== id)
        setArticles(articlesDeleteUpate);


    }

    const updateArticle = async (id, artUpdate) => {
        const updateUrl = `http://localhost:3369/articles/${id}`;

        const res = await fetch(updateUrl, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("food-token") || ""
            },

            body: JSON.stringify(artUpdate)

        });


        const result = await res.json();
        if (result.err) {
            alert('This Article is not for you');
        }

        // const newArticleApi = await res.json();
        // console.log('newArticleApi', newArticleApi)
        // const ArticleUpdated = articles.map(article => article._id === id ? artUpdate : article);
        // setArticles(ArticleUpdated)
        // console.log("state set: ", articles)

        getArticlesData();
        setLoading(false);
    }

    /*     const getArticleById = (id) => {
     
            const article = articles.find(art => art._id === id);
            console.log('article => ', article)
            return article;
        } */


    return (
        <div >
            <Switch>
                <Route path='/articles'>
                    {loading ? <Loading /> : <AllArticles
                        data={articles}

                    />}
                </Route>

                <Route path='/create-article'>



                    {loading ? <Loading /> :
                        <CreateArticle
                            data={articles}
                            addNewArticle={addNewArticle}
                            deleteArticle={deleteArticle}
                            updateArticle={updateArticle}
                            doesUserHaveArticle={doesUserHaveArticle}
                        />
                    }

                </Route>


                <Route path='/article/:title' component={Article}>
                    {/*   <Article getArticleById={getArticleById} /> */}
                </Route>

            </Switch>


        </div>
    )
}
export default Articles;