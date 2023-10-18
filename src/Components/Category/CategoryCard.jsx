import PropTypes from 'prop-types';

const CategoryCard = ({image, title}) => {
  return (
    <div className="w-[400px] h-[400px] relative group overflow-hidden">
      <div>
        <img className="w-[400px] h-[400px] group-hover:scale-110 object-cover object-center transition-all ease-in-out" src={image} alt="" />
      </div>
      <div className="absolute top-0 z-10 w-[400px] h-[400px] bg-[#282828]/[.50]">
        <h1 className="text-white text-5xl font-bold justify-center items-center flex h-full">{title}</h1>
      </div>
    </div>
  )
}
CategoryCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}
export default CategoryCard
