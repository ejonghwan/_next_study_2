import React from 'react'
import ImgWrap from './ImgWrap'
import LittleTitle from './LittleTitle'
import Tag from './Tag'
import Title from './Title'


interface Props {
  key: number | string;
  data: {
    url: string;
    tag: string[];
    title: string; 
    littleTitle: string; 
  }
}

const ContentBox = ({ data }: Props) => {
  return (
    
    <div className='bg-slate-400' style={{ flex: "0 0 auto", width: "calc(25% - 10px)" }}>
        <ImgWrap />
        <LittleTitle littleTitle={data.littleTitle}/>
        {data.tag.map((item, idx) => {
            return (
                <Tag key={idx} tag={item}/>
            )
        })}
        <Title title={data.title} />
    </div>
  )
}

export default ContentBox