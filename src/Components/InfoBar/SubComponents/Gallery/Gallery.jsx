import React from 'react';

const BlogPost = () => {
  const post = {
    title: "Exploring the World of Cybersecurity",
    author: "John Doe",
    date: "February 27, 2024",
    content: "In today's interconnected world, cybersecurity plays a crucial role in safeguarding digital assets and protecting user privacy. From defending against malicious hackers to ensuring compliance with industry regulations, the field of cybersecurity offers a diverse array of challenges and opportunities. In this blog post, we'll delve into the latest trends, tools, and techniques shaping the cybersecurity landscape. Join us as we explore the fascinating world of cybersecurity and discover how professionals are working tirelessly to stay one step ahead of cyber threats."
  };

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>By {post.author} on {post.date}</p>
      <div className="content">{post.content}</div>
      <div className="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default BlogPost;
