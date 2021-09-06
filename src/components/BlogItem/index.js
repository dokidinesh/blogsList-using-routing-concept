// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData
  return (
    <div className="blog-container">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </div>
  )
}

export default BlogItem
