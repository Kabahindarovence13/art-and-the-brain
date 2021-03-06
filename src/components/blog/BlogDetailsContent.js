import { Link } from "react-router-dom";
// import Comments from "./Comments";
// import CommentForm from "./CommentForm";
import BlogSidebar from "./BlogSidebar";
import SEO from "../common/SEO";

export default function BlogDetailsContent({ data }) {
    return (
        <div className="row justify-content-center justify-content-md-between">

            <SEO title={data.title} />

            {/* Blog Sidebar */}
            <div className="col-12 col-sm-8 col-md-5 col-lg-4 mb-5 mb-md-0">
                <BlogSidebar />
            </div>

            <div className="col-12 col-md-7">
                <img className="rounded mb-4 mb-lg-5 w-100" src={`${process.env.PUBLIC_URL}/${data.image}`} alt={data.title} />
                <div className="post-date mb-2">{data.date}</div>
                <h1 className="mb-3">{data.title}</h1>
                {data.body.map((value, index) => {
                    return(
                        <div key={index} dangerouslySetInnerHTML={{__html: value}} />
                    )
                })}

                <div className="post-tag-share-button d-sm-flex align-items-center justify-content-between my-5">

                    {/* Post Tag */}
                    <div className="post-tag pt-3">
                        <ul className="d-flex align-items-center ps-0 list-unstyled mb-0">
                            {data.tags.map((ele, index) => {
                                return (
                                    <li key={index} >
                                        <Link className="btn btn-info btn-sm me-2 rounded-pill" to="#" >{ele}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    {/* Social Share Button */}
                    <div className="share-button pt-3">
                        <a className="ms-2" href="https://www.facebook.com/Art-and-The-Brain-112807407997528" target="_blank" rel="noreferrer" >
                            <i className="bi bi-facebook" />
                        </a>
                        <a className="ms-2" href="https://mobile.twitter.com/Artandthebrain2" target="_blank" rel="noreferrer" >
                            <i className="bi bi-twitter" />
                        </a>
                    </div>
                </div>

                {/* Comments */}
                {/* <Comments /> */}
                
                {/* Comment Form */}
                {/* <CommentForm /> */}
            </div>
        </div>
    )
}