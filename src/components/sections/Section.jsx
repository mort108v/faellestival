import React from 'react'
import Title from '../UI/Title'
import Btn from '../UI/Btn'

function Section(props) {

  return (
      <section className={props.className}>
          <Title content={props.content} className={props.titleClassName} />
          <Btn className={props.btnClassName} action={props.action} content={props.btnContent} />
      </section>
  )
}

export default Section