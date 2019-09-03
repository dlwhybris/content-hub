import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"
import Tags from "./tags";
import Author from "./author";


class Card extends React.Component {

    render() {
        const post = this.props.post
        const imgageWrapperStyle = {
            position: 'absolute',
          };
        return (


            <div className="rounded shadow-lg overflow-hidden bg-white border">
                <Link
                    to={`blog${post.fields.slug}`}
                >
                    <div className="pb-1/2 relative">
                       {/* Img works with a wrapper, default value is position:relative, overwritten this, object-cover is by default applied on the underlying image tag */}
                        <Img sizes={post.frontmatter.cover.childImageSharp.sizes} className="h-full w-full" style={imgageWrapperStyle}/>
                    </div>
                </Link>

                <div className="p-6">
                    <span className="text-gray-600 text-xs uppercase font-semibold tracking-wide">{post.frontmatter.date}&nbsp;-&nbsp;{post.timeToRead}&nbsp;min read</span>
                    <Link
                        to={`blog${post.fields.slug}`}
                    >
                        <h3 className="text-indigo-800 font-semibold text-lg leading-tight mt-1">{post.frontmatter.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-base text-xs mt-4  h-auto md:h-32 xl:h-24"
                        dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                        }}
                    />
                    <Author author={post.frontmatter.author} />

                    <Tags tags={post.frontmatter.tags} />
                </div>
            </div>
        )
    }
}

export default Card;