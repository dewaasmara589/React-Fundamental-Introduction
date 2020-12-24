import { useState, useEffect } from 'react'

import { searchEmojis } from '../utils/searchEmojis'
import EmojiBox from '../components/EmojiBox'

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setfilteredEmojis] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setfilteredEmojis(
      searchEmojis({
        emojisData,
        searchText
    }))

    setLoading(false)
  }, [emojisData, searchText])

  return (
    <div className="emojis-grid">
      {(!loading && filteredEmojis.length > 0) ? filteredEmojis.map((data, index) => (
        <EmojiBox key={index} title={data.title} symbol={data.symbol} />
      )) : (
        <p>woyu</p>
      )}
    </div>
  )
}

export default Emojis