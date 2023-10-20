import PropTypes from 'prop-types'

const SectionTitle = ({subtitle, title}) => {
  return (
    <div className='mb-10 text-center'>
      <h3 className='text-2xl text-[#ff2d37]'>{subtitle}</h3>
      <h1 className='text-[#282828] text-5xl uppercase font-bold'>{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
    title: PropTypes.string
}

export default SectionTitle