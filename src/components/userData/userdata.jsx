import PropTypes from "prop-types";

function UserTag(props) {
  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-2">
      <img className="rounded-full w-[50px] h-[50px]" src={props.imageLink} alt="User" />
      <span className="text-white ml-[5px] text-xl">{props.name}</span>
    </div>
  );
}

UserTag.propTypes = {
  imageLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserTag;

