import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ image, title, address, description }) => {
	return (
		<div className={classes.detail}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{description}</p>
			<address>{address}</address>
		</div>
	);
};

export default MeetupDetail;
