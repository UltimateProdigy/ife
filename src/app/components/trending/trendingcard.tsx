import './trending.css'
import Image from 'next/image';

type trendingProps = {
    shoe: any,
    name: string,
    description: string,
    width: number
}

const Trendingcard = ({shoe, name, description, width}: trendingProps) => {
  return (
    <div className='card'>
        <Image style={{borderRadius: "10px"}} src={shoe} width={width} alt='trendingleather' />
        <p className='trendingname'>{name}</p>
        <p className='trendingname'>{description}</p>
        <button className='purchase'>Purchase Now</button>
    </div>
  )
}

export default Trendingcard;