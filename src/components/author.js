import React from 'react';
import Img from "gatsby-image"


class Author extends React.Component {

    render() {
        const author = this.props.author
        if (!author) {
            return null
        }
        return (
            <section className="flex flex-row py-6">
                <Img
                    fluid={author.avatar.childImageSharp.fluid}
                    className="rounded-full w-16 h-16"
                />
                <div className="flex flex-col text-gray-800 font-semibold tracking-wide leading-normal pl-2">
                    <span>{author.name}</span>
                    <span className="text-gray-700 font-semibold text-xs tracking-wide leading-normal sm:visible ">{author.bio}</span>
                </div>
            </section>
        )
    }
}

export default Author;