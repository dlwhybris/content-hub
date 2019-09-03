import React from 'react';

class Tags extends React.Component {

    render() {
        const tags = this.props.tags
        if (!tags || tags.length === 0) {
            return (
                <section className="h-8">
                </section>

            )
        }
        return (
            <section className="h-8">
                {tags.map(tag => (
                    <span key={tag}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">{tag}</span>
                ))}
            </section>
        )
    }
}

export default Tags;