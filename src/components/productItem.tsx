"use client"
import React from 'react'
import Badge from './Badge'

const ProductItem = ({ data }) => {

    console.log('da?', data)

  return (
    <div>
        {data.map((item, idx) => {
            return (
                <section key={idx} style={{ border: "1px solid white", marginBottom: '20px' }}>
                    <div>{item.name}</div>
                    {/* {item.isBadge && <div>{item.badge}</div>} */}
                    {item.types.map((type, idx) => {
                        return (
                            <Badge 
                                key={idx} 
                                badge={item.badge} 
                                isBadge={item.isBadge} 
                                type={type === 1 ? "bg-[red]" : type === 2 ? "bg-[blue]" : "bg-[green]" }
                            />
                        )
                    })}
                    
                </section>
            )
        })}
    </div>
  )
}

export default ProductItem