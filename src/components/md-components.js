  
import React from 'react'


const components = {
  a: props =>
    <a {...props} />,

  p: props =>
    <p>{props.children}</p>,

  h1: props =>
    <h1 id={props.id}>{props.children}</h1>,

  h2: props =>
    <h2 id={props.id}>{props.children}</h2>,

  h3: props =>
    <h3 id={props.id}>{props.children}</h3>,

  ul: props => <ul >{props.children}</ul>,
  ol: props => <ol >{props.children}</ol>,

  li: props =>
    <li>{props.children}</li>,

  blockquote: props =>
    <blockquote>
      {props.children}
    </blockquote>,

  pre: props =>
    <pre>
      {props.children}
    </pre>,

  details: props =>
    <details>{props.children}</details>,

  code: props =>
    <code>{props.children}</code>,

  cite: props =>
    <div><span>{props.children}</span></div>

}

export default components