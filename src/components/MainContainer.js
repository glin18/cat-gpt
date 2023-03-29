import React from 'react'
import { TableHeading } from "./TableHeading"
import { TableBlock } from "./TableBlock"
import { InputBar } from "./InputBar"

export const MainContainer = () => {
  return (
    <div className="main-container">
        <div className="title">CatGPT</div>
        <div className="table-container">
            <div className="table-column examples">
                <TableHeading>Examples</TableHeading>
                <TableBlock>"Explain how cats can become software developers"</TableBlock>
                <TableBlock>"Got any gift ideas for a cat's 13th birthday?"</TableBlock>
                <TableBlock>"How do you make API requests using CatScript?"</TableBlock>
            </div>
            <div className="table-column">
                <TableHeading>Capabilities</TableHeading>
                <TableBlock>Answer all your questions related to Clawenforcement</TableBlock>
                <TableBlock>An absolutely amazing meowsician</TableBlock>
                <TableBlock>Unlimited pawerrrr</TableBlock>
            </div>
            <div className="table-column">
                <TableHeading>Limitations</TableHeading>
                <TableBlock>May occasionally shit on your bed</TableBlock>
                <TableBlock>May occasionally cause a cat-astrophe</TableBlock>
                <TableBlock>Limited knowledge of the world and cat events after 2021</TableBlock>
            </div>
            
        </div>
        <InputBar/>
    </div>
  )
}
