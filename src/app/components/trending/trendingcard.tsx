import './trending.css'
import Image from 'next/image';

type trendingProps = {
    shoe: any,
    name:string,
    description: string
}

const Trendingcard = ({shoe, name, description}: trendingProps) => {
  return (
    <div>
        <p>Trending in 2023</p>
        <Image src={shoe} alt='trendingleather' />
        <p>{name}</p>
        <p>{description}</p>
        <button className='purchase'>Purchase Now</button>
    </div>
  )
}

export default Trendingcard;