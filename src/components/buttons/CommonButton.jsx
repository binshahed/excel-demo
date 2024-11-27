/* eslint-disable react/prop-types */

const CommonButton = ({ children, ...args }) => {
  return (
    <button {...args} className="common-button">
      {children}
    </button>
  )
}

export default CommonButton
