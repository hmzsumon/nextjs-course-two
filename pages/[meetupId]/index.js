import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				description={props.meetupData.description}
				address={props.meetupData.address}
			/>
		</>
	);
};

export const getStaticPaths = async () => {
	// fetch data from apt
	const client = await MongoClient.connect(
		'mongodb+srv://nextjsdb:nextjsdb@cluster0.heiyh.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetups');
	// filter _id
	const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

	client.close();
	return {
		fallback: 'blocking',
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		'mongodb+srv://nextjsdb:nextjsdb@cluster0.heiyh.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetups');
	// selected meetup
	const selectedMeetup = await meetupCollection.findOne({
		_id: ObjectId(meetupId),
	});

	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
};

export default MeetupDetails;
