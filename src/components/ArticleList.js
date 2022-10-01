import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
         {posts.map((post) => {
                const {date, id, preview, title,minutes}=post
                return (
                    <Article
                        key={id}
                        title={title}
                        date={date}
                        preview={preview}
                        minutes={minutes}
                    />
                )
         })}
    </main>
  )
}

export default ArticleList