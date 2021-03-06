import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";
import Item from "./Item";
import { Grid, Row, Col } from "react-bootstrap";

const Blog = props => {
  const { posts, theme, navBlocks } = props;
  const size = 6; // Number of items in a row
  const rows = _.chunk(posts, size);
  const first_three_posts = rows[0];
  const navRows = _.chunk(navBlocks, size)
  return (
    <React.Fragment>
      <main className="main">
        {/*<ul>*/}
        <Grid>
          <Row>
            {_.map(first_three_posts, (post, index) => {
              const {
                node,
                node: {
                  fields: { slug }
                }
              } = post;
              return (
                <Col key={slug} sm={6} md={4}>
                  <Item post={node} theme={theme} isPost={true} />
                </Col>
              );
            })}
          </Row>
          <Row>
            {_.map(navRows, (row, index) => {
              const itemList = _.map(row, navBlocks => {
                const {
                  node,
                  node: {
                    fields: { slug }
                  }
                } = navBlocks;
                return (
                  <Col key={slug} sm={6} md={4}>
                    <Item post={node} theme={theme} isPost={false} />
                  </Col>
                );
              });
              return <div key={index}>{itemList}</div>;
            })}
          </Row>
        </Grid>
        {/*{posts.map(post => {*/}
        {/*const {*/}
        {/*node,*/}
        {/*node: {*/}
        {/*fields: { slug }*/}
        {/*}*/}
        {/*} = post;*/}
        {/*return <Item key={slug} post={node} theme={theme} />;*/}
        {/*})}*/}
        {/*</ul>*/}
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          // padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  navBlocks: PropTypes.array.isRequired,
};

export default Blog;
