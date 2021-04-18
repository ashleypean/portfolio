/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import axios from 'axios';
import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../components/Layout';

function BlogDetails({ match }) {
  const [content, setContent] = useState('');
  console.log('MATCH', match);
  const {
    params: {
      id: blogId,
      title: blogFile,
    },
  } = match;
  console.log(blogId, blogFile);

  useEffect(() => {
    document.title = `Ashley Pean - Blog - ${blogFile}`;
  });

  useEffect(() => {
    const fileString = require(`../blog/${blogFile}.md`);
    console.log('FILESTRING', fileString);
    axios
      .get(fileString)
      .then((result) => {
        console.log('RESULTS', result);
        setContent(result.data);
      })
      .catch((err) => console.log('ERRROR', err));
  }, [content, blogFile]);

  // TODO - Change disqus account
  const disqusShortname = 'ashleypeandev'; // found in Disqus.com dashboard
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
