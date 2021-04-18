/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import axios from 'axios';
import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../components/Layout';

function BlogDetails({ id: blogId, title: blogFile }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fileString = `../blog/${blogFile}.md`;
    axios
      .get(require(fileString))
      .then((result) => {
        setContent(result.data);
      });
  }, [content, blogFile]);

  const disqusShortname = 'chester-react'; // found in Disqus.com dashboard
  const disqusConfig = {
    url: 'https://tf-react-chester.now.sh/', // Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false} />
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
