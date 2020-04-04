import React from 'react'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import { getImageSrc, getImageSrcset } from 'util/getImageUrl'
import { makeStyles } from '@material-ui/core/styles';

const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(?:\[[^\]]*\]|[^[\]])*\]\([ \t]*<?((?:\([^)]*\)|[^()])*?)>?[ \t]*(['"].*?\6[ \t]*)?\)/g
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match
    const replaced = match.replace(linkURI, encodeURI(linkURI))
    return replaced
  })
}

const ImageWithSrcset = ({ nodeKey, src, alt, ...props }) => {
  const decodedSrc = decodeURI(src)
  return (
    <img
      className='Content--Image'
      {...props}
      src={getImageSrc(decodedSrc)}
      srcSet={getImageSrcset(decodedSrc)}
      alt={alt}
    />
  )
}

const HtmlBlock = ({ value }) => {
  if (value.indexOf('<iframe') !== 0) return value
  return (
    <div
      className={`Content--Iframe`}
      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.portfolio.dark,
    '& img': {
      width: '100%'
    },
    '& a':{ color: theme.palette.portfolio.primary },
    '& h1': { ...theme.typography.h1 },
    '& h2': { ...theme.typography.h2 },
    '& h3': { ...theme.typography.h3 },
    '& h4': { ...theme.typography.h4 },
    '& h5': { ...theme.typography.h5 },
    '& p': { ...theme.typography.body1 },
  }
}), { name: 'Content' });

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
  )}

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
}

export default Content
