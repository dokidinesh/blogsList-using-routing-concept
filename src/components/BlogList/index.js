// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blog-list-container">
      {blogsData.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogData={eachBlog} />
      ))}
    </div>
  )
}

export default BlogList
