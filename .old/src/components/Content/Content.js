import React from 'react';
import Marked from 'react-markdown';
import PropTypes from 'prop-types';
import { ImageWithSrcset } from 'components/Content/ImageWithSrcset';
import { HtmlBlock } from 'components/Content/HtmlBlock';
import { makeStyles } from '@material-ui/core/styles';

const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(?:\[[^\]]*\]|[^[\]])*\]\([ \t]*<?((?:\([^)]*\)|[^()])*?)>?[ \t]*(['"].*?\6[ \t]*)?\)/g;
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match;
    const replaced = match.replace(linkURI, encodeURI(linkURI));
    return replaced;
  });
};

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.portfolio.dark,
      '& img': {
        width: '100%'
      },
      '& a': { color: theme.palette.portfolio.pink },
      '& h1': { ...theme.typography.h1 },
      '& h2': { ...theme.typography.h2 },
      '& h3': { ...theme.typography.h3 },
      '& h4': { ...theme.typography.h4 },
      '& h5': { ...theme.typography.h5 },
      '& p, & ul': {
        ...theme.typography.body1
      }
    }
  }),
  { name: 'Content' }
);

const Content = ({ source, src, className = '' }) => {
  const classes = useStyles();
  return (
    <Marked
      className={classes.root}
      source={encodeMarkdownURIs(source || src)}
      renderers={{
        image: ImageWithSrcset,
        html: HtmlBlock
      }}
    />
  );
};

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
};

export default Content;
